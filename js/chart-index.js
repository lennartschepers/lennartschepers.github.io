let chart;
let parsedData = null;
let selectedCategory = null;
const colors = {};

document.getElementById('csvInput').addEventListener('change', function(e) {
	const file = e.target.files[0];
	if (!file) return;
	const reader = new FileReader();
	reader.onload = function(evt) {
		parsedData = parseCSV(evt.target.result);
		generateColorPickers();
	};
	reader.readAsText(file);
});

function generateColorPickers() {
	const container = document.getElementById('colorPickers');
	container.innerHTML = '';
	if (!parsedData || parsedData.length < 2) return;
	parsedData.slice(1).forEach((row, i) => {
		const colorInput = document.createElement('input');
		colorInput.type = 'color';
		colorInput.id = `color-${i}`;
		const defaultColor = getDefaultColor(i);
		colorInput.value = defaultColor;
		colors[row[0]] = defaultColor;

		const label = document.createElement('label');
		label.textContent = `${row[0]}:`;
		label.appendChild(colorInput);

		container.appendChild(label);
	});
}

function renderChart() {
	if (!parsedData || parsedData.length < 2) return alert('Upload eerst een valide bestand, graag.');

	const options = getUserOptions();

	const originalColors = parsedData.slice(1).map((row, i) =>
		document.getElementById(`color-${i}`)?.value || getDefaultColor(i)
	);
	parsedData.slice(1).forEach((row, i) => {
		colors[row[0]] = originalColors[i];
	});

	options.colors = colors;
	options.onLegendHover = (category) => {
		selectedCategory = category;
		applyHighlight(chart, selectedCategory, colors);
	};
	options.onHover = (evt, elements) => {
		if (elements.length) {
			const ix = elements[0].datasetIndex;
			selectedCategory = chart.data.datasets[ix].label;
		} else {
			selectedCategory = null;
		}
		applyHighlight(chart, selectedCategory, colors);
	};

	const config = generateChartConfig(parsedData, options, selectedCategory, originalColors);

	if (chart) chart.destroy();
	const ctx = document.getElementById('chartCanvas').getContext('2d');
	Chart.register(ChartDataLabels);
	chart = new Chart(ctx, config);

	document.getElementById('chartCanvas').addEventListener('mouseleave', () => {
		selectedCategory = null;
		applyHighlight(chart, selectedCategory, colors);
	});

	window.lastConfig = { data: parsedData, options };
}

function getUserOptions() {
	return {
		title: document.getElementById('chartTitle').value,
		subtitle: document.getElementById('chartSubtitle').value,
		axisFontSize: parseInt(document.getElementById('axisFontSize').value) || 12
	};
}

function copyEmbedCode() {
	if (!parsedData) return alert('Render eerst een chart!');
	const embedData = {
		data: parsedData,
		options: getUserOptions(),
		colors
	};
	const encoded = btoa(unescape(encodeURIComponent(JSON.stringify(embedData))));
	const iframeUrl = `${window.location.origin}/embed.html?d=${encoded}`;
	const width = document.getElementById('embedWidth').value || 500;
	const height = document.getElementById('embedHeight').value || 500;
	const iframeCode = `<iframe src="${iframeUrl}" width="${width}" height="${height}" frameborder="0" allowfullscreen></iframe>`;

	navigator.clipboard.writeText(iframeCode).then(() => {
		alert('iframe code gekopieerd naar clipboard!');
	});
}

