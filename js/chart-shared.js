let lastSelectedCategory = null;
let highlightDebounceTimer = null;

function hexToRgba(hex, alpha = 0.3) {
	// Remove the # if present
	hex = hex.replace(/^#/, '');

	// Support short hex (#abc)
	if (hex.length === 3) {
		hex = hex.split('').map(ch => ch + ch).join('');
	}

	// Parse RGB values
	const r = parseInt(hex.substring(0, 2), 16);
	const g = parseInt(hex.substring(2, 4), 16);
	const b = parseInt(hex.substring(4, 6), 16);

	return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}

function getDefaultColor(index) {
	const defaultColors = ['#00592F', '#15607A', '#0ABB9F', '#00DCA5', '#ffaa00', '#00ffff', '#800000'];
	return defaultColors[index % defaultColors.length];
}

function parseCSV(rawText) {
	return rawText.trim().split('\n').map(line => line.split(';'));
}

function generateChartConfig(data, options, selectedCategory = null, originalColors = null) {
	const labels = data[0].slice(1);
	const datasets = data.slice(1).map((row, i) => {
		const values = row.slice(1).map(Number);
		const color = options.colors?.[row[0]] || getDefaultColor(i);
		return {
			label: row[0],
			data: values,
			categoryPercentage: 0.8,
			barPercentage: 1.0,
			backgroundColor: originalColors ? originalColors[i] : color,
		};
	});

	return {
		type: 'bar',
		data: { labels, datasets },
		options: {
			responsive: true,
			maintainAspectRatio: false,
			plugins: {
				title: {
					display: !!options.title,
					text: options.title,
					font: { size: 18 },
					align: 'start'
				},
				subtitle: {
					display: !!options.subtitle,
					text: options.subtitle,
					font: { size: 14 },
					align: 'start'
				},
				datalabels: {
					display: ctx => selectedCategory !== null && ctx.dataset.label === selectedCategory,
					anchor: 'end',
					align: 'end',
					offset: 10,
					color: '#000',
					formatter: v => v,
					font: { weight: 'bold' }
				},
				legend: {
					onClick: () => { },
					onHover: (event, legendItem, legend) => {
						if (typeof options.onLegendHover === 'function') {
							options.onLegendHover(legendItem.text);
						}
					},
					align: 'start',
					labels: {
						boxWidth: 12
					},
				},
				tooltip: {
					enabled: false
				}
			},
			scales: {
				x: {
					ticks: { font: { size: options.axisFontSize || 12 }, color: '#000' },
					grid: { display: false, drawBorder: false },
					border: {
						display: true,
						color: '#000',
					}
				},
				y: {
					ticks: {
						font: { size: options.axisFontSize || 12 }, color: '#a2a2a2',
						maxTicksLimit: 4,
						precision: 0,
						callback: function(value, index, ticks) {
							if (index === 0 || index === ticks.length - 1) return '';
							return value;
						}
					},
					grid: {
						drawTicks: false,
						drawOnChartArea: true,
						color: ctx => ctx.tick.value === ctx.scale.max ? 'transparent' : '#ccc'
					},
					border: {
						display: false
					}
				}
			},
			onHover: options.onHover || (() => { })
		}
	};
}

function applyHighlight(chart, selectedCategory, originalColorsMapOrArray) {
	// update function — accepts `instant` to disable animation for this update
	function updateHighlight(activeCategory, instant = false) {
		chart.data.datasets.forEach((ds, i) => {
			const origColor = Array.isArray(originalColorsMapOrArray)
				? originalColorsMapOrArray[i]
				: originalColorsMapOrArray[ds.label];

			ds.backgroundColor =
				activeCategory && ds.label !== activeCategory
					? hexToRgba(origColor)
					: origColor;
		});

		if (chart.options?.plugins?.datalabels) {
			chart.options.plugins.datalabels.display = ctx =>
				activeCategory !== null && ctx.dataset.label === activeCategory;
		}

		if (instant) {
			// Temporarily turn off animation for an immediate change
			const prevAnimation = chart.options.animation;
			// Support both the shorthand number or object styles
			const prevDuration = prevAnimation && prevAnimation.duration;
			try {
				// set duration to 0 for immediate update
				if (!chart.options.animation || typeof chart.options.animation === 'number') {
					chart.options.animation = { duration: 0 };
				} else {
					chart.options.animation = { ...chart.options.animation, duration: 0 };
				}
				chart.update();
			} finally {
				// restore previous animation config
				if (prevAnimation === undefined) {
					delete chart.options.animation;
				} else if (typeof prevAnimation === 'number') {
					chart.options.animation = prevAnimation;
				} else {
					chart.options.animation = { ...prevAnimation, duration: prevDuration };
				}
			}
		} else {
			chart.update();
		}
	}

	// clear pending debounce if any
	if (highlightDebounceTimer) {
		clearTimeout(highlightDebounceTimer);
		highlightDebounceTimer = null;
	}

	// If selection cleared -> immediate removal without debounce and without animation
	if (selectedCategory === null) {
		lastSelectedCategory = null;
		updateHighlight(null, true); // instant clear
		return;
	}

	// If there was already a selected category, switch immediately (no debounce).
	// Use instant=true to avoid the color-animation-lag artifact.
	if (lastSelectedCategory !== null) {
		lastSelectedCategory = selectedCategory;
		updateHighlight(selectedCategory, true); // instant switch
		return;
	}

	// No previous selection and a category was just hovered/selected:
	// debounce briefly to avoid flicker on quick mouse moves. Use animated update.
	highlightDebounceTimer = setTimeout(() => {
		highlightDebounceTimer = null;
		lastSelectedCategory = selectedCategory;
		updateHighlight(selectedCategory, false); // allow animation for debounced first highlight
	}, 200);
}

