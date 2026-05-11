/* ==========================================================================
   NL NAAR DE TYFUS — APP
   Chart-instanties, animaties, navigatie
   ========================================================================== */

(function () {
  'use strict';

  /* ====================================================================
     CHART.JS GLOBAL DEFAULTS — dark theme
     ==================================================================== */
  const palette = {
    accent:  '#dc2626',
    accent2: '#f97316',
    accent3: '#facc15',
    blue:    '#3b82f6',
    green:   '#22c55e',
    ink:     '#e8e6e1',
    ink2:    '#b8b5ac',
    ink3:    '#8a8780',
    ink4:    '#5b5853',
    grid:    'rgba(255,255,255,.06)',
    surface: '#16161a'
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
  Chart.defaults.plugins.tooltip.displayColors = true;
  Chart.defaults.plugins.tooltip.boxPadding = 6;

  const baseScale = {
    grid: { color: palette.grid, drawBorder: false },
    ticks: { color: palette.ink3, padding: 8 },
    border: { display: false }
  };

  /* ====================================================================
     GRADIENT HELPER
     ==================================================================== */
  function gradient(ctx, colorStops) {
    const g = ctx.chart.ctx.createLinearGradient(0, 0, 0, ctx.chart.height);
    colorStops.forEach(([stop, color]) => g.addColorStop(stop, color));
    return g;
  }

  /* ====================================================================
     COMMON OPTIONS
     ==================================================================== */
  function lineOpts(extra = {}) {
    return Object.assign({
      responsive: true,
      maintainAspectRatio: false,
      interaction: { mode: 'index', intersect: false },
      plugins: { legend: { display: false } },
      scales: { x: { ...baseScale }, y: { ...baseScale, beginAtZero: false } }
    }, extra);
  }

  function barOpts(extra = {}) {
    return Object.assign({
      responsive: true,
      maintainAspectRatio: false,
      plugins: { legend: { display: false } },
      scales: { x: { ...baseScale }, y: { ...baseScale, beginAtZero: true } }
    }, extra);
  }

  /* ====================================================================
     CHARTS
     ==================================================================== */

  // 1. Belastingdruk
  new Chart(document.getElementById('chartBelasting'), {
    type: 'line',
    data: {
      labels: DATA.belastingdruk.years,
      datasets: [{
        label: '% BBP',
        data: DATA.belastingdruk.values,
        borderColor: palette.accent,
        backgroundColor: ctx => gradient(ctx, [[0,'rgba(220,38,38,.35)'],[1,'rgba(220,38,38,0)']]),
        fill: true,
        tension: .35,
        borderWidth: 2.5,
        pointBackgroundColor: palette.accent,
        pointRadius: 4,
        pointHoverRadius: 6
      }]
    },
    options: lineOpts({
      scales: {
        x: { ...baseScale },
        y: { ...baseScale, suggestedMin: 30, suggestedMax: 45, ticks: { ...baseScale.ticks, callback: v => v + '%' } }
      },
      plugins: { legend: { display: false }, tooltip: { callbacks: { label: c => ` ${c.parsed.y}% BBP` } } }
    })
  });

  // 2. BTW
  new Chart(document.getElementById('chartBTW'), {
    type: 'line',
    data: {
      labels: DATA.btw.events.map(e => e.year),
      datasets: [{
        label: 'BTW algemeen',
        data: DATA.btw.events.map(e => e.value),
        borderColor: palette.accent,
        backgroundColor: ctx => gradient(ctx, [[0,'rgba(220,38,38,.30)'],[1,'rgba(220,38,38,0)']]),
        fill: true,
        stepped: true,
        borderWidth: 2.5,
        pointBackgroundColor: palette.accent,
        pointRadius: 5,
        pointHoverRadius: 8
      }]
    },
    options: lineOpts({
      scales: {
        x: { ...baseScale },
        y: { ...baseScale, suggestedMin: 10, suggestedMax: 22, ticks: { ...baseScale.ticks, callback: v => v + '%' } }
      },
      plugins: {
        legend: { display: false },
        tooltip: {
          callbacks: {
            label: c => ` ${c.parsed.y}%`,
            afterLabel: c => {
              const note = DATA.btw.events[c.dataIndex].note;
              return note ? note : '';
            }
          }
        }
      }
    })
  });

  // 3. Energiebelasting
  new Chart(document.getElementById('chartEnergiebel'), {
    type: 'bar',
    data: {
      labels: DATA.energiebelasting.years,
      datasets: [{
        label: 'ct/kWh',
        data: DATA.energiebelasting.values,
        backgroundColor: ctx => gradient(ctx, [[0,palette.accent],[1,'rgba(220,38,38,.2)']]),
        borderRadius: 4,
        maxBarThickness: 50
      }]
    },
    options: barOpts({
      plugins: { legend: { display: false }, tooltip: { callbacks: { label: c => ` ${c.parsed.y} ct/kWh` } } }
    })
  });

  // 4. Huizenprijzen
  new Chart(document.getElementById('chartHuizen'), {
    type: 'line',
    data: {
      labels: DATA.huizenprijzen.years,
      datasets: [{
        data: DATA.huizenprijzen.values,
        borderColor: palette.accent,
        backgroundColor: ctx => gradient(ctx, [[0,'rgba(220,38,38,.4)'],[1,'rgba(220,38,38,0)']]),
        fill: true,
        tension: .35,
        borderWidth: 2.5,
        pointBackgroundColor: palette.accent,
        pointRadius: 4,
        pointHoverRadius: 7
      }]
    },
    options: lineOpts({
      scales: {
        x: { ...baseScale },
        y: { ...baseScale, ticks: { ...baseScale.ticks, callback: v => '€' + (v/1000) + 'k' } }
      },
      plugins: { legend: { display: false }, tooltip: { callbacks: { label: c => ' €' + c.parsed.y.toLocaleString('nl-NL') } } }
    })
  });

  // 5. Woningtekort
  new Chart(document.getElementById('chartTekort'), {
    type: 'bar',
    data: {
      labels: DATA.woningtekort.years,
      datasets: [{
        data: DATA.woningtekort.values,
        backgroundColor: ctx => gradient(ctx, [[0,palette.accent2],[1,'rgba(249,115,22,.15)']]),
        borderRadius: 4,
        maxBarThickness: 60
      }]
    },
    options: barOpts({
      scales: {
        x: { ...baseScale },
        y: { ...baseScale, ticks: { ...baseScale.ticks, callback: v => (v/1000) + 'k' } }
      },
      plugins: { legend: { display: false }, tooltip: { callbacks: { label: c => ' ' + c.parsed.y.toLocaleString('nl-NL') + ' woningen' } } }
    })
  });

  // 6. Migratie (im+em+saldo)
  new Chart(document.getElementById('chartMigratie'), {
    type: 'bar',
    data: {
      labels: DATA.immigratieEmigratie.years,
      datasets: [
        {
          label: 'Immigratie',
          data: DATA.immigratieEmigratie.immigratie,
          backgroundColor: palette.accent,
          borderRadius: 4,
          maxBarThickness: 28,
          order: 2
        },
        {
          label: 'Emigratie',
          data: DATA.immigratieEmigratie.emigratie.map(v => -v),
          backgroundColor: palette.ink4,
          borderRadius: 4,
          maxBarThickness: 28,
          order: 2
        },
        {
          label: 'Netto saldo',
          type: 'line',
          data: DATA.immigratieEmigratie.saldo,
          borderColor: palette.accent3,
          backgroundColor: palette.accent3,
          borderWidth: 2.5,
          pointRadius: 4,
          pointHoverRadius: 7,
          tension: .3,
          order: 1
        }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      interaction: { mode: 'index', intersect: false },
      plugins: {
        legend: { display: true, position: 'bottom' },
        tooltip: { callbacks: { label: c => ' ' + c.dataset.label + ': ' + Math.abs(c.parsed.y).toLocaleString('nl-NL') + 'k' } }
      },
      scales: {
        x: { ...baseScale, stacked: true },
        y: { ...baseScale, ticks: { ...baseScale.ticks, callback: v => Math.abs(v) + 'k' } }
      }
    }
  });

  // 7. Bevolking
  new Chart(document.getElementById('chartBevolking'), {
    type: 'line',
    data: {
      labels: DATA.bevolking.years,
      datasets: [{
        data: DATA.bevolking.values,
        borderColor: palette.accent,
        backgroundColor: ctx => gradient(ctx, [[0,'rgba(220,38,38,.3)'],[1,'rgba(220,38,38,0)']]),
        fill: true, tension: .25, borderWidth: 2.5,
        pointBackgroundColor: palette.accent, pointRadius: 4, pointHoverRadius: 7
      }]
    },
    options: lineOpts({
      scales: {
        x: { ...baseScale },
        y: { ...baseScale, ticks: { ...baseScale.ticks, callback: v => v + ' mln' } }
      },
      plugins: { legend: { display: false }, tooltip: { callbacks: { label: c => ' ' + c.parsed.y + ' miljoen' } } }
    })
  });

  // 8. Migratieachtergrond
  new Chart(document.getElementById('chartAchtergrond'), {
    type: 'line',
    data: {
      labels: DATA.migratieAchtergrond.years,
      datasets: [{
        data: DATA.migratieAchtergrond.values,
        borderColor: palette.accent2,
        backgroundColor: ctx => gradient(ctx, [[0,'rgba(249,115,22,.3)'],[1,'rgba(249,115,22,0)']]),
        fill: true, tension: .3, borderWidth: 2.5,
        pointBackgroundColor: palette.accent2, pointRadius: 4, pointHoverRadius: 7
      }]
    },
    options: lineOpts({
      scales: {
        x: { ...baseScale },
        y: { ...baseScale, ticks: { ...baseScale.ticks, callback: v => v + '%' } }
      },
      plugins: { legend: { display: false }, tooltip: { callbacks: { label: c => ' ' + c.parsed.y + '% van bevolking' } } }
    })
  });

  // 9. Asielaanvragen
  new Chart(document.getElementById('chartAsiel'), {
    type: 'bar',
    data: {
      labels: DATA.asielaanvragen.years,
      datasets: [{
        data: DATA.asielaanvragen.values,
        backgroundColor: ctx => gradient(ctx, [[0,palette.accent],[1,'rgba(220,38,38,.15)']]),
        borderRadius: 4, maxBarThickness: 40
      }]
    },
    options: barOpts({
      scales: {
        x: { ...baseScale },
        y: { ...baseScale, ticks: { ...baseScale.ticks, callback: v => v + 'k' } }
      },
      plugins: { legend: { display: false }, tooltip: { callbacks: { label: c => ' ' + (c.parsed.y * 1000).toLocaleString('nl-NL') + ' aanvragen' } } }
    })
  });

  // 10. Herkomst (horizontal bar)
  new Chart(document.getElementById('chartHerkomst'), {
    type: 'bar',
    data: {
      labels: DATA.herkomstImmigranten2022.landen,
      datasets: [{
        data: DATA.herkomstImmigranten2022.aantallen,
        backgroundColor: ctx => {
          const i = ctx.dataIndex;
          const opacity = 1 - (i * 0.06);
          return `rgba(220,38,38,${opacity})`;
        },
        borderRadius: 4
      }]
    },
    options: {
      indexAxis: 'y',
      responsive: true,
      maintainAspectRatio: false,
      plugins: { legend: { display: false }, tooltip: { callbacks: { label: c => ' ' + (c.parsed.x * 1000).toLocaleString('nl-NL') + ' immigranten' } } },
      scales: {
        x: { ...baseScale, ticks: { ...baseScale.ticks, callback: v => v + 'k' } },
        y: { ...baseScale, ticks: { ...baseScale.ticks, padding: 12 } }
      }
    }
  });

  // 11. Bestemming emigranten
  new Chart(document.getElementById('chartBestemming'), {
    type: 'bar',
    data: {
      labels: DATA.bestemmingEmigranten.landen,
      datasets: [{
        data: DATA.bestemmingEmigranten.aantallen,
        backgroundColor: ctx => {
          const i = ctx.dataIndex;
          const opacity = 1 - (i * 0.07);
          return `rgba(249,115,22,${opacity})`;
        },
        borderRadius: 4
      }]
    },
    options: {
      indexAxis: 'y',
      responsive: true,
      maintainAspectRatio: false,
      plugins: { legend: { display: false }, tooltip: { callbacks: { label: c => ' ' + (c.parsed.x * 1000).toLocaleString('nl-NL') + ' emigranten' } } },
      scales: {
        x: { ...baseScale, ticks: { ...baseScale.ticks, callback: v => v + 'k' } },
        y: { ...baseScale, ticks: { ...baseScale.ticks, padding: 12 } }
      }
    }
  });

  // 12. Motieven emigranten
  new Chart(document.getElementById('chartMotieven'), {
    type: 'bar',
    data: {
      labels: DATA.emigratieMotieven.motieven,
      datasets: [{
        data: DATA.emigratieMotieven.percentages,
        backgroundColor: ctx => {
          const v = ctx.parsed.x ?? ctx.parsed.y ?? 0;
          if (v >= 50) return palette.accent;
          if (v >= 35) return palette.accent2;
          return palette.accent3;
        },
        borderRadius: 4
      }]
    },
    options: {
      indexAxis: 'y',
      responsive: true,
      maintainAspectRatio: false,
      plugins: { legend: { display: false }, tooltip: { callbacks: { label: c => ' ' + c.parsed.x + '% noemt dit' } } },
      scales: {
        x: { ...baseScale, ticks: { ...baseScale.ticks, callback: v => v + '%' }, suggestedMax: 60 },
        y: { ...baseScale, ticks: { ...baseScale.ticks, padding: 12, font: { size: 11 } } }
      }
    }
  });

  // 13. Vertrouwen instellingen (multi-line)
  new Chart(document.getElementById('chartVertrouwen'), {
    type: 'line',
    data: {
      labels: DATA.vertrouwenInstellingen.years,
      datasets: [
        { label: 'Tweede Kamer', data: DATA.vertrouwenInstellingen.tweedeKamer, borderColor: palette.accent, backgroundColor: palette.accent, borderWidth: 2.5, tension: .3, pointRadius: 4, pointHoverRadius: 7, fill: false },
        { label: 'Regering', data: DATA.vertrouwenInstellingen.regering, borderColor: palette.accent2, backgroundColor: palette.accent2, borderWidth: 2.5, tension: .3, pointRadius: 4, pointHoverRadius: 7, fill: false },
        { label: 'Politie', data: DATA.vertrouwenInstellingen.politie, borderColor: palette.green, backgroundColor: palette.green, borderWidth: 2.5, tension: .3, pointRadius: 4, pointHoverRadius: 7, fill: false }
      ]
    },
    options: {
      responsive: true, maintainAspectRatio: false,
      interaction: { mode: 'index', intersect: false },
      plugins: {
        legend: { display: true, position: 'bottom' },
        tooltip: { callbacks: { label: c => ` ${c.dataset.label}: ${c.parsed.y}%` } }
      },
      scales: {
        x: { ...baseScale },
        y: { ...baseScale, suggestedMin: 20, suggestedMax: 80, ticks: { ...baseScale.ticks, callback: v => v + '%' } }
      }
    }
  });

  // 14. Sociaal contact
  new Chart(document.getElementById('chartEenzaam'), {
    type: 'line',
    data: {
      labels: DATA.sociaalContact.years,
      datasets: [{
        data: DATA.sociaalContact.values,
        borderColor: palette.accent,
        backgroundColor: ctx => gradient(ctx, [[0,'rgba(220,38,38,.35)'],[1,'rgba(220,38,38,0)']]),
        fill: true, tension: .3, borderWidth: 2.5,
        pointBackgroundColor: palette.accent, pointRadius: 5, pointHoverRadius: 8
      }]
    },
    options: lineOpts({
      scales: {
        x: { ...baseScale },
        y: { ...baseScale, suggestedMin: 0, suggestedMax: 16, ticks: { ...baseScale.ticks, callback: v => v + '%' } }
      },
      plugins: { legend: { display: false }, tooltip: { callbacks: { label: c => ' ' + c.parsed.y + '% van bevolking' } } }
    })
  });

  // 15. EU bijdrage
  new Chart(document.getElementById('chartEU'), {
    type: 'bar',
    data: {
      labels: DATA.nettoEUBijdrage.years,
      datasets: [{
        data: DATA.nettoEUBijdrage.values,
        backgroundColor: ctx => gradient(ctx, [[0,palette.accent],[1,'rgba(220,38,38,.15)']]),
        borderRadius: 4, maxBarThickness: 50
      }]
    },
    options: barOpts({
      scales: {
        x: { ...baseScale },
        y: { ...baseScale, ticks: { ...baseScale.ticks, callback: v => '€' + v + ' mld' } }
      },
      plugins: { legend: { display: false }, tooltip: { callbacks: { label: c => ' €' + c.parsed.y + ' miljard netto' } } }
    })
  });

  // 16. Zorgpremie
  new Chart(document.getElementById('chartZorgpremie'), {
    type: 'line',
    data: {
      labels: DATA.zorgpremie.years,
      datasets: [{
        data: DATA.zorgpremie.values,
        borderColor: palette.accent,
        backgroundColor: ctx => gradient(ctx, [[0,'rgba(220,38,38,.3)'],[1,'rgba(220,38,38,0)']]),
        fill: true, tension: .3, borderWidth: 2.5,
        pointBackgroundColor: palette.accent, pointRadius: 5, pointHoverRadius: 8
      }]
    },
    options: lineOpts({
      scales: {
        x: { ...baseScale },
        y: { ...baseScale, ticks: { ...baseScale.ticks, callback: v => '€' + v } }
      },
      plugins: { legend: { display: false }, tooltip: { callbacks: { label: c => ' €' + c.parsed.y.toLocaleString('nl-NL') + ' per jaar' } } }
    })
  });

  // 17. Energierekening
  new Chart(document.getElementById('chartEnergie'), {
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
      scales: {
        x: { ...baseScale },
        y: { ...baseScale, ticks: { ...baseScale.ticks, callback: v => '€' + v } }
      },
      plugins: { legend: { display: false }, tooltip: { callbacks: { label: c => ' €' + c.parsed.y.toLocaleString('nl-NL') } } }
    })
  });

  // 18. PISA
  new Chart(document.getElementById('chartPISA'), {
    type: 'line',
    data: {
      labels: DATA.pisa.jaren,
      datasets: [
        { label: 'Leesvaardigheid', data: DATA.pisa.leesvaardigheid, borderColor: palette.accent,  backgroundColor: palette.accent,  borderWidth: 2.5, tension: .3, pointRadius: 5, pointHoverRadius: 8, fill: false },
        { label: 'Wiskunde',         data: DATA.pisa.wiskunde,         borderColor: palette.accent2, backgroundColor: palette.accent2, borderWidth: 2.5, tension: .3, pointRadius: 5, pointHoverRadius: 8, fill: false },
        { label: 'Natuurwetenschap', data: DATA.pisa.natuurwetenschap, borderColor: palette.accent3, backgroundColor: palette.accent3, borderWidth: 2.5, tension: .3, pointRadius: 5, pointHoverRadius: 8, fill: false }
      ]
    },
    options: {
      responsive: true, maintainAspectRatio: false,
      interaction: { mode: 'index', intersect: false },
      plugins: { legend: { position: 'bottom' }, tooltip: { callbacks: { label: c => ` ${c.dataset.label}: ${c.parsed.y} punten` } } },
      scales: {
        x: { ...baseScale },
        y: { ...baseScale, suggestedMin: 440, suggestedMax: 550 }
      }
    }
  });

  // 19. Cocaine
  new Chart(document.getElementById('chartCoke'), {
    type: 'bar',
    data: {
      labels: DATA.drugsBeslag.years,
      datasets: [{
        data: DATA.drugsBeslag.values,
        backgroundColor: ctx => gradient(ctx, [[0,palette.accent],[1,'rgba(220,38,38,.15)']]),
        borderRadius: 4, maxBarThickness: 40
      }]
    },
    options: barOpts({
      scales: {
        x: { ...baseScale },
        y: { ...baseScale, ticks: { ...baseScale.ticks, callback: v => v + ' ton' } }
      },
      plugins: { legend: { display: false }, tooltip: { callbacks: { label: c => ' ' + c.parsed.y + ' ton cocaïne' } } }
    })
  });

  // 20. Liquidaties
  new Chart(document.getElementById('chartLiqui'), {
    type: 'line',
    data: {
      labels: DATA.liquidaties.years,
      datasets: [{
        data: DATA.liquidaties.values,
        borderColor: palette.accent,
        backgroundColor: ctx => gradient(ctx, [[0,'rgba(220,38,38,.3)'],[1,'rgba(220,38,38,0)']]),
        fill: true, tension: .3, borderWidth: 2.5,
        pointBackgroundColor: palette.accent, pointRadius: 4, pointHoverRadius: 7
      }]
    },
    options: lineOpts({
      plugins: { legend: { display: false }, tooltip: { callbacks: { label: c => ' ' + c.parsed.y + ' afrekeningen' } } }
    })
  });

  // 21. Regeldruk
  new Chart(document.getElementById('chartRegels'), {
    type: 'line',
    data: {
      labels: DATA.regeldruk.years,
      datasets: [{
        data: DATA.regeldruk.values,
        borderColor: palette.accent,
        backgroundColor: ctx => gradient(ctx, [[0,'rgba(220,38,38,.3)'],[1,'rgba(220,38,38,0)']]),
        fill: true, tension: .25, borderWidth: 2.5,
        pointBackgroundColor: palette.accent, pointRadius: 5, pointHoverRadius: 8
      }]
    },
    options: lineOpts({
      scales: {
        x: { ...baseScale },
        y: { ...baseScale, ticks: { ...baseScale.ticks, callback: v => (v/1000).toFixed(0) + 'k' } }
      },
      plugins: { legend: { display: false }, tooltip: { callbacks: { label: c => ' ' + c.parsed.y.toLocaleString('nl-NL') + ' regels' } } }
    })
  });

  /* ====================================================================
     WALL OF NUMBERS
     ==================================================================== */
  const wallEl = document.getElementById('wallGrid');
  if (wallEl) {
    wallEl.innerHTML = DATA.killerNumbers.map(k => `
      <div class="wall-cell">
        <div class="wall-num">${k.value}</div>
        <div class="wall-lbl">${k.label}</div>
        <div class="wall-src">Bron · ${k.source}</div>
      </div>
    `).join('');
  }

  /* ====================================================================
     EU TIMELINE
     ==================================================================== */
  const tlEl = document.getElementById('timelineEU');
  if (tlEl) {
    tlEl.innerHTML = DATA.euOverdracht.items.map(it => `
      <div class="tl-item">
        <div class="tl-year">${it.jaar}</div>
        <div class="tl-event">${it.gebeurtenis}</div>
        <div class="tl-impact">${it.impact}</div>
      </div>
    `).join('');
  }

  /* ====================================================================
     COUNTER ANIMATIONS (hero stats)
     ==================================================================== */
  function animateCounter(el, to, dur = 1200) {
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
     SCROLL: NAV PROGRESS BAR
     ==================================================================== */
  const progressBar = document.querySelector('.nav-progress span');
  function updateProgress() {
    const h = document.documentElement;
    const pct = (h.scrollTop / (h.scrollHeight - h.clientHeight)) * 100;
    progressBar.style.width = pct + '%';
  }
  window.addEventListener('scroll', updateProgress, { passive: true });
  updateProgress();

  /* ====================================================================
     SCROLL: REVEAL ON VIEW
     ==================================================================== */
  const revealTargets = document.querySelectorAll('.card, .callout, .quote, .profile-card, .tl-item, .wall-cell, .src-card, .chapter-head, .vs-list');
  revealTargets.forEach(el => el.classList.add('reveal'));

  const io = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('in');
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });
  revealTargets.forEach(el => io.observe(el));

  /* ====================================================================
     NAV: MOBILE TOGGLE + ACTIVE SECTION
     ==================================================================== */
  const navToggle = document.querySelector('.nav-toggle');
  const navLinks = document.querySelector('.nav-links');
  if (navToggle && navLinks) {
    navToggle.addEventListener('click', () => navLinks.classList.toggle('open'));
    navLinks.addEventListener('click', e => {
      if (e.target.tagName === 'A') navLinks.classList.remove('open');
    });
  }

  /* ====================================================================
     DATE STAMPS
     ==================================================================== */
  const now = new Date();
  const stamp = now.toLocaleDateString('nl-NL', { year: 'numeric', month: 'long' });
  ['lastUpdated', 'dateStamp', 'updated'].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.textContent = stamp;
  });

})();
