export type Language = 'en' | 'ko'

export const translations = {
  en: {
    // Header & Nav
    appTitle: 'Geonomics',
    appSubtitle: 'Real-time Exchange Rates & World Bank · IMF Official Statistics',
    liveBadge: 'LIVE',
    navExplorer: 'Country Explorer',
    navRanking: 'GDP Rankings',
    navCompare: '1:1 Comparison',
    baseCurrencyLabel: 'Base Currency:',
    refreshBtn: 'Refresh',
    refreshTooltip: 'Refresh on-demand data',

    // Ticker
    tickerTitle: 'Key Real-time Exchange Rates',
    asOf: 'Updated:',

    // Hero Section
    heroBadge: 'Official World Bank & IMF Data × Real-time Forex Feed',
    heroTitle: 'Real-time Global Forex & GDP Analysis',
    heroDescription:
      'A zero-database, on-demand economic intelligence platform. Directly queries authoritative international public APIs (World Bank Open Data, IMF World Economic Outlook, and European Central Bank) to deliver accurate macroeconomic indicators and real-time exchange rates.',
    statCountriesTracked: 'Countries Tracked',
    statBaseCurrency: 'Current Base Currency',
    statTopEconomy: 'World #1 Economy',
    statLocalEconomy: 'Local Economy ({country})',

    // Filters & Search
    searchPlaceholder: 'Search by country, code, or currency...',
    filterAll: 'All',
    filterAsia: 'Asia',
    filterEurope: 'Europe',
    filterAmericas: 'Americas',
    filterAfrica: 'Africa',
    filterOceania: 'Oceania',
    viewCards: 'Card View',
    viewTable: 'Table View',

    // Year Switcher
    yearLabel: 'Economic Horizon',
    yearActual: '{year} Actual',
    yearEstimate: '{year} Est.',
    yearProjection: '{year} Proj.',

    // Country Card
    cardTotalGdp: 'Total GDP',
    cardPerCapita: 'GDP Per Capita',
    cardStockIndex: 'Stock Benchmark',
    cardFxRate: 'Live FX Rate',
    cardGrowthRate: 'Growth Rate',
    cardDebtRatio: 'Gov Debt',
    cardViewDetails: 'Detailed Metrics & 10-Yr Chart',
    loadingData: 'Loading data...',
    noCountriesFound: 'No countries match your search criteria.',

    // Modal
    modalContinent: 'Region',
    modalCurrency: 'Currency',
    modalTotalGdpTitle: 'Total GDP',
    modalPerCapitaTitle: 'GDP Per Capita',
    modalGrowthTitle: 'Annual GDP Growth',
    modalRealGrowth: 'Real GDP Growth',
    modalDebtTitle: 'National Debt Ratio',
    modalDebtSub: 'General Government Gross Debt (% of GDP, IMF WEO)',
    modalRankTitle: 'Global Rank',
    modalRankValue: 'World #{rank}',
    modalRankSub: 'by Total GDP',
    modalFxSectionTitle: 'Official Live Exchange Rate',
    modalOnDemandBadge: 'ON-DEMAND',
    modalForexTimestamp: 'Forex Market Timestamp',
    modalStockIndexTitle: 'National Stock Market Benchmark',
    modalStockIndexSub: 'Official exchange live feed & interactive chart',
    modalChartTitle: '10-Year GDP Trajectory (2015 - {year})',
    modalChartUnit: 'Unit: converted in {base}',
    modalChartLoading: 'Loading World Bank time-series data...',
    modalAccuracyTitle: 'Data Integrity & Authoritative Sources',
    modalAccuracyGdp:
      'GDP Statistics: Sourced directly from World Bank Open Data (Indicators: Total GDP NY.GDP.MKTP.CD, GDP Per Capita NY.GDP.PCAP.CD) and IMF World Economic Outlook (WEO).',
    modalAccuracyDebt:
      'Government Debt Statistics: Sourced from International Monetary Fund (IMF) World Economic Outlook (WEO) General Government Gross Debt indicator (GGXWDG_NGDP).',
    modalAccuracyFx:
      'Exchange Rates: Collected on-demand from European Central Bank (ECB) reference rates and global live forex feeds.',
    modalWorldBankLink: 'Visit World Bank Country Data Portal',
    modalImfLink: 'Visit IMF Data Portal',
    modalClose: 'Close',

    // Currency Converter
    converterTitle: 'Real-time Currency Converter',
    converterSending: 'Amount',
    converterConverted: 'Estimated Value',
    swapCurrencies: 'Swap currencies',

    // 1:1 Compare View
    compareTitle: '1:1 Country Scale & Forex Comparison',
    compareDescription:
      'Compare World Bank & IMF official macroeconomic trends and real-time exchange rates side by side.',
    compareRecommended: 'Popular Comparisons:',
    compareBaseCountry: 'Base Country (A)',
    compareTargetCountry: 'Comparison Country (B)',
    compareInsightTitle: 'Comparative Summary:',
    compareInsightText:
      '{countryA}\'s Total GDP is {gdpRatio}x that of {countryB}, and its GDP per capita is {perCapitaRatio}x.',
    compareDebtRatio: 'Gov Debt (% GDP, IMF)',
    compareChartTitle: '10-Year GDP Trajectory Overlay',
    compareChartLoading: 'Aggregating comparative data...',

    // Ranking Table
    tableTitle: 'Global GDP & Exchange Rate Rankings',
    tableSubtitle: 'Official World Bank & IMF macroeconomic statistics covering {count} major economies',
    colRank: 'Rank',
    colCountry: 'Country',
    colCurrency: 'Currency',
    colFxRate: 'Live FX Rate ({base})',
    colTotalGdp: 'Total GDP ({base})',
    colPerCapita: 'GDP Per Capita',
    colGrowth: 'Growth Rate',
    colDebt: 'Gov Debt (% GDP, IMF)',

    // Footer
    footerZeroStorageTitle: 'Zero-Storage On-Demand Architecture',
    footerZeroStorageDesc:
      'This website operates with zero persistent backend storage or databases. Data is retrieved on-demand directly by your browser from official international endpoints (World Bank Open Data, IMF WEO, and ECB).',
    footerDisclaimer:
      'Macroeconomic statistics and exchange rates are provided for informational and analytical purposes. Financial and investment decisions are the sole responsibility of the user.',
    footerWorldBank: 'World Bank Open Data',
    footerImf: 'IMF DataMapper (WEO)',
    footerEcb: 'European Central Bank (ECB) Reference Rates',
    footerGithub: 'Hosted on GitHub Pages',
  },
  ko: {
    // Header & Nav
    appTitle: 'Geonomics',
    appSubtitle: '실시간 환율 & 세계은행(World Bank) · 국제통화기금(IMF) 공식 통계',
    liveBadge: 'LIVE',
    navExplorer: '국가 탐색',
    navRanking: 'GDP 랭킹',
    navCompare: '1:1 비교',
    baseCurrencyLabel: '기준 통화:',
    refreshBtn: '새로고침',
    refreshTooltip: '실시간 데이터 새로고침',

    // Ticker
    tickerTitle: '주요 실시간 환율',
    asOf: '업데이트:',

    // Hero Section
    heroBadge: '세계은행(World Bank) · IMF WEO 공식 통계 × 실시간 환율 연동',
    heroTitle: '전 세계 국가별 환율 & GDP 실시간 분석',
    heroDescription:
      '별도의 데이터베이스 없이 세계은행(World Bank), 국제통화기금(IMF WEO), 유럽중앙은행(ECB) 등 권위 있는 국제 공공기관의 공식 데이터를 온디맨드로 직접 연동하여 가장 신뢰도 높은 거시경제 지표와 실시간 환율을 제공합니다.',
    statCountriesTracked: '추적 국가 수',
    statBaseCurrency: '현재 기준 통화',
    statTopEconomy: '세계 1위 경제대국',
    statLocalEconomy: '접속 지역 경제 규모 ({country})',

    // Filters & Search
    searchPlaceholder: '국가명, 영문, 통화코드 검색...',
    filterAll: '전체',
    filterAsia: '아시아',
    filterEurope: '유럽',
    filterAmericas: '아메리카',
    filterAfrica: '아프리카',
    filterOceania: '오세아니아',
    viewCards: '카드 뷰',
    viewTable: '리스트 테이블 뷰',

    // Year Switcher
    yearLabel: '기준 연도',
    yearActual: '{year}년 실적',
    yearEstimate: '{year}년 추정',
    yearProjection: '{year}년 전망',

    // Country Card
    cardTotalGdp: '총 GDP',
    cardPerCapita: '1인당 GDP',
    cardStockIndex: '대표 주식 지수',
    cardFxRate: '실시간 환율',
    cardGrowthRate: '성장률',
    cardDebtRatio: '국가 부채',
    cardViewDetails: '상세 지표 및 10개년 차트',
    loadingData: '데이터 로딩 중...',
    noCountriesFound: '검색 조건에 맞는 국가가 없습니다.',

    // Modal
    modalContinent: '대륙',
    modalCurrency: '통화',
    modalTotalGdpTitle: '총 GDP',
    modalPerCapitaTitle: '1인당 GDP',
    modalGrowthTitle: '연간 경제성장률',
    modalRealGrowth: '실질 GDP 성장률',
    modalDebtTitle: '국가 부채 비율',
    modalDebtSub: '일반정부 총 부채 비율 (GDP 대비 %, IMF WEO 공식)',
    modalRankTitle: '전 세계 순위',
    modalRankValue: '세계 {rank}위',
    modalRankSub: '총 GDP 기준',
    modalFxSectionTitle: '실시간 공식 환율 정보',
    modalOnDemandBadge: 'ON-DEMAND',
    modalForexTimestamp: '외환 시장 기준 시각',
    modalStockIndexTitle: '대표 증시 지수 실시간 차트',
    modalStockIndexSub: '공식 거래소 실시간 시세 및 기간별 인터랙티브 차트',
    modalChartTitle: '10개년 GDP 변화 추이 (2015 ~ {year})',
    modalChartUnit: '단위: {base} 환산치',
    modalChartLoading: '세계은행 시계열 데이터를 불러오는 중...',
    modalAccuracyTitle: '데이터 신뢰도 및 공식 출처 검증',
    modalAccuracyGdp:
      'GDP 통계: 세계은행 Open Data API(총 GDP NY.GDP.MKTP.CD, 1인당 GDP NY.GDP.PCAP.CD) 및 국제통화기금(IMF WEO) 공식 집계치 기준.',
    modalAccuracyDebt:
      '국가 부채 비율: 국제통화기금(IMF) World Economic Outlook (WEO) 공식 일반정부 총부채(GGXWDG_NGDP, % of GDP) 통계 기준.',
    modalAccuracyFx:
      '환율 데이터: 유럽중앙은행(ECB) 공식 고시 기준 환율 및 글로벌 외환 시장 실시간 피드 기준.',
    modalWorldBankLink: '세계은행 공식 데이터 포털 바로가기',
    modalImfLink: 'IMF DataMapper 포털 바로가기',
    modalClose: '닫기',

    // Currency Converter
    converterTitle: '실시간 환율 계산기',
    converterSending: '보내는 금액',
    converterConverted: '환전 예상 금액',
    swapCurrencies: '통화 맞바꾸기',

    // 1:1 Compare View
    compareTitle: '국가 간 1:1 경제 규모 & 환율 비교',
    compareDescription:
      '두 국가의 세계은행 및 IMF 공식 거시경제 추이와 실시간 환율을 직관적으로 나란히 대조합니다.',
    compareRecommended: '추천 비교:',
    compareBaseCountry: '기준 국가 (A)',
    compareTargetCountry: '비교 국가 (B)',
    compareInsightTitle: '비교 요약:',
    compareInsightText:
      '{countryA}의 총 GDP는 {countryB}의 {gdpRatio}배이며, 1인당 GDP는 {perCapitaRatio}배 수준입니다.',
    compareDebtRatio: '국가 부채 비율 (% GDP, IMF)',
    compareChartTitle: '10개년 GDP 궤적 동시 비교',
    compareChartLoading: '비교 데이터를 집계 중입니다...',

    // Ranking Table
    tableTitle: '전 세계 GDP & 환율 순위표',
    tableSubtitle: '세계은행 및 IMF WEO 공식 거시경제 통계 기준 (총 {count}개 주요국 수록)',
    colRank: '순위',
    colCountry: '국가',
    colCurrency: '통화',
    colFxRate: '실시간 환율 ({base})',
    colTotalGdp: '총 GDP ({base})',
    colPerCapita: '1인당 GDP',
    colGrowth: '성장률',
    colDebt: '부채 비율 (% GDP, IMF)',

    // Footer
    footerZeroStorageTitle: '무보관 온디맨드(Zero-Storage On-Demand) 시스템',
    footerZeroStorageDesc:
      '본 웹사이트는 별도의 서버나 데이터베이스 없이 사용자의 웹 브라우저에서 공식 API(세계은행, IMF WEO, 유럽중앙은행)로 직접 연결되어 최신 데이터를 실시간으로 온디맨드 렌더링합니다.',
    footerDisclaimer:
      '제공되는 환율 및 거시경제 통계는 공공 공식 데이터를 기반으로 집계되며, 금융 거래 및 투자의 법적 최종 책임은 사용자에게 있습니다.',
    footerWorldBank: '세계은행(World Bank) Open Data',
    footerImf: '국제통화기금(IMF) DataMapper',
    footerEcb: '유럽중앙은행(ECB) 공식 환율',
    footerGithub: 'GitHub Pages 호스팅',
  },
} as const
