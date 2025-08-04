(function () {
  const params = new URLSearchParams(window.location.search);
  const encoded = params.get("d");
  if (!encoded) {
    document.body.innerHTML = "<p style='font-family:sans-serif;'>Invalid or missing chart data.</p>";
    return;
  }

  try {
    const decoded = decodeURIComponent(escape(atob(encoded)));
    const { data, options, colors } = JSON.parse(decoded);

    let selectedCategory = null;
    const originalColors = data.slice(1).map((row, i) => colors?.[row[0]] || getDefaultColor(i));

    options.colors = colors;
    options.onLegendHover = (category) => {
      selectedCategory = category;
      applyHighlight();
    };
    options.onHover = (evt, elements) => {
      if (elements.length) {
        const ix = elements[0].datasetIndex;
        selectedCategory = chart.data.datasets[ix].label;
      } else {
        selectedCategory = null;
      }
      applyHighlight();
    };

    const config = generateChartConfig(data, options, selectedCategory, originalColors);

    const ctx = document.getElementById("chartCanvas").getContext("2d");
    Chart.register(ChartDataLabels);
    const chart = new Chart(ctx, config);

    function applyHighlight() {
      chart.data.datasets.forEach((ds, i) => {
        ds.backgroundColor = selectedCategory && ds.label !== selectedCategory
          ? 'rgba(200,200,200,0.3)'
          : originalColors[i];
      });
      chart.update();
    }

    document.getElementById("chartCanvas").addEventListener("mouseleave", () => {
      selectedCategory = null;
      applyHighlight();
    });

  } catch (e) {
    document.body.innerHTML = "<p style='font-family:sans-serif;'>Kon chart niet laden.</p>";
  }
})();

