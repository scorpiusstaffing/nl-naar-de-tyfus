/* ==========================================================================
   NL NAAR DE TYFUS — DATA
   --------------------------------------------------------------------------
   Alle data hieronder is gebaseerd op publiek toegankelijke bronnen
   (CBS, Eurostat, OESO, Wereldbank, SCP, DNB, IND, NVM, OECD-PISA, ATR).
   Waar exacte jaartallen of cijfers benaderingen zijn, staat dat erbij.
   Bronnen worden per dataset vermeld en zijn ook gebundeld onderaan de site.
   ========================================================================== */

const DATA = {

  /* ====================================================================
     1. BELASTINGEN — totale belasting- en premiedruk als % BBP
     Bron: CBS / Eurostat (Total tax revenue incl. social contributions)
     ==================================================================== */
  belastingdruk: {
    label: "Belasting- en premiedruk (% BBP)",
    source: "CBS Statline; Eurostat 'Total receipts from taxes and social contributions'",
    sourceUrl: "https://ec.europa.eu/eurostat",
    years: [1970, 1980, 1990, 2000, 2010, 2015, 2018, 2020, 2022, 2023],
    values: [35.5, 41.3, 39.4, 38.4, 36.0, 36.5, 38.8, 39.3, 38.2, 38.5]
  },

  btw: {
    label: "BTW algemeen tarief Nederland (%)",
    source: "Belastingdienst NL — historisch overzicht algemene tarieven",
    sourceUrl: "https://www.belastingdienst.nl",
    events: [
      { year: 1969, value: 12, note: "Invoering BTW (Wet OB 1968)" },
      { year: 1971, value: 14 },
      { year: 1973, value: 16 },
      { year: 1976, value: 18 },
      { year: 1984, value: 19 },
      { year: 1989, value: 18.5 },
      { year: 1992, value: 17.5 },
      { year: 2001, value: 19 },
      { year: 2012, value: 21, note: "Verhoging onder Rutte II" }
    ],
    laag: [
      { year: 1969, value: 4 },
      { year: 1986, value: 5 },
      { year: 1989, value: 6 },
      { year: 2019, value: 9, note: "Verhoging laag tarief van 6% naar 9%" }
    ]
  },

  energiebelasting: {
    label: "Energiebelasting + ODE op elektriciteit (€ ct/kWh, 1e schijf)",
    source: "Belastingdienst / NEa; CBS energieprijzen",
    sourceUrl: "https://www.belastingdienst.nl/wps/wcm/connect/bldcontentnl/belastingdienst/zakelijk/overige_belastingen/belastingen_op_milieugrondslag/tarieven_milieubelastingen/",
    years: [1996, 2000, 2005, 2010, 2015, 2020, 2023],
    values: [1.34, 5.83, 6.99, 11.14, 11.96, 12.32, 12.60]
  },

  /* ====================================================================
     2. WONEN — huizenprijzen en woningtekort
     Bron: CBS / Kadaster prijsindex bestaande koopwoningen
     ==================================================================== */
  huizenprijzen: {
    label: "Gemiddelde verkoopprijs bestaande koopwoning (€)",
    source: "CBS / Kadaster — Prijsindex bestaande koopwoningen",
    sourceUrl: "https://www.cbs.nl/nl-nl/cijfers/detail/83906NED",
    years: [1995, 2000, 2005, 2008, 2013, 2015, 2018, 2020, 2022, 2024],
    values: [99000, 172000, 222000, 254000, 213000, 230000, 287000, 335000, 435000, 470000]
  },

  woningtekort: {
    label: "Geschat woningtekort Nederland",
    source: "ABF Research / Ministerie BZK — Primos prognoses",
    sourceUrl: "https://www.rijksoverheid.nl",
    years: [2013, 2017, 2019, 2021, 2023, 2024],
    values: [120000, 200000, 294000, 279000, 390000, 401000]
  },

  /* ====================================================================
     3. MIGRATIE — in- en uitstroom, achtergrond, asiel
     Bron: CBS Statline — Bevolkingsontwikkeling, IND
     ==================================================================== */
  bevolking: {
    label: "Bevolking Nederland (miljoen)",
    source: "CBS Statline — Bevolking; kerncijfers",
    sourceUrl: "https://www.cbs.nl/nl-nl/cijfers/detail/37296ned",
    years: [1900, 1950, 1970, 1980, 1990, 2000, 2010, 2015, 2020, 2024],
    values: [5.1, 10.0, 13.0, 14.1, 14.9, 15.9, 16.6, 16.9, 17.4, 17.94]
  },

  migratieAchtergrond: {
    label: "Aandeel inwoners met migratieachtergrond (%)",
    source: "CBS Statline — Bevolking naar migratieachtergrond",
    sourceUrl: "https://www.cbs.nl/nl-nl/cijfers/detail/37325",
    years: [1972, 1980, 1990, 2000, 2010, 2015, 2020, 2023],
    values: [9.2, 11.0, 13.2, 17.5, 20.2, 22.1, 24.0, 26.6]
  },

  immigratieEmigratie: {
    label: "Immigratie vs emigratie per jaar (x1000)",
    source: "CBS Statline — Migratie",
    sourceUrl: "https://www.cbs.nl/nl-nl/cijfers/detail/70739ned",
    years: [2000, 2005, 2010, 2015, 2017, 2019, 2020, 2021, 2022, 2023],
    immigratie: [132.9, 92.3, 154.4, 166.9, 235.0, 269.9, 220.8, 252.5, 403.1, 337.4],
    emigratie: [78.9, 119.7, 121.5, 147.6, 154.0, 161.6, 154.9, 174.2, 174.0, 198.3],
    saldo:     [54.0, -27.4, 32.9, 19.3, 81.0, 108.3, 65.9, 78.3, 229.1, 139.1]
  },

  herkomstImmigranten2022: {
    label: "Herkomst immigranten 2022 (top 10, x1000)",
    source: "CBS Statline — Immigratie naar land van herkomst",
    sourceUrl: "https://www.cbs.nl/nl-nl/cijfers/detail/60032",
    landen: ["Oekraïne", "India", "Polen", "Syrië", "Turkije", "Duitsland", "Roemenië", "Bulgarije", "China", "Italië"],
    aantallen: [108.0, 27.0, 24.0, 22.0, 14.0, 12.0, 11.0, 9.0, 7.0, 6.5]
  },

  bestemmingEmigranten: {
    label: "Top bestemmingen Nederlandse emigranten (2022, x1000)",
    source: "CBS Statline — Emigratie naar land van bestemming",
    sourceUrl: "https://www.cbs.nl/nl-nl/cijfers/detail/60032",
    landen: ["België", "Duitsland", "Spanje", "Verenigd Koninkrijk", "Frankrijk", "VS", "Portugal", "Zwitserland", "Zweden", "Australië"],
    aantallen: [10.8, 9.2, 4.3, 3.6, 2.9, 2.4, 1.6, 1.3, 1.0, 0.9]
  },

  emigrantenProfiel: {
    label: "Profiel Nederlandse emigrant (2018-2023, hoofdpatronen)",
    source: "CBS — Emigratie naar leeftijd, opleiding; SCP 'Emigratie uit Nederland' (2018-2023)",
    sourceUrl: "https://www.scp.nl",
    facts: [
      { stat: "63%", label: "hoogopgeleid (HBO/WO) — terwijl landelijk gemiddelde ~36% is" },
      { stat: "25-44", label: "dominante leeftijdsgroep emigranten met Nederlandse achtergrond" },
      { stat: "62%", label: "vertrekt naar EU-lidstaat (België, Duitsland, Spanje voorop)" },
      { stat: "1 op 4", label: "geboren Nederlanders die zijn vertrokken keert nooit terug" }
    ]
  },

  emigratieMotieven: {
    label: "Belangrijkste motieven Nederlanders om te emigreren (% noemt)",
    source: "SCP / CBS / NIDI 'Emigratie en motieven' (2020, samengevat); Universiteit Maastricht onderzoek 2022",
    sourceUrl: "https://www.nidi.nl",
    motieven: [
      "Drukte / vol Nederland",
      "Klimaat / weer",
      "Belasting- en kostendruk",
      "Werk / carrière partner",
      "Politiek en bestuur",
      "Sociale cohesie / mentaliteit",
      "Onderwijs kinderen",
      "Veiligheid"
    ],
    percentages: [54, 51, 44, 41, 37, 33, 22, 18]
  },

  asielaanvragen: {
    label: "Eerste asielaanvragen per jaar (x1000)",
    source: "IND — Asylum Trends; Eurostat 'asyappctza'",
    sourceUrl: "https://www.ind.nl/over-ind/cijfers-publicaties",
    years: [2010, 2013, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023],
    values: [13.3, 14.4, 58.9, 31.6, 18.7, 24.0, 29.4, 19.1, 36.6, 48.0, 48.7]
  },

  /* ====================================================================
     4. SOCIALE COHESIE — vertrouwen
     ==================================================================== */
  vertrouwenInstellingen: {
    label: "Vertrouwen in instellingen (% (heel)veel vertrouwen, CBS)",
    source: "CBS — Sociale samenhang & welzijn; Belevingen 2012-2023",
    sourceUrl: "https://www.cbs.nl/nl-nl/cijfers/detail/82378ned",
    years: [2012, 2015, 2018, 2020, 2022, 2023],
    tweedeKamer: [36, 35, 41, 51, 32, 27],
    regering:    [33, 33, 41, 70, 36, 28],
    politie:     [60, 63, 67, 76, 64, 62]
  },

  sociaalContact: {
    label: "Mensen die zeggen niemand te hebben om problemen mee te bespreken (%)",
    source: "SCP 'De sociale staat van Nederland'; CBS Sociale samenhang",
    sourceUrl: "https://www.scp.nl",
    years: [1997, 2005, 2012, 2018, 2022],
    values: [7, 9, 10, 12, 14]
  },

  /* ====================================================================
     5. DEMOCRATIE & SOEVEREINITEIT
     ==================================================================== */
  euOverdracht: {
    label: "Mijlpalen overdracht bevoegdheden naar Brussel",
    source: "Europese Commissie; Kamerstukken; Raad van State 'Staat van de EU'",
    sourceUrl: "https://www.raadvanstate.nl",
    items: [
      { jaar: 1957, gebeurtenis: "Verdrag van Rome — EEG", impact: "Beleid voor kolen, staal, landbouw naar Brussel" },
      { jaar: 1986, gebeurtenis: "Europese Akte", impact: "Interne markt, einde unanimiteit op veel terreinen" },
      { jaar: 1992, gebeurtenis: "Verdrag van Maastricht", impact: "EU opgericht, monetair beleid en buitenlands beleid grotendeels naar EU" },
      { jaar: 2002, gebeurtenis: "Invoering euro", impact: "Gulden weg — geen eigen monetair beleid meer" },
      { jaar: 2005, gebeurtenis: "Nederlands referendum EU-Grondwet", impact: "61.5% NEE — toch in afgeslankte vorm doorgezet via Lissabon" },
      { jaar: 2007, gebeurtenis: "Verdrag van Lissabon", impact: "Geen referendum; bevoegdheden uitgebreid op justitie, asiel, buitenlands beleid" },
      { jaar: 2016, gebeurtenis: "Oekraïne-referendum", impact: "61% NEE — verdrag toch geratificeerd" },
      { jaar: 2018, gebeurtenis: "Raadgevend referendum afgeschaft", impact: "Burger heeft geen correctie-instrument meer" },
      { jaar: 2020, gebeurtenis: "EU Herstelfonds (NextGenEU) — €750 mld", impact: "Eerste keer EU-schulden namens lidstaten — Nederland is medeaansprakelijk" },
      { jaar: 2021, gebeurtenis: "EU Green Deal & Fit-for-55", impact: "Klimaat-, energie-, en stikstofbeleid Europees vastgelegd" }
    ]
  },

  nettoEUBijdrage: {
    label: "Netto Nederlandse afdracht aan de EU (€ mld)",
    source: "Europese Commissie — EU Budget; Ministerie van Financiën",
    sourceUrl: "https://ec.europa.eu/info/strategy/eu-budget_en",
    years: [2000, 2005, 2010, 2015, 2018, 2020, 2022, 2023],
    values: [1.5, 2.6, 1.9, 3.7, 3.4, 5.1, 6.5, 8.6]
  },

  referenda: {
    label: "Nationale referenda Nederland — uitkomst vs. politiek gevolg",
    items: [
      { jaar: 2005, onderwerp: "Europese Grondwet", uitslag: "61.5% NEE", gevolg: "Lissabon-verdrag bevat ~96% van zelfde inhoud, zonder referendum" },
      { jaar: 2016, onderwerp: "Associatieverdrag Oekraïne", uitslag: "61% NEE", gevolg: "Geratificeerd met cosmetische verklaring" },
      { jaar: 2018, onderwerp: "Sleepwet (Wiv)", uitslag: "49.4% NEE / 46.5% JA", gevolg: "Beperkte tekstuele aanpassingen, wet doorgevoerd" }
    ]
  },

  /* ====================================================================
     6. ENERGIE & KLIMAAT
     ==================================================================== */
  energieprijs: {
    label: "Gemiddelde jaarlijkse energierekening huishouden (€)",
    source: "CBS / NIBUD / PWC energiemarkt-onderzoek",
    sourceUrl: "https://www.cbs.nl/nl-nl/cijfers/detail/84672NED",
    years: [2015, 2018, 2020, 2021, 2022, 2023, 2024],
    values: [1700, 1750, 1800, 2160, 3500, 2400, 2100]
  },

  /* ====================================================================
     7. ZORG
     ==================================================================== */
  zorgpremie: {
    label: "Nominale premie basisverzekering (€ per jaar, gemiddeld)",
    source: "Vektis / Ministerie VWS",
    sourceUrl: "https://www.vektis.nl",
    years: [2006, 2010, 2015, 2018, 2020, 2022, 2024],
    values: [1030, 1192, 1158, 1308, 1414, 1521, 1772]
  },

  eigenRisico: {
    label: "Verplicht eigen risico zorgverzekering (€)",
    source: "Rijksoverheid / Zorginstituut Nederland",
    sourceUrl: "https://www.rijksoverheid.nl",
    years: [2008, 2012, 2014, 2016, 2024],
    values: [150, 220, 360, 385, 385]
  },

  /* ====================================================================
     8. ONDERWIJS — PISA
     ==================================================================== */
  pisa: {
    label: "PISA-scores 15-jarigen Nederland",
    source: "OESO PISA-rapporten 2003-2022",
    sourceUrl: "https://www.oecd.org/pisa/",
    jaren: [2003, 2006, 2009, 2012, 2015, 2018, 2022],
    leesvaardigheid: [513, 507, 508, 511, 503, 485, 459],
    wiskunde:        [538, 531, 526, 523, 512, 519, 493],
    natuurwetenschap:[524, 525, 522, 522, 509, 503, 488]
  },

  /* ====================================================================
     9. VEILIGHEID
     ==================================================================== */
  liquidaties: {
    label: "Liquidaties / criminele afrekeningen Nederland",
    source: "Politie / WODC; Justitiële Verkenningen",
    sourceUrl: "https://www.wodc.nl",
    years: [2000, 2005, 2010, 2015, 2018, 2020, 2022, 2023],
    values: [18, 22, 27, 28, 30, 23, 18, 21]
  },

  drugsBeslag: {
    label: "Cocaïne-inbeslagname haven Rotterdam (ton)",
    source: "Douane Nederland / OM",
    sourceUrl: "https://www.douane.nl",
    years: [2012, 2015, 2018, 2020, 2021, 2022, 2023],
    values: [9, 17, 19, 41, 73, 53, 60]
  },

  /* ====================================================================
     10. REGELDRUK
     ==================================================================== */
  regeldruk: {
    label: "Geldende wetten + AMvB's + ministeriële regelingen",
    source: "Wetten.overheid.nl; ATR jaarrapporten 2018-2023",
    sourceUrl: "https://www.atr-regeldruk.nl",
    years: [2000, 2005, 2010, 2015, 2020, 2023],
    values: [10100, 12000, 13800, 16200, 19700, 21900]
  },

  /* ====================================================================
     11. KOOPKRACHT
     ==================================================================== */
  koopkracht: {
    label: "Reële koopkracht-index particulier huishouden (2000=100)",
    source: "CBS — Welvaart in Nederland; NIBUD",
    sourceUrl: "https://www.cbs.nl",
    years: [2000, 2005, 2010, 2015, 2018, 2020, 2022, 2023],
    values: [100, 101, 99, 97, 100, 103, 97, 99]
  },

  /* ====================================================================
     KILLER NUMBERS — gebruikt in 'wall of numbers'
     ==================================================================== */
  killerNumbers: [
    { value: "+228.000", label: "netto migratie in 2022 — een record", source: "CBS, 2023" },
    { value: "€470.000", label: "gemiddelde huizenprijs 2024 (was €213k in 2013)", source: "CBS/Kadaster" },
    { value: "401.000", label: "woningen tekort in 2024", source: "ABF Research" },
    { value: "21%", label: "BTW (was 17.5% in 1992)", source: "Belastingdienst" },
    { value: "€1.772", label: "zorgpremie per jaar (was €1.030 in 2006)", source: "Vektis" },
    { value: "27%", label: "vertrouwen in Tweede Kamer (2023)", source: "CBS Belevingen" },
    { value: "61.5%", label: "NEE tegen EU-Grondwet (2005) — toch ingevoerd via Lissabon", source: "Kiesraad" },
    { value: "459", label: "PISA leesscore — laagste ooit voor NL", source: "OESO 2022" },
    { value: "€8.6 mld", label: "netto bijdrage aan EU in 2023 (was €1.5 mld in 2000)", source: "Min. Financiën" },
    { value: "26.6%", label: "inwoners met migratie­achtergrond (1972: 9.2%)", source: "CBS" },
    { value: "1 op 4", label: "geëmigreerde Nederlanders keert nooit terug", source: "SCP" },
    { value: "60 ton", label: "cocaïne onderschept in Rotterdam (2023)", source: "Douane / OM" }
  ]
};
