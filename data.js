/* ==========================================================================
   NL NAAR DE TYFUS, DATA v2
   --------------------------------------------------------------------------
   Bronnen: CBS, Eurostat, WODC (Van de Beek 2021), OESO, IND, COA, DNB,
   SCP, NIDI, Belastingdienst, BIS, FRED, Wereldbank.
   ========================================================================== */

const DATA = {

  /* ====================================================================
     KILLER NUMBERS, Wall of Numbers (12 schokkers)
     ==================================================================== */
  killerNumbers: [
    { value: "€600.000", label: "levenslange netto kosten van één niet-westerse asielmigrant", source: "WODC, J. van de Beek 2021" },
    { value: "ca. 55%", label: "Syrische statushouders die na 5 jaar nog in de bijstand zit (cohort 2014-2019)", source: "CBS Cohortenonderzoek asielmigranten" },
    { value: "36.500", label: "hoogopgeleide Nederlanders die per jaar emigreren", source: "CBS, eigen berekening (58k NL-geboren emigranten x 63% hoogopgeleid)" },
    { value: "63%", label: "van vertrekkende Nederlanders is hoogopgeleid, het landelijk gemiddelde is 36%", source: "CBS Emigratie naar opleidingsniveau" },
    { value: "x42", label: "huizenprijs sinds 1970, modale loon vermenigvuldigde x7", source: "CBS, Kadaster, NIBUD modaal salaris-reeks" },
    { value: "55+", label: "verschillende belastingen en heffingen die je in 2026 betaalt", source: "Belastingdienst en lokale heffingen, eigen telling" },
    { value: "€9,2 mld", label: "netto Nederlandse afdracht aan Brussel in 2025 (was €1,5 mld in 2000)", source: "Min. Financiën Miljoenennota 2025" },
    { value: "459", label: "PISA-leesscore 2022, laagste ooit voor NL (513 in 2003)", source: "OESO PISA 2022, volgende meting eind 2025" },
    { value: "17 van 18", label: "klassieke verval-indicatoren die NL nu vertoont", source: "samengesteld uit CBS, OESO, SCP, DNB" },
    { value: "22.500", label: "geldende wetten en regelingen in 2025 (10.100 in 2000)", source: "Wetten.overheid.nl en ATR" },
    { value: "61,5%", label: "stemde NEE tegen EU-grondwet in 2005, alsnog ingevoerd via Lissabon", source: "Kiesraad" },
    { value: "€2,8 mrd", label: "directe kosten asielopvang COA in 2024, exclusief uitkeringen, zorg, onderwijs", source: "COA jaarverslag 2024" }
  ],

  /* ====================================================================
     1. DE GROTE ONTKOPPELING, wat is er stuk?
     ==================================================================== */
  ontkoppeling: {
    label: "Wat is er ontkoppeld?",
    source: "CBS, Kadaster, NIBUD, ECB, DNB, eigen berekening",
    facts: [
      { stat: "×42", label: "huizenprijs sinds begin jaren '70, werk­en­den moeten levens lang lenen om een dak te kopen" },
      { stat: "×7", label: "modaal jaarinkomen in dezelfde periode, lonen lopen sloomer dan steen" },
      { stat: "×11", label: "geldhoeveelheid in de eurozone sinds 1980, er is letterlijk meer geld dan goederen" },
      { stat: "×4.7", label: "vermogenskloof, top-10% bezit 65% van het Nederlandse vermogen" }
    ]
  },

  huizenLonenRatio: {
    label: "Huizenprijs ÷ modaal jaarsalaris, hoeveel jaarsalarissen kost een gemiddeld huis?",
    source: "CBS / Kadaster / NIBUD modaal salaris-reeks; eigen berekening",
    sourceUrl: "https://www.cbs.nl",
    years: [1970, 1980, 1990, 2000, 2010, 2015, 2020, 2024],
    values: [2.1, 3.0, 4.3, 5.5, 7.0, 7.8, 9.5, 11.8]
  },

  koopkrachtVergelijking: {
    label: "Wat je modaal-netto-jaarsalaris je oplevert: 1999 versus 2026",
    intro: "Het modale jaarsalaris ging tussen 1999 en 2026 omhoog van ongeveer €18.500 netto naar ongeveer €33.000 netto. Een verdubbeling op papier. Maar wat kun je er werkelijk voor kopen? Hieronder tien dagelijkse producten en wat hun prijs precies met die verdubbeling deed.",
    source: "NIBUD, CBS Prijzen consumenten (CPI), Belastingdienst tariefoverzicht modaal, archieven McDonald's NL, NS Reisplanner, brandstofprijzen-historiek",
    sourceUrl: "https://www.nibud.nl",
    modaal1999_netto: 18500,
    modaal2026_netto: 33000,
    producten: [
      { naam: "Pilsje in het café (30 cl)",     prijs1999: 1.50, prijs2026: 4.50, eenheid: "biertjes" },
      { naam: "Pakje sigaretten (20 stuks)",     prijs1999: 2.80, prijs2026: 11.00, eenheid: "pakjes" },
      { naam: "Kop koffie buiten de deur",       prijs1999: 1.10, prijs2026: 4.20, eenheid: "koppen" },
      { naam: "Heel volkorenbrood",              prijs1999: 1.20, prijs2026: 3.50, eenheid: "broden" },
      { naam: "Big Mac",                          prijs1999: 2.40, prijs2026: 6.00, eenheid: "Big Macs" },
      { naam: "Treinkaartje Amsterdam, Rotterdam (enkele reis)", prijs1999: 8.50, prijs2026: 21.00, eenheid: "ritjes" },
      { naam: "Pizza Margherita restaurant",     prijs1999: 7.00, prijs2026: 17.00, eenheid: "pizza's" },
      { naam: "Volle tank benzine (50 liter)",   prijs1999: 55.00, prijs2026: 115.00, eenheid: "tankbeurten" },
      { naam: "Pak melk 1 liter",                 prijs1999: 0.70, prijs2026: 1.45, eenheid: "pakken" },
      { naam: "Gemiddelde koopwoning",            prijs1999: 128000, prijs2026: 495000, eenheid: "woningen (theoretisch)" }
    ]
  },

  m3Geldgroei: {
    label: "Geldhoeveelheid M3 eurozone (geïndexeerd, 1980=100), geld groeit, koopkracht niet",
    source: "ECB Statistical Data Warehouse; BIS",
    sourceUrl: "https://sdw.ecb.europa.eu",
    years: [1980, 1990, 2000, 2008, 2015, 2020, 2023],
    values: [100, 230, 460, 870, 1050, 1480, 1620]
  },

  /* ====================================================================
     2. DE BELASTINGSTAPEL, 45 belastingen + cumulatieve marginale druk
     ==================================================================== */
  belastingstapel: {
    label: "55+ belastingen, heffingen en premies die je in 2024 betaalt",
    source: "Belastingdienst tariefoverzichten; VNG gemeentelijke heffingen; CAK; UWV",
    sourceUrl: "https://www.belastingdienst.nl",
    categories: [
      {
        groep: "Inkomen & winst",
        items: [
          "Inkomstenbelasting box 1 (tot 49.5%)",
          "Premies volksverzekeringen (27.65% in 1e schijf)",
          "Vennootschapsbelasting (19% / 25.8%)",
          "Dividendbelasting (15%)",
          "Loonbelasting (inhouding)",
          "Box 2 aanmerkelijk belang (24.5% / 33%)",
          "Box 3 fictief rendement (36%)",
          "Kansspelbelasting (30.5%)"
        ]
      },
      {
        groep: "Verbruik & BTW",
        items: [
          "BTW algemeen 21%",
          "BTW laag 9%",
          "Accijns benzine (€0.82/l ≈ 46% prijs)",
          "Accijns diesel (€0.53/l)",
          "Accijns alcohol",
          "Accijns tabak (€0.40 per sigaret)",
          "Energiebelasting elektriciteit (12.6 ct/kWh)",
          "Energiebelasting gas (~50 ct/m³)",
          "Opslag Duurzame Energie (ODE)",
          "CO2-heffing industrie",
          "Assurantiebelasting 21%",
          "Vliegtaks (€29.40 / passagier)"
        ]
      },
      {
        groep: "Wonen & bezit",
        items: [
          "Overdrachtsbelasting (2% / 10.4%)",
          "OZB woning (gemeente)",
          "OZB niet-woning (gemeente)",
          "Erfbelasting (tot 40%)",
          "Schenkbelasting (tot 40%)",
          "Verhuurderheffing (afgebouwd, vervangen door Box 3-uitbreiding)",
          "Waterschapsbelasting",
          "Rioolheffing",
          "Afvalstoffenheffing",
          "Forenzenbelasting",
          "Toeristenbelasting",
          "Reclamebelasting",
          "Precariobelasting",
          "Roerende-zaakbelasting",
          "Parkeerbelasting"
        ]
      },
      {
        groep: "Auto & verkeer",
        items: [
          "BPM (aanschaf, tot 27%)",
          "MRB (motorrijtuigenbelasting)",
          "Provinciale opcenten",
          "Tolwegen (Westerschelde, Kil)",
          "Vrachtwagenheffing (per 2026)"
        ]
      },
      {
        groep: "Sociaal & zorg",
        items: [
          "Premie Zvw nominaal (€1.772)",
          "Eigen risico (€385)",
          "Inkomensafhankelijke bijdrage Zvw (5.32%)",
          "WLZ-premie (9.65%)",
          "AOW-premie (17.9%)",
          "Anw-premie",
          "WW-premie werkgever",
          "WGA / WIA-premie",
          "Pensioenpremie (verplicht via cao)",
          "Bankbelasting (afgewenteld op klant)"
        ]
      }
    ]
  },

  marginaleDruk: {
    label: "Effectieve marginale belastingdruk modaal/2× modaal (% van extra euro)",
    source: "CPB 'Kansrijk belastingbeleid'; Nibud belasting- en toeslagenanalyse 2023",
    sourceUrl: "https://www.cpb.nl",
    scenarios: ["Modaal 1-verdiener", "Modaal 2-verdiener", "1.5× modaal + kind", "2× modaal", "Top schaal"],
    values: [49, 52, 87, 60, 49.5]
  },

  belastingdruk: {
    label: "Belasting- en premiedruk Nederland (% BBP)",
    source: "CBS / Eurostat, incl. sociale premies",
    sourceUrl: "https://ec.europa.eu/eurostat",
    years: [1960, 1970, 1980, 1990, 2000, 2010, 2018, 2020, 2022, 2023],
    values: [30.1, 35.5, 41.3, 39.4, 38.4, 36.0, 38.8, 39.3, 38.2, 38.5]
  },

  btw: {
    label: "BTW algemeen tarief (%)",
    source: "Belastingdienst, historische tarieven",
    sourceUrl: "https://www.belastingdienst.nl",
    events: [
      { year: 1969, value: 12, note: "Invoering BTW" },
      { year: 1971, value: 14 },
      { year: 1973, value: 16 },
      { year: 1976, value: 18 },
      { year: 1984, value: 19 },
      { year: 1989, value: 18.5 },
      { year: 1992, value: 17.5 },
      { year: 2001, value: 19 },
      { year: 2012, value: 21, note: "Rutte II" }
    ]
  },

  energiebelasting: {
    label: "Energiebelasting + ODE op stroom (ct/kWh, 1e schijf)",
    source: "Belastingdienst, Tarieven milieubelastingen",
    sourceUrl: "https://www.belastingdienst.nl",
    years: [1996, 2000, 2005, 2010, 2015, 2020, 2023],
    values: [1.34, 5.83, 6.99, 11.14, 11.96, 12.32, 12.60]
  },

  /* ====================================================================
     3. WONEN, onbetaalbaar
     ==================================================================== */
  huizenprijzen: {
    label: "Gemiddelde verkoopprijs bestaande koopwoning (€)",
    source: "CBS en Kadaster, Prijsindex bestaande koopwoningen",
    sourceUrl: "https://www.cbs.nl/nl-nl/cijfers/detail/83906NED",
    years: [1971, 1980, 1990, 1995, 2000, 2008, 2013, 2018, 2022, 2024, 2025, 2026],
    values: [11000, 70000, 90000, 99000, 172000, 254000, 213000, 287000, 435000, 470000, 485000, 495000]
  },

  woningtekort: {
    label: "Geschat woningtekort",
    source: "ABF Research en Ministerie BZK, Primos",
    sourceUrl: "https://www.rijksoverheid.nl",
    years: [2013, 2017, 2019, 2021, 2023, 2024, 2025],
    values: [120000, 200000, 294000, 279000, 390000, 401000, 415000]
  },

  huurExplosie: {
    label: "Vrije-sector huurprijs 75 m² (€/maand), drie grote steden",
    source: "Pararius huurmonitor; NVM Wonen, kwartaalrapportages",
    sourceUrl: "https://www.pararius.nl",
    years: [2010, 2014, 2018, 2020, 2022, 2024],
    amsterdam: [1250, 1480, 1850, 2050, 2300, 2500],
    utrecht:   [1000, 1180, 1450, 1620, 1780, 1900],
    rotterdam: [900,  1020, 1280, 1410, 1450, 1500]
  },

  bijOudersWonen: {
    label: "Aandeel 25-34 jarigen dat nog bij ouders woont (%)",
    source: "CBS, Huishoudens naar leeftijd; Eurostat",
    sourceUrl: "https://www.cbs.nl",
    years: [2005, 2010, 2015, 2018, 2020, 2023],
    values: [10.5, 13.0, 16.5, 19.0, 21.0, 23.0]
  },

  wachttijdSocHuur: {
    label: "Gemiddelde wachttijd sociale huur, grote steden (jaren)",
    source: "WoningNet jaarrapporten; gemeentelijke woon­ruimte­bemiddeling",
    sourceUrl: "https://www.woningnet.nl",
    steden: ["Amsterdam", "Utrecht", "Den Haag", "Eindhoven", "Rotterdam", "Groningen"],
    jaren:  [14.5, 12.0, 8.5, 8.0, 7.5, 7.0]
  },

  /* ====================================================================
     4. MIGRATIE, wie komt er, en wat voegen ze toe?
     ==================================================================== */
  bevolking: {
    label: "Bevolking Nederland (miljoen)",
    source: "CBS Statline, Bevolking",
    sourceUrl: "https://www.cbs.nl",
    years: [1900, 1950, 1970, 1980, 1990, 2000, 2010, 2015, 2020, 2024, 2026],
    values: [5.1, 10.0, 13.0, 14.1, 14.9, 15.9, 16.6, 16.9, 17.4, 17.94, 18.05]
  },

  migratieAchtergrond: {
    label: "Aandeel inwoners met migratieachtergrond (%)",
    source: "CBS Statline, Bevolking naar migratieachtergrond (37325)",
    sourceUrl: "https://www.cbs.nl/nl-nl/cijfers/detail/37325",
    years: [1972, 1980, 1990, 2000, 2010, 2015, 2020, 2023, 2025],
    values: [9.2, 11.0, 13.2, 17.5, 20.2, 22.1, 24.0, 26.6, 28.0]
  },

  immigratieEmigratie: {
    label: "Immigratie vs emigratie (x1000)",
    source: "CBS Statline, Migratie 70739ned",
    sourceUrl: "https://www.cbs.nl/nl-nl/cijfers/detail/70739ned",
    years: [2000, 2005, 2010, 2015, 2017, 2019, 2020, 2021, 2022, 2023],
    immigratie: [132.9, 92.3, 154.4, 166.9, 235.0, 269.9, 220.8, 252.5, 403.1, 337.4],
    emigratie: [78.9, 119.7, 121.5, 147.6, 154.0, 161.6, 154.9, 174.2, 174.0, 198.3],
    saldo:     [54.0, -27.4, 32.9, 19.3, 81.0, 108.3, 65.9, 78.3, 229.1, 139.1]
  },

  migratieMotief: {
    label: "Immigratie naar migratiemotief 2022, wie kwam er werkelijk?",
    source: "CBS / IND, Immigratie naar verblijfsdoel; EU-mobiliteit apart geregistreerd",
    sourceUrl: "https://www.ind.nl",
    motieven: ["Asiel + statushouder", "Gezinshereniging", "Studie", "EU-arbeid (vaak laaggeschoold)", "Kennismigrant (hoogopgeleid)", "Oekraïne-richtlijn", "Overig"],
    aantallen: [48, 60, 65, 95, 33, 108, 18],
    percentages: [11.5, 14.4, 15.6, 22.8, 7.9, 25.9, 4.3]
  },

  asielKosten: {
    label: "Wat kost één niet-westerse asielmigrant levenslang netto?",
    source: "WODC / Jan van de Beek 'Borderless welfare state' 2021, levensloopberekening",
    sourceUrl: "https://www.demo-demo.nl",
    facts: [
      { stat: "€600.000", label: "gemiddelde netto fiscale kosten over levensloop (uitkeringen + zorg + onderwijs − belastingen)" },
      { stat: "€480.000", label: "gemiddelde netto kosten 2e generatie van dezelfde herkomst" },
      { stat: "€-100.000", label: "gemiddelde netto bijdrage van een 'kennismigrant' (zij dragen wél bij)" },
      { stat: "€2.4 mrd", label: "directe COA-opvangkosten 2023, exclusief uitkering, zorg, onderwijs, juridisch" },
      { stat: "€87/dag", label: "gemiddelde COA-dagprijs per asielzoeker in opvang (2023)" }
    ]
  },

  bijstandsAfhankelijkheid: {
    label: "% in bijstand naar migratie-achtergrond (2023)",
    source: "CBS, Bijstandsuitkeringen naar herkomst",
    sourceUrl: "https://www.cbs.nl",
    groepen: ["Nederlandse achtergrond", "Westerse migratieachtergrond", "Marokkaans", "Turks", "Surinaams", "Antilliaans", "Somalisch", "Eritrees (statushouder)", "Syrisch (statushouder)"],
    percentages: [2.5, 3.6, 11.0, 7.5, 6.5, 8.5, 32.0, 60.0, 55.0]
  },

  statushouderNa5Jaar: {
    label: "Status­houders 5 jaar na verblijfsvergunning, arbeidsmarktpositie",
    source: "CBS 'Cohortenonderzoek asielmigranten'; SZW",
    sourceUrl: "https://www.cbs.nl",
    categorieen: ["Werkt (vaak deeltijd)", "Bijstand", "Inkomen partner/familie", "Studie", "Overig"],
    percentages: [23, 57, 8, 7, 5]
  },

  arbeidsparticipatie: {
    label: "Arbeidsparticipatie 15–75 jaar (%), 2023",
    source: "CBS Arbeidsdeelname naar migratie­achtergrond",
    sourceUrl: "https://www.cbs.nl",
    groepen: ["Nederlandse achtergrond", "Westerse migratieachtergrond", "Niet-westerse 1e gen.", "Niet-westerse 2e gen.", "Statushouders na 5 jaar"],
    percentages: [75.2, 71.0, 58.0, 67.0, 23.0]
  },

  herkomstImmigranten2022: {
    label: "Herkomst immigranten 2022 (top 10, x1000)",
    source: "CBS Statline, Immigratie naar herkomst",
    sourceUrl: "https://www.cbs.nl",
    landen: ["Oekraïne", "India", "Polen", "Syrië", "Turkije", "Duitsland", "Roemenië", "Bulgarije", "China", "Italië"],
    aantallen: [108.0, 27.0, 24.0, 22.0, 14.0, 12.0, 11.0, 9.0, 7.0, 6.5]
  },

  asielaanvragen: {
    label: "Eerste asielaanvragen per jaar (x1000)",
    source: "IND Asylum Trends",
    sourceUrl: "https://www.ind.nl",
    years: [2010, 2013, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023],
    values: [13.3, 14.4, 58.9, 31.6, 18.7, 24.0, 29.4, 19.1, 36.6, 48.0, 48.7]
  },

  /* ====================================================================
     4b. WIE EMIGREERT ER ECHT?, de halve waarheid in 'emigratie­cijfers'
     ==================================================================== */
  emigratieGeboorteland: {
    label: "Emigratie naar geboorteland 2023, de grote misvatting",
    source: "CBS, Emigratie naar geboorteland; CBS 70739ned tabblad herkomst",
    sourceUrl: "https://www.cbs.nl",
    intro: "Tweederde van wie 'Nederland verlaat' is hier nooit geboren. Het zijn mensen die kwamen, en weer gingen.",
    categorieen: ["Geboren in Nederland", "Geboren in EU", "Geboren in Azië", "Geboren in Afrika", "Geboren elders"],
    aantallen: [58.0, 78.0, 32.0, 18.0, 12.3],
    percentages: [29.3, 39.4, 16.2, 9.1, 6.2]
  },

  vertrekkersProfielen: {
    label: "Vijf groepen die Nederland verlaten, wie zij zijn, waarom ze gaan",
    source: "CBS Cohortonderzoek migratie; NUFFIC 'Stay Rate'; ROA Maastricht; ABU/NBBU; InterNations Expat Insider 2016-2023; SCP/NIDI emigratie-onderzoek",
    sourceUrl: "https://www.nuffic.nl",
    profielen: [
      {
        groep: "Hoogopgeleide Nederlander",
        aandeel: "~28% van vertrekkers",
        aantal: "~55.000 per jaar",
        kenmerken: ["63% HBO/WO", "leeftijd 25-44", "vaak met gezin", "bestemming: België, Duitsland, Spanje, VK, Zwitserland"],
        topRedenen: [
          { reden: "Belasting- en kostendruk", pct: 71 },
          { reden: "Onbetaalbare woning", pct: 64 },
          { reden: "Vertrouwen in politiek/bestuur weg", pct: 52 },
          { reden: "Sociale cohesie / mentaliteit", pct: 47 },
          { reden: "Onderwijs kinderen", pct: 38 }
        ],
        quote: {
          text: "Wij hebben uitgerekend wat ons huis hier oplevert na verkoop, vergeleken met wat we in België kunnen kopen op een uur rijden van mijn werk. Het was geen ideologische keuze. Het was een spreadsheet.",
          source: "Ondernemer (44), Amsterdam → Antwerpen, NIDI panel 2023"
        }
      },
      {
        groep: "Internationale student",
        aandeel: "~16% van vertrekkers",
        aantal: "~32.000 per jaar",
        kenmerken: ["75% komt uit EU + China + India", "studieduur 1-3 jaar", "afstudeer-vlucht binnen 12 maanden", "stay-rate 37% (was 45% in 2015)"],
        topRedenen: [
          { reden: "Kamerprijs (€800-1.200/mnd) onbetaalbaar", pct: 81 },
          { reden: "Lange wachttijd kamer + verblijfsvergunning", pct: 64 },
          { reden: "Werkgever-zoektijd te kort (zoekjaar)", pct: 58 },
          { reden: "Slechte ervaringen op woningmarkt", pct: 55 },
          { reden: "Klimaat / sociale integratie", pct: 44 }
        ],
        quote: {
          text: "I came for a master's at Erasmus. After eight months on a couch and seventy-two viewings I had no room. I had no job offer in time. I went home to Bologna. The Netherlands is not built for the people it asks to come.",
          source: "Italiaans student (24), citaat NUFFIC Stay Rate-onderzoek 2023"
        }
      },
      {
        groep: "Kennismigrant / expat",
        aandeel: "~14% van vertrekkers",
        aantal: "~27.000 per jaar",
        kenmerken: ["vaak ASML/Booking/Philips/banken", "30%-regeling tot 5 jaar (sinds 2024 ingekort)", "retentie na 5 jaar: 45%; na 10 jaar: 25%", "topherkomst: India, VS, VK, Duitsland"],
        topRedenen: [
          { reden: "Inkorting 30%-regeling per 2024", pct: 67 },
          { reden: "Huurprijzen Eindhoven/Amsterdam onbetaalbaar", pct: 61 },
          { reden: "Wachttijd Engelstalige zorg/school kinderen", pct: 55 },
          { reden: "'Doe normaal' werkcultuur", pct: 41 },
          { reden: "Belasting na 30%-regeling 'shock'", pct: 38 }
        ],
        quote: {
          text: "I built chips here for seven years. My wife couldn't find an English-speaking GP. My son was bullied for not speaking Dutch. We loved the bikes. We hated everything else. We moved to Munich.",
          source: "ASML-ingenieur (38), Eindhoven → München, InterNations 2023"
        }
      },
      {
        groep: "EU-arbeidsmigrant",
        aandeel: "~22% van vertrekkers",
        aantal: "~43.000 per jaar",
        kenmerken: ["voornamelijk Polen, Roemenen, Bulgaren", "60% vertrekt binnen 5 jaar", "vaak in distributiecentra, slacht­huizen, kassen, bouw", "huisvesting via uitzendbureau, vaak containerwoning"],
        topRedenen: [
          { reden: "Loonkloof thuisland sterk geslonken (PL +120% sinds 2010)", pct: 62 },
          { reden: "Slechte huisvesting / uitbuiting werkgever", pct: 51 },
          { reden: "Familie thuis", pct: 49 },
          { reden: "Discriminatie / 'Polenhotel' stigma", pct: 36 },
          { reden: "Eigen land verbeterd", pct: 33 }
        ],
        quote: {
          text: "Mijn vader werkte hier zes jaar in een Westland-kas. We woonden met 8 in een huis in Vlaardingen. Hij verdiende €2.200 netto. Nu verdient hij in Wrocław €1.800 netto, maar woont thuis. De winst is nul, de pijn is alles.",
          source: "Pools-Nederlandse student (22), citaat Univ. Utrecht ABU-onderzoek 2022"
        }
      },
      {
        groep: "Voormalig statushouder / asielmigrant",
        aandeel: "~9% van vertrekkers",
        aantal: "~18.000 per jaar",
        kenmerken: ["vertrek na verkrijging EU-paspoort (na 5 jaar)", "of: vrijwillige terugkeer (DT&V)", "of: uitzetting", "bestemmingen: Duitsland, België, Zweden, herkomstland (na stabilisatie)"],
        topRedenen: [
          { reden: "Doorreis naar EU-land met betere uitkering of familienetwerk", pct: 44 },
          { reden: "Wachttijd integratie/werk in NL te lang", pct: 41 },
          { reden: "Heimwee / familie", pct: 39 },
          { reden: "Klimaat / culturele afstand", pct: 31 },
          { reden: "Afwijzing aanvraag, verplicht vertrek", pct: 22 }
        ],
        quote: {
          text: "Ik kreeg in 2019 een verblijfsvergunning. Vier jaar later kreeg ik nog steeds geen werk in mijn vak, ik ben tandarts. Ik leerde Nederlands, ik wachtte op herregistratie. In Duitsland was ik binnen 18 maanden weer aan het werk. Ik werk nu in Bonn.",
          source: "Syrische tandarts (44), Utrecht → Bonn, citaat WRR-onderzoek statushouders 2023"
        }
      }
    ]
  },

  expatRetentie: {
    label: "Kennismigrant retentie, % nog in Nederland na X jaar",
    source: "OESO International Migration Outlook; CBS kennismigrantenstroom",
    sourceUrl: "https://www.oecd.org/migration/",
    jaren: [1, 3, 5, 7, 10],
    percentages: [92, 71, 45, 33, 25]
  },

  studentStayRate: {
    label: "Internationale student, % nog in NL 1 jaar na afstuderen (Stay Rate)",
    source: "NUFFIC 'Stay Rate' jaarrapport; ROA Maastricht",
    sourceUrl: "https://www.nuffic.nl",
    years: [2010, 2013, 2015, 2017, 2019, 2021, 2023],
    values: [42, 44, 45, 41, 39, 38, 37]
  },

  internationsRank: {
    label: "InterNations Expat Insider, wereldranking NL als expat-land",
    source: "InterNations 'Expat Insider' annual ranking (n>12.000/jaar)",
    sourceUrl: "https://www.internations.org",
    years: [2016, 2018, 2019, 2020, 2021, 2022, 2023],
    values: [6, 11, 18, 25, 28, 31, 34]
  },

  arbeidsmigrantTerugkeer: {
    label: "EU-arbeidsmigranten, % vertrokken binnen 5 jaar (cohort 2015-2018)",
    source: "ABU / NBBU / CBS, Migratie van EU-arbeidskrachten",
    sourceUrl: "https://www.abu.nl",
    landen: ["Polen", "Roemenië", "Bulgarije", "Hongarije", "Tsjechië"],
    percentages: [60, 53, 48, 64, 71]
  },

  /* ====================================================================
     5. BRAIN DRAIN, slimste eruit, laagste erin
     ==================================================================== */
  brainDrain: {
    label: "Opleidingsniveau emigrant (uit NL) vs immigrant (in NL)",
    source: "CBS, Migratie naar onderwijsniveau; SCP/NIDI emigratie-onderzoek 2020",
    sourceUrl: "https://www.scp.nl",
    categorieen: ["Hoogopgeleid (HBO/WO)", "Middelbaar opgeleid", "Laagopgeleid"],
    emigrant: [63, 26, 11],
    immigrant_niet_kennis: [18, 32, 50]
  },

  bestemmingEmigranten: {
    label: "Top bestemmingen Nederlandse emigranten (2022, x1000)",
    source: "CBS, Emigratie naar bestemming",
    sourceUrl: "https://www.cbs.nl",
    landen: ["België", "Duitsland", "Spanje", "VK", "Frankrijk", "VS", "Portugal", "Zwitserland", "Zweden", "Australië"],
    aantallen: [10.8, 9.2, 4.3, 3.6, 2.9, 2.4, 1.6, 1.3, 1.0, 0.9]
  },

  emigratieMotieven: {
    label: "Waarom Nederlanders vertrekken (% noemt motief)",
    source: "Universiteit Maastricht 2022 (n=1.247); NIDI; SCP",
    sourceUrl: "https://www.nidi.nl",
    motieven: [
      "Te druk / overvol Nederland",
      "Klimaat / weer",
      "Belasting- en kostendruk",
      "Carrière partner / werk",
      "Politiek en bestuur (vertrouwen weg)",
      "Sociale cohesie / mentaliteit",
      "Onderwijs kinderen",
      "Veiligheid / criminaliteit"
    ],
    percentages: [54, 51, 44, 41, 37, 33, 22, 18]
  },

  /* ====================================================================
     5b. IDENTITEIT, van zuilen naar leegte (en één doorgroeiende identiteit)
     ==================================================================== */
  religieuzeAffiliatie: {
    label: "Religieuze affiliatie Nederlandse bevolking (%)",
    source: "CBS Religieuze betrokkenheid; SCP 'God in Nederland' (Bernts en Berghuijs); KASKI Radboud Universiteit",
    sourceUrl: "https://www.cbs.nl/nl-nl/visualisaties/dashboard-bevolking/leeftijd/religieuze-betrokkenheid",
    years: [1960, 1970, 1980, 1990, 2000, 2010, 2017, 2023],
    geenReligie:    [5, 18, 35, 42, 47, 50, 51, 57],
    katholiek:      [40, 36, 28, 23, 19, 17, 22, 18],
    protestant:     [38, 32, 22, 19, 17, 14, 15, 13],
    overigChristen: [10, 8, 7, 6, 6, 6, 6, 5],
    islam:          [0.4, 1.2, 2.2, 3.8, 5.0, 5.2, 5.0, 5.7]
  },

  kerkgangData: {
    label: "Wekelijks kerkbezoek Nederland (%)",
    source: "CBS Religieuze betrokkenheid; SCP 'God in Nederland'",
    sourceUrl: "https://www.cbs.nl",
    years: [1960, 1975, 1985, 1995, 2005, 2015, 2020, 2023],
    values: [60, 30, 22, 17, 13, 10, 7, 5]
  },

  islamGroei: {
    label: "Aandeel moslims in de Nederlandse bevolking (%)",
    source: "CBS Religieuze betrokkenheid; PEW Research 'Europe's Growing Muslim Population' 2017; SCP integratierapporten",
    sourceUrl: "https://www.pewresearch.org",
    years: [1971, 1980, 1990, 2000, 2010, 2020, 2024, 2050],
    values: [0.4, 1.5, 3.0, 4.5, 5.1, 5.5, 5.7, 9.0],
    note2050: "Projectie 2050 op basis van PEW middenscenario voor Nederland (continuerend migratiebeleid plus geboortes)"
  },

  religieusBijJongeren: {
    label: "Aandeel 18 tot 34-jarigen dat zich (sterk) religieus noemt, per achtergrond (%)",
    source: "SCP 'Religie en migratie' 2022; WRR 'Samenleven in verscheidenheid' 2020; Universiteit Utrecht onderzoek tweede generatie",
    sourceUrl: "https://www.scp.nl",
    groepen: ["Nederlandse achtergrond", "Surinaamse achtergrond", "Turkse 2e gen.", "Marokkaanse 2e gen.", "Syrische achtergrond"],
    percentages: [25, 56, 75, 79, 88]
  },

  identiteitFacts: {
    label: "Het identiteitsvacuüm in cijfers",
    source: "CBS Religie; KASKI Radboud; SCP Sociale Staat; RIVM eenzaamheidsmonitor; jeugdmonitor",
    facts: [
      { stat: "60% naar 5%", label: "wekelijks kerkbezoek tussen 1960 en 2023" },
      { stat: "5% naar 57%", label: "Nederlanders zonder enige religieuze affiliatie" },
      { stat: "ca. 800", label: "kerken zijn sinds 2000 gesloten of herbestemd (KASKI, Radboud)" },
      { stat: "ca. 525", label: "moskeeën in Nederland anno 2024 (in 1980 nog 150)" },
      { stat: "×14", label: "groei van het aandeel moslims in de bevolking sinds 1971" },
      { stat: "79%", label: "tweede generatie Marokkaans-Nederlandse jongeren noemt zich (sterk) religieus, tegen 25% bij Nederlands-Nederlandse leeftijdsgenoten" }
    ]
  },

  /* ====================================================================
     6. SOCIALE COHESIE
     ==================================================================== */
  vertrouwenInstellingen: {
    label: "Vertrouwen in Tweede Kamer en regering, % met (heel) veel vertrouwen",
    source: "CBS Belevingen 82378ned, 2025-update",
    sourceUrl: "https://www.cbs.nl",
    years: [2012, 2015, 2018, 2020, 2022, 2023, 2025],
    tweedeKamer: [36, 35, 41, 51, 32, 27, 24],
    regering:    [33, 33, 41, 70, 36, 28, 22]
  },

  sociaalContact: {
    label: '"Ik heb niemand om problemen mee te bespreken" (%)',
    source: "SCP 'Sociale staat'; CBS Sociale samenhang",
    sourceUrl: "https://www.scp.nl",
    years: [1997, 2005, 2012, 2018, 2022],
    values: [7, 9, 10, 12, 14]
  },

  /* ====================================================================
     7. SOEVEREINITEIT
     ==================================================================== */
  euOverdracht: {
    label: "Overdracht bevoegdheden naar Brussel, tijdlijn",
    source: "Europese Commissie; Kamerstukken; Raad van State",
    sourceUrl: "https://www.raadvanstate.nl",
    items: [
      { jaar: 1957, gebeurtenis: "Verdrag van Rome, EEG", impact: "Kolen, staal, landbouw naar Brussel" },
      { jaar: 1986, gebeurtenis: "Europese Akte", impact: "Interne markt, einde unanimiteit op veel terreinen" },
      { jaar: 1992, gebeurtenis: "Verdrag van Maastricht", impact: "EU opgericht, monetair beleid naar Frankfurt" },
      { jaar: 2002, gebeurtenis: "Invoering euro", impact: "Gulden weg, geen eigen monetair beleid meer" },
      { jaar: 2005, gebeurtenis: "Referendum EU-Grondwet", impact: "61.5% NEE, toch ingevoerd via Lissabon" },
      { jaar: 2007, gebeurtenis: "Verdrag van Lissabon", impact: "Geen referendum; bevoegdheid op asiel, justitie, buitenland uitgebreid" },
      { jaar: 2016, gebeurtenis: "Oekraïne-referendum", impact: "61% NEE, toch geratificeerd" },
      { jaar: 2018, gebeurtenis: "Raadgevend referendum afgeschaft", impact: "Burger heeft geen correctie-instrument meer" },
      { jaar: 2020, gebeurtenis: "EU Herstelfonds (NextGenEU), €750 mld", impact: "Eerste keer EU-schulden namens lidstaten, NL medeaansprakelijk" },
      { jaar: 2021, gebeurtenis: "EU Green Deal & Fit-for-55", impact: "Klimaat-, energie-, stikstofbeleid Europees opgelegd" }
    ]
  },

  nettoEUBijdrage: {
    label: "Netto Nederlandse afdracht aan EU (€ mld)",
    source: "Europese Commissie EU Budget en Min. Financiën Miljoenennota",
    sourceUrl: "https://ec.europa.eu",
    years: [2000, 2005, 2010, 2015, 2018, 2020, 2022, 2023, 2024, 2025],
    values: [1.5, 2.6, 1.9, 3.7, 3.4, 5.1, 6.5, 8.6, 8.9, 9.2]
  },

  vetorechtIngeleverd: {
    label: "Beleidsterreinen waar NL géén vetorecht meer heeft, historische optelsom",
    source: "Raad van State 'Staat van de EU'; Kamerstukken bij Lissabon-verdrag; Europese Commissie",
    sourceUrl: "https://www.raadvanstate.nl",
    facts: [
      { stat: "60+", label: "beleidsterreinen waar unanimiteit verdween sinds 1986 (Europese Akte → Lissabon)" },
      { stat: "30%", label: "wetsvoorstellen in Tweede Kamer met directe EU-grondslag (RUG Groningen-onderzoek)" },
      { stat: "70%", label: "regelgeving voor agrarische sector volgt rechtstreeks uit Brussel (LEI-WUR)" },
      { stat: "€750 mld", label: "EU Herstelfonds, eerste keer EU-schulden namens lidstaten, NL medeaansprakelijk" }
    ]
  },

  /* ====================================================================
     8. ENERGIE / ZORG / KOOPKRACHT
     ==================================================================== */
  salderingsregeling: {
    label: "Salderingsregeling, hoe de overheid 1,5 miljoen huishoudens een rekening stuurt",
    source: "CBS Energie, Min. EZK, Consumentenbond zonnepanelen-onderzoek 2023, Tweede Kamer dossier 35594",
    sourceUrl: "https://www.consumentenbond.nl",
    intro: "Tot 2027 mag elke kWh die je zonnepaneel teruglevert aan het net gesaldeerd worden tegen je verbruik. Eén kWh terug telt als één kWh verbruik. Die belofte verleidde 1,5 miljoen Nederlandse huishoudens om gemiddeld €8.000 te investeren in panelen. De Rijksoverheid promootte het actief: 'Goed voor het milieu en voor uw portemonnee.' In 2023 werd de afbouw aangekondigd. Vanaf 2027 verdwijnt het voordeel stapsgewijs, in 2031 staat het op nul. Voor wie investeerde verlengt de terugverdientijd zich van zes-zeven naar twaalf-vijftien jaar. Wie ouder dan zestig is op aanschafdatum, verdient het simpelweg nooit terug. Dat is geen technocratische marktcorrectie, dat is staatsbeleid dat een belofte aan de eigen burger heeft verbroken.",
    facts: [
      { stat: "1,5 mln", label: "huishoudens met zonnepanelen op het dak (CBS 2023)" },
      { stat: "€8.000", label: "gemiddelde investering per huishouden (Consumentenbond)" },
      { stat: "6 à 7 jr", label: "oorspronkelijke terugverdientijd onder volledige saldering" },
      { stat: "12 à 15 jr", label: "terugverdientijd na afbouw (2027 tot 2031)" },
      { stat: "€200 tot €500", label: "jaarlijks voordeel dat per huishouden verdampt" },
      { stat: "2027", label: "start afbouw, in 2031 op nul" }
    ]
  },

  zorgpremie: {
    label: "Premie basisverzekering (€ per jaar gemiddeld)",
    source: "Vektis en Ministerie van VWS",
    sourceUrl: "https://www.vektis.nl",
    years: [2006, 2010, 2015, 2018, 2020, 2022, 2024, 2025, 2026],
    values: [1030, 1192, 1158, 1308, 1414, 1521, 1772, 1858, 1955]
  },

  reëleKoopkracht: {
    label: "Reële koopkracht modaal huishouden, index 2000=100",
    source: "CBS; NIBUD",
    sourceUrl: "https://www.cbs.nl",
    years: [2000, 2005, 2010, 2015, 2018, 2020, 2022, 2023],
    values: [100, 101, 99, 97, 100, 103, 93, 96]
  },

  /* ====================================================================
     9. ONDERWIJS
     ==================================================================== */
  pisa: {
    label: "PISA-scores 15-jarigen Nederland",
    source: "OESO PISA 2003-2022",
    sourceUrl: "https://www.oecd.org/pisa/",
    jaren: [2003, 2006, 2009, 2012, 2015, 2018, 2022],
    leesvaardigheid: [513, 507, 508, 511, 503, 485, 459],
    wiskunde:        [538, 531, 526, 523, 512, 519, 493],
    natuurwetenschap:[524, 525, 522, 522, 509, 503, 488]
  },

  functioneelAnalfabetisme: {
    label: "% 15-jarigen onder PISA-niveau 2 (functioneel analfabeet), lezen",
    source: "OESO PISA, niveau-verdeling; Inspectie van het Onderwijs",
    sourceUrl: "https://www.oecd.org/pisa/",
    years: [2003, 2009, 2015, 2018, 2022],
    values: [11, 14, 18, 24, 33]
  },

  schoolSegregatie: {
    label: "Aandeel basisscholen met >50% migratie­achtergrond (%), Randstad",
    source: "DUO Schoolregister; Universiteit van Amsterdam onderzoeksprogramma 'Schoolsegregatie'",
    sourceUrl: "https://www.duo.nl",
    years: [2003, 2010, 2015, 2020, 2023],
    values: [22, 28, 32, 38, 42]
  },

  lerarentekort: {
    label: "Openstaande vacatures basis- + voortgezet onderwijs (× 1.000)",
    source: "Ministerie OCW, Trendrapportage Arbeidsmarkt; DUO",
    sourceUrl: "https://www.rijksoverheid.nl",
    years: [2015, 2018, 2020, 2022, 2024],
    values: [2.1, 4.2, 5.5, 7.8, 9.4]
  },

  /* ====================================================================
     10. VEILIGHEID
     ==================================================================== */
  drugsBeslag: {
    label: "Cocaïne-inbeslagname Rotterdam (ton)",
    source: "Douane NL / OM",
    sourceUrl: "https://www.douane.nl",
    years: [2012, 2015, 2018, 2020, 2021, 2022, 2023],
    values: [9, 17, 19, 41, 73, 53, 60]
  },

  liquidaties: {
    label: "Criminele afrekeningen / liquidaties",
    source: "Politie / WODC",
    sourceUrl: "https://www.wodc.nl",
    years: [2000, 2005, 2010, 2015, 2018, 2020, 2022, 2023],
    values: [18, 22, 27, 28, 30, 23, 18, 21]
  },

  steekincidenten: {
    label: "Steekincidenten jongeren (12 tot 25 jaar)",
    source: "Politie, Operationeel Centrum Eenheid Rotterdam, CBS Geweldsdelicten",
    sourceUrl: "https://www.politie.nl",
    years: [2010, 2015, 2018, 2020, 2022, 2023],
    values: [410, 580, 870, 1190, 1340, 1280]
  },

  portiekExplosies: {
    label: "Explosies en aanslagen op woningen Nederland (politiecijfers)",
    source: "Politie Nederland kerncijfers Eenheden; Erasmus Universiteit onderzoek Drugscriminaliteit 2024; Algemene Rekenkamer rapport ondermijnende criminaliteit",
    sourceUrl: "https://www.politie.nl",
    years: [2018, 2019, 2020, 2021, 2022, 2023, 2024],
    values: [85, 110, 175, 220, 350, 760, 1230]
  },

  portiekFacts: {
    label: "De portiekbom als geweldsvorm: feiten",
    source: "Politie Nederland; Erasmus Universiteit (Pieter Tops, Cyrille Fijnaut); jaarverslagen OM",
    facts: [
      { stat: "1.230", label: "ontploffingen en brandstichtingen bij woningen in 2024 (ruim veertien keer 2018)" },
      { stat: "ca. 1 op 3", label: "treft een verkeerd adres, onschuldige bewoners worden slachtoffer" },
      { stat: "€500 tot €2.500", label: "vergoeding die jonge daders krijgen, vaak Snapchat- of Telegram-rekrutering" },
      { stat: "14 tot 17 jr", label: "gemiddelde leeftijd van de uitvoerders (volgens politiebron 2024)" },
      { stat: "ca. 5%", label: "oplossings­percentage, het overgrote deel blijft onopgelost" },
      { stat: "Rotterdam, Amsterdam, Tilburg, Eindhoven, Almere", label: "steden met de hoogste concentratie" }
    ]
  },

  cyberCrime: {
    label: "Geregistreerde online fraude / cybercrime per jaar (× 1.000)",
    source: "CBS Veiligheidsmonitor; Politie Cybercrime­team",
    sourceUrl: "https://www.cbs.nl",
    years: [2015, 2018, 2020, 2022, 2023],
    values: [9, 26, 47, 64, 86]
  },

  ervarenVeiligheid: {
    label: "% Nederlanders dat zich wel eens onveilig voelt",
    source: "CBS Veiligheidsmonitor",
    sourceUrl: "https://www.cbs.nl",
    years: [2012, 2015, 2017, 2019, 2021, 2023],
    values: [37, 36, 35, 34, 37, 41]
  },

  /* ====================================================================
     11. REGELDRUK
     ==================================================================== */
  bemoeizucht: {
    label: "Wat de overheid je sinds 2008 heeft voorgeschreven, uit eigen mond en uit eigen pak­ket",
    source: "Belastingdienst tariefoverzichten, Min. VWS, Min. EZK, Min. IenW, Min. LNV, Staatsblad, Rijksoverheid.nl, Tweede Kamer dossiers",
    sourceUrl: "https://www.rijksoverheid.nl",
    categorieen: [
      {
        groep: "Roken en tabak",
        items: [
          { jaar: 2008, regel: "Rookverbod in de horeca" },
          { jaar: 2014, regel: "Wettelijke leeftijdsgrens tabak naar 18 jaar" },
          { jaar: 2014, regel: "Rookverbod op alle schoolterreinen" },
          { jaar: 2020, regel: "Verplichte 'plain packaging', geen logo's, alleen ziektewaarschuwingen" },
          { jaar: 2020, regel: "Verbod op tabaks­automaten" },
          { jaar: 2022, regel: "Rookverbod op alle openbare plekken inclusief speeltuinen, sportvelden, zorg­terreinen" },
          { jaar: 2024, regel: "Verbod op tabaksverkoop in supermarkten en webshops" },
          { jaar: 2024, regel: "Accijnsverhoging: pakje sigaretten van ongeveer €8 naar ruim €11" },
          { jaar: 2025, regel: "Aankondiging verbod tabaksverkoop tankstations vanaf 2030" }
        ]
      },
      {
        groep: "Alcohol",
        items: [
          { jaar: 2014, regel: "Wettelijke leeftijdsgrens alcohol naar 18 jaar" },
          { jaar: 2014, regel: "Verbod op alcoholverkoop in tankstations en zorgcentra" },
          { jaar: 2014, regel: "Happy hour-verbod (geen kortingen meer dan 25% op alcohol)" },
          { jaar: 2020, regel: "Verbod 'blurring': kappers, sportclubs en boekhandels mogen geen alcohol meer schenken" },
          { jaar: 2021, regel: "Verbod op late bezorging van alcohol via apps zoals Gorillas" },
          { jaar: 2024, regel: "Verbod op bonus- en korting­acties op alcohol in supermarkten" },
          { jaar: 2024, regel: "Accijnsverhoging bier (+16,2%) en wijn" },
          { jaar: 2025, regel: "Discussie verplichte gezondheids­waarschuwingen op alcoholverpakkingen" }
        ]
      },
      {
        groep: "Eten en voedsel",
        items: [
          { jaar: 2018, regel: "Schijf van Vijf herzien naar plantaardiger dieet, kantines van overheid moeten 'volgen'" },
          { jaar: 2018, regel: "Verbod op kindermarketing voor ongezond eten in scholen" },
          { jaar: 2024, regel: "Verbruiks­belasting frisdrank verhoogd van €8,83 naar €26,13 per hectoliter (drie­voud)" },
          { jaar: 2024, regel: "Verbod op 'kindermarketing' voor ongezonde producten in bredere zin" },
          { jaar: 2024, regel: "Stikstof­onteigening boeren­bedrijven (NPLG, 11.200 bedrijven)" },
          { jaar: 2025, regel: "Aankondiging vleestaks-onderzoek, discussie 'true price' op vlees" },
          { jaar: 2025, regel: "Verplichte Nutri-Score op verpakkingen" }
        ]
      },
      {
        groep: "Auto en brandstof",
        items: [
          { jaar: 1996, regel: "Introductie energiebelasting op elektriciteit en gas" },
          { jaar: 2012, regel: "BTW omhoog naar 21%, ook op auto-onderhoud, banden, parkeren" },
          { jaar: 2014, regel: "BPM-tarieven verhoogd, vooral op auto's met hogere CO2-uitstoot" },
          { jaar: 2018, regel: "Verbod gasaansluiting nieuwbouw, geen gas­installatie meer mogelijk" },
          { jaar: 2020, regel: "Snelheidslimiet 100 km/u overdag op alle snelwegen" },
          { jaar: 2024, regel: "Accijns benzine €0,82 per liter (ca. 46% van de pompprijs)" },
          { jaar: 2024, regel: "Milieuzone-uitbreiding in grote steden, ouder dieselverbod" },
          { jaar: 2026, regel: "Vrachtwagen­heffing per kilometer ingevoerd" },
          { jaar: 2035, regel: "Verbod op verkoop nieuwe benzine- en diesel­auto's (EU-besluit)" }
        ]
      },
      {
        groep: "Wonen en energie",
        items: [
          { jaar: 2008, regel: "Verplicht energielabel bij verkoop woning" },
          { jaar: 2018, regel: "Verplicht energielabel C voor kantoren, anders verhuurverbod" },
          { jaar: 2018, regel: "Verbod nieuwe gas­aansluitingen" },
          { jaar: 2023, regel: "Wet 'Goed verhuurderschap', nieuwe verplichtingen verhuurder" },
          { jaar: 2024, regel: "Huurprijs­regulering middensegment, beperking op vrije markt" },
          { jaar: 2027, regel: "Afbouw salderings­regeling zonnepanelen begint, definitief weg in 2031" }
        ]
      },
      {
        groep: "Werk en ondernemen",
        items: [
          { jaar: 2018, regel: "AVG / GDPR-verplichtingen, ook voor eenmans­zaken" },
          { jaar: 2020, regel: "Wet DBA opnieuw ingesteld, zzp-toetsing arbeidsrelatie" },
          { jaar: 2023, regel: "Loondoorbetalingsverplichting twee jaar bij ziekte, ook voor MKB" },
          { jaar: 2024, regel: "Pensioenwet­herziening, individuele potten in plaats van collectief" },
          { jaar: 2025, regel: "Klimaatrapportageplicht middelgrote bedrijven (CSRD)" }
        ]
      },
      {
        groep: "Overige leefstijl",
        items: [
          { jaar: 2015, regel: "Vuurwerkverbod uitgebreid, knal­vuurwerk en vuurpijlen verboden" },
          { jaar: 2020, regel: "Mondkapjesplicht openbaar vervoer en winkels (tot 2022)" },
          { jaar: 2021, regel: "Coronapas (QR-code) verplicht voor horeca, evenementen, kappers" },
          { jaar: 2022, regel: "Discussie verbod op houtkachels en open haard in stedelijk gebied" },
          { jaar: 2024, regel: "Volledig vuurwerkverbod consumenten in 25 gemeentes" },
          { jaar: 2024, regel: "Chip-verplichting honden landelijk" },
          { jaar: 2025, regel: "Vergunningsplicht drones boven 250 gram" }
        ]
      }
    ]
  },

  accijnsExplosie: {
    label: "Accijns- en heffingsverhogingen op leefstijl­producten (€/eenheid)",
    source: "Belastingdienst tariefoverzichten, Min. Financiën",
    sourceUrl: "https://www.belastingdienst.nl",
    sigaret: {
      label: "Accijns + BTW op pakje 20 sigaretten",
      years: [2000, 2008, 2012, 2016, 2020, 2024, 2025],
      values: [2.10, 3.20, 4.30, 5.20, 6.85, 9.50, 10.70]
    },
    benzine: {
      label: "Accijns + BTW per liter benzine",
      years: [2000, 2008, 2012, 2016, 2020, 2024, 2025],
      values: [0.70, 0.85, 1.00, 1.05, 1.15, 1.50, 1.55]
    },
    bier: {
      label: "Accijns + BTW per krat (24 flessen)",
      years: [2000, 2008, 2012, 2016, 2020, 2024, 2025],
      values: [1.20, 1.60, 1.90, 2.30, 2.65, 3.65, 3.95]
    }
  },

  regeldruk: {
    label: "Geldende wetten en AMvB's en ministeriële regelingen",
    source: "Wetten.overheid.nl en ATR jaarrapporten",
    sourceUrl: "https://www.atr-regeldruk.nl",
    years: [2000, 2005, 2010, 2015, 2020, 2023, 2025],
    values: [10100, 12000, 13800, 16200, 19700, 21900, 22500]
  },

  /* ====================================================================
     11b. INTERNATIONALE VERGELIJKING, NL vs vergelijkbare landen
     ==================================================================== */
  internationaleVergelijking: {
    label: "Nederland naast vijf vergelijkbare West-Europese landen, op zes metrics waarop het verschil pijnlijk zichtbaar is",
    source: "Eurostat (bevolkingsdichtheid, woningprijs-inkomen-ratio); TNO/CBS NEA en Eurofound (burn-out); OESO PISA 2022; CPB Kansrijk belastingbeleid en OECD Taxing Wages 2023 (marginale druk); OECD Government at a Glance (vertrouwen)",
    sourceUrl: "https://ec.europa.eu/eurostat",
    metrics: [
      {
        naam: "Bevolkingsdichtheid (inwoners per km², 2023)",
        landen: ["Nederland", "Duitsland", "België", "Zwitserland", "Ierland", "Portugal"],
        waarden: [521, 233, 384, 220, 76, 112],
        nl_positie: "Veruit het dichtstbevolkte land van de groep. Bijna 2,5 keer Duitsland, bijna 7 keer Ierland. Bij gelijkblijvende immigratie loopt dit door."
      },
      {
        naam: "Huizenprijs gedeeld door mediaan jaarinkomen (centrum stad, 2024)",
        landen: ["Nederland", "Duitsland", "België", "Zwitserland", "Ierland", "Portugal"],
        waarden: [11.8, 9.4, 8.1, 14.2, 10.6, 13.5],
        nl_positie: "Een Nederlandse koper geeft bijna twaalf jaarsalarissen uit voor een stedelijk huis. Alleen Zwitserland en Portugal zitten hoger, beide met aantoonbaar hogere mediaaninkomens of een zonklimaat als compensatie."
      },
      {
        naam: "Burn-outklachten beroepsbevolking (%, 2023)",
        landen: ["Nederland", "Duitsland", "België", "Zwitserland", "Ierland", "Portugal"],
        waarden: [20.6, 14.0, 12.0, 13.0, 11.0, 9.0],
        nl_positie: "Hoogste burn-outpercentage van de groep, ruim anderhalf keer Duitsland en meer dan twee keer Portugal. Eén op de vijf werkende Nederlanders heeft klachten."
      },
      {
        naam: "PISA-leesvaardigheid 2022 (score)",
        landen: ["Nederland", "Duitsland", "België", "Zwitserland", "Ierland", "Portugal"],
        waarden: [459, 480, 479, 483, 516, 477],
        nl_positie: "Laagste score van de groep. In 2003 scoorde Nederland nog ruim boven alle hier vergeleken landen."
      },
      {
        naam: "Effectieve marginale belastingdruk anderhalf maal modaal met kind (%, 2023)",
        landen: ["Nederland", "Duitsland", "België", "Zwitserland", "Ierland", "Portugal"],
        waarden: [87, 49, 65, 28, 43, 39],
        nl_positie: "Nederland heeft de hoogste effectieve marginale druk van de groep. Van elke extra euro houdt een Nederlands gezin met kind 13 cent over, een Zwitsers gezin 72 cent. Werken loont structureel minder."
      },
      {
        naam: "Vertrouwen in de eigen regering (% (heel)veel, 2023)",
        landen: ["Nederland", "Duitsland", "België", "Zwitserland", "Ierland", "Portugal"],
        waarden: [28, 52, 39, 78, 45, 35],
        nl_positie: "Diep onder elk vergelijkbaar land. Zwitserland scoort bijna drie keer hoger, Duitsland bijna twee keer."
      }
    ]
  },

  /* ====================================================================
     11c. WERKDRUK / ZORG / JONGEREN, de stille epidemie
     ==================================================================== */
  burnoutCijfers: {
    label: "Burn-outklachten beroepsbevolking (%), TNO/CBS Nationale Enquête Arbeidsomstandigheden",
    source: "TNO/CBS NEA, Burn-outklachten 2007-2023",
    sourceUrl: "https://www.cbs.nl",
    years: [2007, 2011, 2015, 2019, 2021, 2023],
    values: [11.0, 13.1, 14.6, 17.0, 17.0, 20.6]
  },

  wachtlijstenZorg: {
    label: "Wachttijd specialistische GGZ, gemiddeld aantal weken",
    source: "NZa, Wachttijdmonitor GGZ; Vektis",
    sourceUrl: "https://www.nza.nl",
    years: [2018, 2020, 2021, 2022, 2023],
    values: [14, 19, 22, 25, 23]
  },

  jongerenPerspectief: {
    label: "Jongeren (18–35) over de toekomst van Nederland, 2024",
    source: "I&O Research / EenVandaag opiniepanel jongerenpeiling 2024",
    sourceUrl: "https://www.ioresearch.nl",
    facts: [
      { stat: "67%", label: "denkt dat de volgende generatie het slechter zal hebben" },
      { stat: "54%", label: "denkt dat zij nooit een eigen koophuis zal kunnen kopen" },
      { stat: "31%", label: "overweegt serieus om Nederland te verlaten" },
      { stat: "44%", label: "voelt zich ongelukkig over de richting van het land" }
    ]
  },

  zzpDruk: {
    label: "Aantal zzp'ers in Nederland (× 1000), vlucht uit loondienst",
    source: "CBS Arbeidsmarktstatistiek",
    sourceUrl: "https://www.cbs.nl",
    years: [2003, 2010, 2015, 2019, 2022, 2023],
    values: [580, 720, 1010, 1130, 1280, 1370]
  },

  /* ====================================================================
     11d. EXTRA EMIGRANT-QUOTES, meer stem aan vertrekkers
     ==================================================================== */
  emigrantQuotes: [
    {
      quote: "Ik werk 60 uur, betaal me suf, krijg geen huis. Mijn buren zitten in de bijstand die ik betaal. Als ik klaag heet dat racisme. Ik ga naar Portugal.",
      source: "Anoniem, enquête Universiteit Maastricht 2022 (n=1.247 emigranten)"
    },
    {
      quote: "We zijn vertrokken voor de kinderen. Niet om wat ze nu meemaken, maar om wat ze straks niet meer zouden hebben: een achtertuin, ruimte, een school waar je nog Nederlands spreekt.",
      source: "Voormalig accountant in Belgisch Limburg, interview NIDI emigratiepanel 2021"
    },
    {
      quote: "In Zwitserland verdien ik 1.6× wat ik in Nederland verdiende. Ik betaal ongeveer dezelfde belasting in euro's. Dat is geen kleine optimalisatie, dat is een ander leven.",
      source: "Software engineer (32), verhuisd Eindhoven → Zürich, 2022"
    },
    {
      quote: "Niemand vertelt het hardop, maar iedereen die op een verjaardag staat en kan rekenen heeft hetzelfde plan. Het is geen ideologie. Het is een spreadsheet.",
      source: "Ondernemer (47), verhuisd Amsterdam → Dubai, geciteerd in Quote 2023"
    }
  ],

  /* ====================================================================
     11d2. MAAR WAT DAN MET...?, 10 standaard tegenargumenten weerlegd
     ==================================================================== */
  optimistDefenses: {
    label: "Tien meest gehoorde tegenargumenten, en het killer-feit dat ze sloopt",
    source: "UWV, CBS Inactiviteit, Voedselbanken Nederland, Eurostat, OESO, NIDI, RIVM, Transparency International, WWF Living Planet Index NL, Min. Financiën",
    items: [
      {
        claim: "\"De werkloosheid is toch laag? 3,5%.\"",
        weerleg: [
          { feit: "1,4 mln Nederlanders zit in bijstand, WW of WIA, buiten de werkloosheidscijfers", bron: "UWV, CBS" },
          { feit: "Bijstand: ~400k · WIA/WAO: ~800k · WW: ~200k", bron: "UWV jaarcijfers 2023" },
          { feit: "Totaal inactief 15-64: 2,5 mln, bijna een op vijf van de beroepsbevolking", bron: "CBS Arbeidsdeelname" },
          { feit: "Definitie 'werkloos' = actief zoekend + beschikbaar. Wie ontmoedigd thuiszit, telt niet mee", bron: "ILO/Eurostat methodologie" }
        ]
      },
      {
        claim: "\"Armoede neemt structureel af.\"",
        weerleg: [
          { feit: "Voedselbanken: van 50.000 klanten (2008) naar 200.000 (2024), verviervoudigd", bron: "Voedselbanken Nederland" },
          { feit: "8% van werkenden leeft onder de armoedegrens (\"werkende armen\")", bron: "SCP 'Armoede in Kaart' 2023" },
          { feit: "220.000 kinderen groeien op in armoede, 1 op 12", bron: "SCP / Kinderombudsman" },
          { feit: "Energie­banken zijn pas in 2022 ontstaan, een armoede-categorie die geen bestaan had", bron: "Rijksoverheid 2022" }
        ]
      },
      {
        claim: "\"Het BBP per capita groeit, dus we worden rijker.\"",
        weerleg: [
          { feit: "BBP-groei wordt gedreven door bevolkingsgroei (immigratie), niet productiviteit", bron: "Eurostat productivity per hour worked" },
          { feit: "Productiviteit per gewerkt uur stagneert sinds 2008", bron: "OESO Productivity Statistics" },
          { feit: "Mediaan reëel besteedbaar inkomen daalde 2010-2023", bron: "CBS Mediaan inkomen, gecorrigeerd voor inflatie" },
          { feit: "BBP/capita-stijging gaat naar bedrijfswinsten en kapitaal, niet naar lonen", bron: "DNB Vermogensverdeling 2023" }
        ]
      },
      {
        claim: "\"De criminaliteit daalt al jaren.\"",
        weerleg: [
          { feit: "Aangifte-bereidheid daalde van 35% (2012) naar 21% (2023), dalende cijfers verbergen ongemelde criminaliteit", bron: "CBS Veiligheidsmonitor" },
          { feit: "Cybercrime / online fraude steeg ×10 sinds 2015, daar ligt de criminaliteit nu", bron: "Politie cybercrime­team" },
          { feit: "Steekincidenten jongeren ×3 sinds 2010", bron: "Politie operationeel centrum" },
          { feit: "Rotterdam haven onderschept 60 ton cocaïne/jaar, Italiaanse aanklagers noemen NL openlijk een narcostaat", bron: "Douane NL; Direzione Nazionale Antimafia 2022" }
        ]
      },
      {
        claim: "\"We hebben de hoogste levensverwachting van Europa.\"",
        weerleg: [
          { feit: "NL gedaald van top-5 (2010) naar plek #15-18 (2023), Spanje, Italië, Frankrijk, Zwitserland scoren hoger", bron: "Eurostat life expectancy" },
          { feit: "'Gezonde levensjaren' (HLY-indicator): NL 65 jaar, Zweden 73, Spanje 74", bron: "Eurostat Healthy Life Years" },
          { feit: "Levensverwachting van laagopgeleide Nederlandse mannen: 78. Voor hoogopgeleide: 87, gat van 9 jaar", bron: "CBS Levensverwachting naar opleidings­niveau" }
        ]
      },
      {
        claim: "\"We hebben migranten nodig voor de vergrijzing.\"",
        weerleg: [
          { feit: "NIDI: alleen kennismigratie draagt netto bij, niet-westerse migratie verergert druk op verzorgingsstaat", bron: "NIDI 'Verkenning bevolking 2050'" },
          { feit: "Gemiddelde leeftijd asielmigrant: 28. Zij worden zelf oud, de demografische 'verjonging' is tijdelijk", bron: "IND asylum-trends" },
          { feit: "Fertiliteit blijft 1,5, voor bevolkings­vervanging is 2,1 nodig. Migratie schuift het probleem alleen voor zich uit", bron: "CBS Vruchtbaarheidscijfers" },
          { feit: "Per Westeuropees scenario zou NL bij gelijke immigratie­snelheid in 2070 een bevolking van 22 miljoen hebben", bron: "Primos 2024 / NIDI" }
        ]
      },
      {
        claim: "\"De EU geeft ons vrede, welvaart en stabiliteit.\"",
        weerleg: [
          { feit: "Netto bijdrage 2023: €8,6 mld, 5,7× wat het was in 2000", bron: "Min. Financiën, Miljoenennota" },
          { feit: "Eerste keer EU-schulden namens lidstaten: €750 mrd Herstelfonds. NL medeaansprakelijk", bron: "EU Next Generation EU 2020" },
          { feit: "60+ beleidsterreinen hebben Nederland geen vetorecht meer", bron: "Raad van State 'Staat van de EU'" },
          { feit: "Drie nationale referenda gewonnen door NEE-stem, alle drie genegeerd of het instrument afgeschaft", bron: "Kiesraad 2005, 2016, 2018" }
        ]
      },
      {
        claim: "\"Nederland is een rechtsstaat.\"",
        weerleg: [
          { feit: "Toeslagenaffaire: 26.000 ouders door de Belastingdienst onterecht als fraudeur bestempeld, financieel verwoest, kinderen uit huis geplaatst", bron: "Parlementaire Ondervragings­commissie Kinderopvang­toeslag 2020" },
          { feit: "Etnisch profileren door overheidsalgoritme bevestigd, gezinnen met dubbele nationaliteit kregen automatisch verhoogd fraude-risico", bron: "Autoriteit Persoonsgegevens 2020" },
          { feit: "Tien jaar oneerlijk Box 3-vermogens­belasting, Hoge Raad oordeelde uiteindelijk dat het systeem ongrondwettelijk was", bron: "Hoge Raad Kerstarrest 2021" },
          { feit: "Stikstofbeleid: boeren onteigend zonder normale planologische procedure, op EU-rechterlijk bevel", bron: "Raad van State 2019 PAS-uitspraak" }
        ]
      },
      {
        claim: "\"Maar Nederland is groen en duurzaam.\"",
        weerleg: [
          { feit: "WWF Living Planet Report: -25% biodiversiteit Nederland sinds 1990", bron: "WWF Living Planet Index NL" },
          { feit: "Natura 2000-gebieden vrijwel allemaal in slechte staat van instandhouding", bron: "European Environment Agency" },
          { feit: "Gas afgesloten, kernenergie nooit gebouwd, Nederland is energiemand-import­afhankelijk", bron: "TenneT / CBS Energie­balans" },
          { feit: "CO2-uitstoot per capita: NL 8,1 ton, EU-gemiddelde 6,7 ton", bron: "Eurostat 2022" }
        ]
      },
      {
        claim: "\"We wonen ruimer dan ooit, m² per persoon stijgt.\"",
        weerleg: [
          { feit: "M² per inwoner stijgt vooral door dat ouderen alleen overblijven in eengezinswoningen, niet door dat jongeren meer ruimte krijgen", bron: "CBS Wonen / NVM" },
          { feit: "25-34 jarigen die nog bij ouders wonen: gestegen van 10% naar 23%", bron: "CBS / Eurostat" },
          { feit: "Gemiddelde leeftijd starter op de koopmarkt: 36 jaar (was 28 in 1995)", bron: "Kadaster / NVM Starters­monitor" },
          { feit: "Wachttijd sociale huur Amsterdam: 14,5 jaar, Utrecht 12, Den Haag 8,5", bron: "WoningNet jaarrapportages" }
        ]
      }
    ]
  },

  /* ====================================================================
     11e. DE RANGLIJST-ILLUSIE, wat de top-10 lijstjes verbergen
     ==================================================================== */
  ranglijstIllusie: {
    label: "Acht populaire ranglijsten die de werkelijke Nederlandse toestand verbergen",
    source: "World Happiness Report; OESO Better Life Index; Euro Health Consumer Index; Credit Suisse Wealth Report; Transparency International; Reporters Without Borders; QS World University Rankings; WEF Global Competitiveness",
    items: [
      {
        ranking: "World Happiness Report",
        claim: "5e gelukkigste land ter wereld",
        claimSub: "(2023, score 7.4/10)",
        werkelijk: [
          "Onder de 30 jaar zakt NL naar plek #17 in dezelfde WHR-meting",
          "Antidepressiva-gebruik 7,1%, top 5 in de EU",
          "20,6% van werkenden heeft burn-outklachten",
          "47% voelt zich (zeer) eenzaam, RIVM 2022",
          "Het 'geluk' is een Cantril-ladder zelfrapportage, geen objectieve meting"
        ],
        bron: "WHR 2023/2024 jeugdsplit; Lareb / SFK; TNO-CBS NEA; RIVM gezondheids­onderzoek"
      },
      {
        ranking: "OESO Better Life Index, work-life balance",
        claim: "#1 werk-privé balans van de OESO",
        claimSub: "(slechts 0,4% werkt 50+ uur)",
        werkelijk: [
          "De index meet 'lange uren', niet 'zinvolle uren'",
          "NL is Europees kampioen deeltijdwerk, 50% van vrouwen werkt <20 uur",
          "Productiviteit per gewerkt uur stagneert sinds 2008",
          "800.000 mantelzorgers zijn 'overbelast', SCP",
          "Burn-out cijfer (20,6%) past niet bij een land met écht goede balans"
        ],
        bron: "OESO BLI 2023; CBS Arbeidsdeelname; SCP Mantelzorg 2023"
      },
      {
        ranking: "Euro Health Consumer Index",
        claim: "Beste zorgstelsel van Europa",
        claimSub: "(EHCI 2018, laatste meting)",
        werkelijk: [
          "De EHCI is in 2019 gestaakt wegens financierings­problemen, niemand meet dit nog",
          "Wachttijd specialistische GGZ: 23 weken",
          "Kanker 5-jaars overlevings­ratio: NL gezakt naar plek #11 EU (Zwitserland #1)",
          "Premie basisverzekering ×1.72 sinds 2006, bij eigen risico ×2.5",
          "Huisartsentekort treft 14% van de praktijken, LHV"
        ],
        bron: "Health Consumer Powerhouse (gestaakt); NZa wachttijdmonitor; Eurostat cancer survival; Vektis; LHV"
      },
      {
        ranking: "Gini-coëfficiënt (inkomen)",
        claim: "Top 5 meest gelijke land OESO",
        claimSub: "(Gini 0,29 na herverdeling)",
        werkelijk: [
          "De Gini meet inkomen, nadat toeslagen en uitkeringen zijn verrekend",
          "Vermogens-Gini Nederland: 0,78, Top 3 ongelijkste van de hele OESO",
          "Top 1% bezit ~30% van het Nederlandse vermogen",
          "Top 10% bezit ~65%, onderste 50% bezit ~0% (vaak negatief)",
          "Het herverdeel-effect verbergt dat werkenden marginaal 49-87% afdragen, terwijl uitkering-ontvangers vrijwel niets bijdragen"
        ],
        bron: "OESO Income Distribution Database; Credit Suisse Global Wealth Report; CBS Vermogensverdeling"
      },
      {
        ranking: "Corruption Perceptions Index",
        claim: "Een van de minst corrupte landen",
        claimSub: "(Transparency Intl. #8, 2023)",
        werkelijk: [
          "Was #5 in 2014, gedaald met 3 plekken in tien jaar",
          "Toeslagenaffaire: 26.000 ouders financieel verwoest, kinderen weggehaald, etnisch geprofileerd door overheidsalgoritmes",
          "Moord op advocaat Derk Wiersum (2019) en journalist Peter R. de Vries (2021), de staat kon haar eigen gerechts­dienaren niet beschermen",
          "Lobby-transparantie onder EU-gemiddelde (ALTER-EU)",
          "Drugs-infiltratie van het juridisch apparaat (Marengo, Caloh Wagoh)"
        ],
        bron: "Transparency International CPI 2014-2023; Parlementaire Ondervragings­commissie Kinderopvang­toeslag; Politie Marengo-dossier"
      },
      {
        ranking: "Persvrijheid (Reporters Without Borders)",
        claim: "Persvrijheid altijd top 10",
        claimSub: "(2002: wereld #1)",
        werkelijk: [
          "RSF 2024: Nederland gezakt naar plek #30, sterkste daling van enig EU-land",
          "Moord op Peter R. de Vries (2021) bij klaarlichte dag op de Lange Leidsedwars­straat",
          "PersVeilig meldde 271 incidenten van agressie / intimidatie tegen journalisten in 2022",
          "Mediaconcentratie: DPG + Mediahuis bezitten 80% van NL print",
          "Persveiligheid-budget gekort tijdens kabinet Rutte IV, pas teruggedraaid na bedreigingen"
        ],
        bron: "Reporters Without Borders World Press Freedom Index 2002-2024; PersVeilig.nl; Commissariaat voor de Media"
      },
      {
        ranking: "QS World University Rankings",
        claim: "Nederland is een onderwijs­natie",
        claimSub: "(UvA, TU Delft, UU 'in top 100')",
        werkelijk: [
          "UvA daalde van plek #50 (2014) naar #58 (2024)",
          "TU Delft van #15 (2010) naar #47 (2024)",
          "PISA leesvaardigheid −54 punten (1 schooljaar) sinds 2003, alleen Australië zakte sneller",
          "33% van Nederlandse 15-jarigen is functioneel analfabeet",
          "9.400 onvervulde vacatures voor leraren, 1 op 6 kinderen krijgt les van onbevoegden"
        ],
        bron: "QS World University Rankings 2010-2024; OESO PISA 2003-2022; OCW Trendrapportage Arbeidsmarkt"
      },
      {
        ranking: "WEF Global Competitiveness Index",
        claim: "Top 5 concurrent­vermogen wereldwijd",
        claimSub: "(WEF 2019, plek #4)",
        werkelijk: [
          "Het WEF heeft deze ranglijst sinds 2020 niet meer gepubliceerd, niet vergelijkbaar",
          "R&D-uitgaven 2,3% BBP, onder EU-streefdoel van 3%",
          "Maakindustrie van 22% BBP (1980) naar 12% (2023), bijna gehalveerd",
          "ASML onder geopolitieke druk, export­vergunningen verdwijnen",
          "ABN AMRO 2023: 14% van Nederlandse bedrijven overweegt vertrek wegens lasten en stikstof"
        ],
        bron: "WEF GCI 2019 (laatste editie); Eurostat R&D; CBS Economische sectoren; ABN AMRO Sector­update 2023"
      }
    ]
  },

  /* ====================================================================
     11f. RECHTSSTAAT IN VERVAL, toeslagenaffaire
     ==================================================================== */
  toeslagenAffaire: {
    label: "Toeslagenaffaire, toen de staat zijn eigen burgers verklaarde tot fraudeur",
    source: "Parlementaire Ondervragings­commissie Kinderopvang­toeslag 'Ongekend onrecht' 2020; Autoriteit Persoonsgegevens 'Werkwijze Belastingdienst' 2020; Adviescommissie Uitvoering Toeslagen",
    sourceUrl: "https://www.tweedekamer.nl/kamerstukken/detail?id=2020D52803",
    facts: [
      { stat: "26.000", label: "ouders door de Belastingdienst onterecht als toeslagenfraudeur bestempeld" },
      { stat: "1.675", label: "kinderen onder gedwongen voogdij geplaatst, deels uit huis gehaald, vaak rechtstreeks gevolg van financiële ruïne door de affaire" },
      { stat: "€100k+", label: "gemiddelde schuld die slachtoffers terug moesten betalen (vaak meer), inclusief boetes, rente en invorderingskosten" },
      { stat: "5×", label: "zo vaak werden gezinnen met dubbele nationaliteit als 'risico' gemarkeerd door het overheidsalgoritme" },
      { stat: "12 jaar", label: "duurde het voordat het schandaal politieke gevolgen kreeg (eerste signalen 2009, kabinet viel 2021)" },
      { stat: "€5,5 mrd", label: "geschatte compensatiekosten, gefinancierd uit publieke middelen, niet betaald door de daders" }
    ],
    quote: "Onze rechtsstaat heeft tijdens deze affaire op verschillende fronten gefaald. Belastingdienst, kabinet, parlement, rechterlijke macht en media hebben allemaal ouders aan hun lot overgelaten.",
    quoteSource: "Parlementaire Ondervragings­commissie 'Ongekend onrecht', december 2020"
  },

  /* ====================================================================
     11g. WERKENDE ARMEN, VOEDSELBANKEN, STILLE ARMOEDE
     ==================================================================== */
  voedselbanken: {
    label: "Aantal klanten Voedselbanken Nederland (x1.000)",
    source: "Voedselbanken Nederland, Jaarverslag",
    sourceUrl: "https://www.voedselbankennederland.nl",
    years: [2008, 2012, 2015, 2018, 2020, 2022, 2023, 2024, 2025],
    values: [50, 80, 125, 132, 159, 200, 230, 270, 290]
  },

  armoedeProfielen: {
    label: "De armoede die de officiële statistiek niet ziet",
    source: "SCP 'Armoede in Kaart' 2023; Kinderombudsman 2024; CBS Lage inkomens",
    facts: [
      { stat: "8%", label: "van álle werkenden leeft onder de armoede­grens, 'werkende armen'" },
      { stat: "220.000", label: "kinderen groeit op in armoede, 1 op 12 onder de 18" },
      { stat: "1,2 mln", label: "Nederlanders zit in problematische schuldsituatie, 1 op 14" },
      { stat: "270.000", label: "voedselbank-klanten in 2024, verzes­voudigd in 16 jaar" },
      { stat: "+460%", label: "groei energie­banken sinds oprichting (2022), bestonden voorheen niet" }
    ]
  },

  /* ====================================================================
     11h. STIKSTOFCRISIS, beleid op EU-bevel
     ==================================================================== */
  stikstofCrisis: {
    label: "Stikstofcrisis, Brussel beslist, boeren onteigend, bouw geblokkeerd",
    source: "Raad van State 2019 PAS-uitspraak; Min. LNV; LEI-WUR; ABF Research",
    sourceUrl: "https://www.raadvanstate.nl",
    facts: [
      { stat: "2019", label: "Raad van State verklaart PAS-stelsel ongeldig, op grond van EU-Habitatrichtlijn" },
      { stat: "18.000", label: "vergunningen direct geblokkeerd, bouwprojecten, infrastructuur, agrarische uitbreiding" },
      { stat: "11.200", label: "boeren­bedrijven die de overheid tussen 2024-2030 wil 'uitkopen' of beperken (programma NPLG)" },
      { stat: "€24,3 mrd", label: "transitiefonds, door overheid gereserveerd voor uitkopen + boerenleed" },
      { stat: "−30%", label: "minder vee­dieren als doel, opgelegd via EU Habitat­richtlijn" },
      { stat: "Kabinet Rutte IV", label: "viel in 2023 mede op stikstof + asiel, twee EU-aangejaagde dossiers tegelijk" }
    ]
  },

  /* ====================================================================
     11i. DEFENSIE LEEG, narcostaat
     ==================================================================== */
  defensieNarco: {
    label: "Het leger is leeg. De staat kan zichzelf niet beschermen.",
    source: "Min. Defensie Jaarverslag 2023; NAVO Defense Expenditure Report; Direzione Nazionale Antimafia (Italië) jaarrapport 2022; Erasmus Universiteit drugscriminaliteit­onderzoek",
    facts: [
      { stat: "1,7%", label: "NL defensie­uitgaven als % BBP, NAVO-norm is 2%. Pas in 2024 begint NL toe te werken naar de norm" },
      { stat: "9.000", label: "openstaande militaire vacatures, Landmacht alleen al 25% onder­bezetting" },
      { stat: "0", label: "operationele Patriot-systemen na donaties aan Oekraïne, NL kan geen lucht­oorlog meer voeren" },
      { stat: "'narcostaat'", label: "term gebruikt door Italiaanse anti-maffia-aanklagers voor Nederland, niet door rechts-NL maar door Italiaanse magistraten" },
      { stat: "60 ton", label: "cocaïne onderschept Rotterdam 2023, slechts ~10% van werkelijke instroom volgens Erasmus-onderzoek" },
      { stat: "2019/2021", label: "moorden op advocaat Wiersum + journalist De Vries, de staat kon zijn eigen rechts­hulpverleners niet beschermen" }
    ]
  },

  /* ====================================================================
     12. DE TEKENEN VAN VERVAL, klassieke kenmerken late-fase rijk
     ==================================================================== */
  vervalCheck: {
    label: "Klassieke verval­tekenen, hoe een rijk eraan gaat",
    source: "Samengesteld uit CBS, SCP, OESO, DNB, IND, ATR, WODC, historische verval-patronen geëxtraheerd uit imperia­literatuur (Romeinen, Brits Rijk, USSR)",
    sourceUrl: "https://www.cbs.nl",
    indicators: [
      { ind: "Onderwijs in verval", nl: "PISA leesscore −54 punten sinds 2003", status: "ja" },
      { ind: "Innovatie­voordeel weg", nl: "R&D-uitgaven gestagneerd; ASML-uitvoer onder geopolitieke druk", status: "ja" },
      { ind: "Hoge schuld + geld bijdrukken", nl: "M3-eurozone ×11 sinds 1980; NL overheidsschuld €475 mld", status: "ja" },
      { ind: "Interne polarisatie", nl: "Boerenprotest, BBB-doorbraak, klimaatprotesten, A12-blokkade", status: "ja" },
      { ind: "Vermogens­kloof groeit", nl: "Top 10% bezit 65% van het vermogen, top 1% bezit ~29%", status: "ja" },
      { ind: "Waardenkloof groeit", nl: "Polarisatie-index SCP +47% sinds 2012", status: "ja" },
      { ind: "Werkethos zwakt af", nl: "Deeltijdland, gem. werkweek 30 u; productiviteit per gewerkt uur gestagneerd", status: "ja" },
      { ind: "Reservevaluta verzwakt", nl: "Euro-aandeel in mondiale reserves daalt; renminbi-handel groeit", status: "ja" },
      { ind: "Orde handhaven faalt", nl: "Drugscriminaliteit explosief; advocaten en journalisten vermoord", status: "ja" },
      { ind: "Bureaucratie explodeert", nl: "21.900 regels, 16 dagen administratie per ondernemer/jaar", status: "ja" },
      { ind: "Demografie verzwakt", nl: "Natuurlijke aanwas ≈0, vergrijzing, krimpend werkend deel", status: "ja" },
      { ind: "Geopolitieke invloed daalt", nl: "Soevereiniteit aan Brussel; NL geen vetorecht meer", status: "ja" },
      { ind: "Inflatie + monetaire instabiliteit", nl: "2022-piek 14.5% HICP; ECB-balans verviervoudigd sinds 2008", status: "ja" },
      { ind: "Externe shocks niet kunnen absorberen", nl: "Gaszekerheid weg, energiecrisis 2022, stikstofcrisis ongelost", status: "ja" },
      { ind: "Cohesie nationaal identiteit erodeert", nl: "26.6% migratie­achtergrond, integratie-indicatoren dalen", status: "ja" },
      { ind: "Militaire kracht", nl: "Defensie­budget 1.7% BBP (NAVO-norm 2%); leger leeg", status: "deels" },
      { ind: "Productieve sector krimpt", nl: "Maakindustrie nu 12% BBP, was 22% in 1980", status: "ja" },
      { ind: "Klasse-conflict / werkenden vs uitkering", nl: "Toeslagencarroussel; modale werker betaalt 50%+ marginaal", status: "ja" }
    ]
  }
};
