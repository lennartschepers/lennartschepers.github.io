(function() {
	const params = new URLSearchParams(window.location.search);
	const encoded = params.get("d");
	if (!encoded) {
		document.body.innerHTML = "<p style='font-family:sans-serif;'>Invalid or missing chart data.</p>";
		return;
	}
	const footnoteText = params.get("footnote") || ""

	try {
		const decoded = decodeURIComponent(escape(atob(encoded)));
		const { data, options, colors } = JSON.parse(decoded);

		let selectedCategory = null;
		const originalColors = data.slice(1).map((row, i) => colors?.[row[0]] || getDefaultColor(i));

		options.colors = colors;
		options.onLegendHover = (category) => {
			selectedCategory = category;
			applyHighlight(chart, selectedCategory, originalColors);
		};
		options.onHover = (evt, elements) => {
			if (elements.length) {
				const ix = elements[0].datasetIndex;
				selectedCategory = chart.data.datasets[ix].label;
			} else {
				selectedCategory = null;
			}
			applyHighlight(chart, selectedCategory, originalColors);
		};

		const config = generateChartConfig(data, options, selectedCategory, originalColors);
		if (footnoteText) {
			document.getElementById("footnote").textContent = footnoteText
		}

		const ctx = document.getElementById("chartCanvas").getContext("2d");
		Chart.register(ChartDataLabels);
		const chart = new Chart(ctx, config);

		document.getElementById("chartCanvas").addEventListener("mouseleave", () => {
			selectedCategory = null;
			applyHighlight(chart, selectedCategory, originalColors);
		});

	} catch (e) {
		document.body.innerHTML = "<p style='font-family:sans-serif;'>Kon chart niet laden.</p>";
	}
})();

