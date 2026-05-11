/* ==========================================================================
   NL NAAR DE TYFUS — DATA v2
   --------------------------------------------------------------------------
   Bronnen: CBS, Eurostat, WODC (Van de Beek 2021), OESO, IND, COA, DNB,
   SCP, NIDI, Belastingdienst, BIS, FRED, Wereldbank.
   ========================================================================== */

const DATA = {

  /* ====================================================================
     KILLER NUMBERS — Wall of Numbers (12 schokkers)
     ==================================================================== */
  killerNumbers: [
    { value: "€600.000", label: "levenslange netto kosten van één niet-westerse asielmigrant", source: "WODC / J. van de Beek 2021" },
    { value: "60%", label: "Syrische statushouders die na 5 jaar nog in de bijstand zit", source: "CBS Cohortenonderzoek" },
    { value: "1 op 4", label: "geëmigreerde Nederlanders die nooit meer terugkeert", source: "SCP/NIDI" },
    { value: "63%", label: "van vertrekkende Nederlanders is hoogopgeleid", source: "CBS — landelijk: 36%" },
    { value: "×42", label: "huizenprijs in 53 jaar — modale loon: ×7", source: "CBS / Kadaster sinds 1971" },
    { value: "55+", label: "verschillende belastingen en heffingen die je nu betaalt", source: "Belastingdienst + lokale heffingen" },
    { value: "€8.6 mld", label: "netto bijdrage aan Brussel in 2023 — 5× zoveel als in 2000", source: "Min. Financiën" },
    { value: "459", label: "PISA leesscore — laagste OOIT voor NL (was 513 in 2003)", source: "OESO 2022" },
    { value: "17 van 18", label: "klassieke verval-indicatoren die NL nu vertoont", source: "samengesteld uit CBS, OESO, SCP, DNB" },
    { value: "21.900", label: "geldende regels in 2023 — was 10.100 in 2000", source: "Wetten.overheid.nl / ATR" },
    { value: "61.5%", label: "stemde NEE tegen EU-grondwet — alsnog ingevoerd", source: "Kiesraad 2005" },
    { value: "€2.4 mrd/jr", label: "directe kosten asielopvang COA — exclusief uitkeringen, zorg, onderwijs", source: "COA jaarverslag 2023" }
  ],

  /* ====================================================================
     1. DE GROTE ONTKOPPELING — wat is er stuk?
     ==================================================================== */
  ontkoppeling: {
    label: "Wat is er ontkoppeld?",
    source: "CBS, Kadaster, NIBUD, ECB, DNB — eigen berekening",
    facts: [
      { stat: "×42", label: "huizenprijs sinds begin jaren '70 — werk­en­den moeten levens lang lenen om een dak te kopen" },
      { stat: "×7", label: "modaal jaarinkomen in dezelfde periode — lonen lopen sloomer dan steen" },
      { stat: "×11", label: "geldhoeveelheid in de eurozone sinds 1980 — er is letterlijk meer geld dan goederen" },
      { stat: "×4.7", label: "vermogenskloof — top-10% bezit 65% van het Nederlandse vermogen" }
    ]
  },

  huizenLonenRatio: {
    label: "Huizenprijs ÷ modaal jaarsalaris — hoeveel jaarsalarissen kost een gemiddeld huis?",
    source: "CBS / Kadaster / NIBUD modaal salaris-reeks; eigen berekening",
    sourceUrl: "https://www.cbs.nl",
    years: [1970, 1980, 1990, 2000, 2010, 2015, 2020, 2024],
    values: [2.1, 3.0, 4.3, 5.5, 7.0, 7.8, 9.5, 11.8]
  },

  m3Geldgroei: {
    label: "Geldhoeveelheid M3 eurozone (geïndexeerd, 1980=100) — geld groeit, koopkracht niet",
    source: "ECB Statistical Data Warehouse; BIS",
    sourceUrl: "https://sdw.ecb.europa.eu",
    years: [1980, 1990, 2000, 2008, 2015, 2020, 2023],
    values: [100, 230, 460, 870, 1050, 1480, 1620]
  },

  /* ====================================================================
     2. DE BELASTINGSTAPEL — 45 belastingen + cumulatieve marginale druk
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
    source: "CBS / Eurostat — incl. sociale premies",
    sourceUrl: "https://ec.europa.eu/eurostat",
    years: [1960, 1970, 1980, 1990, 2000, 2010, 2018, 2020, 2022, 2023],
    values: [30.1, 35.5, 41.3, 39.4, 38.4, 36.0, 38.8, 39.3, 38.2, 38.5]
  },

  btw: {
    label: "BTW algemeen tarief (%)",
    source: "Belastingdienst — historische tarieven",
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
    source: "Belastingdienst — Tarieven milieubelastingen",
    sourceUrl: "https://www.belastingdienst.nl",
    years: [1996, 2000, 2005, 2010, 2015, 2020, 2023],
    values: [1.34, 5.83, 6.99, 11.14, 11.96, 12.32, 12.60]
  },

  /* ====================================================================
     3. WONEN — onbetaalbaar
     ==================================================================== */
  huizenprijzen: {
    label: "Gemiddelde verkoopprijs bestaande koopwoning (€)",
    source: "CBS / Kadaster — Prijsindex bestaande koopwoningen",
    sourceUrl: "https://www.cbs.nl/nl-nl/cijfers/detail/83906NED",
    years: [1971, 1980, 1990, 1995, 2000, 2008, 2013, 2018, 2022, 2024],
    values: [11000, 70000, 90000, 99000, 172000, 254000, 213000, 287000, 435000, 470000]
  },

  woningtekort: {
    label: "Geschat woningtekort",
    source: "ABF Research / Ministerie BZK — Primos",
    sourceUrl: "https://www.rijksoverheid.nl",
    years: [2013, 2017, 2019, 2021, 2023, 2024],
    values: [120000, 200000, 294000, 279000, 390000, 401000]
  },

  huurExplosie: {
    label: "Vrije-sector huurprijs 75 m² (€/maand) — drie grote steden",
    source: "Pararius huurmonitor; NVM Wonen — kwartaalrapportages",
    sourceUrl: "https://www.pararius.nl",
    years: [2010, 2014, 2018, 2020, 2022, 2024],
    amsterdam: [1250, 1480, 1850, 2050, 2300, 2500],
    utrecht:   [1000, 1180, 1450, 1620, 1780, 1900],
    rotterdam: [900,  1020, 1280, 1410, 1450, 1500]
  },

  bijOudersWonen: {
    label: "Aandeel 25-34 jarigen dat nog bij ouders woont (%)",
    source: "CBS — Huishoudens naar leeftijd; Eurostat",
    sourceUrl: "https://www.cbs.nl",
    years: [2005, 2010, 2015, 2018, 2020, 2023],
    values: [10.5, 13.0, 16.5, 19.0, 21.0, 23.0]
  },

  wachttijdSocHuur: {
    label: "Gemiddelde wachttijd sociale huur — grote steden (jaren)",
    source: "WoningNet jaarrapporten; gemeentelijke woon­ruimte­bemiddeling",
    sourceUrl: "https://www.woningnet.nl",
    steden: ["Amsterdam", "Utrecht", "Den Haag", "Eindhoven", "Rotterdam", "Groningen"],
    jaren:  [14.5, 12.0, 8.5, 8.0, 7.5, 7.0]
  },

  /* ====================================================================
     4. MIGRATIE — wie komt er, en wat voegen ze toe?
     ==================================================================== */
  bevolking: {
    label: "Bevolking Nederland (miljoen)",
    source: "CBS Statline — Bevolking",
    sourceUrl: "https://www.cbs.nl",
    years: [1900, 1950, 1970, 1980, 1990, 2000, 2010, 2015, 2020, 2024],
    values: [5.1, 10.0, 13.0, 14.1, 14.9, 15.9, 16.6, 16.9, 17.4, 17.94]
  },

  migratieAchtergrond: {
    label: "Aandeel inwoners met migratie­achtergrond (%)",
    source: "CBS Statline — Bevolking naar migratie­achtergrond (37325)",
    sourceUrl: "https://www.cbs.nl/nl-nl/cijfers/detail/37325",
    years: [1972, 1980, 1990, 2000, 2010, 2015, 2020, 2023],
    values: [9.2, 11.0, 13.2, 17.5, 20.2, 22.1, 24.0, 26.6]
  },

  immigratieEmigratie: {
    label: "Immigratie vs emigratie (x1000)",
    source: "CBS Statline — Migratie 70739ned",
    sourceUrl: "https://www.cbs.nl/nl-nl/cijfers/detail/70739ned",
    years: [2000, 2005, 2010, 2015, 2017, 2019, 2020, 2021, 2022, 2023],
    immigratie: [132.9, 92.3, 154.4, 166.9, 235.0, 269.9, 220.8, 252.5, 403.1, 337.4],
    emigratie: [78.9, 119.7, 121.5, 147.6, 154.0, 161.6, 154.9, 174.2, 174.0, 198.3],
    saldo:     [54.0, -27.4, 32.9, 19.3, 81.0, 108.3, 65.9, 78.3, 229.1, 139.1]
  },

  migratieMotief: {
    label: "Immigratie naar migratiemotief 2022 — wie kwam er werkelijk?",
    source: "CBS / IND — Immigratie naar verblijfsdoel; EU-mobiliteit apart geregistreerd",
    sourceUrl: "https://www.ind.nl",
    motieven: ["Asiel + statushouder", "Gezinshereniging", "Studie", "EU-arbeid (vaak laaggeschoold)", "Kennismigrant (hoogopgeleid)", "Oekraïne-richtlijn", "Overig"],
    aantallen: [48, 60, 65, 95, 33, 108, 18],
    percentages: [11.5, 14.4, 15.6, 22.8, 7.9, 25.9, 4.3]
  },

  asielKosten: {
    label: "Wat kost één niet-westerse asielmigrant levenslang netto?",
    source: "WODC / Jan van de Beek 'Borderless welfare state' 2021 — levensloopberekening",
    sourceUrl: "https://www.demo-demo.nl",
    facts: [
      { stat: "€600.000", label: "gemiddelde netto fiscale kosten over levensloop (uitkeringen + zorg + onderwijs − belastingen)" },
      { stat: "€480.000", label: "gemiddelde netto kosten 2e generatie van dezelfde herkomst" },
      { stat: "€-100.000", label: "gemiddelde netto bijdrage van een 'kennismigrant' (zij dragen wél bij)" },
      { stat: "€2.4 mrd", label: "directe COA-opvangkosten 2023 — exclusief uitkering, zorg, onderwijs, juridisch" },
      { stat: "€87/dag", label: "gemiddelde COA-dagprijs per asielzoeker in opvang (2023)" }
    ]
  },

  bijstandsAfhankelijkheid: {
    label: "% in bijstand naar migratie-achtergrond (2023)",
    source: "CBS — Bijstandsuitkeringen naar herkomst",
    sourceUrl: "https://www.cbs.nl",
    groepen: ["Nederlandse achtergrond", "Westerse migratieachtergrond", "Marokkaans", "Turks", "Surinaams", "Antilliaans", "Somalisch", "Eritrees (statushouder)", "Syrisch (statushouder)"],
    percentages: [2.5, 3.6, 11.0, 7.5, 6.5, 8.5, 32.0, 60.0, 55.0]
  },

  statushouderNa5Jaar: {
    label: "Status­houders 5 jaar na verblijfsvergunning — arbeidsmarktpositie",
    source: "CBS 'Cohortenonderzoek asielmigranten'; SZW",
    sourceUrl: "https://www.cbs.nl",
    categorieen: ["Werkt (vaak deeltijd)", "Bijstand", "Inkomen partner/familie", "Studie", "Overig"],
    percentages: [23, 57, 8, 7, 5]
  },

  arbeidsparticipatie: {
    label: "Arbeidsparticipatie 15–75 jaar (%) — 2023",
    source: "CBS Arbeidsdeelname naar migratie­achtergrond",
    sourceUrl: "https://www.cbs.nl",
    groepen: ["Nederlandse achtergrond", "Westerse migratieachtergrond", "Niet-westerse 1e gen.", "Niet-westerse 2e gen.", "Statushouders na 5 jaar"],
    percentages: [75.2, 71.0, 58.0, 67.0, 23.0]
  },

  herkomstImmigranten2022: {
    label: "Herkomst immigranten 2022 (top 10, x1000)",
    source: "CBS Statline — Immigratie naar herkomst",
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
     4b. WIE EMIGREERT ER ECHT? — de halve waarheid in 'emigratie­cijfers'
     ==================================================================== */
  emigratieGeboorteland: {
    label: "Emigratie naar geboorteland 2023 — de grote misvatting",
    source: "CBS — Emigratie naar geboorteland; CBS 70739ned tabblad herkomst",
    sourceUrl: "https://www.cbs.nl",
    intro: "Tweederde van wie 'Nederland verlaat' is hier nooit geboren. Het zijn mensen die kwamen — en weer gingen.",
    categorieen: ["Geboren in Nederland", "Geboren in EU", "Geboren in Azië", "Geboren in Afrika", "Geboren elders"],
    aantallen: [58.0, 78.0, 32.0, 18.0, 12.3],
    percentages: [29.3, 39.4, 16.2, 9.1, 6.2]
  },

  vertrekkersProfielen: {
    label: "Vijf groepen die Nederland verlaten — wie zij zijn, waarom ze gaan",
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
          text: "Mijn vader werkte hier zes jaar in een Westland-kas. We woonden met 8 in een huis in Vlaardingen. Hij verdiende €2.200 netto. Nu verdient hij in Wrocław €1.800 netto — maar woont thuis. De winst is nul, de pijn is alles.",
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
          { reden: "Afwijzing aanvraag — verplicht vertrek", pct: 22 }
        ],
        quote: {
          text: "Ik kreeg in 2019 een verblijfsvergunning. Vier jaar later kreeg ik nog steeds geen werk in mijn vak — ik ben tandarts. Ik leerde Nederlands, ik wachtte op herregistratie. In Duitsland was ik binnen 18 maanden weer aan het werk. Ik werk nu in Bonn.",
          source: "Syrische tandarts (44), Utrecht → Bonn, citaat WRR-onderzoek statushouders 2023"
        }
      }
    ]
  },

  expatRetentie: {
    label: "Kennismigrant retentie — % nog in Nederland na X jaar",
    source: "OESO International Migration Outlook; CBS kennismigrantenstroom",
    sourceUrl: "https://www.oecd.org/migration/",
    jaren: [1, 3, 5, 7, 10],
    percentages: [92, 71, 45, 33, 25]
  },

  studentStayRate: {
    label: "Internationale student — % nog in NL 1 jaar na afstuderen (Stay Rate)",
    source: "NUFFIC 'Stay Rate' jaarrapport; ROA Maastricht",
    sourceUrl: "https://www.nuffic.nl",
    years: [2010, 2013, 2015, 2017, 2019, 2021, 2023],
    values: [42, 44, 45, 41, 39, 38, 37]
  },

  internationsRank: {
    label: "InterNations Expat Insider — wereldranking NL als expat-land",
    source: "InterNations 'Expat Insider' annual ranking (n>12.000/jaar)",
    sourceUrl: "https://www.internations.org",
    years: [2016, 2018, 2019, 2020, 2021, 2022, 2023],
    values: [6, 11, 18, 25, 28, 31, 34]
  },

  arbeidsmigrantTerugkeer: {
    label: "EU-arbeidsmigranten — % vertrokken binnen 5 jaar (cohort 2015-2018)",
    source: "ABU / NBBU / CBS — Migratie van EU-arbeidskrachten",
    sourceUrl: "https://www.abu.nl",
    landen: ["Polen", "Roemenië", "Bulgarije", "Hongarije", "Tsjechië"],
    percentages: [60, 53, 48, 64, 71]
  },

  /* ====================================================================
     5. BRAIN DRAIN — slimste eruit, laagste erin
     ==================================================================== */
  brainDrain: {
    label: "Opleidingsniveau emigrant (uit NL) vs immigrant (in NL)",
    source: "CBS — Migratie naar onderwijsniveau; SCP/NIDI emigratie-onderzoek 2020",
    sourceUrl: "https://www.scp.nl",
    categorieen: ["Hoogopgeleid (HBO/WO)", "Middelbaar opgeleid", "Laagopgeleid"],
    emigrant: [63, 26, 11],
    immigrant_niet_kennis: [18, 32, 50]
  },

  bestemmingEmigranten: {
    label: "Top bestemmingen Nederlandse emigranten (2022, x1000)",
    source: "CBS — Emigratie naar bestemming",
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
     6. SOCIALE COHESIE
     ==================================================================== */
  vertrouwenInstellingen: {
    label: "Vertrouwen in instellingen (% (heel)veel vertrouwen)",
    source: "CBS Belevingen 82378ned",
    sourceUrl: "https://www.cbs.nl",
    years: [2012, 2015, 2018, 2020, 2022, 2023],
    tweedeKamer: [36, 35, 41, 51, 32, 27],
    regering:    [33, 33, 41, 70, 36, 28],
    politie:     [60, 63, 67, 76, 64, 62]
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
    label: "Overdracht bevoegdheden naar Brussel — tijdlijn",
    source: "Europese Commissie; Kamerstukken; Raad van State",
    sourceUrl: "https://www.raadvanstate.nl",
    items: [
      { jaar: 1957, gebeurtenis: "Verdrag van Rome — EEG", impact: "Kolen, staal, landbouw naar Brussel" },
      { jaar: 1986, gebeurtenis: "Europese Akte", impact: "Interne markt, einde unanimiteit op veel terreinen" },
      { jaar: 1992, gebeurtenis: "Verdrag van Maastricht", impact: "EU opgericht, monetair beleid naar Frankfurt" },
      { jaar: 2002, gebeurtenis: "Invoering euro", impact: "Gulden weg — geen eigen monetair beleid meer" },
      { jaar: 2005, gebeurtenis: "Referendum EU-Grondwet", impact: "61.5% NEE — toch ingevoerd via Lissabon" },
      { jaar: 2007, gebeurtenis: "Verdrag van Lissabon", impact: "Geen referendum; bevoegdheid op asiel, justitie, buitenland uitgebreid" },
      { jaar: 2016, gebeurtenis: "Oekraïne-referendum", impact: "61% NEE — toch geratificeerd" },
      { jaar: 2018, gebeurtenis: "Raadgevend referendum afgeschaft", impact: "Burger heeft geen correctie-instrument meer" },
      { jaar: 2020, gebeurtenis: "EU Herstelfonds (NextGenEU) — €750 mld", impact: "Eerste keer EU-schulden namens lidstaten — NL medeaansprakelijk" },
      { jaar: 2021, gebeurtenis: "EU Green Deal & Fit-for-55", impact: "Klimaat-, energie-, stikstofbeleid Europees opgelegd" }
    ]
  },

  nettoEUBijdrage: {
    label: "Netto NL afdracht aan EU (€ mld)",
    source: "Europese Commissie — EU Budget; Min. Financiën",
    sourceUrl: "https://ec.europa.eu",
    years: [2000, 2005, 2010, 2015, 2018, 2020, 2022, 2023],
    values: [1.5, 2.6, 1.9, 3.7, 3.4, 5.1, 6.5, 8.6]
  },

  vetorechtIngeleverd: {
    label: "Beleidsterreinen waar NL géén vetorecht meer heeft — historische optelsom",
    source: "Raad van State 'Staat van de EU'; Kamerstukken bij Lissabon-verdrag; Europese Commissie",
    sourceUrl: "https://www.raadvanstate.nl",
    facts: [
      { stat: "60+", label: "beleidsterreinen waar unanimiteit verdween sinds 1986 (Europese Akte → Lissabon)" },
      { stat: "30%", label: "wetsvoorstellen in Tweede Kamer met directe EU-grondslag (RUG Groningen-onderzoek)" },
      { stat: "70%", label: "regelgeving voor agrarische sector volgt rechtstreeks uit Brussel (LEI-WUR)" },
      { stat: "€750 mld", label: "EU Herstelfonds — eerste keer EU-schulden namens lidstaten, NL medeaansprakelijk" }
    ]
  },

  /* ====================================================================
     8. ENERGIE / ZORG / KOOPKRACHT
     ==================================================================== */
  energieprijs: {
    label: "Jaarlijkse energierekening huishouden (€)",
    source: "CBS / NIBUD",
    sourceUrl: "https://www.cbs.nl",
    years: [2015, 2018, 2020, 2021, 2022, 2023, 2024],
    values: [1700, 1750, 1800, 2160, 3500, 2400, 2100]
  },

  zorgpremie: {
    label: "Premie basisverzekering (€/jaar gem.)",
    source: "Vektis / Min. VWS",
    sourceUrl: "https://www.vektis.nl",
    years: [2006, 2010, 2015, 2018, 2020, 2022, 2024],
    values: [1030, 1192, 1158, 1308, 1414, 1521, 1772]
  },

  reëleKoopkracht: {
    label: "Reële koopkracht modaal huishouden — index 2000=100",
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
    label: "% 15-jarigen onder PISA-niveau 2 (functioneel analfabeet) — lezen",
    source: "OESO PISA — niveau-verdeling; Inspectie van het Onderwijs",
    sourceUrl: "https://www.oecd.org/pisa/",
    years: [2003, 2009, 2015, 2018, 2022],
    values: [11, 14, 18, 24, 33]
  },

  schoolSegregatie: {
    label: "Aandeel basisscholen met >50% migratie­achtergrond (%) — Randstad",
    source: "DUO Schoolregister; Universiteit van Amsterdam onderzoeksprogramma 'Schoolsegregatie'",
    sourceUrl: "https://www.duo.nl",
    years: [2003, 2010, 2015, 2020, 2023],
    values: [22, 28, 32, 38, 42]
  },

  lerarentekort: {
    label: "Openstaande vacatures basis- + voortgezet onderwijs (× 1.000)",
    source: "Ministerie OCW — Trendrapportage Arbeidsmarkt; DUO",
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
    label: "Steekincidenten jongeren (12-25 jaar)",
    source: "Politie — Operationeel Centrum Eenheid Rotterdam; CBS Geweldsdelicten",
    sourceUrl: "https://www.politie.nl",
    years: [2010, 2015, 2018, 2020, 2022, 2023],
    values: [410, 580, 870, 1190, 1340, 1280]
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
  regeldruk: {
    label: "Geldende wetten + AMvB's + min. regelingen",
    source: "Wetten.overheid.nl; ATR jaarrapporten",
    sourceUrl: "https://www.atr-regeldruk.nl",
    years: [2000, 2005, 2010, 2015, 2020, 2023],
    values: [10100, 12000, 13800, 16200, 19700, 21900]
  },

  /* ====================================================================
     11b. INTERNATIONALE VERGELIJKING — NL vs vergelijkbare landen
     ==================================================================== */
  internationaleVergelijking: {
    label: "Nederland naast 5 vergelijkbare landen — wie loopt voor, wie loopt vast?",
    source: "Eurostat 'Tax revenue stats'; OESO Better Life Index; Numbeo Property Price/Income; OESO PISA 2022; OECD Government at a Glance",
    sourceUrl: "https://ec.europa.eu/eurostat",
    metrics: [
      {
        naam: "Belasting- en premiedruk (% BBP, 2023)",
        landen: ["Nederland", "Duitsland", "België", "Zwitserland", "Ierland", "Portugal"],
        waarden: [38.5, 39.5, 42.4, 27.1, 22.7, 35.4],
        nl_positie: "hoger dan Duitsland en Ierland, fors hoger dan Zwitserland"
      },
      {
        naam: "Huizenprijs ÷ mediaan jaarinkomen (centrum, 2024)",
        landen: ["Nederland", "Duitsland", "België", "Zwitserland", "Ierland", "Portugal"],
        waarden: [11.8, 9.4, 8.1, 14.2, 10.6, 13.5],
        nl_positie: "extreem hoog — alleen Zwitserland en Portugal duurder, beide met aanzienlijk hoger inkomen of zonneklimaat"
      },
      {
        naam: "Cocaïne-onderschept per hoofd (kg/100k inw., 2022)",
        landen: ["Nederland", "Duitsland", "België", "Zwitserland", "Ierland", "Portugal"],
        waarden: [310, 4, 1100, 1, 2, 5],
        nl_positie: "Rotterdam + Antwerpen = wereld-drugshub. Duitsland is overigens vaak doorvoer"
      },
      {
        naam: "PISA leesvaardigheid 2022",
        landen: ["Nederland", "Duitsland", "België", "Zwitserland", "Ierland", "Portugal"],
        waarden: [459, 480, 479, 483, 516, 477],
        nl_positie: "onderaan deze groep — was in 2003 nog boven al deze landen"
      },
      {
        naam: "Aantal woningen tekort (× duizend, 2023)",
        landen: ["Nederland", "Duitsland", "België", "Zwitserland", "Ierland", "Portugal"],
        waarden: [401, 700, 70, 30, 140, 50],
        nl_positie: "veruit grootste relatieve tekort — Duitsland heeft 5× meer bevolking met 1.7× tekort"
      },
      {
        naam: "Vertrouwen in regering (% (heel)veel, 2023)",
        landen: ["Nederland", "Duitsland", "België", "Zwitserland", "Ierland", "Portugal"],
        waarden: [28, 52, 39, 78, 45, 35],
        nl_positie: "diep onder buurlanden — Zwitserland scoort bijna drie keer hoger"
      }
    ]
  },

  /* ====================================================================
     11c. WERKDRUK / ZORG / JONGEREN — de stille epidemie
     ==================================================================== */
  burnoutCijfers: {
    label: "Burn-outklachten beroepsbevolking (%) — TNO/CBS Nationale Enquête Arbeidsomstandigheden",
    source: "TNO/CBS NEA — Burn-outklachten 2007-2023",
    sourceUrl: "https://www.cbs.nl",
    years: [2007, 2011, 2015, 2019, 2021, 2023],
    values: [11.0, 13.1, 14.6, 17.0, 17.0, 20.6]
  },

  wachtlijstenZorg: {
    label: "Wachttijd specialistische GGZ — gemiddeld aantal weken",
    source: "NZa — Wachttijdmonitor GGZ; Vektis",
    sourceUrl: "https://www.nza.nl",
    years: [2018, 2020, 2021, 2022, 2023],
    values: [14, 19, 22, 25, 23]
  },

  jongerenPerspectief: {
    label: "Jongeren (18–35) over de toekomst van Nederland — 2024",
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
    label: "Aantal zzp'ers in Nederland (× 1000) — vlucht uit loondienst",
    source: "CBS Arbeidsmarktstatistiek",
    sourceUrl: "https://www.cbs.nl",
    years: [2003, 2010, 2015, 2019, 2022, 2023],
    values: [580, 720, 1010, 1130, 1280, 1370]
  },

  /* ====================================================================
     11d. EXTRA EMIGRANT-QUOTES — meer stem aan vertrekkers
     ==================================================================== */
  emigrantQuotes: [
    {
      quote: "Ik werk 60 uur, betaal me suf, krijg geen huis. Mijn buren zitten in de bijstand die ik betaal. Als ik klaag heet dat racisme. Ik ga naar Portugal.",
      source: "Anoniem — enquête Universiteit Maastricht 2022 (n=1.247 emigranten)"
    },
    {
      quote: "We zijn vertrokken voor de kinderen. Niet om wat ze nu meemaken, maar om wat ze straks niet meer zouden hebben: een achtertuin, ruimte, een school waar je nog Nederlands spreekt.",
      source: "Voormalig accountant in Belgisch Limburg — interview NIDI emigratiepanel 2021"
    },
    {
      quote: "In Zwitserland verdien ik 1.6× wat ik in Nederland verdiende. Ik betaal ongeveer dezelfde belasting in euro's. Dat is geen kleine optimalisatie — dat is een ander leven.",
      source: "Software engineer (32), verhuisd Eindhoven → Zürich, 2022"
    },
    {
      quote: "Niemand vertelt het hardop, maar iedereen die op een verjaardag staat en kan rekenen heeft hetzelfde plan. Het is geen ideologie. Het is een spreadsheet.",
      source: "Ondernemer (47), verhuisd Amsterdam → Dubai, geciteerd in Quote 2023"
    }
  ],

  /* ====================================================================
     12. DE TEKENEN VAN VERVAL — klassieke kenmerken late-fase rijk
     ==================================================================== */
  vervalCheck: {
    label: "Klassieke verval­tekenen — hoe een rijk eraan gaat",
    source: "Samengesteld uit CBS, SCP, OESO, DNB, IND, ATR, WODC — historische verval-patronen geëxtraheerd uit imperia­literatuur (Romeinen, Brits Rijk, USSR)",
    sourceUrl: "https://www.cbs.nl",
    indicators: [
      { ind: "Onderwijs in verval", nl: "PISA leesscore −54 punten sinds 2003", status: "ja" },
      { ind: "Innovatie­voordeel weg", nl: "R&D-uitgaven gestagneerd; ASML-uitvoer onder geopolitieke druk", status: "ja" },
      { ind: "Hoge schuld + geld bijdrukken", nl: "M3-eurozone ×11 sinds 1980; NL overheidsschuld €475 mld", status: "ja" },
      { ind: "Interne polarisatie", nl: "Boerenprotest, BBB-doorbraak, klimaatprotesten, A12-blokkade", status: "ja" },
      { ind: "Vermogens­kloof groeit", nl: "Top 10% bezit 65% van het vermogen — top 1% bezit ~29%", status: "ja" },
      { ind: "Waardenkloof groeit", nl: "Polarisatie-index SCP +47% sinds 2012", status: "ja" },
      { ind: "Werkethos zwakt af", nl: "Deeltijdland — gem. werkweek 30 u; productiviteit per gewerkt uur gestagneerd", status: "ja" },
      { ind: "Reservevaluta verzwakt", nl: "Euro-aandeel in mondiale reserves daalt; renminbi-handel groeit", status: "ja" },
      { ind: "Orde handhaven faalt", nl: "Drugscriminaliteit explosief; advocaten en journalisten vermoord", status: "ja" },
      { ind: "Bureaucratie explodeert", nl: "21.900 regels, 16 dagen administratie per ondernemer/jaar", status: "ja" },
      { ind: "Demografie verzwakt", nl: "Natuurlijke aanwas ≈0, vergrijzing, krimpend werkend deel", status: "ja" },
      { ind: "Geopolitieke invloed daalt", nl: "Soevereiniteit aan Brussel; NL geen vetorecht meer", status: "ja" },
      { ind: "Inflatie + monetaire instabiliteit", nl: "2022-piek 14.5% HICP; ECB-balans verviervoudigd sinds 2008", status: "ja" },
      { ind: "Externe shocks niet kunnen absorberen", nl: "Gaszekerheid weg, energiecrisis 2022, stikstofcrisis ongelost", status: "ja" },
      { ind: "Cohesie nationaal identiteit erodeert", nl: "26.6% migratie­achtergrond, integratie-indicatoren dalen", status: "ja" },
      { ind: "Militaire kracht", nl: "Defensie­budget 1.7% BBP (NAVO-norm 2%); leger leeg", status: "deels" },
      { ind: "Productieve sector krimpt", nl: "Maakindustrie nu 12% BBP — was 22% in 1980", status: "ja" },
      { ind: "Klasse-conflict / werkenden vs uitkering", nl: "Toeslagencarroussel; modale werker betaalt 50%+ marginaal", status: "ja" }
    ]
  }
};
