/* ==========================================================================
   NL NAAR DE TYFUS — APP v2
   ========================================================================== */

(function () {
  'use strict';

  /* GLOBAL DEFAULTS — dark theme */
  const palette = {
    accent:  '#dc2626',
    accent2: '#f97316',
    accent3: '#facc15',
    green:   '#22c55e',
    blue:    '#3b82f6',
    ink:     '#e8e6e1',
    ink2:    '#b8b5ac',
    ink3:    '#8a8780',
    ink4:    '#5b5853',
    grid:    'rgba(255,255,255,.06)'
  };

  Chart.defaults.color = palette.ink3;
  Chart.defaults.borderColor = palette.grid;
  Chart.defaults.font.family = "'Inter', system-ui, sans-serif";
  Chart.defaults.font.size = 12;
  Chart.defaults.plugins.legend.labels.color = palette.ink2;
  Chart.defaults.plugins.legend.labels.font = { size: 12, weight: '500' };
  Chart.defaults.plugins.legend.labels.boxWidth = 12;
  Chart.defaults.plugins.legend.labels.boxHeight = 12;
  Chart.defaults.plugins.legend.labels.padding = 16;
  Chart.defaults.plugins.tooltip.backgroundColor = 'rgba(10,10,12,.96)';
  Chart.defaults.plugins.tooltip.titleColor = palette.ink;
  Chart.defaults.plugins.tooltip.bodyColor = palette.ink2;
  Chart.defaults.plugins.tooltip.borderColor = palette.ink4;
  Chart.defaults.plugins.tooltip.borderWidth = 1;
  Chart.defaults.plugins.tooltip.padding = 12;
  Chart.defaults.plugins.tooltip.titleFont = { size: 13, weight: '700' };
  Chart.defaults.plugins.tooltip.cornerRadius = 6;
  Chart.defaults.plugins.tooltip.boxPadding = 6;

  const baseScale = {
    grid: { color: palette.grid, drawBorder: false },
    ticks: { color: palette.ink3, padding: 8 },
    border: { display: false }
  };

  const grad = (ctx, stops) => {
    const g = ctx.chart.ctx.createLinearGradient(0, 0, 0, ctx.chart.height);
    stops.forEach(([s,c]) => g.addColorStop(s,c));
    return g;
  };

  const lineOpts = (extra={}) => Object.assign({
    responsive: true, maintainAspectRatio: false,
    interaction: { mode: 'index', intersect: false },
    plugins: { legend: { display: false } },
    scales: { x: { ...baseScale }, y: { ...baseScale, beginAtZero: false } }
  }, extra);

  const barOpts = (extra={}) => Object.assign({
    responsive: true, maintainAspectRatio: false,
    plugins: { legend: { display: false } },
    scales: { x: { ...baseScale }, y: { ...baseScale, beginAtZero: true } }
  }, extra);

  const $ = id => document.getElementById(id);

  /* ====================================================================
     CHART 1 — Huizenprijs ÷ modaal salaris
     ==================================================================== */
  if ($('chartHuizenLoon')) new Chart($('chartHuizenLoon'), {
    type: 'line',
    data: {
      labels: DATA.huizenLonenRatio.years,
      datasets: [{
        data: DATA.huizenLonenRatio.values,
        borderColor: palette.accent,
        backgroundColor: ctx => grad(ctx, [[0,'rgba(220,38,38,.45)'],[1,'rgba(220,38,38,0)']]),
        fill: true, tension: .35, borderWidth: 3,
        pointBackgroundColor: palette.accent, pointRadius: 5, pointHoverRadius: 8
      }]
    },
    options: lineOpts({
      scales: { x: {...baseScale}, y: {...baseScale, suggestedMin: 0, ticks: {...baseScale.ticks, callback: v => v.toFixed(1) + 'x'}} },
      plugins: { legend: { display: false }, tooltip: { callbacks: { label: c => ` ${c.parsed.y.toFixed(1)}× modaal jaarsalaris` } } }
    })
  });

  /* ====================================================================
     CHART 2 — M3 geldgroei
     ==================================================================== */
  if ($('chartM3')) new Chart($('chartM3'), {
    type: 'line',
    data: {
      labels: DATA.m3Geldgroei.years,
      datasets: [{
        data: DATA.m3Geldgroei.values,
        borderColor: palette.accent2,
        backgroundColor: ctx => grad(ctx, [[0,'rgba(249,115,22,.45)'],[1,'rgba(249,115,22,0)']]),
        fill: true, tension: .3, borderWidth: 3,
        pointBackgroundColor: palette.accent2, pointRadius: 5, pointHoverRadius: 8
      }]
    },
    options: lineOpts({
      scales: { x: {...baseScale}, y: {...baseScale, suggestedMin: 0, ticks: {...baseScale.ticks, callback: v => v}} },
      plugins: { legend: { display: false }, tooltip: { callbacks: { label: c => ` ${c.parsed.y} (index 1980=100)` } } }
    })
  });

  /* ====================================================================
     CHART 3 — Marginale druk
     ==================================================================== */
  if ($('chartMarginaal')) new Chart($('chartMarginaal'), {
    type: 'bar',
    data: {
      labels: DATA.marginaleDruk.scenarios,
      datasets: [{
        data: DATA.marginaleDruk.values,
        backgroundColor: ctx => {
          const v = ctx.parsed.y ?? 0;
          if (v >= 80) return palette.accent;
          if (v >= 55) return palette.accent2;
          return palette.accent3;
        },
        borderRadius: 6, maxBarThickness: 60
      }]
    },
    options: barOpts({
      scales: { x: {...baseScale, ticks: {...baseScale.ticks, font: {size: 11}}}, y: {...baseScale, suggestedMax: 100, ticks: {...baseScale.ticks, callback: v => v + '%'}} },
      plugins: { legend: { display: false }, tooltip: { callbacks: { label: c => ` ${c.parsed.y}% marginale belastingdruk` } } }
    })
  });

  /* ====================================================================
     CHART 4 — Macro belastingdruk
     ==================================================================== */
  if ($('chartBelasting')) new Chart($('chartBelasting'), {
    type: 'line',
    data: {
      labels: DATA.belastingdruk.years,
      datasets: [{
        data: DATA.belastingdruk.values,
        borderColor: palette.accent,
        backgroundColor: ctx => grad(ctx, [[0,'rgba(220,38,38,.30)'],[1,'rgba(220,38,38,0)']]),
        fill: true, tension: .35, borderWidth: 2.5,
        pointBackgroundColor: palette.accent, pointRadius: 4, pointHoverRadius: 6
      }]
    },
    options: lineOpts({
      scales: { x: {...baseScale}, y: {...baseScale, suggestedMin: 25, suggestedMax: 45, ticks: {...baseScale.ticks, callback: v => v + '%'}} },
      plugins: { legend: { display: false }, tooltip: { callbacks: { label: c => ` ${c.parsed.y}% BBP` } } }
    })
  });

  /* ====================================================================
     CHART 5 — BTW
     ==================================================================== */
  if ($('chartBTW')) new Chart($('chartBTW'), {
    type: 'line',
    data: {
      labels: DATA.btw.events.map(e => e.year),
      datasets: [{
        data: DATA.btw.events.map(e => e.value),
        borderColor: palette.accent,
        backgroundColor: ctx => grad(ctx, [[0,'rgba(220,38,38,.30)'],[1,'rgba(220,38,38,0)']]),
        fill: true, stepped: true, borderWidth: 2.5,
        pointBackgroundColor: palette.accent, pointRadius: 5, pointHoverRadius: 8
      }]
    },
    options: lineOpts({
      scales: { x: {...baseScale}, y: {...baseScale, suggestedMin: 10, suggestedMax: 22, ticks: {...baseScale.ticks, callback: v => v + '%'}} },
      plugins: { legend: { display: false }, tooltip: { callbacks: {
        label: c => ` ${c.parsed.y}%`,
        afterLabel: c => DATA.btw.events[c.dataIndex].note || ''
      } } }
    })
  });

  /* ====================================================================
     CHART 6 — Energiebelasting
     ==================================================================== */
  if ($('chartEnergiebel')) new Chart($('chartEnergiebel'), {
    type: 'bar',
    data: {
      labels: DATA.energiebelasting.years,
      datasets: [{
        data: DATA.energiebelasting.values,
        backgroundColor: ctx => grad(ctx, [[0,palette.accent],[1,'rgba(220,38,38,.2)']]),
        borderRadius: 4, maxBarThickness: 50
      }]
    },
    options: barOpts({
      plugins: { legend: { display: false }, tooltip: { callbacks: { label: c => ` ${c.parsed.y} ct/kWh` } } }
    })
  });

  /* ====================================================================
     CHART 7 — Huizenprijzen
     ==================================================================== */
  if ($('chartHuizen')) new Chart($('chartHuizen'), {
    type: 'line',
    data: {
      labels: DATA.huizenprijzen.years,
      datasets: [{
        data: DATA.huizenprijzen.values,
        borderColor: palette.accent,
        backgroundColor: ctx => grad(ctx, [[0,'rgba(220,38,38,.4)'],[1,'rgba(220,38,38,0)']]),
        fill: true, tension: .35, borderWidth: 2.5,
        pointBackgroundColor: palette.accent, pointRadius: 4, pointHoverRadius: 7
      }]
    },
    options: lineOpts({
      scales: { x: {...baseScale}, y: {...baseScale, ticks: {...baseScale.ticks, callback: v => '€' + (v/1000) + 'k'}} },
      plugins: { legend: { display: false }, tooltip: { callbacks: { label: c => ' €' + c.parsed.y.toLocaleString('nl-NL') } } }
    })
  });

  /* ====================================================================
     CHART 8 — Tekort
     ==================================================================== */
  if ($('chartTekort')) new Chart($('chartTekort'), {
    type: 'bar',
    data: {
      labels: DATA.woningtekort.years,
      datasets: [{
        data: DATA.woningtekort.values,
        backgroundColor: ctx => grad(ctx, [[0,palette.accent2],[1,'rgba(249,115,22,.15)']]),
        borderRadius: 4, maxBarThickness: 60
      }]
    },
    options: barOpts({
      scales: { x: {...baseScale}, y: {...baseScale, ticks: {...baseScale.ticks, callback: v => (v/1000) + 'k'}} },
      plugins: { legend: { display: false }, tooltip: { callbacks: { label: c => ' ' + c.parsed.y.toLocaleString('nl-NL') + ' woningen' } } }
    })
  });

  /* ====================================================================
     CHART 9 — Migratie stacked
     ==================================================================== */
  if ($('chartMigratie')) new Chart($('chartMigratie'), {
    type: 'bar',
    data: {
      labels: DATA.immigratieEmigratie.years,
      datasets: [
        { label: 'Immigratie', data: DATA.immigratieEmigratie.immigratie, backgroundColor: palette.accent, borderRadius: 4, maxBarThickness: 28, order: 2 },
        { label: 'Emigratie',  data: DATA.immigratieEmigratie.emigratie.map(v => -v), backgroundColor: palette.ink4, borderRadius: 4, maxBarThickness: 28, order: 2 },
        { label: 'Netto saldo', type: 'line', data: DATA.immigratieEmigratie.saldo, borderColor: palette.accent3, backgroundColor: palette.accent3, borderWidth: 2.5, pointRadius: 4, pointHoverRadius: 7, tension: .3, order: 1 }
      ]
    },
    options: {
      responsive: true, maintainAspectRatio: false, interaction: { mode: 'index', intersect: false },
      plugins: { legend: { display: true, position: 'bottom' }, tooltip: { callbacks: { label: c => ' ' + c.dataset.label + ': ' + Math.abs(c.parsed.y).toLocaleString('nl-NL') + 'k' } } },
      scales: { x: {...baseScale, stacked: true}, y: {...baseScale, ticks: {...baseScale.ticks, callback: v => Math.abs(v) + 'k'}} }
    }
  });

  /* ====================================================================
     CHART 10 — Migratie-achtergrond
     ==================================================================== */
  if ($('chartAchtergrond')) new Chart($('chartAchtergrond'), {
    type: 'line',
    data: {
      labels: DATA.migratieAchtergrond.years,
      datasets: [{
        data: DATA.migratieAchtergrond.values,
        borderColor: palette.accent2,
        backgroundColor: ctx => grad(ctx, [[0,'rgba(249,115,22,.35)'],[1,'rgba(249,115,22,0)']]),
        fill: true, tension: .3, borderWidth: 2.5,
        pointBackgroundColor: palette.accent2, pointRadius: 4, pointHoverRadius: 7
      }]
    },
    options: lineOpts({
      scales: { x: {...baseScale}, y: {...baseScale, ticks: {...baseScale.ticks, callback: v => v + '%'}} },
      plugins: { legend: { display: false }, tooltip: { callbacks: { label: c => ' ' + c.parsed.y + '% van bevolking' } } }
    })
  });

  /* ====================================================================
     CHART 11 — Migratiemotief (donut)
     ==================================================================== */
  if ($('chartMotief')) new Chart($('chartMotief'), {
    type: 'doughnut',
    data: {
      labels: DATA.migratieMotief.motieven,
      datasets: [{
        data: DATA.migratieMotief.aantallen,
        backgroundColor: [
          palette.accent,        // Asiel
          '#b91c1c',             // Gezin
          palette.accent2,       // Studie
          '#ea580c',             // EU-arbeid
          palette.green,         // Kennismigrant
          palette.accent3,       // Oekraïne
          palette.ink4           // Overig
        ],
        borderColor: '#16161a',
        borderWidth: 2
      }]
    },
    options: {
      responsive: true, maintainAspectRatio: false, cutout: '60%',
      plugins: {
        legend: { display: true, position: 'right', labels: { boxWidth: 10, font: { size: 11 }, color: palette.ink2 } },
        tooltip: { callbacks: {
          label: c => {
            const pct = DATA.migratieMotief.percentages[c.dataIndex];
            return ` ${c.parsed.toLocaleString('nl-NL')}k (${pct}%)`;
          }
        } }
      }
    }
  });

  /* ====================================================================
     CHART 12 — Asielaanvragen
     ==================================================================== */
  if ($('chartAsiel')) new Chart($('chartAsiel'), {
    type: 'bar',
    data: {
      labels: DATA.asielaanvragen.years,
      datasets: [{
        data: DATA.asielaanvragen.values,
        backgroundColor: ctx => grad(ctx, [[0,palette.accent],[1,'rgba(220,38,38,.15)']]),
        borderRadius: 4, maxBarThickness: 40
      }]
    },
    options: barOpts({
      scales: { x: {...baseScale}, y: {...baseScale, ticks: {...baseScale.ticks, callback: v => v + 'k'}} },
      plugins: { legend: { display: false }, tooltip: { callbacks: { label: c => ' ' + (c.parsed.y * 1000).toLocaleString('nl-NL') + ' aanvragen' } } }
    })
  });

  /* ====================================================================
     CHART 13 — Herkomst
     ==================================================================== */
  if ($('chartHerkomst')) new Chart($('chartHerkomst'), {
    type: 'bar',
    data: {
      labels: DATA.herkomstImmigranten2022.landen,
      datasets: [{
        data: DATA.herkomstImmigranten2022.aantallen,
        backgroundColor: ctx => `rgba(220,38,38,${1 - (ctx.dataIndex * 0.06)})`,
        borderRadius: 4
      }]
    },
    options: {
      indexAxis: 'y', responsive: true, maintainAspectRatio: false,
      plugins: { legend: { display: false }, tooltip: { callbacks: { label: c => ' ' + (c.parsed.x * 1000).toLocaleString('nl-NL') + ' immigranten' } } },
      scales: { x: {...baseScale, ticks: {...baseScale.ticks, callback: v => v + 'k'}}, y: {...baseScale, ticks: {...baseScale.ticks, padding: 12}} }
    }
  });

  /* ====================================================================
     CHART 14 — Bijstand naar achtergrond
     ==================================================================== */
  if ($('chartBijstand')) new Chart($('chartBijstand'), {
    type: 'bar',
    data: {
      labels: DATA.bijstandsAfhankelijkheid.groepen,
      datasets: [{
        data: DATA.bijstandsAfhankelijkheid.percentages,
        backgroundColor: ctx => {
          const v = ctx.parsed.x ?? 0;
          if (v >= 30) return palette.accent;
          if (v >= 10) return palette.accent2;
          if (v >= 5) return palette.accent3;
          return palette.green;
        },
        borderRadius: 4
      }]
    },
    options: {
      indexAxis: 'y', responsive: true, maintainAspectRatio: false,
      plugins: { legend: { display: false }, tooltip: { callbacks: { label: c => ` ${c.parsed.x}% zit in de bijstand` } } },
      scales: { x: {...baseScale, ticks: {...baseScale.ticks, callback: v => v + '%'}}, y: {...baseScale, ticks: {...baseScale.ticks, padding: 8, font: {size: 11}}} }
    }
  });

  /* ====================================================================
     CHART 15 — Statushouder na 5 jaar (donut)
     ==================================================================== */
  if ($('chartStatus')) new Chart($('chartStatus'), {
    type: 'doughnut',
    data: {
      labels: DATA.statushouderNa5Jaar.categorieen,
      datasets: [{
        data: DATA.statushouderNa5Jaar.percentages,
        backgroundColor: [palette.green, palette.accent, palette.accent2, palette.accent3, palette.ink4],
        borderColor: '#16161a',
        borderWidth: 2
      }]
    },
    options: {
      responsive: true, maintainAspectRatio: false, cutout: '60%',
      plugins: {
        legend: { display: true, position: 'right', labels: { boxWidth: 10, font: { size: 11 }, color: palette.ink2 } },
        tooltip: { callbacks: { label: c => ` ${c.parsed}% — ${c.label}` } }
      }
    }
  });

  /* ====================================================================
     CHART 16 — Arbeidsparticipatie
     ==================================================================== */
  if ($('chartArbeid')) new Chart($('chartArbeid'), {
    type: 'bar',
    data: {
      labels: DATA.arbeidsparticipatie.groepen,
      datasets: [{
        data: DATA.arbeidsparticipatie.percentages,
        backgroundColor: ctx => {
          const v = ctx.parsed.y ?? 0;
          if (v >= 70) return palette.green;
          if (v >= 60) return palette.accent3;
          if (v >= 40) return palette.accent2;
          return palette.accent;
        },
        borderRadius: 4, maxBarThickness: 70
      }]
    },
    options: barOpts({
      scales: { x: {...baseScale, ticks: {...baseScale.ticks, font: {size: 11}}}, y: {...baseScale, suggestedMax: 100, ticks: {...baseScale.ticks, callback: v => v + '%'}} },
      plugins: { legend: { display: false }, tooltip: { callbacks: { label: c => ` ${c.parsed.y}% participeert op de arbeidsmarkt` } } }
    })
  });

  /* ====================================================================
     CHART 17 — Brain drain (grouped bar)
     ==================================================================== */
  if ($('chartBrainDrain')) new Chart($('chartBrainDrain'), {
    type: 'bar',
    data: {
      labels: DATA.brainDrain.categorieen,
      datasets: [
        { label: 'Vertrekt uit NL', data: DATA.brainDrain.emigrant,             backgroundColor: palette.green, borderRadius: 4, maxBarThickness: 60 },
        { label: 'Komt naar NL (niet-kennismigrant)', data: DATA.brainDrain.immigrant_niet_kennis, backgroundColor: palette.accent, borderRadius: 4, maxBarThickness: 60 }
      ]
    },
    options: {
      responsive: true, maintainAspectRatio: false,
      plugins: { legend: { display: true, position: 'bottom' }, tooltip: { callbacks: { label: c => ` ${c.dataset.label}: ${c.parsed.y}%` } } },
      scales: { x: {...baseScale}, y: {...baseScale, suggestedMax: 70, ticks: {...baseScale.ticks, callback: v => v + '%'}} }
    }
  });

  /* ====================================================================
     CHART 18 — Bestemming
     ==================================================================== */
  if ($('chartBestemming')) new Chart($('chartBestemming'), {
    type: 'bar',
    data: {
      labels: DATA.bestemmingEmigranten.landen,
      datasets: [{
        data: DATA.bestemmingEmigranten.aantallen,
        backgroundColor: ctx => `rgba(249,115,22,${1 - (ctx.dataIndex * 0.07)})`,
        borderRadius: 4
      }]
    },
    options: {
      indexAxis: 'y', responsive: true, maintainAspectRatio: false,
      plugins: { legend: { display: false }, tooltip: { callbacks: { label: c => ' ' + (c.parsed.x * 1000).toLocaleString('nl-NL') + ' emigranten' } } },
      scales: { x: {...baseScale, ticks: {...baseScale.ticks, callback: v => v + 'k'}}, y: {...baseScale, ticks: {...baseScale.ticks, padding: 12}} }
    }
  });

  /* ====================================================================
     CHART 19 — Motieven
     ==================================================================== */
  if ($('chartMotieven')) new Chart($('chartMotieven'), {
    type: 'bar',
    data: {
      labels: DATA.emigratieMotieven.motieven,
      datasets: [{
        data: DATA.emigratieMotieven.percentages,
        backgroundColor: ctx => {
          const v = ctx.parsed.x ?? 0;
          if (v >= 50) return palette.accent;
          if (v >= 35) return palette.accent2;
          return palette.accent3;
        },
        borderRadius: 4
      }]
    },
    options: {
      indexAxis: 'y', responsive: true, maintainAspectRatio: false,
      plugins: { legend: { display: false }, tooltip: { callbacks: { label: c => ' ' + c.parsed.x + '% noemt dit' } } },
      scales: { x: {...baseScale, suggestedMax: 60, ticks: {...baseScale.ticks, callback: v => v + '%'}}, y: {...baseScale, ticks: {...baseScale.ticks, padding: 8, font: {size: 11}}} }
    }
  });

  /* ====================================================================
     CHART 20 — Vertrouwen
     ==================================================================== */
  if ($('chartVertrouwen')) new Chart($('chartVertrouwen'), {
    type: 'line',
    data: {
      labels: DATA.vertrouwenInstellingen.years,
      datasets: [
        { label: 'Tweede Kamer', data: DATA.vertrouwenInstellingen.tweedeKamer, borderColor: palette.accent, backgroundColor: palette.accent, borderWidth: 2.5, tension: .3, pointRadius: 4, pointHoverRadius: 7, fill: false },
        { label: 'Regering',     data: DATA.vertrouwenInstellingen.regering,    borderColor: palette.accent2, backgroundColor: palette.accent2, borderWidth: 2.5, tension: .3, pointRadius: 4, pointHoverRadius: 7, fill: false },
        { label: 'Politie',      data: DATA.vertrouwenInstellingen.politie,     borderColor: palette.green, backgroundColor: palette.green, borderWidth: 2.5, tension: .3, pointRadius: 4, pointHoverRadius: 7, fill: false }
      ]
    },
    options: {
      responsive: true, maintainAspectRatio: false, interaction: { mode: 'index', intersect: false },
      plugins: { legend: { display: true, position: 'bottom' }, tooltip: { callbacks: { label: c => ` ${c.dataset.label}: ${c.parsed.y}%` } } },
      scales: { x: {...baseScale}, y: {...baseScale, suggestedMin: 20, suggestedMax: 80, ticks: {...baseScale.ticks, callback: v => v + '%'}} }
    }
  });

  /* ====================================================================
     CHART 21 — Sociaal contact
     ==================================================================== */
  if ($('chartEenzaam')) new Chart($('chartEenzaam'), {
    type: 'line',
    data: {
      labels: DATA.sociaalContact.years,
      datasets: [{
        data: DATA.sociaalContact.values,
        borderColor: palette.accent,
        backgroundColor: ctx => grad(ctx, [[0,'rgba(220,38,38,.35)'],[1,'rgba(220,38,38,0)']]),
        fill: true, tension: .3, borderWidth: 2.5,
        pointBackgroundColor: palette.accent, pointRadius: 5, pointHoverRadius: 8
      }]
    },
    options: lineOpts({
      scales: { x: {...baseScale}, y: {...baseScale, suggestedMin: 0, suggestedMax: 16, ticks: {...baseScale.ticks, callback: v => v + '%'}} },
      plugins: { legend: { display: false }, tooltip: { callbacks: { label: c => ' ' + c.parsed.y + '% van bevolking' } } }
    })
  });

  /* ====================================================================
     CHART 22 — EU bijdrage
     ==================================================================== */
  if ($('chartEU')) new Chart($('chartEU'), {
    type: 'bar',
    data: {
      labels: DATA.nettoEUBijdrage.years,
      datasets: [{
        data: DATA.nettoEUBijdrage.values,
        backgroundColor: ctx => grad(ctx, [[0,palette.accent],[1,'rgba(220,38,38,.15)']]),
        borderRadius: 4, maxBarThickness: 50
      }]
    },
    options: barOpts({
      scales: { x: {...baseScale}, y: {...baseScale, ticks: {...baseScale.ticks, callback: v => '€' + v + ' mld'}} },
      plugins: { legend: { display: false }, tooltip: { callbacks: { label: c => ' €' + c.parsed.y + ' miljard netto' } } }
    })
  });

  /* ====================================================================
     CHART 23 — Zorgpremie
     ==================================================================== */
  if ($('chartZorgpremie')) new Chart($('chartZorgpremie'), {
    type: 'line',
    data: {
      labels: DATA.zorgpremie.years,
      datasets: [{
        data: DATA.zorgpremie.values,
        borderColor: palette.accent,
        backgroundColor: ctx => grad(ctx, [[0,'rgba(220,38,38,.3)'],[1,'rgba(220,38,38,0)']]),
        fill: true, tension: .3, borderWidth: 2.5,
        pointBackgroundColor: palette.accent, pointRadius: 5, pointHoverRadius: 8
      }]
    },
    options: lineOpts({
      scales: { x: {...baseScale}, y: {...baseScale, ticks: {...baseScale.ticks, callback: v => '€' + v}} },
      plugins: { legend: { display: false }, tooltip: { callbacks: { label: c => ' €' + c.parsed.y.toLocaleString('nl-NL') + ' per jaar' } } }
    })
  });

  /* ====================================================================
     CHART 24 — Energierekening
     ==================================================================== */
  if ($('chartEnergie')) new Chart($('chartEnergie'), {
    type: 'bar',
    data: {
      labels: DATA.energieprijs.years,
      datasets: [{
        data: DATA.energieprijs.values,
        backgroundColor: ctx => {
          const v = ctx.parsed.y ?? 0;
          if (v >= 3000) return palette.accent;
          if (v >= 2000) return palette.accent2;
          return palette.accent3;
        },
        borderRadius: 4, maxBarThickness: 50
      }]
    },
    options: barOpts({
      scales: { x: {...baseScale}, y: {...baseScale, ticks: {...baseScale.ticks, callback: v => '€' + v}} },
      plugins: { legend: { display: false }, tooltip: { callbacks: { label: c => ' €' + c.parsed.y.toLocaleString('nl-NL') } } }
    })
  });

  /* ====================================================================
     CHART 25 — PISA
     ==================================================================== */
  if ($('chartPISA')) new Chart($('chartPISA'), {
    type: 'line',
    data: {
      labels: DATA.pisa.jaren,
      datasets: [
        { label: 'Leesvaardigheid', data: DATA.pisa.leesvaardigheid, borderColor: palette.accent,  backgroundColor: palette.accent,  borderWidth: 2.5, tension: .3, pointRadius: 5, pointHoverRadius: 8, fill: false },
        { label: 'Wiskunde',        data: DATA.pisa.wiskunde,        borderColor: palette.accent2, backgroundColor: palette.accent2, borderWidth: 2.5, tension: .3, pointRadius: 5, pointHoverRadius: 8, fill: false },
        { label: 'Natuurwetenschap',data: DATA.pisa.natuurwetenschap,borderColor: palette.accent3, backgroundColor: palette.accent3, borderWidth: 2.5, tension: .3, pointRadius: 5, pointHoverRadius: 8, fill: false }
      ]
    },
    options: {
      responsive: true, maintainAspectRatio: false, interaction: { mode: 'index', intersect: false },
      plugins: { legend: { position: 'bottom' }, tooltip: { callbacks: { label: c => ` ${c.dataset.label}: ${c.parsed.y} punten` } } },
      scales: { x: {...baseScale}, y: {...baseScale, suggestedMin: 440, suggestedMax: 550} }
    }
  });

  /* ====================================================================
     CHART 26 — Cocaine
     ==================================================================== */
  if ($('chartCoke')) new Chart($('chartCoke'), {
    type: 'bar',
    data: {
      labels: DATA.drugsBeslag.years,
      datasets: [{
        data: DATA.drugsBeslag.values,
        backgroundColor: ctx => grad(ctx, [[0,palette.accent],[1,'rgba(220,38,38,.15)']]),
        borderRadius: 4, maxBarThickness: 40
      }]
    },
    options: barOpts({
      scales: { x: {...baseScale}, y: {...baseScale, ticks: {...baseScale.ticks, callback: v => v + ' ton'}} },
      plugins: { legend: { display: false }, tooltip: { callbacks: { label: c => ' ' + c.parsed.y + ' ton cocaïne' } } }
    })
  });

  /* ====================================================================
     CHART 27 — Liquidaties
     ==================================================================== */
  if ($('chartLiqui')) new Chart($('chartLiqui'), {
    type: 'line',
    data: {
      labels: DATA.liquidaties.years,
      datasets: [{
        data: DATA.liquidaties.values,
        borderColor: palette.accent,
        backgroundColor: ctx => grad(ctx, [[0,'rgba(220,38,38,.3)'],[1,'rgba(220,38,38,0)']]),
        fill: true, tension: .3, borderWidth: 2.5,
        pointBackgroundColor: palette.accent, pointRadius: 4, pointHoverRadius: 7
      }]
    },
    options: lineOpts({
      plugins: { legend: { display: false }, tooltip: { callbacks: { label: c => ' ' + c.parsed.y + ' afrekeningen' } } }
    })
  });

  /* ====================================================================
     CHART 28 — Regeldruk
     ==================================================================== */
  if ($('chartRegels')) new Chart($('chartRegels'), {
    type: 'line',
    data: {
      labels: DATA.regeldruk.years,
      datasets: [{
        data: DATA.regeldruk.values,
        borderColor: palette.accent,
        backgroundColor: ctx => grad(ctx, [[0,'rgba(220,38,38,.3)'],[1,'rgba(220,38,38,0)']]),
        fill: true, tension: .25, borderWidth: 2.5,
        pointBackgroundColor: palette.accent, pointRadius: 5, pointHoverRadius: 8
      }]
    },
    options: lineOpts({
      scales: { x: {...baseScale}, y: {...baseScale, ticks: {...baseScale.ticks, callback: v => (v/1000).toFixed(0) + 'k'}} },
      plugins: { legend: { display: false }, tooltip: { callbacks: { label: c => ' ' + c.parsed.y.toLocaleString('nl-NL') + ' regels' } } }
    })
  });

  /* ====================================================================
     CHART 29 — Burn-out
     ==================================================================== */
  if ($('chartBurnout')) new Chart($('chartBurnout'), {
    type: 'line',
    data: {
      labels: DATA.burnoutCijfers.years,
      datasets: [{
        data: DATA.burnoutCijfers.values,
        borderColor: palette.accent,
        backgroundColor: ctx => grad(ctx, [[0,'rgba(220,38,38,.35)'],[1,'rgba(220,38,38,0)']]),
        fill: true, tension: .3, borderWidth: 2.5,
        pointBackgroundColor: palette.accent, pointRadius: 5, pointHoverRadius: 8
      }]
    },
    options: lineOpts({
      scales: { x: {...baseScale}, y: {...baseScale, suggestedMin: 0, suggestedMax: 25, ticks: {...baseScale.ticks, callback: v => v + '%'}} },
      plugins: { legend: { display: false }, tooltip: { callbacks: { label: c => ` ${c.parsed.y}% met burn-outklachten` } } }
    })
  });

  /* ====================================================================
     CHART 30 — Wachttijd GGZ
     ==================================================================== */
  if ($('chartWachttijd')) new Chart($('chartWachttijd'), {
    type: 'bar',
    data: {
      labels: DATA.wachtlijstenZorg.years,
      datasets: [{
        data: DATA.wachtlijstenZorg.values,
        backgroundColor: ctx => grad(ctx, [[0,palette.accent],[1,'rgba(220,38,38,.15)']]),
        borderRadius: 4, maxBarThickness: 60
      }]
    },
    options: barOpts({
      scales: { x: {...baseScale}, y: {...baseScale, ticks: {...baseScale.ticks, callback: v => v + ' wk'}} },
      plugins: { legend: { display: false }, tooltip: { callbacks: { label: c => ` ${c.parsed.y} weken wachten` } } }
    })
  });

  /* ====================================================================
     CHART 31 — Zzp'ers
     ==================================================================== */
  if ($('chartZZP')) new Chart($('chartZZP'), {
    type: 'line',
    data: {
      labels: DATA.zzpDruk.years,
      datasets: [{
        data: DATA.zzpDruk.values,
        borderColor: palette.accent2,
        backgroundColor: ctx => grad(ctx, [[0,'rgba(249,115,22,.35)'],[1,'rgba(249,115,22,0)']]),
        fill: true, tension: .3, borderWidth: 2.5,
        pointBackgroundColor: palette.accent2, pointRadius: 5, pointHoverRadius: 8
      }]
    },
    options: lineOpts({
      scales: { x: {...baseScale}, y: {...baseScale, ticks: {...baseScale.ticks, callback: v => v + 'k'}} },
      plugins: { legend: { display: false }, tooltip: { callbacks: { label: c => ' ' + (c.parsed.y * 1000).toLocaleString('nl-NL') + ' zzp\'ers' } } }
    })
  });

  /* ====================================================================
     VS STACK — internationale vergelijking (6 metrics × 6 landen)
     ==================================================================== */
  if ($('vsStack')) {
    const vs = DATA.internationaleVergelijking.metrics;
    const colors = [palette.accent, palette.ink4, palette.ink4, palette.ink4, palette.ink4, palette.ink4];
    $('vsStack').innerHTML = vs.map((m, i) => `
      <div class="vs-row">
        <div class="vs-row-head">
          <span class="vs-row-num">${String(i+1).padStart(2,'0')}</span>
          <h4>${m.naam}</h4>
        </div>
        <div class="vs-row-chart">
          <canvas id="vsChart${i}"></canvas>
        </div>
        <p class="vs-row-note">${m.nl_positie}</p>
      </div>
    `).join('');

    // Render each comparison chart
    vs.forEach((m, i) => {
      const canvas = $('vsChart' + i);
      if (!canvas) return;
      new Chart(canvas, {
        type: 'bar',
        data: {
          labels: m.landen,
          datasets: [{
            data: m.waarden,
            backgroundColor: m.landen.map(l => l === 'Nederland' ? palette.accent : palette.ink4),
            borderRadius: 4, maxBarThickness: 50
          }]
        },
        options: {
          indexAxis: 'y', responsive: true, maintainAspectRatio: false,
          plugins: {
            legend: { display: false },
            tooltip: { callbacks: { label: c => ' ' + c.parsed.x.toLocaleString('nl-NL') } }
          },
          scales: {
            x: {...baseScale, ticks: {...baseScale.ticks, padding: 6}},
            y: {...baseScale, ticks: {...baseScale.ticks, padding: 10, font: {size: 12, weight: c => c.tick && c.tick.label === 'Nederland' ? '700' : '400'}}}
          }
        }
      });
    });
  }

  /* ====================================================================
     RANGLIJST-ILLUSIE — dynamische cards
     ==================================================================== */
  if ($('illusionGrid')) {
    $('illusionGrid').innerHTML = DATA.ranglijstIllusie.items.map((it, i) => `
      <div class="illusion-card">
        <div class="illusion-head">
          <span class="illusion-num">${String(i+1).padStart(2,'0')}</span>
          <h4>${it.ranking}</h4>
        </div>
        <div class="illusion-body">
          <div class="illusion-claim">
            <div class="illusion-label">De claim</div>
            <div class="illusion-claim-main">${it.claim}</div>
            <div class="illusion-claim-sub">${it.claimSub}</div>
          </div>
          <div class="illusion-reality">
            <div class="illusion-label">Wat eronder ligt</div>
            <ul>${it.werkelijk.map(w => `<li>${w}</li>`).join('')}</ul>
          </div>
        </div>
        <p class="illusion-source">Bron · ${it.bron}</p>
      </div>
    `).join('');
  }

  /* ====================================================================
     QUOTES GRID — meerdere stemmen van vertrekkers
     ==================================================================== */
  if ($('quotesGrid')) {
    $('quotesGrid').innerHTML = DATA.emigrantQuotes.map(q => `
      <blockquote class="quote-card">
        <div class="quote-mark">"</div>
        <p>${q.quote}</p>
        <cite>${q.source}</cite>
      </blockquote>
    `).join('');
  }

  /* ====================================================================
     CHART 32 — Geboorteland emigranten (donut)
     ==================================================================== */
  if ($('chartGeboorteland')) new Chart($('chartGeboorteland'), {
    type: 'doughnut',
    data: {
      labels: DATA.emigratieGeboorteland.categorieen,
      datasets: [{
        data: DATA.emigratieGeboorteland.aantallen,
        backgroundColor: [palette.green, palette.accent, palette.accent2, '#b91c1c', palette.accent3],
        borderColor: '#16161a',
        borderWidth: 3
      }]
    },
    options: {
      responsive: true, maintainAspectRatio: false, cutout: '55%',
      plugins: {
        legend: { display: true, position: 'right', labels: { boxWidth: 12, font: { size: 12 }, color: palette.ink2, padding: 12 } },
        tooltip: { callbacks: {
          label: c => {
            const pct = DATA.emigratieGeboorteland.percentages[c.dataIndex];
            return ` ${c.parsed.toLocaleString('nl-NL')}k (${pct}%)`;
          }
        } }
      }
    }
  });

  /* ====================================================================
     PROFIEL STACK — 5 vertrekkers-profielen
     ==================================================================== */
  if ($('profileStack')) {
    const profs = DATA.vertrekkersProfielen.profielen;
    $('profileStack').innerHTML = profs.map((p, i) => `
      <div class="prof-block">
        <div class="prof-head">
          <span class="prof-num">${String(i+1).padStart(2,'0')}</span>
          <div>
            <h4>${p.groep}</h4>
            <div class="prof-meta">
              <span class="prof-tag">${p.aandeel}</span>
              <span class="prof-tag muted">${p.aantal}</span>
            </div>
          </div>
        </div>
        <div class="prof-body">
          <div class="prof-kenmerken">
            <h5>Profiel</h5>
            <ul>${p.kenmerken.map(k => `<li>${k}</li>`).join('')}</ul>
          </div>
          <div class="prof-redenen">
            <h5>Top redenen om te vertrekken</h5>
            <ul class="prof-bars">
              ${p.topRedenen.map(r => `
                <li>
                  <div class="prof-bar-label"><span>${r.reden}</span><b>${r.pct}%</b></div>
                  <div class="prof-bar-bg"><div class="prof-bar-fg" style="width:${r.pct}%"></div></div>
                </li>
              `).join('')}
            </ul>
          </div>
        </div>
        <blockquote class="prof-quote">
          <p>${p.quote.text}</p>
          <cite>— ${p.quote.source}</cite>
        </blockquote>
      </div>
    `).join('');
  }

  /* ====================================================================
     CHART 33 — Expat retentie
     ==================================================================== */
  if ($('chartExpatRet')) new Chart($('chartExpatRet'), {
    type: 'line',
    data: {
      labels: DATA.expatRetentie.jaren.map(j => j + ' jaar'),
      datasets: [{
        data: DATA.expatRetentie.percentages,
        borderColor: palette.accent,
        backgroundColor: ctx => grad(ctx, [[0,'rgba(220,38,38,.4)'],[1,'rgba(220,38,38,0)']]),
        fill: true, tension: .3, borderWidth: 2.5,
        pointBackgroundColor: palette.accent, pointRadius: 6, pointHoverRadius: 9
      }]
    },
    options: lineOpts({
      scales: { x: {...baseScale}, y: {...baseScale, suggestedMin: 0, suggestedMax: 100, ticks: {...baseScale.ticks, callback: v => v + '%'}} },
      plugins: { legend: { display: false }, tooltip: { callbacks: { label: c => ` ${c.parsed.y}% nog in NL` } } }
    })
  });

  /* ====================================================================
     CHART 34 — Student stay rate
     ==================================================================== */
  if ($('chartStayRate')) new Chart($('chartStayRate'), {
    type: 'line',
    data: {
      labels: DATA.studentStayRate.years,
      datasets: [{
        data: DATA.studentStayRate.values,
        borderColor: palette.accent2,
        backgroundColor: ctx => grad(ctx, [[0,'rgba(249,115,22,.35)'],[1,'rgba(249,115,22,0)']]),
        fill: true, tension: .3, borderWidth: 2.5,
        pointBackgroundColor: palette.accent2, pointRadius: 5, pointHoverRadius: 8
      }]
    },
    options: lineOpts({
      scales: { x: {...baseScale}, y: {...baseScale, suggestedMin: 30, suggestedMax: 50, ticks: {...baseScale.ticks, callback: v => v + '%'}} },
      plugins: { legend: { display: false }, tooltip: { callbacks: { label: c => ` ${c.parsed.y}% bleef hier` } } }
    })
  });

  /* ====================================================================
     CHART 35 — EU arbeidsmigrant vertrek
     ==================================================================== */
  if ($('chartArbVertrek')) new Chart($('chartArbVertrek'), {
    type: 'bar',
    data: {
      labels: DATA.arbeidsmigrantTerugkeer.landen,
      datasets: [{
        data: DATA.arbeidsmigrantTerugkeer.percentages,
        backgroundColor: ctx => `rgba(220,38,38,${0.5 + ctx.parsed.y / 200})`,
        borderRadius: 4, maxBarThickness: 60
      }]
    },
    options: barOpts({
      scales: { x: {...baseScale}, y: {...baseScale, suggestedMax: 80, ticks: {...baseScale.ticks, callback: v => v + '%'}} },
      plugins: { legend: { display: false }, tooltip: { callbacks: { label: c => ` ${c.parsed.y}% vertrok binnen 5 jaar` } } }
    })
  });

  /* ====================================================================
     CHART 36 — InterNations ranking
     ==================================================================== */
  if ($('chartInternations')) new Chart($('chartInternations'), {
    type: 'line',
    data: {
      labels: DATA.internationsRank.years,
      datasets: [{
        data: DATA.internationsRank.values,
        borderColor: palette.accent,
        backgroundColor: ctx => grad(ctx, [[0,'rgba(220,38,38,.35)'],[1,'rgba(220,38,38,0)']]),
        fill: true, tension: .3, borderWidth: 2.5,
        pointBackgroundColor: palette.accent, pointRadius: 5, pointHoverRadius: 8
      }]
    },
    options: lineOpts({
      scales: {
        x: {...baseScale},
        y: {...baseScale, reverse: true, suggestedMin: 1, suggestedMax: 40, ticks: {...baseScale.ticks, callback: v => '#' + v}}
      },
      plugins: { legend: { display: false }, tooltip: { callbacks: { label: c => ` plek #${c.parsed.y} wereldwijd` } } }
    })
  });

  /* ====================================================================
     CHART 37 — Huurexplosie (multi-line)
     ==================================================================== */
  if ($('chartHuurExplosie')) new Chart($('chartHuurExplosie'), {
    type: 'line',
    data: {
      labels: DATA.huurExplosie.years,
      datasets: [
        { label: 'Amsterdam', data: DATA.huurExplosie.amsterdam, borderColor: palette.accent,  backgroundColor: palette.accent,  borderWidth: 2.5, tension: .3, pointRadius: 5, pointHoverRadius: 8, fill: false },
        { label: 'Utrecht',   data: DATA.huurExplosie.utrecht,   borderColor: palette.accent2, backgroundColor: palette.accent2, borderWidth: 2.5, tension: .3, pointRadius: 5, pointHoverRadius: 8, fill: false },
        { label: 'Rotterdam', data: DATA.huurExplosie.rotterdam, borderColor: palette.accent3, backgroundColor: palette.accent3, borderWidth: 2.5, tension: .3, pointRadius: 5, pointHoverRadius: 8, fill: false }
      ]
    },
    options: {
      responsive: true, maintainAspectRatio: false, interaction: { mode: 'index', intersect: false },
      plugins: { legend: { position: 'bottom' }, tooltip: { callbacks: { label: c => ` ${c.dataset.label}: €${c.parsed.y.toLocaleString('nl-NL')}` } } },
      scales: { x: {...baseScale}, y: {...baseScale, ticks: {...baseScale.ticks, callback: v => '€' + v}} }
    }
  });

  /* ====================================================================
     CHART 38 — Bij ouders wonen
     ==================================================================== */
  if ($('chartBijOuders')) new Chart($('chartBijOuders'), {
    type: 'line',
    data: {
      labels: DATA.bijOudersWonen.years,
      datasets: [{
        data: DATA.bijOudersWonen.values,
        borderColor: palette.accent,
        backgroundColor: ctx => grad(ctx, [[0,'rgba(220,38,38,.35)'],[1,'rgba(220,38,38,0)']]),
        fill: true, tension: .3, borderWidth: 2.5,
        pointBackgroundColor: palette.accent, pointRadius: 5, pointHoverRadius: 8
      }]
    },
    options: lineOpts({
      scales: { x: {...baseScale}, y: {...baseScale, suggestedMin: 0, suggestedMax: 25, ticks: {...baseScale.ticks, callback: v => v + '%'}} },
      plugins: { legend: { display: false }, tooltip: { callbacks: { label: c => ` ${c.parsed.y}% woont nog thuis` } } }
    })
  });

  /* ====================================================================
     CHART 39 — Wachttijd sociale huur
     ==================================================================== */
  if ($('chartWachtSocHuur')) new Chart($('chartWachtSocHuur'), {
    type: 'bar',
    data: {
      labels: DATA.wachttijdSocHuur.steden,
      datasets: [{
        data: DATA.wachttijdSocHuur.jaren,
        backgroundColor: ctx => {
          const v = ctx.parsed.y ?? 0;
          if (v >= 13) return palette.accent;
          if (v >= 8) return palette.accent2;
          return palette.accent3;
        },
        borderRadius: 4, maxBarThickness: 60
      }]
    },
    options: barOpts({
      scales: { x: {...baseScale}, y: {...baseScale, ticks: {...baseScale.ticks, callback: v => v + ' jr'}} },
      plugins: { legend: { display: false }, tooltip: { callbacks: { label: c => ` ${c.parsed.y} jaar wachten` } } }
    })
  });

  /* ====================================================================
     CHART 40 — Functioneel analfabetisme
     ==================================================================== */
  if ($('chartAnalfabeet')) new Chart($('chartAnalfabeet'), {
    type: 'bar',
    data: {
      labels: DATA.functioneelAnalfabetisme.years,
      datasets: [{
        data: DATA.functioneelAnalfabetisme.values,
        backgroundColor: ctx => grad(ctx, [[0,palette.accent],[1,'rgba(220,38,38,.2)']]),
        borderRadius: 4, maxBarThickness: 60
      }]
    },
    options: barOpts({
      scales: { x: {...baseScale}, y: {...baseScale, suggestedMax: 40, ticks: {...baseScale.ticks, callback: v => v + '%'}} },
      plugins: { legend: { display: false }, tooltip: { callbacks: { label: c => ` ${c.parsed.y}% onder leesniveau 2` } } }
    })
  });

  /* ====================================================================
     CHART 41 — School segregatie
     ==================================================================== */
  if ($('chartSegregatie')) new Chart($('chartSegregatie'), {
    type: 'line',
    data: {
      labels: DATA.schoolSegregatie.years,
      datasets: [{
        data: DATA.schoolSegregatie.values,
        borderColor: palette.accent2,
        backgroundColor: ctx => grad(ctx, [[0,'rgba(249,115,22,.35)'],[1,'rgba(249,115,22,0)']]),
        fill: true, tension: .3, borderWidth: 2.5,
        pointBackgroundColor: palette.accent2, pointRadius: 5, pointHoverRadius: 8
      }]
    },
    options: lineOpts({
      scales: { x: {...baseScale}, y: {...baseScale, suggestedMin: 15, suggestedMax: 50, ticks: {...baseScale.ticks, callback: v => v + '%'}} },
      plugins: { legend: { display: false }, tooltip: { callbacks: { label: c => ` ${c.parsed.y}% scholen` } } }
    })
  });

  /* ====================================================================
     CHART 42 — Lerarentekort
     ==================================================================== */
  if ($('chartLerarenTekort')) new Chart($('chartLerarenTekort'), {
    type: 'bar',
    data: {
      labels: DATA.lerarentekort.years,
      datasets: [{
        data: DATA.lerarentekort.values,
        backgroundColor: ctx => grad(ctx, [[0,palette.accent],[1,'rgba(220,38,38,.2)']]),
        borderRadius: 4, maxBarThickness: 70
      }]
    },
    options: barOpts({
      scales: { x: {...baseScale}, y: {...baseScale, ticks: {...baseScale.ticks, callback: v => v.toFixed(1) + 'k'}} },
      plugins: { legend: { display: false }, tooltip: { callbacks: { label: c => ` ${(c.parsed.y * 1000).toLocaleString('nl-NL')} vacatures` } } }
    })
  });

  /* ====================================================================
     CHART 43 — Steekincidenten
     ==================================================================== */
  if ($('chartSteek')) new Chart($('chartSteek'), {
    type: 'line',
    data: {
      labels: DATA.steekincidenten.years,
      datasets: [{
        data: DATA.steekincidenten.values,
        borderColor: palette.accent,
        backgroundColor: ctx => grad(ctx, [[0,'rgba(220,38,38,.35)'],[1,'rgba(220,38,38,0)']]),
        fill: true, tension: .3, borderWidth: 2.5,
        pointBackgroundColor: palette.accent, pointRadius: 5, pointHoverRadius: 8
      }]
    },
    options: lineOpts({
      plugins: { legend: { display: false }, tooltip: { callbacks: { label: c => ` ${c.parsed.y.toLocaleString('nl-NL')} incidenten` } } }
    })
  });

  /* ====================================================================
     CHART 44 — Cyber crime
     ==================================================================== */
  if ($('chartCyber')) new Chart($('chartCyber'), {
    type: 'bar',
    data: {
      labels: DATA.cyberCrime.years,
      datasets: [{
        data: DATA.cyberCrime.values,
        backgroundColor: ctx => grad(ctx, [[0,palette.accent],[1,'rgba(220,38,38,.2)']]),
        borderRadius: 4, maxBarThickness: 60
      }]
    },
    options: barOpts({
      scales: { x: {...baseScale}, y: {...baseScale, ticks: {...baseScale.ticks, callback: v => v + 'k'}} },
      plugins: { legend: { display: false }, tooltip: { callbacks: { label: c => ` ${(c.parsed.y * 1000).toLocaleString('nl-NL')} zaken` } } }
    })
  });

  /* ====================================================================
     CHART 45 — Ervaren onveiligheid
     ==================================================================== */
  if ($('chartOnveilig')) new Chart($('chartOnveilig'), {
    type: 'line',
    data: {
      labels: DATA.ervarenVeiligheid.years,
      datasets: [{
        data: DATA.ervarenVeiligheid.values,
        borderColor: palette.accent,
        backgroundColor: ctx => grad(ctx, [[0,'rgba(220,38,38,.35)'],[1,'rgba(220,38,38,0)']]),
        fill: true, tension: .3, borderWidth: 2.5,
        pointBackgroundColor: palette.accent, pointRadius: 5, pointHoverRadius: 8
      }]
    },
    options: lineOpts({
      scales: { x: {...baseScale}, y: {...baseScale, suggestedMin: 30, suggestedMax: 45, ticks: {...baseScale.ticks, callback: v => v + '%'}} },
      plugins: { legend: { display: false }, tooltip: { callbacks: { label: c => ` ${c.parsed.y}% voelt zich wel eens onveilig` } } }
    })
  });

  /* ====================================================================
     WALL OF NUMBERS
     ==================================================================== */
  if ($('wallGrid')) {
    $('wallGrid').innerHTML = DATA.killerNumbers.map(k => `
      <div class="wall-cell">
        <div class="wall-num">${k.value}</div>
        <div class="wall-lbl">${k.label}</div>
        <div class="wall-src">Bron · ${k.source}</div>
      </div>
    `).join('');
  }

  /* ====================================================================
     TAX STACK — 55+ belastingen, gegroepeerd
     ==================================================================== */
  if ($('taxStack')) {
    $('taxStack').innerHTML = DATA.belastingstapel.categories.map(cat => `
      <div class="taxstack-group">
        <h4>${cat.groep} <span class="taxstack-count">(${cat.items.length})</span></h4>
        <ul>
          ${cat.items.map(it => `<li>${it}</li>`).join('')}
        </ul>
      </div>
    `).join('');
  }

  /* ====================================================================
     EU TIMELINE
     ==================================================================== */
  if ($('timelineEU')) {
    $('timelineEU').innerHTML = DATA.euOverdracht.items.map(it => `
      <div class="tl-item">
        <div class="tl-year">${it.jaar}</div>
        <div class="tl-event">${it.gebeurtenis}</div>
        <div class="tl-impact">${it.impact}</div>
      </div>
    `).join('');
  }

  /* ====================================================================
     VERVAL-CHECKLIST — 17 vervaltekenen
     ==================================================================== */
  if ($('vervalGrid')) {
    $('vervalGrid').innerHTML = DATA.vervalCheck.indicators.map((it,i) => `
      <div class="check-item ${it.status === 'ja' ? 'check-red' : 'check-amber'}">
        <div class="check-num">${String(i+1).padStart(2,'0')}</div>
        <div class="check-body">
          <h4>${it.ind}</h4>
          <p>${it.nl}</p>
        </div>
        <div class="check-status">${it.status === 'ja' ? '✕' : '⚠'}</div>
      </div>
    `).join('');
  }

  /* ====================================================================
     COUNTER ANIMATIONS
     ==================================================================== */
  function animateCounter(el, to, dur = 1400) {
    const start = performance.now();
    function frame(t) {
      const p = Math.min(1, (t - start) / dur);
      const eased = 1 - Math.pow(1 - p, 3);
      el.textContent = Math.round(to * eased).toString();
      if (p < 1) requestAnimationFrame(frame);
    }
    requestAnimationFrame(frame);
  }
  document.querySelectorAll('[data-count-to]').forEach(el => {
    const to = parseInt(el.dataset.countTo, 10);
    setTimeout(() => animateCounter(el, to), 300);
  });

  /* ====================================================================
     SCROLL PROGRESS
     ==================================================================== */
  const progressBar = document.querySelector('.nav-progress span');
  function updateProgress() {
    const h = document.documentElement;
    const pct = (h.scrollTop / (h.scrollHeight - h.clientHeight)) * 100;
    if (progressBar) progressBar.style.width = pct + '%';
  }
  window.addEventListener('scroll', updateProgress, { passive: true });
  updateProgress();

  /* ====================================================================
     SCROLL REVEAL
     ==================================================================== */
  const revealTargets = document.querySelectorAll('.card, .callout, .quote, .quote-card, .profile-card, .tl-item, .wall-cell, .src-card, .chapter-head, .taxstack-group, .check-item, .vs-row, .prof-block, .illusion-card');
  revealTargets.forEach(el => el.classList.add('reveal'));
  const io = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } });
  }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });
  revealTargets.forEach(el => io.observe(el));

  /* ====================================================================
     NAV
     ==================================================================== */
  const navToggle = document.querySelector('.nav-toggle');
  const navLinks = document.querySelector('.nav-links');
  if (navToggle && navLinks) {
    navToggle.addEventListener('click', () => navLinks.classList.toggle('open'));
    navLinks.addEventListener('click', e => { if (e.target.tagName === 'A') navLinks.classList.remove('open'); });
  }

  /* ====================================================================
     DATE STAMPS
     ==================================================================== */
  const stamp = new Date().toLocaleDateString('nl-NL', { year: 'numeric', month: 'long' });
  ['lastUpdated','dateStamp','updated'].forEach(id => { const e = $(id); if (e) e.textContent = stamp; });

})();
