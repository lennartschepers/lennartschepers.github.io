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
					font: { size: 18 }
				},
				subtitle: {
					display: !!options.subtitle,
					text: options.subtitle,
					font: { size: 14 }
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
					onClick: () => {},
					onHover: (event, legendItem, legend) => {
						if (typeof options.onLegendHover === 'function') {
							options.onLegendHover(legendItem.text);
						}
					}
				},
				tooltip: {
					enabled: false
				}
			},
			scales: {
				x: {
					ticks: { font: { size: options.axisFontSize || 12 } },
					grid: { display: false, drawBorder: false }
				},
				y: {
					ticks: {
						font: { size: options.axisFontSize || 12 },
						maxTicksLimit: 4,
						precision: 0,
						callback: function (value, index, ticks) {
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
			onHover: options.onHover || (() => {})
		}
	};
}

