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
    { value: "36%", label: "voorgestelde belasting op ongerealiseerd rendement vermogen vanaf 2027, wereldwijd vrijwel uniek", source: "Wet werkelijk rendement Box 3, Min. Financiën" },
    { value: "x42", label: "huizenprijs sinds 1970, modaal salaris vermenigvuldigde slechts x7", source: "CBS, Kadaster, NIBUD" },
    { value: "28 → 36", label: "gemiddelde leeftijd waarop een Nederlander zijn eerste koopwoning verwerft (1995 naar 2024)", source: "Kadaster Starters­monitor, NVM kwartaalrapportages" },
    { value: "€600.000", label: "levenslange netto kosten van één gemiddelde niet-westerse asielmigrant", source: "WODC, J. van de Beek 2021" },
    { value: "71%", label: "van wie Nederland verlaat is hier nooit geboren, kwam, faalde, vertrok", source: "CBS Emigratie naar geboorteland 2023" },
    { value: "1,38", label: "Nederlands geboortecijfer 2024, vervanging vergt 2,1, demografische crisis loopt", source: "CBS Vruchtbaarheid 37422ned" },
    { value: "49%", label: "Nederlanders dat zich (zeer) eenzaam voelt, sinds 2008 met veertien procentpunt gestegen", source: "RIVM Eenzaamheidsmonitor 2024" },
    { value: "€1.500 mrd", label: "pensioenvermogen dat door WTP wordt herverdeeld, beleggingsrisico naar individu", source: "DNB en Pensioenfederatie" },
    { value: "459", label: "PISA-leesscore 2022, laagste ooit voor NL (was 513 in 2003)", source: "OESO PISA" },
    { value: "€9,2 mld", label: "netto Nederlandse afdracht aan Brussel in 2025 (was €1,5 mld in 2000)", source: "Min. Financiën Miljoenennota 2025" },
    { value: "22.500", label: "geldende wetten en regelingen in 2025 (was 10.100 in 2000)", source: "Wetten.overheid.nl en ATR" },
    { value: "9", label: "Nederlandse hoofdkantoren of beursfondsen die sinds 2020 vertrokken of vertrek overwegen", source: "AFM, KPMG Hoofdkantoren­monitor, FD" }
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
    label: "Hoeveel werktijd kost een dagelijks product, 1999 versus 2026",
    intro: "Modaal jaarsalaris is een bruto-begrip. Een biertje of pakje brood reken je echter af uit wat overblijft na de Belastingdienst, en daarom is netto besteedbaar inkomen de juiste maatstaf voor koopkracht. Het rekenkader hieronder maakt elke stap controleerbaar: van bruto naar netto, van jaar naar maand. De cards die volgen tonen voor tien dagelijkse producten hoeveel een modale Nederlander er per maand kon kopen, in 1999 en in 2026 naast elkaar. De rode pil is het koopkrachtverlies.",
    source: "CBS Statline Modaal jaarsalaris (historische reeks), OESO Taxing Wages 1999 en 2024, Belastingdienst tariefoverzichten, NIBUD prijspeil, CBS Prijzen consumenten (CPI), NS-tariefarchief, archieven supermarktbonnen 1999-2026",
    sourceUrl: "https://www.cbs.nl",
    modaal1999_bruto: 25000,
    modaal2026_bruto: 44000,
    modaal1999_netto: 17500,
    modaal2026_netto: 32500,
    voltijdsuren: 1700,
    rekenkader: [
      { label: "Modaal jaarsalaris brúto (CBS)",                          "1999": "€25.000", "2026": "€44.000" },
      { label: "1. Loonheffing (IB + premies volksverz.)",                "1999": "€7.500",  "2026": "€11.500" },
      { label: "2. ZVW inkomensafhankelijke bijdrage werknemer",          "1999": "€600",    "2026": "€2.340" },
      { label: "3. BTW + accijnzen + energiebelasting op consumptie",     "1999": "€2.500",  "2026": "€7.500" },
      { label: "4. Lokale en provinciale heffingen (OZB, MRB, water)",    "1999": "€450",    "2026": "€1.700" },
      { label: "Totale belasting- en premiedruk modaal (1+2+3+4)",        "1999": "€11.050 (44,2%)", "2026": "€23.040 (52,4%)" },
      { label: "Modaal jaarsalaris nétto besteedbaar (na loonheffing)",   "1999": "€17.500", "2026": "€32.500" },
      { label: "Modaal netto besteedbaar per maand",                      "1999": "€1.458",  "2026": "€2.708" }
    ],
    producten: [
      { naam: "Pakje shag (50 gram)",                                prijs1999: 2.50, prijs2026: 13.50, eenheid: "pakjes" },
      { naam: "Pakje sigaretten (20 stuks)",                          prijs1999: 2.95, prijs2026: 11.00, eenheid: "pakjes" },
      { naam: "Kop koffie buiten de deur",                            prijs1999: 1.25, prijs2026: 4.00, eenheid: "koppen" },
      { naam: "Patatje friet bij de snackbar",                        prijs1999: 1.20, prijs2026: 3.50, eenheid: "patatjes" },
      { naam: "Pakje roomboter (250 gram)",                            prijs1999: 1.20, prijs2026: 3.50, eenheid: "pakjes" },
      { naam: "Heel volkorenbrood",                                    prijs1999: 1.20, prijs2026: 3.40, eenheid: "broden" },
      { naam: "Pilsje in het café (30 cl)",                            prijs1999: 1.65, prijs2026: 4.50, eenheid: "biertjes" },
      { naam: "Treinkaartje Amsterdam-Rotterdam (enkele reis, 2e kl.)", prijs1999: 8.30, prijs2026: 19.50, eenheid: "ritjes" },
      { naam: "Big Mac",                                                prijs1999: 2.50, prijs2026: 5.50, eenheid: "Big Macs" },
      { naam: "Pizza Margherita in restaurant",                         prijs1999: 7.00, prijs2026: 15.00, eenheid: "pizza's" }
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

  box3Voorstel: {
    label: "Voorstel Box 3, 36% belasting op werkelijk rendement, inclusief ongerealiseerd rendement",
    source: "Wetsvoorstel Wet werkelijk rendement Box 3, ingediend bij Tweede Kamer december 2024; Min. Financiën dossier 36 706; Hoge Raad Kerstarrest 2021; uitvoerings­toets Belastingdienst 2025; commentaar NOB, Bond voor Belastingbetalers, VEB, Eumedion",
    sourceUrl: "https://www.rijksoverheid.nl/onderwerpen/box-3",
    intro: "Onder het voorgestelde stelsel wordt de Nederlandse vermogensbelasting in Box 3 omgezet naar een heffing van 36% op het werkelijke rendement, inclusief óngerealiseerd rendement. Wie aandelen, beleggings­fondsen of verhuurd vastgoed bezit, betaalt jaarlijks belasting over de waarde­stijging, ook als hij niets verkocht heeft. Het wetsvoorstel is in december 2024 ingediend bij de Tweede Kamer. Beoogde invoer­datum was 1 januari 2025, vervolgens uitgesteld naar 2027, en gezien recente uitvoerings­problemen bij de Belastingdienst en de complexiteit van de waarderings­logica wordt 2028 inmiddels door diverse fiscaal­specialisten als realistischer genoemd. De systematiek zelf is in de wandelgang vrijwel uniek voor particulier vermogen wereldwijd, en sloopt het mechanisme dat lange­termijn vermogensopbouw mogelijk maakt: samengestelde rente.",
    onrechtvaardig: [
      { titel: "Papierwinst is geen winst", uitleg: "Wie een aandelenportefeuille bezit die in een jaar 8% stijgt, heeft géén euro op zijn rekening. Toch moet hij in december belasting betalen alsof hij die winst incasseerde. Als de koers in januari weer zakt, blijft de belastingschuld staan." },
      { titel: "Geen verrekening van verliesjaren (volledig)", uitleg: "Beleggen kent slechte jaren. Onder de voorgestelde wet kan een verlies niet onbeperkt worden teruggewenteld. Wie 2025 +30% maakt en 2026 -25%, betaalt eerst de heffing, en hoeft de tweede klap maar deels te verrekenen." },
      { titel: "Liquiditeit­dwang", uitleg: "Bij een vastgoed­portefeuille of MKB-aandelen­pakket ontbreekt vaak cash. De Belastingdienst eist hem niettemin. Resultaat: gedwongen verkoop op een onbestendig moment, juist door fiscaal beleid." },
      { titel: "Wereldwijd vrijwel uniek", uitleg: "Geen enkele OESO-economie belast structureel ongerealiseerd rendement op particulier vermogen. Noorwegen probeerde het, met als zichtbaar gevolg een uittocht van vermogenden naar Zwitserland en Italië. Nederland kijkt daar niet naar." }
    ],
    facts: [
      { stat: "36%", label: "tarief over werkelijk rendement (rente, dividend, huur, koers­winst)" },
      { stat: "ongerealiseerd", label: "óók over waardestijging die nog niet is verzilverd, op aandelen, vastgoed en crypto" },
      { stat: "€57.000", label: "heffingsvrij vermogen per persoon (gehuwd: dubbel)" },
      { stat: "2027 of later", label: "beoogde inwerkingtreding, het wetsvoorstel ligt sinds december 2024 in de Tweede Kamer, eerdere ambitie 2025 is al uitgesteld" },
      { stat: "wereldwijd uniek", label: "geen enkel ander OESO-land belast structureel ongerealiseerd rendement op particulier vermogen" },
      { stat: "€14.400", label: "voorbeeld: portefeuille €500.000 stijgt 8% zonder verkoop, u betaalt over €40.000 papier­winst" }
    ],
    compoundEffect: {
      label: "Compound interest gekortwiekt, €100.000 startkapitaal bij 7% jaarlijks rendement",
      intro: "Vermogensopbouw werkt via samengestelde groei: het rendement van vorig jaar genereert dit jaar zelf nieuw rendement. Albert Einstein zou het 'het achtste wereldwonder' hebben genoemd. Belast je dat rendement elk jaar weg, dan blijft er minder over om verder te groeien. Het verschil over een loopbaan is dramatisch.",
      jaren: [0, 5, 10, 15, 20, 25, 30, 35, 40],
      gerealiseerdEinde: [100000, 140255, 196715, 275903, 386968, 542743, 761226, 1067659, 1497446],
      ongerealiseerdJaarlijks: [100000, 124488, 154974, 192895, 240093, 298855, 372058, 463187, 576623],
      eindcijfers: {
        na_30jr_huidig_netto: 522785,
        na_30jr_nieuw_netto: 372058,
        na_40jr_huidig_netto: 996765,
        na_40jr_nieuw_netto: 576623
      }
    }
  },

  demografie: {
    label: "Het ongemakkelijke verhaal achter het migratiebeleid",
    source: "UN DESA Population Division 'Replacement Migration: Is It a Solution to Declining and Ageing Populations?' (maart 2000); NIDI 'Verkenning bevolking 2050'; CBS PRIMOS-prognoses 2024; CBS Statline Bevolking naar leeftijd (37422ned, 70022ned); Eurostat 'EUROPOP2023' populatie­projecties; Min. SZW dossier AOW",
    sourceUrl: "https://www.un.org/development/desa/pd/sites/www.un.org.development.desa.pd/files/migration/migration_replacement.pdf",
    intro: "Het migratiedebat in Nederland wordt al twintig jaar gevoerd alsof het over cultuur of veiligheid gaat. Beide spelen, maar het echte grote verhaal eronder is zelden expliciet onderwerp van debat: Nederland vergrijst razendsnel en krijgt te weinig kinderen. Zonder beleidsmatige correctie zakt het aantal werkenden per gepensioneerde van 2,8 naar 1,7 in 2050. De verzorgingsstaat, het pensioenstelsel en de zorg drijven op dat aantal. In 2000 publiceerde de Verenigde Naties een rapport dat dit feilloos in beeld bracht: Replacement Migration. De conclusie was zo politiek explosief dat het in het brede publieke debat vrijwel nooit wordt geciteerd, ook al ligt het sinds 25 jaar publiek op internet."
  },

  aandeel65plus: {
    label: "Aandeel Nederlanders ouder dan 65 (% van bevolking), 1950-2050",
    source: "CBS Statline Bevolking naar leeftijd, PRIMOS-prognose 2024, Eurostat EUROPOP2023",
    sourceUrl: "https://www.cbs.nl/nl-nl/cijfers/detail/37422ned",
    years:  [1950, 1970, 1990, 2000, 2010, 2020, 2024, 2030, 2040, 2050],
    values: [7.7,  10.2, 12.8, 13.6, 15.3, 19.5, 21.3, 24.0, 26.5, 28.0],
    note: "Stippellijn vanaf 2024 is PRIMOS-prognose (middenscenario). In 2050 is bijna drie op de tien Nederlanders ouder dan 65."
  },

  supportRatio: {
    label: "Aantal werkende leeftijden (20-64) per persoon van 65+, Potential Support Ratio",
    source: "CBS Statline Bevolking; NIDI 'Verkenning bevolking 2050'; UN World Population Prospects 2022",
    sourceUrl: "https://www.nidi.nl",
    years:  [1950, 1970, 1990, 2000, 2010, 2020, 2024, 2030, 2040, 2050],
    metMigratie:  [7.4, 6.3, 5.0, 4.4, 4.0, 3.2, 2.8, 2.4, 2.1, 2.0],
    zonderMigratie: [7.4, 6.3, 5.0, 4.4, 4.0, 3.2, 2.8, 2.3, 1.9, 1.7],
    note: "De Potential Support Ratio (PSR) geeft het aantal personen van werkende leeftijd dat per persoon van 65+ beschikbaar is om te werken, belasting te betalen en de verzorgingsstaat te dragen. Een PSR onder 2 wordt internationaal beschouwd als kritiek voor het in stand houden van pensioen- en zorgstelsels."
  },

  vnReplacementCijfers: {
    label: "VN-rapport 'Replacement Migration' (2000) - kerncijfers voor de EU-15",
    source: "United Nations DESA Population Division, 'Replacement Migration: Is It a Solution to Declining and Ageing Populations?' (ST/ESA/SER.A/206), maart 2000, hoofdstuk over EU-15",
    sourceUrl: "https://www.un.org/development/desa/pd/sites/www.un.org.development.desa.pd/files/migration/migration_replacement.pdf",
    facts: [
      { stat: "47 mln", label: "extra migranten netto die de EU-15 (Nederland inbegrepen) tussen 1995 en 2050 zou moeten opnemen om de totale bevolking op het niveau van 1995 te houden" },
      { stat: "79 mln", label: "extra migranten netto om de beroepsbevolking 15-64 op het niveau van 1995 te houden" },
      { stat: "ca. 700 mln", label: "extra migranten netto om de Potential Support Ratio op het niveau van 1995 te houden, vrijwel ondenkbaar in de praktijk" },
      { stat: "constante AOW-leeftijd", label: "is volgens hetzelfde rapport alleen mogelijk via combinatie van hoge migratie en latere pensionering" },
      { stat: "VN-conclusie 2000", label: "'migratie alleen is geen oplossing voor vergrijzing, maar afwezigheid van migratie zal de gevolgen aanzienlijk verergeren'" }
    ]
  },

  nlMigratiescenarios: {
    label: "Wat heeft Nederland nodig om de verzorgingsstaat overeind te houden? Drie scenario's tot 2050",
    source: "NIDI 'Verkenning bevolking 2050' (2024); CBS PRIMOS Bevolkingsprognose 2024-2070; eigen berekening van benodigde netto migratie op basis van UN-methodologie toegepast op CBS-uitgangscijfers",
    sourceUrl: "https://www.nidi.nl",
    scenarios: [
      { doel: "Stabiel totaal aantal inwoners", nodig: "+85.000 per jaar", commentaar: "Ongeveer het huidige saldo. Bevolking blijft rond 18 miljoen. PSR zakt alsnog naar circa 2,0 in 2050." },
      { doel: "Stabiele beroepsbevolking 15-64", nodig: "+135.000 per jaar", commentaar: "60% boven het huidige saldo. Bevolking groeit naar circa 19,8 miljoen in 2050. PSR zakt naar circa 2,1." },
      { doel: "Stabiele PSR op huidige 2,8", nodig: "+500.000 per jaar", commentaar: "Bijna zes keer het huidige saldo. Bevolking groeit naar circa 30 miljoen in 2050. Onhaalbaar qua woningmarkt, infrastructuur en draagvlak; expliciet niet voorgesteld in beleid, wél de impliciete eis voor een onveranderd pensioenstelsel." }
    ]
  },

  pensioenStelsel: {
    label: "Wet Toekomst Pensioenen (WTP), risico van collectief naar individueel",
    source: "Min. SZW 'Wet Toekomst Pensioenen' (juli 2023, implementatie tot 2028); DNB pensioendekkingsmonitor; Pensioenfederatie; CPB analyse pensioenstelsel",
    sourceUrl: "https://www.rijksoverheid.nl/onderwerpen/pensioen",
    intro: "Per 1 juli 2023 is in Nederland de Wet Toekomst Pensioenen in werking getreden. Alle pensioenfondsen krijgen tot 1 januari 2028 om over te stappen van een stelsel met collectief gegarandeerde uitkering naar een stelsel van individuele potten met variabele uitkering. Het beleggingsrisico verschuift daarmee van fonds naar deelnemer. Het Nederlandse pensioenvermogen van bijna €1.500 miljard wordt eenmalig herverdeeld. Voor oudere werknemers betekent dat in veel gevallen een lagere te bereiken uitkering; voor jongere werknemers in theorie een hogere, mits beurzen meewerken.",
    facts: [
      { stat: "€1.500 mrd", label: "Nederlands pensioenvermogen dat onder de nieuwe wet wordt herverdeeld" },
      { stat: "juli 2023", label: "inwerkingtreding WTP, implementatie pensioenfondsen tot 1 januari 2028" },
      { stat: "collectief naar individueel", label: "elke deelnemer krijgt eigen pensioenpot, beleggingsrisico verschuift naar persoon" },
      { stat: "10 mln+", label: "Nederlanders die direct of indirect met de transitie te maken krijgen" },
      { stat: "deelnemer draagt risico", label: "lage dekkings­graden raken nu rechtstreeks de uitkering, niet meer (alleen) de premies van werkenden" }
    ]
  },

  aowLeeftijd: {
    label: "AOW-leeftijd Nederland (jaar)",
    source: "SVB en Rijksoverheid; Min. SZW",
    sourceUrl: "https://www.svb.nl/nl/aow/aow-leeftijd",
    years:  [1957, 2000, 2013, 2018, 2022, 2025, 2027, 2030, 2040],
    values: [65,   65,   65,   66,   66.6, 67,   67.5, 68.0, 70.0],
    note: "Verhoging gekoppeld aan stijgende levensverwachting via SVB-formule; vanaf 2025 67 jaar; projectie 2040 op basis van CBS-levensverwachting"
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
     4d. HOOFDKANTOREN-VLUCHT EN PRODUCTIVITEITSTAGNATIE
     ==================================================================== */
  hoofdkantorenVlucht: {
    label: "Nederlandse hoofdkantoren die vertrokken of vertrek overwogen, 2018 tot 2026",
    source: "AFM register, AEX-mutaties, Het Financieele Dagblad, NRC, persberichten betrokken bedrijven, KPMG 'Hoofdkantoren­monitor'",
    sourceUrl: "https://www.afm.nl",
    intro: "Hoofdkantoren zijn de hoogwaardige werkgelegenheid van een economie: directies, juristen, fiscalisten, R&D-strategie. Het zijn precies de banen die een land het meest zou willen behouden. Sinds 2018 verloor Nederland in hoog tempo zijn topbedrijven aan Londen, Zürich en Frankfurt. Vrijwel telkens noemden de betrokkenen één combinatie van oorzaken: dividendbelasting, ondernemers­klimaat, politieke onvoorspelbaarheid en hogere fiscale druk dan in vergelijkbare landen.",
    items: [
      { jaar: 2020, bedrijf: "Unilever",          uitkomst: "Hoofdkantoor naar Londen, na fusiediscussie en dividendbelasting-debacle" },
      { jaar: 2021, bedrijf: "Shell",             uitkomst: "Hoofdkantoor Den Haag naar Londen, naamswijziging Royal Dutch Shell naar Shell plc" },
      { jaar: 2022, bedrijf: "DSM",               uitkomst: "Fusie met Firmenich, hoofdkantoor naar Kaiseraugst (Zwitserland)" },
      { jaar: 2023, bedrijf: "Boskalis",          uitkomst: "Beursnotering Amsterdam beëindigd na overname HAL" },
      { jaar: 2024, bedrijf: "Wolters Kluwer",    uitkomst: "Sterk groeiende VK-noteringsoverweging, hoofdkantoor formeel nog NL" },
      { jaar: 2024, bedrijf: "ASML",              uitkomst: "Eindhovense top eist publiekelijk dat 'vestigingsklimaat verbetert', anders 'gevolgen onvermijdelijk'" },
      { jaar: 2024, bedrijf: "Heineken",          uitkomst: "Nederlandse hoofdfunctie verlies, internationale leiding deels naar Singapore en Londen" },
      { jaar: 2025, bedrijf: "Booking.com",       uitkomst: "Discussie over fiscaal vertrek, actieve lobby voor speciale regelingen" },
      { jaar: 2025, bedrijf: "Familiebedrijven en MKB+", uitkomst: "Toenemende migratie naar België, Zwitserland en Dubai, gemeld door belastingadviseurs (BDO, EY)" }
    ]
  },

  productiviteit: {
    label: "Arbeidsproductiviteit per gewerkt uur Nederland (€, prijspeil 2024)",
    source: "OESO Productivity Statistics; Eurostat 'GDP per hour worked'; CBS arbeidsproductiviteit",
    sourceUrl: "https://stats.oecd.org/Index.aspx?DataSetCode=PDB_LV",
    years: [1980, 1990, 2000, 2008, 2015, 2020, 2024],
    values: [42, 50, 60, 68, 68, 69, 69]
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
     5a. ZES CRISES VAN INDIVIDUALISERING
     ==================================================================== */
  individualiseringCrises: {
    label: "Zes crises die volgen uit zestig jaar individualisering",
    source: "RIVM eenzaamheidsmonitor; CBS Vrijwilligerswerk; CBS Vruchtbaarheid; CBS Eenoudergezinnen; CBS Doodsoorzakenstatistiek; SCP Mentale gezondheid jongeren; Trimbos-instituut",
    sourceUrl: "https://www.rivm.nl",
    intro: "Secularisering en ontkerkelijking zijn op zichzelf geen probleem. Het probleem is wat in hun plaats kwam: individualisering zonder vervangende gemeenschap. Het Nederland van losse individuen heeft niet meer vrijheid opgeleverd, het heeft een keten van meetbare crises voortgebracht. Hieronder zes ervan, allemaal met cijfers die de afgelopen vijftien jaar dramatisch zijn verslechterd."
  },

  eenzaamheid: {
    label: "Aandeel Nederlanders dat zich (zeer) eenzaam voelt (%)",
    source: "RIVM Eenzaamheids­monitor; CBS Belevingen 82378",
    sourceUrl: "https://www.rivm.nl/leefstijl/eenzaamheid",
    years: [2008, 2012, 2016, 2019, 2020, 2022, 2024],
    values: [35, 39, 43, 46, 51, 47, 49]
  },

  vrijwilligerswerk: {
    label: "Aandeel volwassenen actief in vrijwilligerswerk (%)",
    source: "CBS Vrijwilligerswerk en informele hulp; SCP Sociale staat",
    sourceUrl: "https://www.cbs.nl",
    years: [2008, 2012, 2015, 2018, 2020, 2022, 2024],
    values: [38, 36, 32, 30, 28, 27, 26]
  },

  geboortecijfer: {
    label: "Totaal vruchtbaarheidscijfer Nederland (TFR, kinderen per vrouw)",
    source: "CBS Vruchtbaarheid; Eurostat fertility rates",
    sourceUrl: "https://www.cbs.nl/nl-nl/cijfers/detail/37422ned",
    years: [1970, 1980, 1990, 2000, 2010, 2015, 2020, 2023, 2024],
    values: [2.57, 1.60, 1.62, 1.72, 1.79, 1.66, 1.55, 1.43, 1.38],
    drempel: 2.1
  },

  eenoudergezinnen: {
    label: "Aantal eenoudergezinnen Nederland (×1.000)",
    source: "CBS Huishoudens",
    sourceUrl: "https://www.cbs.nl",
    years: [2000, 2005, 2010, 2015, 2020, 2024],
    values: [430, 488, 555, 620, 720, 800]
  },

  suicideJongeren: {
    label: "Suïcide onder 15- tot 25-jarigen Nederland (aantal per jaar)",
    source: "CBS Doodsoorzakenstatistiek; Trimbos-instituut Jongeren­monitor; Stichting 113 Zelfmoordpreventie",
    sourceUrl: "https://www.113.nl",
    years: [2010, 2014, 2018, 2020, 2022, 2023, 2024],
    values: [110, 148, 200, 218, 235, 240, 235]
  },

  mentaleKlachtenJongeren: {
    label: "Aandeel 18- tot 25-jarigen met mentale klachten (%)",
    source: "Trimbos-instituut Monitor Mentale Gezondheid; CBS Gezondheids­enquête",
    sourceUrl: "https://www.trimbos.nl",
    years: [2008, 2012, 2017, 2020, 2022, 2024],
    values: [11, 14, 19, 23, 25, 26]
  },

  /* ====================================================================
     5b. IDENTITEIT, van zuilen naar leegte (en één doorgroeiende identiteit)
     ==================================================================== */
  religieuzeAffiliatie: {
    label: "Religieuze affiliatie Nederlandse bevolking (%), op basis van religieuze achtergrond",
    source: "CBS Religieuze betrokkenheid (zelfrapportage), aangevuld met PEW Research 'Europe's Growing Muslim Population' 2017 voor moslim­achtergrond, SCP 'God in Nederland' (Bernts en Berghuijs), KASKI Radboud Universiteit, NIDI demografische projecties",
    sourceUrl: "https://www.pewresearch.org/religion/2017/11/29/europes-growing-muslim-population/",
    years: [1960, 1970, 1980, 1990, 2000, 2010, 2017, 2024],
    geenReligie:    [5, 18, 35, 42, 47, 50, 51, 55],
    katholiek:      [40, 36, 28, 23, 19, 17, 22, 17],
    protestant:     [38, 32, 22, 19, 17, 14, 15, 12],
    overigChristen: [10, 8, 7, 6, 6, 6, 6, 5],
    islam:          [0.1, 0.4, 2.0, 3.5, 5.2, 6.3, 7.0, 7.8]
  },

  kerkgangData: {
    label: "Wekelijks kerkbezoek Nederland (%)",
    source: "CBS Religieuze betrokkenheid; SCP 'God in Nederland'",
    sourceUrl: "https://www.cbs.nl",
    years: [1960, 1975, 1985, 1995, 2005, 2015, 2020, 2023],
    values: [60, 30, 22, 17, 13, 10, 7, 5]
  },

  islamGroei: {
    label: "Aandeel mensen met islamitische achtergrond, heel Nederland versus de vier grote steden (G4)",
    source: "PEW Research Center 'Europe's Growing Muslim Population' 2017; CBS Statline Bevolking naar migratieachtergrond per gemeente (37325ned); gemeentelijke statistieken Amsterdam (OIS), Rotterdam (Onderzoek010), Den Haag (DSO), Utrecht (DataU); NIDI 'Verkenning bevolking 2050'; eigen extrapolatie 2075 en 2100 op basis van vrouwelijke vruchtbaarheid per herkomstgroep (CBS 37422ned) en gemiddeld netto migratiesaldo 2010-2024",
    sourceUrl: "https://www.pewresearch.org/religion/2017/11/29/europes-growing-muslim-population/",
    years: [1971, 1980, 1990, 2000, 2010, 2020, 2024, 2050, 2075, 2100],
    nl_totaal: [0.4, 2.0, 3.5, 5.2, 6.3, 7.5, 8.5, 14.5, 19, 25],
    g4: [1.0, 4.5, 8.0, 12.0, 14.5, 16.5, 18.5, 30, 38, 45],
    methodologie: "De cijfers zijn gebaseerd op herkomst (geboorteland van persoon of ouders uit een land met moslim­meerderheid). Zelfidentificatie van religieuze betrokkenheid (CBS) ligt lager omdat een deel van de tweede en derde generatie zich seculier noemt. Toch wijst onderzoek uit dat circa drie op de vier mensen met islamitische achtergrond zich religieus blijft noemen, óók in de tweede generatie. Extrapolatie 2050: PEW high scenario (15,2%) + recente Syrische en Afghaanse instroom. 2075 en 2100: eigen rekenmodel met behoud van huidige TFR-verhouding (zie grafiek hieronder) en netto migratiesaldo van 50.000 per jaar uit moslim-land. Bij lagere migratie en convergerende TFR komen de cijfers lager uit, bij hogere instroom hoger.",
    note: "G4 = Amsterdam, Rotterdam, Den Haag, Utrecht. Inwoners samen 2,4 miljoen, ongeveer 13% van Nederland."
  },

  tfrPerGroep: {
    label: "Totaal vruchtbaarheidscijfer per herkomstgroep Nederland (TFR, kinderen per vrouw)",
    source: "CBS Statline Vruchtbaarheid naar herkomstgroep (37422ned, 2022); SCP demografische rapporten; NIDI",
    sourceUrl: "https://www.cbs.nl/nl-nl/cijfers/detail/37422ned",
    groepen: ["Nederlandse achtergrond", "Marokkaans (1e gen)", "Turks (1e gen)", "Surinaams", "Somalisch", "Eritrees", "Syrisch (1e gen, sinds 2015)"],
    waarden: [1.38, 2.10, 1.82, 1.55, 3.20, 3.05, 3.40],
    drempel: 2.10,
    note: "Voor demografische vervanging is een TFR van 2,1 nodig. Nederlandse vrouwen zitten daar al sinds 1972 onder, in 2024 zelfs op 1,38. Mensen met een islamitische achtergrond zitten gemiddeld rond 2,3 (1e generatie), 1,9 (2e generatie). Het verschil tussen 1,4 en 2,3 betekent: elke generatie verdubbelt de relatieve omvang van de islamitische bevolking ten opzichte van de autochtone."
  },

  religieusBijJongeren: {
    label: "Aandeel 18 tot 34-jarigen dat zich (sterk) religieus noemt, per achtergrond (%)",
    source: "SCP 'Religie en migratie' 2022; WRR 'Samenleven in verscheidenheid' 2020; Universiteit Utrecht onderzoek tweede generatie",
    sourceUrl: "https://www.scp.nl",
    groepen: ["Nederlandse achtergrond", "Surinaamse achtergrond", "Turkse 2e gen.", "Marokkaanse 2e gen.", "Syrische achtergrond"],
    percentages: [25, 56, 75, 79, 88]
  },

  identiteitFacts: {
    label: "Het identiteitsvacuüm en de doorgroeiende identiteit in cijfers",
    source: "CBS Religieuze betrokkenheid; KASKI Radboud Universiteit; SCP 'God in Nederland'; PEW Research 'Europe's Growing Muslim Population' 2017; RIVM Eenzaamheids­monitor; Trimbos Jeugdmonitor",
    facts: [
      { stat: "60% naar 5%", label: "wekelijks kerkbezoek tussen 1960 en 2023 (CBS, SCP)" },
      { stat: "5% naar 55%", label: "Nederlanders zonder enige religieuze affiliatie (CBS Religieuze betrokkenheid)" },
      { stat: "ca. 800", label: "kerken zijn sinds 2000 gesloten of herbestemd (KASKI Radboud)" },
      { stat: "ca. 525", label: "moskeeën in Nederland anno 2024 (in 1980 nog 150) (CBS en CMO)" },
      { stat: "×20", label: "groei van het aandeel mensen met islamitische achtergrond sinds 1971 (PEW + CBS migratieachtergrond)" },
      { stat: "ca. 19%", label: "aandeel in de vier grote steden anno 2024, projectie 2050 rond 30% (CBS gemeenten, NIDI)" },
      { stat: "79%", label: "tweede generatie Marokkaans-Nederlandse jongeren noemt zich (sterk) religieus, tegen 25% bij Nederlands-Nederlandse leeftijdsgenoten (SCP 'Religie en migratie' 2022)" },
      { stat: "1,38 vs 2,3", label: "geboortecijfer Nederlandse achtergrond versus gemiddelde voor islamitische achtergrond (CBS 37422ned)" }
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
    label: "Steekincidenten met jongeren (12 tot 25 jaar) Nederland, 2010 tot 2022",
    source: "Politie Nederland Operationeel Centrum (jaarcijfers landelijke wapenincidenten); CBS Geweldsdelicten naar leeftijdsgroep; Erasmus Universiteit onderzoeksprogramma Jeugd­geweld",
    sourceUrl: "https://www.politie.nl",
    years: [2010, 2013, 2015, 2018, 2020, 2022],
    values: [410, 490, 580, 870, 1190, 1340]
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
    label: "Wat de overheid je sinds 2008 heeft voorgeschreven, verboden, gefiscaliseerd of bureaucratisch verplicht. Niet uitputtend.",
    source: "Belastingdienst tariefoverzichten; Ministerie van VWS dossier preventie­akkoord; Min. EZK; Min. IenW dossier mobiliteit; Min. LNV; Staatsblad publicatieoverzicht; Rijksoverheid.nl regeerakkoorden 2017-2024; Tweede Kamer wetsdossiers; ATR (Adviescollege Toetsing Regeldruk) jaarrapporten 2018-2024; Eumedion; VNO-NCW regeldruk­monitor",
    sourceUrl: "https://www.rijksoverheid.nl",
    categorieen: [
      {
        groep: "Roken en tabak",
        items: [
          { jaar: 2008, regel: "Rookverbod in de horeca", bron: "Tabakswet 2008, Staatsblad" },
          { jaar: 2014, regel: "Wettelijke leeftijdsgrens tabak naar 18 jaar", bron: "Min. VWS" },
          { jaar: 2014, regel: "Rookverbod op alle schoolterreinen", bron: "Min. VWS preventieakkoord" },
          { jaar: 2020, regel: "Verplichte 'plain packaging', geen logo's, alleen ziektewaarschuwingen", bron: "EU-richtlijn tabaksproducten, Staatsblad 2020" },
          { jaar: 2020, regel: "Verbod op tabaksautomaten in horeca", bron: "Min. VWS" },
          { jaar: 2022, regel: "Rookverbod op alle openbare plekken inclusief speeltuinen, sportvelden, zorgterreinen", bron: "Wet uitbreiding rookverboden" },
          { jaar: 2024, regel: "Verbod op tabaksverkoop in supermarkten en webshops", bron: "Min. VWS, ingegaan 1 juli 2024" },
          { jaar: 2024, regel: "Accijnsverhoging pakje sigaretten ongeveer €8 naar ruim €11", bron: "Belastingplan 2024, Belastingdienst" },
          { jaar: 2025, regel: "Aankondiging verbod tabaksverkoop tankstations vanaf 2030", bron: "Min. VWS aankondiging Tweede Kamer 2025" }
        ]
      },
      {
        groep: "Alcohol",
        items: [
          { jaar: 2014, regel: "Wettelijke leeftijdsgrens alcohol naar 18 jaar", bron: "Drank- en Horecawet" },
          { jaar: 2014, regel: "Verbod op alcoholverkoop in tankstations en zorgcentra", bron: "Drank- en Horecawet" },
          { jaar: 2014, regel: "Happy hour-verbod (geen kortingen meer dan 25%)", bron: "Drank- en Horecawet" },
          { jaar: 2021, regel: "Verbod op 'blurring': kappers, sportclubs en boekhandels mogen geen alcohol meer schenken", bron: "Alcoholwet 2021" },
          { jaar: 2021, regel: "Verbod op late bezorging van alcohol via apps", bron: "Alcoholwet 2021" },
          { jaar: 2024, regel: "Verbod op bonus- en kortingacties op alcohol in supermarkten", bron: "Alcoholwet aanpassing 2024" },
          { jaar: 2024, regel: "Accijnsverhoging bier +16,2% en wijn", bron: "Belastingplan 2024" },
          { jaar: 2025, regel: "Discussie verplichte gezondheidswaarschuwingen op alcoholverpakkingen", bron: "Min. VWS, ingediend in TK 2025" }
        ]
      },
      {
        groep: "Eten en voedsel",
        items: [
          { jaar: 2018, regel: "Schijf van Vijf herzien naar plantaardiger dieet, overheidskantines moeten 'volgen'", bron: "Voedingscentrum / Min. LNV" },
          { jaar: 2018, regel: "Verbod op kindermarketing voor ongezond eten in scholen", bron: "Reclame Code Commissie" },
          { jaar: 2024, regel: "Verbruiksbelasting frisdrank verdrievoudigd van €8,83 naar €26,13 per hectoliter", bron: "Belastingplan 2024" },
          { jaar: 2024, regel: "Verbod 'kindermarketing' voor ongezonde producten in bredere zin", bron: "Reclame Code 2024" },
          { jaar: 2024, regel: "Stikstof­onteigening landbouwbedrijven (NPLG, doelstelling 11.200 bedrijven uitkopen)", bron: "Min. LNV / Min. Stikstof" },
          { jaar: 2024, regel: "Verplichte CO2-rapportage werkgever 100+ medewerkers (WPM)", bron: "Min. IenW, ingegaan 1 jan 2024" },
          { jaar: 2025, regel: "Aankondiging vleestaks-onderzoek, discussie 'true price' op vlees", bron: "Min. LNV en CBS 'echte prijs' onderzoek" },
          { jaar: 2025, regel: "Verplichte Nutri-Score op verpakkingen", bron: "Min. VWS Nutri-Score regeling" },
          { jaar: 2023, regel: "Verbod toepassen pesticide rondom scholen en sportvelden", bron: "College voor de toelating van gewasbeschermingsmiddelen (Ctgb)" }
        ]
      },
      {
        groep: "Auto, brandstof en mobiliteit",
        items: [
          { jaar: 1996, regel: "Introductie energiebelasting op elektriciteit en gas", bron: "Wet belastingen op milieugrondslag (WBM)" },
          { jaar: 2012, regel: "BTW algemeen tarief omhoog naar 21%, ook op auto-onderhoud, banden en parkeren", bron: "Belastingplan 2012" },
          { jaar: 2014, regel: "BPM-tarieven verhoogd, vooral op auto's met hogere CO2-uitstoot", bron: "Belastingplan 2014" },
          { jaar: 2018, regel: "Verbod nieuwe gasaansluitingen bij nieuwbouw", bron: "Gaswet artikel 10 (2018)" },
          { jaar: 2020, regel: "Snelheidslimiet 100 km/u overdag op alle snelwegen", bron: "Min. IenW stikstofbeleid" },
          { jaar: 2024, regel: "Accijns benzine €0,82 per liter (ca. 46% van de pompprijs)", bron: "Belastingdienst tarief milieubelastingen 2024" },
          { jaar: 2024, regel: "Milieuzone-uitbreiding in 15 grote steden, ouder dieselverbod", bron: "Gemeenten Amsterdam, Rotterdam, Utrecht e.a." },
          { jaar: 2025, regel: "Verbod e-bike onder 14 jaar in diverse gemeenten", bron: "Lokale gemeenteraden 2024-2025" },
          { jaar: 2026, regel: "Vrachtwagenheffing per kilometer ingevoerd", bron: "Wet vrachtwagenheffing 2022, implementatie 2026" },
          { jaar: 2035, regel: "Verbod op verkoop nieuwe benzine- en dieselauto's", bron: "EU-besluit 2023, ETS-uitbreiding" }
        ]
      },
      {
        groep: "Wonen, energie en duurzaamheid",
        items: [
          { jaar: 2008, regel: "Verplicht energielabel bij verkoop woning", bron: "Min. BZK" },
          { jaar: 2018, regel: "Verplicht energielabel C voor kantoren, anders verhuurverbod", bron: "Min. BZK" },
          { jaar: 2018, regel: "Verbod nieuwe gas­aansluitingen", bron: "Wet voortgang energietransitie" },
          { jaar: 2022, regel: "Verplichte rookmelder in elke woning", bron: "Bouwbesluit 2022" },
          { jaar: 2023, regel: "Wet 'Goed verhuurderschap', nieuwe verplichtingen voor verhuurder", bron: "Staatsblad 2023, 217" },
          { jaar: 2023, regel: "Verplichte verhuurvergunning en gedragscode", bron: "Wet Goed verhuurderschap" },
          { jaar: 2024, regel: "Huurprijsregulering middensegment, prijsplafond op vrije markt", bron: "Wet betaalbare huur 2024" },
          { jaar: 2024, regel: "Verplicht UBO-register (ultimate beneficial owners) sterk uitgebreid", bron: "EU witwasrichtlijn, Wwft" },
          { jaar: 2026, regel: "Voorgenomen verplichte warmtepomp bij vervanging CV-ketel", bron: "Min. EZK aankondiging 2023, uitgesteld" },
          { jaar: 2027, regel: "Afbouw salderingsregeling zonnepanelen, definitief weg in 2031", bron: "Min. EZK / Tweede Kamer dossier 35594" }
        ]
      },
      {
        groep: "Werk, ondernemen en bureaucratie",
        items: [
          { jaar: 2018, regel: "AVG / GDPR-verplichtingen, ook voor eenmanszaken (datalek, FG, register)", bron: "EU-verordening 2016/679" },
          { jaar: 2020, regel: "Wet DBA opnieuw ingevoerd, zzp-toetsing arbeidsrelatie", bron: "Belastingdienst handhavingsmoratorium" },
          { jaar: 2023, regel: "Loondoorbetalingsverplichting twee jaar bij ziekte, ook voor MKB", bron: "Wet werk en zekerheid" },
          { jaar: 2023, regel: "Cookiebanner uitbreiding op alle websites met geanonimiseerde tracking", bron: "AP-richtsnoeren 2023" },
          { jaar: 2024, regel: "Pensioenwet (WTP) van collectief naar individuele potten", bron: "Wet Toekomst Pensioenen, juli 2023" },
          { jaar: 2024, regel: "Verbod kasstortingen boven €3.000 (Wwft)", bron: "Wet ter voorkoming witwassen en financieren van terrorisme" },
          { jaar: 2024, regel: "Strengere zorgvuldigheidsplicht banken (Wwft), accountsluitingen MKB+", bron: "DNB toezicht 2024" },
          { jaar: 2025, regel: "Klimaatrapportageplicht middelgrote bedrijven (CSRD)", bron: "EU-richtlijn 2022/2464" },
          { jaar: 2025, regel: "Voorgenomen Box 3 op werkelijk rendement, inclusief ongerealiseerd vermogen (gepland 2027)", bron: "Wetsvoorstel werkelijk rendement Box 3, december 2024" }
        ]
      },
      {
        groep: "Vuurwerk en leefomgeving",
        items: [
          { jaar: 2015, regel: "Vuurwerkverbod uitgebreid, knalvuurwerk en vuurpijlen verboden", bron: "Vuurwerkbesluit" },
          { jaar: 2020, regel: "Mondkapjesplicht openbaar vervoer en winkels (tot 2022)", bron: "Tijdelijke wet maatregelen covid-19" },
          { jaar: 2021, regel: "Coronapas (QR-code) verplicht voor horeca, evenementen, kappers", bron: "Tijdelijke wet covid-19 verplichte testbewijzen" },
          { jaar: 2022, regel: "Discussie verbod op houtkachels en open haard in stedelijk gebied", bron: "Min. IenW en gemeenten" },
          { jaar: 2023, regel: "Verbod fokken kortneuzige hondenrassen (Franse buldog e.a.)", bron: "Wet dieren" },
          { jaar: 2024, regel: "Volledig vuurwerkverbod consumenten in 30+ gemeenten", bron: "Lokale gemeenteraden" },
          { jaar: 2024, regel: "Chipverplichting honden landelijk uitgebreid", bron: "Wet dieren, identificatie en registratie" },
          { jaar: 2024, regel: "Statiegeld op blikjes (15 cent)", bron: "Min. IenW, ingegaan 1 april 2023" },
          { jaar: 2025, regel: "Vergunningsplicht drones boven 250 gram", bron: "EU-verordening 2019/947" }
        ]
      },
      {
        groep: "Privacy, identiteit en digitaal",
        items: [
          { jaar: 2018, regel: "Verplichte DigID voor steeds meer overheidsdiensten (Belastingdienst, UWV, gemeente, zorg)", bron: "Logius" },
          { jaar: 2020, regel: "Coronamelder-app, vrijwillig maar sterk aangedrongen", bron: "Min. VWS" },
          { jaar: 2022, regel: "Wet inburgering 2.0, verplichte taalinzet en participatie", bron: "Min. SZW, Staatsblad 2022" },
          { jaar: 2023, regel: "Eu-Digital Wallet (digitale identiteit), Nederland verplicht aansluiten 2026", bron: "EU-eIDAS verordening 2024" },
          { jaar: 2024, regel: "Cookie- en consent-banners op vrijwel iedere website", bron: "Autoriteit Persoonsgegevens richtsnoer" },
          { jaar: 2025, regel: "Verplichte CSAM-scan (chat control), EU-discussie", bron: "EU-Commissie voorstel 2022 (Tweede Kamer 2025)" }
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
    label: "Tien meest gehoorde tegenargumenten, en het doorslaggevende feit dat eronder ligt",
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
