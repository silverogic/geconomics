# GlobalEcon - Real-time Global Exchange Rates & GDP Dashboard

A client-side macroeconomic dashboard hosted on GitHub Pages that retrieves official World Bank Open Data and real-time foreign exchange market rates on-demand without persistent storage or databases.

---

## Features

1. **Real-time On-Demand Foreign Exchange Rates**
   - Direct integration with European Central Bank (ECB) reference rates and global live forex feeds supporting 160+ fiat currencies.
   - Base currency conversion between USD, EUR, KRW, JPY, GBP, and CNY.
   - Built-in two-way currency calculator.

2. **Official World Bank GDP Statistics & 10-Year Time Series**
   - Macroeconomic data retrieved from World Bank Open Data endpoints:
     - Total GDP (current US$): `NY.GDP.MKTP.CD`
     - GDP per Capita (current US$): `NY.GDP.PCAP.CD`
     - Annual Real GDP Growth (%): `NY.GDP.MKTP.KD.ZG`
   - Interactive 10-year historical trajectory charts (2015 to latest year) powered by Chart.js.

3. **1:1 Country Comparison Tool**
   - Direct side-by-side comparison of any two economies (e.g., USA vs China, South Korea vs Japan, Germany vs United Kingdom).
   - Comparative ratios (GDP scale multiple, GDP per capita ratio) and dual-line historical trajectory overlays.

4. **Global Ranking Table**
   - Interactive data table covering major economies.
   - Real-time column sorting by rank, country name, currency, exchange rate, total GDP, GDP per capita, and growth rate.
   - Instant search filtering by country name, ISO code, or currency.

5. **Zero-Database Architecture**
   - Operates with zero persistent backend databases.
   - Data is retrieved on-demand directly by the client browser with an in-memory session cache (10-minute TTL) to ensure rate limit compliance while maintaining real-time accuracy.

6. **Bilingual Localization (i18n) with Automatic Browser Detection**
   - Automatically detects the user's browser language (`navigator.language`) and regional currency hints (e.g. KRW for Korea, EUR for Eurozone, USD for US/Global).
   - Supports seamless manual switching between English (`en`) and Korean (`ko`), persisting user choices in `localStorage`.

---

## Technical Stack

- **Framework**: React 19, TypeScript, Vite
- **Styling**: Tailwind CSS v4
- **Charts**: Chart.js, react-chartjs-2
- **Icons**: Lucide React
- **Deployment**: GitHub Pages, GitHub Actions

---

## Getting Started Locally

### Prerequisites
- Node.js (v18 or higher recommended)
- npm (v9 or higher)

### Installation & Run

```bash
# 1. Install dependencies
npm install

# 2. Start local development server
npm run dev
```

Open your browser and navigate to `http://localhost:5173`.

---

## Deployment to GitHub Pages

This project is configured for static hosting on GitHub Pages.

### Option A: Automated Deployment via GitHub Actions (Recommended)

1. Push this repository to GitHub on the `main` or `master` branch:
   ```bash
   git add .
   git commit -m "feat: complete GlobalEcon dashboard"
   git remote add origin https://github.com/<username>/<repository>.git
   git push -u origin main
   ```
2. In your GitHub repository, navigate to **Settings** > **Pages**.
3. Under **Build and deployment**, set **Source** to **GitHub Actions**.
4. The workflow in `.github/workflows/deploy.yml` will automatically build and publish the site.

### Option B: Manual Deployment via `gh-pages`

```bash
npm run deploy
```

This builds the production bundle in `dist/` and pushes it to the `gh-pages` branch.

---

## Data Sources & Accuracy

- **GDP & Macroeconomic Data**: [World Bank Open Data](https://data.worldbank.org/)
  - Total GDP: Indicator `NY.GDP.MKTP.CD`
  - GDP per Capita: Indicator `NY.GDP.PCAP.CD`
  - Real GDP Growth: Indicator `NY.GDP.MKTP.KD.ZG`
- **Exchange Rates**: [European Central Bank Reference Rates](https://www.ecb.europa.eu/) and [Open Exchange Rates API](https://open.er-api.com/)
