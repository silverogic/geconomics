export interface StockPoint {
  date: string
  close: number
}

export interface StockPriceInfo {
  countryId: string
  nameEn: string
  nameKo: string
  ticker: string
  isSupported: boolean
  fallbackReasonEn?: string
  fallbackReasonKo?: string
  currency: string
  currentPrice: number
  changePct: number
  points: StockPoint[]
}

const STOCK_DATA: Record<string, StockPriceInfo> = {
  "USA": {
    "countryId": "USA",
    "nameEn": "S&P 500",
    "nameKo": "S&P 500",
    "ticker": "^GSPC",
    "isSupported": true,
    "currency": "USD",
    "currentPrice": 7656.98,
    "changePct": -1.18,
    "points": [
      {
        "date": "2026-08-12",
        "close": 7748.5
      },
      {
        "date": "2026-08-13",
        "close": 7798.99
      },
      {
        "date": "2026-08-14",
        "close": 7785.76
      },
      {
        "date": "2026-08-17",
        "close": 7745.06
      },
      {
        "date": "2026-08-18",
        "close": 7691.76
      },
      {
        "date": "2026-08-19",
        "close": 7707.98
      },
      {
        "date": "2026-08-20",
        "close": 7641.16
      },
      {
        "date": "2026-08-21",
        "close": 7674.37
      },
      {
        "date": "2026-08-24",
        "close": 7652.86
      },
      {
        "date": "2026-08-25",
        "close": 7677.28
      },
      {
        "date": "2026-08-26",
        "close": 7675.7
      },
      {
        "date": "2026-08-27",
        "close": 7730.99
      },
      {
        "date": "2026-08-28",
        "close": 7711.76
      },
      {
        "date": "2026-08-31",
        "close": 7686.14
      },
      {
        "date": "2026-09-01",
        "close": 7631.47
      },
      {
        "date": "2026-09-02",
        "close": 7666.6
      },
      {
        "date": "2026-09-03",
        "close": 7747.71
      },
      {
        "date": "2026-09-04",
        "close": 7718.6
      },
      {
        "date": "2026-09-08",
        "close": 7673.52
      },
      {
        "date": "2026-09-09",
        "close": 7636.36
      },
      {
        "date": "2026-09-10",
        "close": 7591.7
      },
      {
        "date": "2026-09-11",
        "close": 7656.98
      }
    ]
  },
  "CHN": {
    "countryId": "CHN",
    "nameEn": "SSE Composite",
    "nameKo": "상하이 종합지수",
    "ticker": "000001.SS",
    "isSupported": true,
    "currency": "CNY",
    "currentPrice": 3888.11,
    "changePct": -1.17,
    "points": [
      {
        "date": "2026-08-11",
        "close": 3934.09
      },
      {
        "date": "2026-08-12",
        "close": 3946.68
      },
      {
        "date": "2026-08-13",
        "close": 3926.97
      },
      {
        "date": "2026-08-14",
        "close": 3927.18
      },
      {
        "date": "2026-08-17",
        "close": 3982.65
      },
      {
        "date": "2026-08-18",
        "close": 3990.3
      },
      {
        "date": "2026-08-19",
        "close": 3894.42
      },
      {
        "date": "2026-08-20",
        "close": 3903.72
      },
      {
        "date": "2026-08-21",
        "close": 3905.2
      },
      {
        "date": "2026-08-24",
        "close": 3882.01
      },
      {
        "date": "2026-08-25",
        "close": 3889.45
      },
      {
        "date": "2026-08-26",
        "close": 3912.52
      },
      {
        "date": "2026-08-27",
        "close": 3956.57
      },
      {
        "date": "2026-08-28",
        "close": 3952.18
      },
      {
        "date": "2026-08-31",
        "close": 3986.3
      },
      {
        "date": "2026-09-01",
        "close": 3979.89
      },
      {
        "date": "2026-09-02",
        "close": 3941.39
      },
      {
        "date": "2026-09-03",
        "close": 3942.09
      },
      {
        "date": "2026-09-04",
        "close": 3930.12
      },
      {
        "date": "2026-09-07",
        "close": 3932.7
      },
      {
        "date": "2026-09-08",
        "close": 3940.55
      },
      {
        "date": "2026-09-09",
        "close": 3951.51
      },
      {
        "date": "2026-09-10",
        "close": 3934.4
      },
      {
        "date": "2026-09-11",
        "close": 3888.11
      }
    ]
  },
  "DEU": {
    "countryId": "DEU",
    "nameEn": "DAX 40",
    "nameKo": "DAX",
    "ticker": "^GDAXI",
    "isSupported": true,
    "currency": "EUR",
    "currentPrice": 25568.56,
    "changePct": -3.12,
    "points": [
      {
        "date": "2026-08-11",
        "close": 26391.42
      },
      {
        "date": "2026-08-12",
        "close": 26331.07
      },
      {
        "date": "2026-08-13",
        "close": 26299.74
      },
      {
        "date": "2026-08-14",
        "close": 26440.31
      },
      {
        "date": "2026-08-17",
        "close": 26338.61
      },
      {
        "date": "2026-08-18",
        "close": 26128.36
      },
      {
        "date": "2026-08-19",
        "close": 26091.33
      },
      {
        "date": "2026-08-20",
        "close": 25983.04
      },
      {
        "date": "2026-08-21",
        "close": 26136.56
      },
      {
        "date": "2026-08-24",
        "close": 26106.6
      },
      {
        "date": "2026-08-25",
        "close": 26266.14
      },
      {
        "date": "2026-08-26",
        "close": 26285.96
      },
      {
        "date": "2026-08-27",
        "close": 26367.24
      },
      {
        "date": "2026-08-28",
        "close": 26569.99
      },
      {
        "date": "2026-08-31",
        "close": 26258.11
      },
      {
        "date": "2026-09-01",
        "close": 25970.11
      },
      {
        "date": "2026-09-02",
        "close": 25839.33
      },
      {
        "date": "2026-09-03",
        "close": 26003.32
      },
      {
        "date": "2026-09-04",
        "close": 26046.4
      },
      {
        "date": "2026-09-07",
        "close": 26006.53
      },
      {
        "date": "2026-09-08",
        "close": 26007.63
      },
      {
        "date": "2026-09-09",
        "close": 25576.45
      },
      {
        "date": "2026-09-10",
        "close": 25361.15
      },
      {
        "date": "2026-09-11",
        "close": 25568.56
      }
    ]
  },
  "JPN": {
    "countryId": "JPN",
    "nameEn": "Nikkei 225",
    "nameKo": "닛케이 225",
    "ticker": "^N225",
    "isSupported": true,
    "currency": "JPY",
    "currentPrice": 64011.34,
    "changePct": -5.2,
    "points": [
      {
        "date": "2026-08-12",
        "close": 67524.06
      },
      {
        "date": "2026-08-13",
        "close": 68308.59
      },
      {
        "date": "2026-08-14",
        "close": 68713.8
      },
      {
        "date": "2026-08-17",
        "close": 69220.25
      },
      {
        "date": "2026-08-18",
        "close": 67460.73
      },
      {
        "date": "2026-08-19",
        "close": 65326.42
      },
      {
        "date": "2026-08-20",
        "close": 66216.79
      },
      {
        "date": "2026-08-21",
        "close": 66016.36
      },
      {
        "date": "2026-08-24",
        "close": 65528.09
      },
      {
        "date": "2026-08-25",
        "close": 65856.43
      },
      {
        "date": "2026-08-26",
        "close": 66262.16
      },
      {
        "date": "2026-08-27",
        "close": 66131.98
      },
      {
        "date": "2026-08-28",
        "close": 66405.56
      },
      {
        "date": "2026-08-31",
        "close": 66311.93
      },
      {
        "date": "2026-09-01",
        "close": 66215.34
      },
      {
        "date": "2026-09-02",
        "close": 64325.64
      },
      {
        "date": "2026-09-03",
        "close": 64214.48
      },
      {
        "date": "2026-09-04",
        "close": 65020.94
      },
      {
        "date": "2026-09-07",
        "close": 66399.84
      },
      {
        "date": "2026-09-08",
        "close": 65269.33
      },
      {
        "date": "2026-09-09",
        "close": 65142.78
      },
      {
        "date": "2026-09-10",
        "close": 65270.95
      },
      {
        "date": "2026-09-11",
        "close": 64011.34
      }
    ]
  },
  "IND": {
    "countryId": "IND",
    "nameEn": "NIFTY 50",
    "nameKo": "NIFTY 50",
    "ticker": "^NSEI",
    "isSupported": true,
    "currency": "INR",
    "currentPrice": 23398.1,
    "changePct": -4.39,
    "points": [
      {
        "date": "2026-08-11",
        "close": 24471.7
      },
      {
        "date": "2026-08-12",
        "close": 24435.95
      },
      {
        "date": "2026-08-13",
        "close": 24395.85
      },
      {
        "date": "2026-08-14",
        "close": 24366
      },
      {
        "date": "2026-08-17",
        "close": 24287.65
      },
      {
        "date": "2026-08-18",
        "close": 24154.9
      },
      {
        "date": "2026-08-19",
        "close": 24078.3
      },
      {
        "date": "2026-08-20",
        "close": 24231.85
      },
      {
        "date": "2026-08-21",
        "close": 24252
      },
      {
        "date": "2026-08-24",
        "close": 24219.05
      },
      {
        "date": "2026-08-25",
        "close": 24334.55
      },
      {
        "date": "2026-08-26",
        "close": 24207.75
      },
      {
        "date": "2026-08-27",
        "close": 24090.85
      },
      {
        "date": "2026-08-28",
        "close": 24175.65
      },
      {
        "date": "2026-08-31",
        "close": 24080.4
      },
      {
        "date": "2026-09-01",
        "close": 24055.8
      },
      {
        "date": "2026-09-02",
        "close": 23914.45
      },
      {
        "date": "2026-09-03",
        "close": 23873.45
      },
      {
        "date": "2026-09-04",
        "close": 23897.7
      },
      {
        "date": "2026-09-07",
        "close": 23779.15
      },
      {
        "date": "2026-09-08",
        "close": 23635.1
      },
      {
        "date": "2026-09-09",
        "close": 23431.5
      },
      {
        "date": "2026-09-10",
        "close": 23477.8
      },
      {
        "date": "2026-09-11",
        "close": 23398.1
      }
    ]
  },
  "GBR": {
    "countryId": "GBR",
    "nameEn": "FTSE 100",
    "nameKo": "FTSE 100",
    "ticker": "^FTSE",
    "isSupported": true,
    "currency": "GBP",
    "currentPrice": 10650.44,
    "changePct": -1.79,
    "points": [
      {
        "date": "2026-08-11",
        "close": 10844.2
      },
      {
        "date": "2026-08-12",
        "close": 10833.2
      },
      {
        "date": "2026-08-13",
        "close": 10772.7
      },
      {
        "date": "2026-08-14",
        "close": 10750.1
      },
      {
        "date": "2026-08-17",
        "close": 10720.3
      },
      {
        "date": "2026-08-18",
        "close": 10728
      },
      {
        "date": "2026-08-19",
        "close": 10743.4
      },
      {
        "date": "2026-08-20",
        "close": 10748.2
      },
      {
        "date": "2026-08-21",
        "close": 10816.6
      },
      {
        "date": "2026-08-24",
        "close": 10854.3
      },
      {
        "date": "2026-08-25",
        "close": 10886.2
      },
      {
        "date": "2026-08-26",
        "close": 10878.1
      },
      {
        "date": "2026-08-27",
        "close": 10792.5
      },
      {
        "date": "2026-08-28",
        "close": 10824.3
      },
      {
        "date": "2026-09-01",
        "close": 10789.3
      },
      {
        "date": "2026-09-02",
        "close": 10756.5
      },
      {
        "date": "2026-09-03",
        "close": 10831.5
      },
      {
        "date": "2026-09-04",
        "close": 10831.1
      },
      {
        "date": "2026-09-07",
        "close": 10822.1
      },
      {
        "date": "2026-09-08",
        "close": 10811.7
      },
      {
        "date": "2026-09-09",
        "close": 10670.1
      },
      {
        "date": "2026-09-10",
        "close": 10608.9
      },
      {
        "date": "2026-09-11",
        "close": 10650.4
      }
    ]
  },
  "FRA": {
    "countryId": "FRA",
    "nameEn": "CAC 40",
    "nameKo": "CAC 40",
    "ticker": "^FCHI",
    "isSupported": true,
    "currency": "EUR",
    "currentPrice": 8179.77,
    "changePct": -6.14,
    "points": [
      {
        "date": "2026-08-11",
        "close": 8714.94
      },
      {
        "date": "2026-08-12",
        "close": 8674.94
      },
      {
        "date": "2026-08-13",
        "close": 8650.56
      },
      {
        "date": "2026-08-14",
        "close": 8636.8
      },
      {
        "date": "2026-08-17",
        "close": 8579.6
      },
      {
        "date": "2026-08-18",
        "close": 8509.36
      },
      {
        "date": "2026-08-19",
        "close": 8501.91
      },
      {
        "date": "2026-08-20",
        "close": 8453.09
      },
      {
        "date": "2026-08-21",
        "close": 8484.43
      },
      {
        "date": "2026-08-24",
        "close": 8453.01
      },
      {
        "date": "2026-08-25",
        "close": 8439.2
      },
      {
        "date": "2026-08-26",
        "close": 8462.39
      },
      {
        "date": "2026-08-27",
        "close": 8319.87
      },
      {
        "date": "2026-08-28",
        "close": 8401.18
      },
      {
        "date": "2026-08-31",
        "close": 8334.5
      },
      {
        "date": "2026-09-01",
        "close": 8301.85
      },
      {
        "date": "2026-09-02",
        "close": 8280.63
      },
      {
        "date": "2026-09-03",
        "close": 8286.4
      },
      {
        "date": "2026-09-04",
        "close": 8278.77
      },
      {
        "date": "2026-09-07",
        "close": 8306.15
      },
      {
        "date": "2026-09-08",
        "close": 8317.98
      },
      {
        "date": "2026-09-09",
        "close": 8156.67
      },
      {
        "date": "2026-09-10",
        "close": 8116.76
      },
      {
        "date": "2026-09-11",
        "close": 8179.77
      }
    ]
  },
  "ITA": {
    "countryId": "ITA",
    "nameEn": "FTSE MIB",
    "nameKo": "FTSE MIB",
    "ticker": "FTSEMIB.MI",
    "isSupported": true,
    "currency": "EUR",
    "currentPrice": 52512.03,
    "changePct": -2.22,
    "points": [
      {
        "date": "2026-08-11",
        "close": 53706
      },
      {
        "date": "2026-08-12",
        "close": 53699
      },
      {
        "date": "2026-08-13",
        "close": 53693
      },
      {
        "date": "2026-08-14",
        "close": 53584
      },
      {
        "date": "2026-08-17",
        "close": 53587
      },
      {
        "date": "2026-08-18",
        "close": 53018
      },
      {
        "date": "2026-08-19",
        "close": 52618
      },
      {
        "date": "2026-08-20",
        "close": 52666
      },
      {
        "date": "2026-08-21",
        "close": 52668
      },
      {
        "date": "2026-08-24",
        "close": 52542
      },
      {
        "date": "2026-08-25",
        "close": 52720
      },
      {
        "date": "2026-08-26",
        "close": 52883
      },
      {
        "date": "2026-08-27",
        "close": 52265
      },
      {
        "date": "2026-08-28",
        "close": 52616
      },
      {
        "date": "2026-08-31",
        "close": 52613
      },
      {
        "date": "2026-09-01",
        "close": 51915
      },
      {
        "date": "2026-09-02",
        "close": 51792
      },
      {
        "date": "2026-09-03",
        "close": 52245
      },
      {
        "date": "2026-09-04",
        "close": 52100
      },
      {
        "date": "2026-09-07",
        "close": 52230
      },
      {
        "date": "2026-09-08",
        "close": 52177
      },
      {
        "date": "2026-09-09",
        "close": 51875
      },
      {
        "date": "2026-09-10",
        "close": 51807
      },
      {
        "date": "2026-09-11",
        "close": 52512
      }
    ]
  },
  "BRA": {
    "countryId": "BRA",
    "nameEn": "Bovespa",
    "nameKo": "보베스파",
    "ticker": "^BVSP",
    "isSupported": true,
    "currency": "BRL",
    "currentPrice": 187206.89,
    "changePct": 11.52,
    "points": [
      {
        "date": "2026-08-11",
        "close": 167875
      },
      {
        "date": "2026-08-12",
        "close": 167491
      },
      {
        "date": "2026-08-13",
        "close": 167101
      },
      {
        "date": "2026-08-14",
        "close": 166934
      },
      {
        "date": "2026-08-17",
        "close": 166784
      },
      {
        "date": "2026-08-18",
        "close": 166335
      },
      {
        "date": "2026-08-19",
        "close": 167830
      },
      {
        "date": "2026-08-20",
        "close": 167927
      },
      {
        "date": "2026-08-21",
        "close": 171032
      },
      {
        "date": "2026-08-24",
        "close": 171907
      },
      {
        "date": "2026-08-25",
        "close": 174577
      },
      {
        "date": "2026-08-26",
        "close": 174586
      },
      {
        "date": "2026-08-27",
        "close": 175135
      },
      {
        "date": "2026-08-28",
        "close": 175665
      },
      {
        "date": "2026-08-31",
        "close": 177419
      },
      {
        "date": "2026-09-01",
        "close": 179723
      },
      {
        "date": "2026-09-02",
        "close": 185205
      },
      {
        "date": "2026-09-03",
        "close": 185188
      },
      {
        "date": "2026-09-04",
        "close": 185147
      },
      {
        "date": "2026-09-08",
        "close": 187367
      },
      {
        "date": "2026-09-09",
        "close": 185629
      },
      {
        "date": "2026-09-10",
        "close": 188269
      },
      {
        "date": "2026-09-11",
        "close": 187207
      }
    ]
  },
  "CAN": {
    "countryId": "CAN",
    "nameEn": "S&P/TSX Composite",
    "nameKo": "S&P/TSX 종합",
    "ticker": "^GSPTSE",
    "isSupported": true,
    "currency": "CAD",
    "currentPrice": 35697.49,
    "changePct": -2.13,
    "points": [
      {
        "date": "2026-08-11",
        "close": 36475.9
      },
      {
        "date": "2026-08-12",
        "close": 36662.1
      },
      {
        "date": "2026-08-13",
        "close": 36759.3
      },
      {
        "date": "2026-08-14",
        "close": 36730.3
      },
      {
        "date": "2026-08-17",
        "close": 36667.9
      },
      {
        "date": "2026-08-18",
        "close": 36367.9
      },
      {
        "date": "2026-08-19",
        "close": 36401.8
      },
      {
        "date": "2026-08-20",
        "close": 36365.4
      },
      {
        "date": "2026-08-21",
        "close": 36620.2
      },
      {
        "date": "2026-08-24",
        "close": 36714.1
      },
      {
        "date": "2026-08-25",
        "close": 36957.6
      },
      {
        "date": "2026-08-26",
        "close": 36813.7
      },
      {
        "date": "2026-08-27",
        "close": 36834.3
      },
      {
        "date": "2026-08-28",
        "close": 36553.9
      },
      {
        "date": "2026-08-31",
        "close": 36270.5
      },
      {
        "date": "2026-09-01",
        "close": 35825.7
      },
      {
        "date": "2026-09-02",
        "close": 36091.6
      },
      {
        "date": "2026-09-03",
        "close": 36633.1
      },
      {
        "date": "2026-09-04",
        "close": 36513.8
      },
      {
        "date": "2026-09-08",
        "close": 36123.1
      },
      {
        "date": "2026-09-09",
        "close": 35906.6
      },
      {
        "date": "2026-09-10",
        "close": 35506.3
      },
      {
        "date": "2026-09-11",
        "close": 35697.5
      }
    ]
  },
  "RUS": {
    "countryId": "RUS",
    "nameEn": "MOEX Russia",
    "nameKo": "MOEX 러시아",
    "ticker": "",
    "isSupported": false,
    "fallbackReasonEn": "Market data is restricted due to international financial sanctions.",
    "fallbackReasonKo": "국제 금융 제재 및 거래소 규제로 인해 데이터 조회가 제한됩니다.",
    "currency": "USD",
    "currentPrice": 0,
    "changePct": 0,
    "points": []
  },
  "MEX": {
    "countryId": "MEX",
    "nameEn": "S&P/BMV IPC",
    "nameKo": "S&P/BMV IPC",
    "ticker": "^MXX",
    "isSupported": true,
    "currency": "MXN",
    "currentPrice": 63924.77,
    "changePct": -2.5,
    "points": [
      {
        "date": "2026-08-11",
        "close": 65564.76
      },
      {
        "date": "2026-08-12",
        "close": 65755.97
      },
      {
        "date": "2026-08-13",
        "close": 64826.39
      },
      {
        "date": "2026-08-14",
        "close": 64397.45
      },
      {
        "date": "2026-08-17",
        "close": 64254.98
      },
      {
        "date": "2026-08-18",
        "close": 63933.69
      },
      {
        "date": "2026-08-19",
        "close": 63999.26
      },
      {
        "date": "2026-08-20",
        "close": 64349.8
      },
      {
        "date": "2026-08-21",
        "close": 65729.18
      },
      {
        "date": "2026-08-24",
        "close": 65770.85
      },
      {
        "date": "2026-08-25",
        "close": 66293.07
      },
      {
        "date": "2026-08-26",
        "close": 66191.11
      },
      {
        "date": "2026-08-27",
        "close": 65829.98
      },
      {
        "date": "2026-08-28",
        "close": 65484.32
      },
      {
        "date": "2026-08-31",
        "close": 65430.32
      },
      {
        "date": "2026-09-01",
        "close": 64514.25
      },
      {
        "date": "2026-09-02",
        "close": 64884.28
      },
      {
        "date": "2026-09-03",
        "close": 65436.16
      },
      {
        "date": "2026-09-04",
        "close": 64866.61
      },
      {
        "date": "2026-09-07",
        "close": 64727.54
      },
      {
        "date": "2026-09-08",
        "close": 65065.56
      },
      {
        "date": "2026-09-09",
        "close": 64814.97
      },
      {
        "date": "2026-09-10",
        "close": 64106.82
      },
      {
        "date": "2026-09-11",
        "close": 63924.77
      }
    ]
  },
  "AUS": {
    "countryId": "AUS",
    "nameEn": "S&P/ASX 200",
    "nameKo": "S&P/ASX 200",
    "ticker": "^AXJO",
    "isSupported": true,
    "currency": "AUD",
    "currentPrice": 8741.2,
    "changePct": -5.51,
    "points": [
      {
        "date": "2026-08-11",
        "close": 9250.6
      },
      {
        "date": "2026-08-12",
        "close": 9209.4
      },
      {
        "date": "2026-08-13",
        "close": 9188.5
      },
      {
        "date": "2026-08-14",
        "close": 9115.2
      },
      {
        "date": "2026-08-17",
        "close": 9073.2
      },
      {
        "date": "2026-08-18",
        "close": 9070
      },
      {
        "date": "2026-08-19",
        "close": 9053.8
      },
      {
        "date": "2026-08-20",
        "close": 9083.8
      },
      {
        "date": "2026-08-21",
        "close": 9058.9
      },
      {
        "date": "2026-08-24",
        "close": 9103.1
      },
      {
        "date": "2026-08-25",
        "close": 9164.6
      },
      {
        "date": "2026-08-26",
        "close": 9127.8
      },
      {
        "date": "2026-08-27",
        "close": 9038.2
      },
      {
        "date": "2026-08-28",
        "close": 9092.3
      },
      {
        "date": "2026-08-31",
        "close": 9076
      },
      {
        "date": "2026-09-01",
        "close": 9066.7
      },
      {
        "date": "2026-09-02",
        "close": 8978.4
      },
      {
        "date": "2026-09-03",
        "close": 9020.1
      },
      {
        "date": "2026-09-04",
        "close": 9005.9
      },
      {
        "date": "2026-09-07",
        "close": 9010.9
      },
      {
        "date": "2026-09-08",
        "close": 8920.8
      },
      {
        "date": "2026-09-09",
        "close": 8911.4
      },
      {
        "date": "2026-09-10",
        "close": 8819.4
      },
      {
        "date": "2026-09-11",
        "close": 8741.2
      }
    ]
  },
  "KOR": {
    "countryId": "KOR",
    "nameEn": "KOSPI",
    "nameKo": "KOSPI (코스피)",
    "ticker": "^KS11",
    "isSupported": true,
    "currency": "KRW",
    "currentPrice": 6909.91,
    "changePct": 8.89,
    "points": [
      {
        "date": "2026-08-11",
        "close": 6345.53
      },
      {
        "date": "2026-08-12",
        "close": 6579.04
      },
      {
        "date": "2026-08-13",
        "close": 6813.34
      },
      {
        "date": "2026-08-14",
        "close": 6977.94
      },
      {
        "date": "2026-08-18",
        "close": 6869.83
      },
      {
        "date": "2026-08-19",
        "close": 6471.17
      },
      {
        "date": "2026-08-20",
        "close": 6852.58
      },
      {
        "date": "2026-08-21",
        "close": 6912.95
      },
      {
        "date": "2026-08-24",
        "close": 6696.96
      },
      {
        "date": "2026-08-25",
        "close": 6742.74
      },
      {
        "date": "2026-08-26",
        "close": 6808.21
      },
      {
        "date": "2026-08-27",
        "close": 6912.37
      },
      {
        "date": "2026-08-28",
        "close": 6788.88
      },
      {
        "date": "2026-08-31",
        "close": 6820.02
      },
      {
        "date": "2026-09-01",
        "close": 6835.8
      },
      {
        "date": "2026-09-02",
        "close": 6562.72
      },
      {
        "date": "2026-09-03",
        "close": 6579.48
      },
      {
        "date": "2026-09-04",
        "close": 6687.21
      },
      {
        "date": "2026-09-07",
        "close": 6995.39
      },
      {
        "date": "2026-09-08",
        "close": 6954.52
      },
      {
        "date": "2026-09-09",
        "close": 7051.64
      },
      {
        "date": "2026-09-10",
        "close": 7033.92
      },
      {
        "date": "2026-09-11",
        "close": 6909.91
      }
    ]
  },
  "ESP": {
    "countryId": "ESP",
    "nameEn": "IBEX 35",
    "nameKo": "IBEX 35",
    "ticker": "^IBEX",
    "isSupported": true,
    "currency": "EUR",
    "currentPrice": 19838.5,
    "changePct": -1.86,
    "points": [
      {
        "date": "2026-08-11",
        "close": 20213.6
      },
      {
        "date": "2026-08-12",
        "close": 20204.4
      },
      {
        "date": "2026-08-13",
        "close": 20168.6
      },
      {
        "date": "2026-08-14",
        "close": 20156.6
      },
      {
        "date": "2026-08-17",
        "close": 19981.9
      },
      {
        "date": "2026-08-18",
        "close": 19934.9
      },
      {
        "date": "2026-08-19",
        "close": 19847.5
      },
      {
        "date": "2026-08-20",
        "close": 19811
      },
      {
        "date": "2026-08-21",
        "close": 19961.5
      },
      {
        "date": "2026-08-24",
        "close": 20098.6
      },
      {
        "date": "2026-08-25",
        "close": 20056.6
      },
      {
        "date": "2026-08-26",
        "close": 20067.3
      },
      {
        "date": "2026-08-27",
        "close": 19881.6
      },
      {
        "date": "2026-08-28",
        "close": 20041.9
      },
      {
        "date": "2026-08-31",
        "close": 19974.1
      },
      {
        "date": "2026-09-01",
        "close": 19824
      },
      {
        "date": "2026-09-02",
        "close": 19779
      },
      {
        "date": "2026-09-03",
        "close": 20000.2
      },
      {
        "date": "2026-09-04",
        "close": 20050.7
      },
      {
        "date": "2026-09-07",
        "close": 20021.8
      },
      {
        "date": "2026-09-08",
        "close": 19997.1
      },
      {
        "date": "2026-09-09",
        "close": 19695.3
      },
      {
        "date": "2026-09-10",
        "close": 19659.8
      },
      {
        "date": "2026-09-11",
        "close": 19838.5
      }
    ]
  },
  "IDN": {
    "countryId": "IDN",
    "nameEn": "Jakarta Composite (IHSG)",
    "nameKo": "IDX 종합 (IHSG)",
    "ticker": "^JKSE",
    "isSupported": true,
    "currency": "IDR",
    "currentPrice": 6541.38,
    "changePct": 4.36,
    "points": [
      {
        "date": "2026-08-11",
        "close": 6267.88
      },
      {
        "date": "2026-08-12",
        "close": 6373.85
      },
      {
        "date": "2026-08-13",
        "close": 6301.77
      },
      {
        "date": "2026-08-14",
        "close": 6401.89
      },
      {
        "date": "2026-08-18",
        "close": 6449.83
      },
      {
        "date": "2026-08-19",
        "close": 6394.13
      },
      {
        "date": "2026-08-20",
        "close": 6501.58
      },
      {
        "date": "2026-08-21",
        "close": 6525.69
      },
      {
        "date": "2026-08-24",
        "close": 6501.67
      },
      {
        "date": "2026-08-26",
        "close": 6405.69
      },
      {
        "date": "2026-08-27",
        "close": 6521.75
      },
      {
        "date": "2026-08-28",
        "close": 6518.12
      },
      {
        "date": "2026-08-31",
        "close": 6525.48
      },
      {
        "date": "2026-09-01",
        "close": 6599.94
      },
      {
        "date": "2026-09-02",
        "close": 6595.78
      },
      {
        "date": "2026-09-03",
        "close": 6667.89
      },
      {
        "date": "2026-09-04",
        "close": 6636.48
      },
      {
        "date": "2026-09-07",
        "close": 6619.67
      },
      {
        "date": "2026-09-08",
        "close": 6686.44
      },
      {
        "date": "2026-09-09",
        "close": 6678.2
      },
      {
        "date": "2026-09-10",
        "close": 6589.34
      },
      {
        "date": "2026-09-11",
        "close": 6541.38
      }
    ]
  },
  "TUR": {
    "countryId": "TUR",
    "nameEn": "BIST 100",
    "nameKo": "BIST 100",
    "ticker": "XU100.IS",
    "isSupported": true,
    "currency": "TRY",
    "currentPrice": 14467.25,
    "changePct": 5.57,
    "points": [
      {
        "date": "2026-08-11",
        "close": 13704.5
      },
      {
        "date": "2026-08-12",
        "close": 14110.1
      },
      {
        "date": "2026-08-13",
        "close": 14132.2
      },
      {
        "date": "2026-08-14",
        "close": 14172.3
      },
      {
        "date": "2026-08-17",
        "close": 14132.1
      },
      {
        "date": "2026-08-18",
        "close": 14128
      },
      {
        "date": "2026-08-19",
        "close": 14459
      },
      {
        "date": "2026-08-20",
        "close": 14396.5
      },
      {
        "date": "2026-08-21",
        "close": 14514.8
      },
      {
        "date": "2026-08-24",
        "close": 14501.5
      },
      {
        "date": "2026-08-25",
        "close": 14473.4
      },
      {
        "date": "2026-08-26",
        "close": 14610.9
      },
      {
        "date": "2026-08-27",
        "close": 14575.5
      },
      {
        "date": "2026-08-28",
        "close": 14641.6
      },
      {
        "date": "2026-08-31",
        "close": 14334.1
      },
      {
        "date": "2026-09-01",
        "close": 14229
      },
      {
        "date": "2026-09-02",
        "close": 14050.6
      },
      {
        "date": "2026-09-03",
        "close": 13932.5
      },
      {
        "date": "2026-09-04",
        "close": 14012.4
      },
      {
        "date": "2026-09-07",
        "close": 14151.6
      },
      {
        "date": "2026-09-08",
        "close": 14405.3
      },
      {
        "date": "2026-09-09",
        "close": 14505.5
      },
      {
        "date": "2026-09-10",
        "close": 14393.9
      },
      {
        "date": "2026-09-11",
        "close": 14467.3
      }
    ]
  },
  "NLD": {
    "countryId": "NLD",
    "nameEn": "AEX Index",
    "nameKo": "AEX 지수",
    "ticker": "^AEX",
    "isSupported": true,
    "currency": "EUR",
    "currentPrice": 1098.76,
    "changePct": -1.61,
    "points": [
      {
        "date": "2026-08-11",
        "close": 1116.77
      },
      {
        "date": "2026-08-12",
        "close": 1112.28
      },
      {
        "date": "2026-08-13",
        "close": 1119.59
      },
      {
        "date": "2026-08-14",
        "close": 1117.82
      },
      {
        "date": "2026-08-17",
        "close": 1114.8
      },
      {
        "date": "2026-08-18",
        "close": 1107.32
      },
      {
        "date": "2026-08-19",
        "close": 1102.43
      },
      {
        "date": "2026-08-20",
        "close": 1102.78
      },
      {
        "date": "2026-08-21",
        "close": 1105.97
      },
      {
        "date": "2026-08-24",
        "close": 1109.95
      },
      {
        "date": "2026-08-25",
        "close": 1108.34
      },
      {
        "date": "2026-08-26",
        "close": 1107.76
      },
      {
        "date": "2026-08-27",
        "close": 1103.38
      },
      {
        "date": "2026-08-28",
        "close": 1112.28
      },
      {
        "date": "2026-08-31",
        "close": 1105.77
      },
      {
        "date": "2026-09-01",
        "close": 1101.92
      },
      {
        "date": "2026-09-02",
        "close": 1103.67
      },
      {
        "date": "2026-09-03",
        "close": 1104.62
      },
      {
        "date": "2026-09-04",
        "close": 1113.5
      },
      {
        "date": "2026-09-07",
        "close": 1115.42
      },
      {
        "date": "2026-09-08",
        "close": 1116.05
      },
      {
        "date": "2026-09-09",
        "close": 1101.89
      },
      {
        "date": "2026-09-10",
        "close": 1093.27
      },
      {
        "date": "2026-09-11",
        "close": 1098.76
      }
    ]
  },
  "SAU": {
    "countryId": "SAU",
    "nameEn": "Tadawul TASI",
    "nameKo": "타다울 TASI",
    "ticker": "^TASI.SR",
    "isSupported": true,
    "currency": "SAR",
    "currentPrice": 11007.27,
    "changePct": 0,
    "points": [
      {
        "date": "2026-09-10",
        "close": 11007.27
      }
    ]
  },
  "CHE": {
    "countryId": "CHE",
    "nameEn": "Swiss Market Index (SMI)",
    "nameKo": "SMI 지수",
    "ticker": "^SSMI",
    "isSupported": true,
    "currency": "CHF",
    "currentPrice": 13775.27,
    "changePct": -5.49,
    "points": [
      {
        "date": "2026-08-11",
        "close": 14575.25
      },
      {
        "date": "2026-08-12",
        "close": 14449.47
      },
      {
        "date": "2026-08-13",
        "close": 14475.13
      },
      {
        "date": "2026-08-14",
        "close": 14390.67
      },
      {
        "date": "2026-08-17",
        "close": 14302.39
      },
      {
        "date": "2026-08-18",
        "close": 14320.9
      },
      {
        "date": "2026-08-19",
        "close": 14386.58
      },
      {
        "date": "2026-08-20",
        "close": 14368.16
      },
      {
        "date": "2026-08-21",
        "close": 14456.98
      },
      {
        "date": "2026-08-24",
        "close": 14447.19
      },
      {
        "date": "2026-08-25",
        "close": 14525.29
      },
      {
        "date": "2026-08-26",
        "close": 14542.9
      },
      {
        "date": "2026-08-27",
        "close": 14384.37
      },
      {
        "date": "2026-08-28",
        "close": 14399.77
      },
      {
        "date": "2026-08-31",
        "close": 14286.43
      },
      {
        "date": "2026-09-01",
        "close": 14334.79
      },
      {
        "date": "2026-09-02",
        "close": 14362.97
      },
      {
        "date": "2026-09-03",
        "close": 14394.77
      },
      {
        "date": "2026-09-04",
        "close": 14395.94
      },
      {
        "date": "2026-09-07",
        "close": 14279.38
      },
      {
        "date": "2026-09-08",
        "close": 14057.61
      },
      {
        "date": "2026-09-09",
        "close": 13804.7
      },
      {
        "date": "2026-09-10",
        "close": 13740.1
      },
      {
        "date": "2026-09-11",
        "close": 13775.27
      }
    ]
  },
  "POL": {
    "countryId": "POL",
    "nameEn": "WIG20",
    "nameKo": "WIG20",
    "ticker": "WIG20.WA",
    "isSupported": true,
    "currency": "PLN",
    "currentPrice": 4139.25,
    "changePct": 0,
    "points": [
      {
        "date": "2026-09-11",
        "close": 4139.25
      }
    ]
  },
  "SWE": {
    "countryId": "SWE",
    "nameEn": "OMX Stockholm 30",
    "nameKo": "OMXS30",
    "ticker": "^OMX",
    "isSupported": true,
    "currency": "SEK",
    "currentPrice": 3255.23,
    "changePct": -1.27,
    "points": [
      {
        "date": "2026-08-11",
        "close": 3297
      },
      {
        "date": "2026-08-12",
        "close": 3291.39
      },
      {
        "date": "2026-08-13",
        "close": 3281.46
      },
      {
        "date": "2026-08-14",
        "close": 3274.52
      },
      {
        "date": "2026-08-17",
        "close": 3266.3
      },
      {
        "date": "2026-08-18",
        "close": 3244.67
      },
      {
        "date": "2026-08-19",
        "close": 3243.81
      },
      {
        "date": "2026-08-20",
        "close": 3258.33
      },
      {
        "date": "2026-08-21",
        "close": 3292.34
      },
      {
        "date": "2026-08-24",
        "close": 3290.84
      },
      {
        "date": "2026-08-25",
        "close": 3318.26
      },
      {
        "date": "2026-08-26",
        "close": 3326.34
      },
      {
        "date": "2026-08-27",
        "close": 3321.44
      },
      {
        "date": "2026-08-28",
        "close": 3331.27
      },
      {
        "date": "2026-08-31",
        "close": 3309.18
      },
      {
        "date": "2026-09-01",
        "close": 3266.43
      },
      {
        "date": "2026-09-02",
        "close": 3245.69
      },
      {
        "date": "2026-09-03",
        "close": 3278.19
      },
      {
        "date": "2026-09-04",
        "close": 3284.08
      },
      {
        "date": "2026-09-07",
        "close": 3291.84
      },
      {
        "date": "2026-09-08",
        "close": 3312.12
      },
      {
        "date": "2026-09-09",
        "close": 3258.36
      },
      {
        "date": "2026-09-10",
        "close": 3244.98
      },
      {
        "date": "2026-09-11",
        "close": 3255.23
      }
    ]
  },
  "BEL": {
    "countryId": "BEL",
    "nameEn": "BEL 20",
    "nameKo": "BEL 20",
    "ticker": "^BFX",
    "isSupported": true,
    "currency": "EUR",
    "currentPrice": 5713.36,
    "changePct": -0.11,
    "points": [
      {
        "date": "2026-08-11",
        "close": 5719.41
      },
      {
        "date": "2026-08-12",
        "close": 5723.27
      },
      {
        "date": "2026-08-13",
        "close": 5708.72
      },
      {
        "date": "2026-08-14",
        "close": 5664.48
      },
      {
        "date": "2026-08-17",
        "close": 5762.49
      },
      {
        "date": "2026-08-18",
        "close": 5758.98
      },
      {
        "date": "2026-08-19",
        "close": 5747.89
      },
      {
        "date": "2026-08-20",
        "close": 5743.62
      },
      {
        "date": "2026-08-21",
        "close": 5807.17
      },
      {
        "date": "2026-08-24",
        "close": 5813.5
      },
      {
        "date": "2026-08-25",
        "close": 5834.53
      },
      {
        "date": "2026-08-26",
        "close": 5860.95
      },
      {
        "date": "2026-08-27",
        "close": 5838.67
      },
      {
        "date": "2026-08-28",
        "close": 5869.08
      },
      {
        "date": "2026-08-31",
        "close": 5834.28
      },
      {
        "date": "2026-09-01",
        "close": 5830.29
      },
      {
        "date": "2026-09-02",
        "close": 5825.71
      },
      {
        "date": "2026-09-03",
        "close": 5879.05
      },
      {
        "date": "2026-09-04",
        "close": 5852.54
      },
      {
        "date": "2026-09-07",
        "close": 5800.92
      },
      {
        "date": "2026-09-08",
        "close": 5796.02
      },
      {
        "date": "2026-09-09",
        "close": 5737.91
      },
      {
        "date": "2026-09-10",
        "close": 5688.83
      },
      {
        "date": "2026-09-11",
        "close": 5713.36
      }
    ]
  },
  "ARG": {
    "countryId": "ARG",
    "nameEn": "S&P Merval",
    "nameKo": "S&P 메르발",
    "ticker": "^MERV",
    "isSupported": true,
    "currency": "USD",
    "currentPrice": 3098897.5,
    "changePct": 2.53,
    "points": [
      {
        "date": "2026-08-11",
        "close": 3022485
      },
      {
        "date": "2026-08-12",
        "close": 2999524
      },
      {
        "date": "2026-08-13",
        "close": 3000582
      },
      {
        "date": "2026-08-14",
        "close": 2947349
      },
      {
        "date": "2026-08-18",
        "close": 2891651
      },
      {
        "date": "2026-08-19",
        "close": 2874493
      },
      {
        "date": "2026-08-20",
        "close": 2875950
      },
      {
        "date": "2026-08-21",
        "close": 2913184
      },
      {
        "date": "2026-08-24",
        "close": 2995130
      },
      {
        "date": "2026-08-25",
        "close": 3009029
      },
      {
        "date": "2026-08-26",
        "close": 3024971
      },
      {
        "date": "2026-08-27",
        "close": 3001209
      },
      {
        "date": "2026-08-28",
        "close": 2979472
      },
      {
        "date": "2026-08-31",
        "close": 3033848
      },
      {
        "date": "2026-09-01",
        "close": 3049455
      },
      {
        "date": "2026-09-02",
        "close": 3106216
      },
      {
        "date": "2026-09-03",
        "close": 3058093
      },
      {
        "date": "2026-09-04",
        "close": 3049122
      },
      {
        "date": "2026-09-07",
        "close": 3034599
      },
      {
        "date": "2026-09-08",
        "close": 3075982
      },
      {
        "date": "2026-09-09",
        "close": 3110164
      },
      {
        "date": "2026-09-10",
        "close": 3157852
      },
      {
        "date": "2026-09-11",
        "close": 3098898
      }
    ]
  },
  "IRL": {
    "countryId": "IRL",
    "nameEn": "ISEQ 20",
    "nameKo": "ISEQ 20",
    "ticker": "^ISEQ",
    "isSupported": true,
    "currency": "EUR",
    "currentPrice": 14457.31,
    "changePct": 1.57,
    "points": [
      {
        "date": "2026-08-11",
        "close": 14233.55
      },
      {
        "date": "2026-08-12",
        "close": 14452.6
      },
      {
        "date": "2026-08-13",
        "close": 14385.15
      },
      {
        "date": "2026-08-14",
        "close": 14331.67
      },
      {
        "date": "2026-08-17",
        "close": 14265.96
      },
      {
        "date": "2026-08-18",
        "close": 14086.61
      },
      {
        "date": "2026-08-19",
        "close": 13976.27
      },
      {
        "date": "2026-08-20",
        "close": 14031.78
      },
      {
        "date": "2026-08-21",
        "close": 14186.95
      },
      {
        "date": "2026-08-24",
        "close": 14290.01
      },
      {
        "date": "2026-08-25",
        "close": 14351.49
      },
      {
        "date": "2026-08-26",
        "close": 14374.67
      },
      {
        "date": "2026-08-27",
        "close": 14191.46
      },
      {
        "date": "2026-08-28",
        "close": 14208.23
      },
      {
        "date": "2026-08-31",
        "close": 14212.84
      },
      {
        "date": "2026-09-01",
        "close": 14141.2
      },
      {
        "date": "2026-09-02",
        "close": 14245.22
      },
      {
        "date": "2026-09-03",
        "close": 14389.6
      },
      {
        "date": "2026-09-04",
        "close": 14513.9
      },
      {
        "date": "2026-09-07",
        "close": 14377.95
      },
      {
        "date": "2026-09-08",
        "close": 14536.9
      },
      {
        "date": "2026-09-09",
        "close": 14400.87
      },
      {
        "date": "2026-09-10",
        "close": 14381.68
      },
      {
        "date": "2026-09-11",
        "close": 14457.31
      }
    ]
  },
  "NOR": {
    "countryId": "NOR",
    "nameEn": "OBX Index",
    "nameKo": "OBX 지수",
    "ticker": "OBX.OL",
    "isSupported": true,
    "currency": "NOK",
    "currentPrice": 2030.38,
    "changePct": 0,
    "points": [
      {
        "date": "2026-09-11",
        "close": 2030.38
      }
    ]
  },
  "AUT": {
    "countryId": "AUT",
    "nameEn": "ATX Index",
    "nameKo": "ATX 지수",
    "ticker": "^ATX",
    "isSupported": true,
    "currency": "EUR",
    "currentPrice": 6885.23,
    "changePct": 3.18,
    "points": [
      {
        "date": "2026-08-11",
        "close": 6672.96
      },
      {
        "date": "2026-08-12",
        "close": 6710.19
      },
      {
        "date": "2026-08-13",
        "close": 6728.18
      },
      {
        "date": "2026-08-14",
        "close": 6733.16
      },
      {
        "date": "2026-08-17",
        "close": 6701.69
      },
      {
        "date": "2026-08-18",
        "close": 6642.38
      },
      {
        "date": "2026-08-19",
        "close": 6592.91
      },
      {
        "date": "2026-08-20",
        "close": 6567.24
      },
      {
        "date": "2026-08-21",
        "close": 6631.8
      },
      {
        "date": "2026-08-24",
        "close": 6617.52
      },
      {
        "date": "2026-08-25",
        "close": 6672.27
      },
      {
        "date": "2026-08-26",
        "close": 6758.44
      },
      {
        "date": "2026-08-27",
        "close": 6676.23
      },
      {
        "date": "2026-08-28",
        "close": 6786.58
      },
      {
        "date": "2026-08-31",
        "close": 6768.24
      },
      {
        "date": "2026-09-01",
        "close": 6758.19
      },
      {
        "date": "2026-09-02",
        "close": 6755.61
      },
      {
        "date": "2026-09-03",
        "close": 6800.72
      },
      {
        "date": "2026-09-04",
        "close": 6858.28
      },
      {
        "date": "2026-09-07",
        "close": 6905.36
      },
      {
        "date": "2026-09-08",
        "close": 6905.58
      },
      {
        "date": "2026-09-09",
        "close": 6859.91
      },
      {
        "date": "2026-09-10",
        "close": 6869.81
      },
      {
        "date": "2026-09-11",
        "close": 6885.23
      }
    ]
  },
  "ISR": {
    "countryId": "ISR",
    "nameEn": "TA-125",
    "nameKo": "TA-125",
    "ticker": "^TA125.TA",
    "isSupported": true,
    "currency": "ILS",
    "currentPrice": 4121.28,
    "changePct": 2.18,
    "points": [
      {
        "date": "2026-08-11",
        "close": 4033.17
      },
      {
        "date": "2026-08-12",
        "close": 4065.22
      },
      {
        "date": "2026-08-13",
        "close": 4087.3
      },
      {
        "date": "2026-08-14",
        "close": 4074.63
      },
      {
        "date": "2026-08-17",
        "close": 4026.31
      },
      {
        "date": "2026-08-18",
        "close": 4040.87
      },
      {
        "date": "2026-08-19",
        "close": 4039.99
      },
      {
        "date": "2026-08-20",
        "close": 4040.89
      },
      {
        "date": "2026-08-21",
        "close": 4059.4
      },
      {
        "date": "2026-08-24",
        "close": 4014.95
      },
      {
        "date": "2026-08-25",
        "close": 4031.59
      },
      {
        "date": "2026-08-26",
        "close": 4042.96
      },
      {
        "date": "2026-08-27",
        "close": 4094.17
      },
      {
        "date": "2026-08-28",
        "close": 4081.95
      },
      {
        "date": "2026-08-31",
        "close": 4056.6
      },
      {
        "date": "2026-09-01",
        "close": 4084.21
      },
      {
        "date": "2026-09-02",
        "close": 4138.86
      },
      {
        "date": "2026-09-03",
        "close": 4169.55
      },
      {
        "date": "2026-09-04",
        "close": 4200.19
      },
      {
        "date": "2026-09-07",
        "close": 4230.05
      },
      {
        "date": "2026-09-08",
        "close": 4189.31
      },
      {
        "date": "2026-09-09",
        "close": 4179.05
      },
      {
        "date": "2026-09-10",
        "close": 4121.28
      }
    ]
  },
  "ARE": {
    "countryId": "ARE",
    "nameEn": "DFM General",
    "nameKo": "DFM 종합지수",
    "ticker": "DFMGI.AE",
    "isSupported": true,
    "currency": "AED",
    "currentPrice": 5941.23,
    "changePct": 0,
    "points": [
      {
        "date": "2026-09-11",
        "close": 5941.23
      }
    ]
  },
  "SGP": {
    "countryId": "SGP",
    "nameEn": "Straits Times Index (STI)",
    "nameKo": "스트레이츠 타임스 (STI)",
    "ticker": "^STI",
    "isSupported": true,
    "currency": "SGD",
    "currentPrice": 5695.93,
    "changePct": -1.01,
    "points": [
      {
        "date": "2026-08-11",
        "close": 5754.17
      },
      {
        "date": "2026-08-12",
        "close": 5720.75
      },
      {
        "date": "2026-08-13",
        "close": 5720.05
      },
      {
        "date": "2026-08-14",
        "close": 5743.59
      },
      {
        "date": "2026-08-17",
        "close": 5768.46
      },
      {
        "date": "2026-08-18",
        "close": 5701.4
      },
      {
        "date": "2026-08-19",
        "close": 5694.24
      },
      {
        "date": "2026-08-20",
        "close": 5671.91
      },
      {
        "date": "2026-08-21",
        "close": 5688.96
      },
      {
        "date": "2026-08-24",
        "close": 5680.46
      },
      {
        "date": "2026-08-25",
        "close": 5735.68
      },
      {
        "date": "2026-08-26",
        "close": 5721.59
      },
      {
        "date": "2026-08-27",
        "close": 5684.12
      },
      {
        "date": "2026-08-28",
        "close": 5699.93
      },
      {
        "date": "2026-08-31",
        "close": 5755.36
      },
      {
        "date": "2026-09-01",
        "close": 5710.37
      },
      {
        "date": "2026-09-02",
        "close": 5744.11
      },
      {
        "date": "2026-09-03",
        "close": 5747.71
      },
      {
        "date": "2026-09-04",
        "close": 5801.96
      },
      {
        "date": "2026-09-07",
        "close": 5792.28
      },
      {
        "date": "2026-09-08",
        "close": 5767.45
      },
      {
        "date": "2026-09-09",
        "close": 5729.63
      },
      {
        "date": "2026-09-10",
        "close": 5689.75
      },
      {
        "date": "2026-09-11",
        "close": 5695.93
      }
    ]
  },
  "MYS": {
    "countryId": "MYS",
    "nameEn": "FTSE Bursa Malaysia KLCI",
    "nameKo": "FTSE 버사 KLCI",
    "ticker": "^KLSE",
    "isSupported": true,
    "currency": "MYR",
    "currentPrice": 1686.74,
    "changePct": -2.58,
    "points": [
      {
        "date": "2026-08-11",
        "close": 1731.46
      },
      {
        "date": "2026-08-12",
        "close": 1741.61
      },
      {
        "date": "2026-08-13",
        "close": 1734.71
      },
      {
        "date": "2026-08-14",
        "close": 1727.39
      },
      {
        "date": "2026-08-17",
        "close": 1725.89
      },
      {
        "date": "2026-08-18",
        "close": 1733.36
      },
      {
        "date": "2026-08-19",
        "close": 1731.32
      },
      {
        "date": "2026-08-20",
        "close": 1736.71
      },
      {
        "date": "2026-08-21",
        "close": 1736.48
      },
      {
        "date": "2026-08-24",
        "close": 1736.33
      },
      {
        "date": "2026-08-26",
        "close": 1748.54
      },
      {
        "date": "2026-08-27",
        "close": 1741.72
      },
      {
        "date": "2026-08-28",
        "close": 1725.88
      },
      {
        "date": "2026-09-01",
        "close": 1700.54
      },
      {
        "date": "2026-09-02",
        "close": 1708.74
      },
      {
        "date": "2026-09-03",
        "close": 1715.13
      },
      {
        "date": "2026-09-04",
        "close": 1708.1
      },
      {
        "date": "2026-09-07",
        "close": 1714.79
      },
      {
        "date": "2026-09-08",
        "close": 1714.4
      },
      {
        "date": "2026-09-09",
        "close": 1714.34
      },
      {
        "date": "2026-09-10",
        "close": 1705.52
      },
      {
        "date": "2026-09-11",
        "close": 1686.74
      }
    ]
  },
  "ZAF": {
    "countryId": "ZAF",
    "nameEn": "FTSE/JSE Top 40",
    "nameKo": "FTSE/JSE Top 40",
    "ticker": "^J200.JO",
    "isSupported": true,
    "currency": "ZAR",
    "currentPrice": 107759.48,
    "changePct": -0.3,
    "points": [
      {
        "date": "2026-08-11",
        "close": 108085.6
      },
      {
        "date": "2026-08-12",
        "close": 107214.4
      },
      {
        "date": "2026-08-13",
        "close": 106249.6
      },
      {
        "date": "2026-08-14",
        "close": 106231.7
      },
      {
        "date": "2026-08-17",
        "close": 106966
      },
      {
        "date": "2026-08-18",
        "close": 105635
      },
      {
        "date": "2026-08-19",
        "close": 108462.9
      },
      {
        "date": "2026-08-20",
        "close": 108146.2
      },
      {
        "date": "2026-08-21",
        "close": 110387.1
      },
      {
        "date": "2026-08-24",
        "close": 109389.6
      },
      {
        "date": "2026-08-25",
        "close": 109534.6
      },
      {
        "date": "2026-08-26",
        "close": 109487.6
      },
      {
        "date": "2026-08-27",
        "close": 109323.1
      },
      {
        "date": "2026-08-28",
        "close": 110675.5
      },
      {
        "date": "2026-08-31",
        "close": 108760.5
      },
      {
        "date": "2026-09-01",
        "close": 108358.4
      },
      {
        "date": "2026-09-02",
        "close": 107730.1
      },
      {
        "date": "2026-09-03",
        "close": 109277.2
      },
      {
        "date": "2026-09-04",
        "close": 109270.1
      },
      {
        "date": "2026-09-07",
        "close": 109606.5
      },
      {
        "date": "2026-09-08",
        "close": 110035.4
      },
      {
        "date": "2026-09-09",
        "close": 109091.2
      },
      {
        "date": "2026-09-10",
        "close": 107552
      },
      {
        "date": "2026-09-11",
        "close": 107759.5
      }
    ]
  },
  "PHL": {
    "countryId": "PHL",
    "nameEn": "PSEi Index",
    "nameKo": "PSEi 지수",
    "ticker": "PSEI.PS",
    "isSupported": true,
    "currency": "PHP",
    "currentPrice": 6061.81,
    "changePct": 0,
    "points": [
      {
        "date": "2026-09-11",
        "close": 6061.81
      }
    ]
  },
  "DNK": {
    "countryId": "DNK",
    "nameEn": "OMX Copenhagen 25",
    "nameKo": "OMXC25",
    "ticker": "^OMXC25",
    "isSupported": true,
    "currency": "DKK",
    "currentPrice": 1865.05,
    "changePct": 1.42,
    "points": [
      {
        "date": "2026-08-11",
        "close": 1838.94
      },
      {
        "date": "2026-08-12",
        "close": 1873.52
      },
      {
        "date": "2026-08-13",
        "close": 1889.88
      },
      {
        "date": "2026-08-14",
        "close": 1899.24
      },
      {
        "date": "2026-08-17",
        "close": 1897.25
      },
      {
        "date": "2026-08-18",
        "close": 1883.41
      },
      {
        "date": "2026-08-19",
        "close": 1884.8
      },
      {
        "date": "2026-08-20",
        "close": 1890.53
      },
      {
        "date": "2026-08-21",
        "close": 1906.85
      },
      {
        "date": "2026-08-24",
        "close": 1920.33
      },
      {
        "date": "2026-08-25",
        "close": 1935.07
      },
      {
        "date": "2026-08-26",
        "close": 1920.84
      },
      {
        "date": "2026-08-27",
        "close": 1917.5
      },
      {
        "date": "2026-08-28",
        "close": 1923.68
      },
      {
        "date": "2026-08-31",
        "close": 1911.87
      },
      {
        "date": "2026-09-01",
        "close": 1897.92
      },
      {
        "date": "2026-09-02",
        "close": 1909.01
      },
      {
        "date": "2026-09-03",
        "close": 1915.88
      },
      {
        "date": "2026-09-04",
        "close": 1912.14
      },
      {
        "date": "2026-09-07",
        "close": 1911.87
      },
      {
        "date": "2026-09-08",
        "close": 1909.46
      },
      {
        "date": "2026-09-09",
        "close": 1883.86
      },
      {
        "date": "2026-09-10",
        "close": 1880.43
      },
      {
        "date": "2026-09-11",
        "close": 1865.05
      }
    ]
  },
  "EGY": {
    "countryId": "EGY",
    "nameEn": "EGX 30",
    "nameKo": "EGX 30",
    "ticker": "^CASE30",
    "isSupported": true,
    "currency": "EGP",
    "currentPrice": 56280.2,
    "changePct": 0,
    "points": [
      {
        "date": "2026-09-10",
        "close": 56280.2
      }
    ]
  },
  "BGD": {
    "countryId": "BGD",
    "nameEn": "Dhaka DSEX (MSCI Frontier)",
    "nameKo": "다카 DSEX (MSCI 프론티어)",
    "ticker": "EEM",
    "isSupported": true,
    "currency": "USD",
    "currentPrice": 67.84,
    "changePct": 2.08,
    "points": [
      {
        "date": "2026-08-12",
        "close": 66.46
      },
      {
        "date": "2026-08-13",
        "close": 66.68
      },
      {
        "date": "2026-08-14",
        "close": 66.61
      },
      {
        "date": "2026-08-17",
        "close": 67.32
      },
      {
        "date": "2026-08-18",
        "close": 65.34
      },
      {
        "date": "2026-08-19",
        "close": 66.11
      },
      {
        "date": "2026-08-20",
        "close": 66.62
      },
      {
        "date": "2026-08-21",
        "close": 67.12
      },
      {
        "date": "2026-08-24",
        "close": 66.11
      },
      {
        "date": "2026-08-25",
        "close": 67.25
      },
      {
        "date": "2026-08-26",
        "close": 67.17
      },
      {
        "date": "2026-08-27",
        "close": 67.61
      },
      {
        "date": "2026-08-28",
        "close": 67.14
      },
      {
        "date": "2026-08-31",
        "close": 67.02
      },
      {
        "date": "2026-09-01",
        "close": 66.77
      },
      {
        "date": "2026-09-02",
        "close": 67.15
      },
      {
        "date": "2026-09-03",
        "close": 67.47
      },
      {
        "date": "2026-09-04",
        "close": 68.7
      },
      {
        "date": "2026-09-08",
        "close": 68.83
      },
      {
        "date": "2026-09-09",
        "close": 68.48
      },
      {
        "date": "2026-09-10",
        "close": 67
      },
      {
        "date": "2026-09-11",
        "close": 67.84
      }
    ]
  },
  "VNM": {
    "countryId": "VNM",
    "nameEn": "VN-Index (VanEck Vietnam)",
    "nameKo": "VN 지수 (VanEck 베트남)",
    "ticker": "VNM",
    "isSupported": true,
    "currency": "USD",
    "currentPrice": 17.5,
    "changePct": -1.69,
    "points": [
      {
        "date": "2026-08-12",
        "close": 17.8
      },
      {
        "date": "2026-08-13",
        "close": 17.52
      },
      {
        "date": "2026-08-14",
        "close": 17.16
      },
      {
        "date": "2026-08-17",
        "close": 17.15
      },
      {
        "date": "2026-08-18",
        "close": 17.11
      },
      {
        "date": "2026-08-19",
        "close": 17.08
      },
      {
        "date": "2026-08-20",
        "close": 17.15
      },
      {
        "date": "2026-08-21",
        "close": 17.87
      },
      {
        "date": "2026-08-24",
        "close": 17.9
      },
      {
        "date": "2026-08-25",
        "close": 17.95
      },
      {
        "date": "2026-08-26",
        "close": 18.15
      },
      {
        "date": "2026-08-27",
        "close": 18.24
      },
      {
        "date": "2026-08-28",
        "close": 18.18
      },
      {
        "date": "2026-08-31",
        "close": 18.06
      },
      {
        "date": "2026-09-01",
        "close": 18.11
      },
      {
        "date": "2026-09-02",
        "close": 18.04
      },
      {
        "date": "2026-09-03",
        "close": 17.9
      },
      {
        "date": "2026-09-04",
        "close": 18.16
      },
      {
        "date": "2026-09-08",
        "close": 17.91
      },
      {
        "date": "2026-09-09",
        "close": 17.85
      },
      {
        "date": "2026-09-10",
        "close": 18
      },
      {
        "date": "2026-09-11",
        "close": 17.5
      }
    ]
  },
  "NGA": {
    "countryId": "NGA",
    "nameEn": "NGX ASI (VanEck Africa)",
    "nameKo": "NGX ASI (VanEck 아프리카)",
    "ticker": "AFK",
    "isSupported": true,
    "currency": "USD",
    "currentPrice": 28.99,
    "changePct": 3.2,
    "points": [
      {
        "date": "2026-08-12",
        "close": 28.09
      },
      {
        "date": "2026-08-13",
        "close": 28.2
      },
      {
        "date": "2026-08-14",
        "close": 27.91
      },
      {
        "date": "2026-08-17",
        "close": 28.09
      },
      {
        "date": "2026-08-18",
        "close": 27.68
      },
      {
        "date": "2026-08-19",
        "close": 28.85
      },
      {
        "date": "2026-08-20",
        "close": 29.18
      },
      {
        "date": "2026-08-21",
        "close": 29.86
      },
      {
        "date": "2026-08-24",
        "close": 29.54
      },
      {
        "date": "2026-08-25",
        "close": 29.85
      },
      {
        "date": "2026-08-26",
        "close": 29.75
      },
      {
        "date": "2026-08-27",
        "close": 29.6
      },
      {
        "date": "2026-08-28",
        "close": 29.18
      },
      {
        "date": "2026-08-31",
        "close": 29.12
      },
      {
        "date": "2026-09-01",
        "close": 28.75
      },
      {
        "date": "2026-09-02",
        "close": 29.25
      },
      {
        "date": "2026-09-03",
        "close": 29.87
      },
      {
        "date": "2026-09-04",
        "close": 29.78
      },
      {
        "date": "2026-09-08",
        "close": 29.94
      },
      {
        "date": "2026-09-09",
        "close": 29.8
      },
      {
        "date": "2026-09-10",
        "close": 29.14
      },
      {
        "date": "2026-09-11",
        "close": 28.99
      }
    ]
  },
  "THA": {
    "countryId": "THA",
    "nameEn": "SET Index",
    "nameKo": "SET 지수",
    "ticker": "^SET.BK",
    "isSupported": true,
    "currency": "THB",
    "currentPrice": 1604.52,
    "changePct": 0,
    "points": [
      {
        "date": "2026-09-11",
        "close": 1604.52
      }
    ]
  },
  "HKG": {
    "countryId": "HKG",
    "nameEn": "Hang Seng Index (HSI)",
    "nameKo": "항셍 지수 (HSI)",
    "ticker": "^HSI",
    "isSupported": true,
    "currency": "HKD",
    "currentPrice": 24805.63,
    "changePct": -3.3,
    "points": [
      {
        "date": "2026-08-11",
        "close": 25652.82
      },
      {
        "date": "2026-08-12",
        "close": 25440.17
      },
      {
        "date": "2026-08-13",
        "close": 25396.51
      },
      {
        "date": "2026-08-14",
        "close": 25116.85
      },
      {
        "date": "2026-08-17",
        "close": 25453.23
      },
      {
        "date": "2026-08-18",
        "close": 25471.15
      },
      {
        "date": "2026-08-19",
        "close": 25495.07
      },
      {
        "date": "2026-08-20",
        "close": 25698.49
      },
      {
        "date": "2026-08-21",
        "close": 26009.46
      },
      {
        "date": "2026-08-24",
        "close": 25517.33
      },
      {
        "date": "2026-08-25",
        "close": 25511.1
      },
      {
        "date": "2026-08-26",
        "close": 25652.97
      },
      {
        "date": "2026-08-27",
        "close": 25565.74
      },
      {
        "date": "2026-08-28",
        "close": 25584.79
      },
      {
        "date": "2026-08-31",
        "close": 25566.99
      },
      {
        "date": "2026-09-01",
        "close": 25329.73
      },
      {
        "date": "2026-09-02",
        "close": 25311.21
      },
      {
        "date": "2026-09-03",
        "close": 25213.31
      },
      {
        "date": "2026-09-04",
        "close": 25650.87
      },
      {
        "date": "2026-09-07",
        "close": 25413.12
      },
      {
        "date": "2026-09-08",
        "close": 25317.18
      },
      {
        "date": "2026-09-09",
        "close": 25274.96
      },
      {
        "date": "2026-09-10",
        "close": 24954.47
      },
      {
        "date": "2026-09-11",
        "close": 24805.63
      }
    ]
  },
  "NZL": {
    "countryId": "NZL",
    "nameEn": "S&P/NZX 50",
    "nameKo": "S&P/NZX 50",
    "ticker": "^NZ50",
    "isSupported": true,
    "currency": "NZD",
    "currentPrice": 13580.33,
    "changePct": -2.02,
    "points": [
      {
        "date": "2026-08-10",
        "close": 13860.66
      },
      {
        "date": "2026-08-11",
        "close": 13737.66
      },
      {
        "date": "2026-08-12",
        "close": 13825.3
      },
      {
        "date": "2026-08-13",
        "close": 13854.38
      },
      {
        "date": "2026-08-16",
        "close": 13721.98
      },
      {
        "date": "2026-08-17",
        "close": 13866.18
      },
      {
        "date": "2026-08-18",
        "close": 13929.67
      },
      {
        "date": "2026-08-19",
        "close": 13919.82
      },
      {
        "date": "2026-08-20",
        "close": 13972.66
      },
      {
        "date": "2026-08-23",
        "close": 13881.88
      },
      {
        "date": "2026-08-24",
        "close": 13992.72
      },
      {
        "date": "2026-08-25",
        "close": 14013.21
      },
      {
        "date": "2026-08-26",
        "close": 13880.05
      },
      {
        "date": "2026-08-27",
        "close": 13768.18
      },
      {
        "date": "2026-08-30",
        "close": 13917.3
      },
      {
        "date": "2026-08-31",
        "close": 13786.9
      },
      {
        "date": "2026-09-01",
        "close": 13930.57
      },
      {
        "date": "2026-09-02",
        "close": 13846.18
      },
      {
        "date": "2026-09-03",
        "close": 13974.18
      },
      {
        "date": "2026-09-06",
        "close": 13942.83
      },
      {
        "date": "2026-09-07",
        "close": 13792.9
      },
      {
        "date": "2026-09-08",
        "close": 13819.43
      },
      {
        "date": "2026-09-09",
        "close": 13711.01
      },
      {
        "date": "2026-09-10",
        "close": 13580.33
      },
      {
        "date": "2026-09-11",
        "close": 13580.33
      }
    ]
  },
  "FIN": {
    "countryId": "FIN",
    "nameEn": "OMX Helsinki 25",
    "nameKo": "OMXH25",
    "ticker": "^OMXH25",
    "isSupported": true,
    "currency": "EUR",
    "currentPrice": 6540.5,
    "changePct": 4.82,
    "points": [
      {
        "date": "2026-08-11",
        "close": 6239.94
      },
      {
        "date": "2026-08-12",
        "close": 6307.38
      },
      {
        "date": "2026-08-13",
        "close": 6346.67
      },
      {
        "date": "2026-08-14",
        "close": 6348.86
      },
      {
        "date": "2026-08-17",
        "close": 6379.08
      },
      {
        "date": "2026-08-18",
        "close": 6276.17
      },
      {
        "date": "2026-08-19",
        "close": 6294.1
      },
      {
        "date": "2026-08-20",
        "close": 6336.17
      },
      {
        "date": "2026-08-21",
        "close": 6408.7
      },
      {
        "date": "2026-08-24",
        "close": 6394.11
      },
      {
        "date": "2026-08-25",
        "close": 6491.09
      },
      {
        "date": "2026-08-26",
        "close": 6493.3
      },
      {
        "date": "2026-08-27",
        "close": 6499.01
      },
      {
        "date": "2026-08-28",
        "close": 6514.53
      },
      {
        "date": "2026-08-31",
        "close": 6441.71
      },
      {
        "date": "2026-09-01",
        "close": 6432.46
      },
      {
        "date": "2026-09-02",
        "close": 6407.84
      },
      {
        "date": "2026-09-03",
        "close": 6402.97
      },
      {
        "date": "2026-09-04",
        "close": 6454.82
      },
      {
        "date": "2026-09-07",
        "close": 6495.32
      },
      {
        "date": "2026-09-08",
        "close": 6529.6
      },
      {
        "date": "2026-09-09",
        "close": 6579.93
      },
      {
        "date": "2026-09-10",
        "close": 6508.99
      },
      {
        "date": "2026-09-11",
        "close": 6540.5
      }
    ]
  },
  "PRT": {
    "countryId": "PRT",
    "nameEn": "PSI (EDP Portugal Proxy)",
    "nameKo": "PSI 지수 (EDP 포르투갈)",
    "ticker": "EDP.LS",
    "isSupported": true,
    "currency": "EUR",
    "currentPrice": 4.8,
    "changePct": 6.11,
    "points": [
      {
        "date": "2026-08-11",
        "close": 4.52
      },
      {
        "date": "2026-08-12",
        "close": 4.57
      },
      {
        "date": "2026-08-13",
        "close": 4.55
      },
      {
        "date": "2026-08-14",
        "close": 4.55
      },
      {
        "date": "2026-08-17",
        "close": 4.52
      },
      {
        "date": "2026-08-18",
        "close": 4.66
      },
      {
        "date": "2026-08-19",
        "close": 4.59
      },
      {
        "date": "2026-08-20",
        "close": 4.65
      },
      {
        "date": "2026-08-21",
        "close": 4.62
      },
      {
        "date": "2026-08-24",
        "close": 4.64
      },
      {
        "date": "2026-08-25",
        "close": 4.68
      },
      {
        "date": "2026-08-26",
        "close": 4.7
      },
      {
        "date": "2026-08-27",
        "close": 4.67
      },
      {
        "date": "2026-08-28",
        "close": 4.7
      },
      {
        "date": "2026-08-31",
        "close": 4.68
      },
      {
        "date": "2026-09-01",
        "close": 4.72
      },
      {
        "date": "2026-09-02",
        "close": 4.67
      },
      {
        "date": "2026-09-03",
        "close": 4.63
      },
      {
        "date": "2026-09-04",
        "close": 4.65
      },
      {
        "date": "2026-09-08",
        "close": 4.74
      },
      {
        "date": "2026-09-09",
        "close": 4.72
      },
      {
        "date": "2026-09-10",
        "close": 4.78
      },
      {
        "date": "2026-09-11",
        "close": 4.8
      }
    ]
  },
  "COL": {
    "countryId": "COL",
    "nameEn": "MSCI COLCAP (Ecopetrol)",
    "nameKo": "MSCI COLCAP (에코페트롤)",
    "ticker": "EC",
    "isSupported": true,
    "currency": "USD",
    "currentPrice": 17.75,
    "changePct": 4.66,
    "points": [
      {
        "date": "2026-08-12",
        "close": 16.96
      },
      {
        "date": "2026-08-13",
        "close": 17.21
      },
      {
        "date": "2026-08-14",
        "close": 17.17
      },
      {
        "date": "2026-08-17",
        "close": 17.67
      },
      {
        "date": "2026-08-18",
        "close": 17.68
      },
      {
        "date": "2026-08-19",
        "close": 17.89
      },
      {
        "date": "2026-08-20",
        "close": 17.65
      },
      {
        "date": "2026-08-21",
        "close": 17.53
      },
      {
        "date": "2026-08-24",
        "close": 17.33
      },
      {
        "date": "2026-08-25",
        "close": 16.79
      },
      {
        "date": "2026-08-26",
        "close": 16.52
      },
      {
        "date": "2026-08-27",
        "close": 16.56
      },
      {
        "date": "2026-08-28",
        "close": 16.5
      },
      {
        "date": "2026-08-31",
        "close": 16.67
      },
      {
        "date": "2026-09-01",
        "close": 17.45
      },
      {
        "date": "2026-09-02",
        "close": 17.51
      },
      {
        "date": "2026-09-03",
        "close": 17.2
      },
      {
        "date": "2026-09-04",
        "close": 17.25
      },
      {
        "date": "2026-09-08",
        "close": 17.78
      },
      {
        "date": "2026-09-09",
        "close": 17.83
      },
      {
        "date": "2026-09-10",
        "close": 18.07
      },
      {
        "date": "2026-09-11",
        "close": 17.75
      }
    ]
  },
  "CHL": {
    "countryId": "CHL",
    "nameEn": "S&P/CLX IPSA (iShares Chile)",
    "nameKo": "S&P IPSA (iShares 칠레)",
    "ticker": "ECH",
    "isSupported": true,
    "currency": "USD",
    "currentPrice": 39.48,
    "changePct": -1.35,
    "points": [
      {
        "date": "2026-08-12",
        "close": 40.02
      },
      {
        "date": "2026-08-13",
        "close": 40.04
      },
      {
        "date": "2026-08-14",
        "close": 40.32
      },
      {
        "date": "2026-08-17",
        "close": 40.52
      },
      {
        "date": "2026-08-18",
        "close": 40.08
      },
      {
        "date": "2026-08-19",
        "close": 40.7
      },
      {
        "date": "2026-08-20",
        "close": 40.65
      },
      {
        "date": "2026-08-21",
        "close": 41.44
      },
      {
        "date": "2026-08-24",
        "close": 42.27
      },
      {
        "date": "2026-08-25",
        "close": 41.92
      },
      {
        "date": "2026-08-26",
        "close": 41.3
      },
      {
        "date": "2026-08-27",
        "close": 41.35
      },
      {
        "date": "2026-08-28",
        "close": 40.99
      },
      {
        "date": "2026-08-31",
        "close": 40.5
      },
      {
        "date": "2026-09-01",
        "close": 40.39
      },
      {
        "date": "2026-09-02",
        "close": 41
      },
      {
        "date": "2026-09-03",
        "close": 41.05
      },
      {
        "date": "2026-09-04",
        "close": 40.84
      },
      {
        "date": "2026-09-08",
        "close": 41.08
      },
      {
        "date": "2026-09-09",
        "close": 40.74
      },
      {
        "date": "2026-09-10",
        "close": 39.69
      },
      {
        "date": "2026-09-11",
        "close": 39.48
      }
    ]
  },
  "CZE": {
    "countryId": "CZE",
    "nameEn": "Prague PX (CEZ Proxy)",
    "nameKo": "프라하 PX (CEZ 대표주)",
    "ticker": "CEZ.PR",
    "isSupported": true,
    "currency": "CZK",
    "currentPrice": 1395,
    "changePct": 1.38,
    "points": [
      {
        "date": "2026-08-11",
        "close": 1376
      },
      {
        "date": "2026-08-12",
        "close": 1374
      },
      {
        "date": "2026-08-13",
        "close": 1372
      },
      {
        "date": "2026-08-14",
        "close": 1364
      },
      {
        "date": "2026-08-17",
        "close": 1357
      },
      {
        "date": "2026-08-18",
        "close": 1366
      },
      {
        "date": "2026-08-19",
        "close": 1351
      },
      {
        "date": "2026-08-20",
        "close": 1363
      },
      {
        "date": "2026-08-21",
        "close": 1375
      },
      {
        "date": "2026-08-24",
        "close": 1376
      },
      {
        "date": "2026-08-25",
        "close": 1384
      },
      {
        "date": "2026-08-26",
        "close": 1384
      },
      {
        "date": "2026-08-27",
        "close": 1387
      },
      {
        "date": "2026-08-28",
        "close": 1389
      },
      {
        "date": "2026-08-31",
        "close": 1380
      },
      {
        "date": "2026-09-01",
        "close": 1372
      },
      {
        "date": "2026-09-02",
        "close": 1367
      },
      {
        "date": "2026-09-03",
        "close": 1379
      },
      {
        "date": "2026-09-04",
        "close": 1380
      },
      {
        "date": "2026-09-08",
        "close": 1397
      },
      {
        "date": "2026-09-09",
        "close": 1395
      },
      {
        "date": "2026-09-10",
        "close": 1395
      },
      {
        "date": "2026-09-11",
        "close": 1395
      }
    ]
  },
  "ROU": {
    "countryId": "ROU",
    "nameEn": "Bucharest BVB Index",
    "nameKo": "부쿠레슈티 BVB 지수",
    "ticker": "BVB.RO",
    "isSupported": true,
    "currency": "RON",
    "currentPrice": 73.4,
    "changePct": -18.81,
    "points": [
      {
        "date": "2026-08-11",
        "close": 90.4
      },
      {
        "date": "2026-08-12",
        "close": 89
      },
      {
        "date": "2026-08-13",
        "close": 89.8
      },
      {
        "date": "2026-08-14",
        "close": 88.8
      },
      {
        "date": "2026-08-17",
        "close": 88.8
      },
      {
        "date": "2026-08-18",
        "close": 88.6
      },
      {
        "date": "2026-08-19",
        "close": 87.2
      },
      {
        "date": "2026-08-20",
        "close": 86
      },
      {
        "date": "2026-08-21",
        "close": 86.2
      },
      {
        "date": "2026-08-24",
        "close": 86.2
      },
      {
        "date": "2026-08-25",
        "close": 84.8
      },
      {
        "date": "2026-08-26",
        "close": 85.6
      },
      {
        "date": "2026-08-27",
        "close": 84.6
      },
      {
        "date": "2026-08-28",
        "close": 83
      },
      {
        "date": "2026-08-31",
        "close": 76
      },
      {
        "date": "2026-09-01",
        "close": 74.4
      },
      {
        "date": "2026-09-02",
        "close": 74.8
      },
      {
        "date": "2026-09-03",
        "close": 75
      },
      {
        "date": "2026-09-04",
        "close": 75
      },
      {
        "date": "2026-09-08",
        "close": 76.6
      },
      {
        "date": "2026-09-09",
        "close": 77.2
      },
      {
        "date": "2026-09-10",
        "close": 74.2
      },
      {
        "date": "2026-09-11",
        "close": 73.4
      }
    ]
  },
  "PER": {
    "countryId": "PER",
    "nameEn": "MSCI Peru (iShares Peru)",
    "nameKo": "MSCI 페루 (iShares 페루)",
    "ticker": "EPU",
    "isSupported": true,
    "currency": "USD",
    "currentPrice": 90.72,
    "changePct": 1.42,
    "points": [
      {
        "date": "2026-08-12",
        "close": 89.45
      },
      {
        "date": "2026-08-13",
        "close": 88.08
      },
      {
        "date": "2026-08-14",
        "close": 88.69
      },
      {
        "date": "2026-08-17",
        "close": 89.19
      },
      {
        "date": "2026-08-18",
        "close": 87.49
      },
      {
        "date": "2026-08-19",
        "close": 89.99
      },
      {
        "date": "2026-08-20",
        "close": 90.72
      },
      {
        "date": "2026-08-21",
        "close": 94
      },
      {
        "date": "2026-08-24",
        "close": 94.28
      },
      {
        "date": "2026-08-25",
        "close": 94.97
      },
      {
        "date": "2026-08-26",
        "close": 94.29
      },
      {
        "date": "2026-08-27",
        "close": 94.44
      },
      {
        "date": "2026-08-28",
        "close": 92.3
      },
      {
        "date": "2026-08-31",
        "close": 91.56
      },
      {
        "date": "2026-09-01",
        "close": 90.88
      },
      {
        "date": "2026-09-02",
        "close": 92.5
      },
      {
        "date": "2026-09-03",
        "close": 92.48
      },
      {
        "date": "2026-09-04",
        "close": 92.17
      },
      {
        "date": "2026-09-08",
        "close": 93.3
      },
      {
        "date": "2026-09-09",
        "close": 93.18
      },
      {
        "date": "2026-09-10",
        "close": 90.78
      },
      {
        "date": "2026-09-11",
        "close": 90.72
      }
    ]
  },
  "GRC": {
    "countryId": "GRC",
    "nameEn": "ATHEX Composite",
    "nameKo": "ATHEX 종합지수",
    "ticker": "GD.AT",
    "isSupported": true,
    "currency": "EUR",
    "currentPrice": 2726.49,
    "changePct": 0,
    "points": [
      {
        "date": "2026-09-11",
        "close": 2726.49
      }
    ]
  },
  "QAT": {
    "countryId": "QAT",
    "nameEn": "QE Index (iShares Qatar)",
    "nameKo": "QE 지수 (iShares 카타르)",
    "ticker": "QAT",
    "isSupported": true,
    "currency": "USD",
    "currentPrice": 17.32,
    "changePct": -1.96,
    "points": [
      {
        "date": "2026-08-12",
        "close": 17.67
      },
      {
        "date": "2026-08-13",
        "close": 17.65
      },
      {
        "date": "2026-08-14",
        "close": 17.64
      },
      {
        "date": "2026-08-17",
        "close": 17.45
      },
      {
        "date": "2026-08-18",
        "close": 17.33
      },
      {
        "date": "2026-08-19",
        "close": 17.22
      },
      {
        "date": "2026-08-20",
        "close": 17.02
      },
      {
        "date": "2026-08-21",
        "close": 17.14
      },
      {
        "date": "2026-08-24",
        "close": 17.15
      },
      {
        "date": "2026-08-25",
        "close": 17.22
      },
      {
        "date": "2026-08-26",
        "close": 17.28
      },
      {
        "date": "2026-08-27",
        "close": 17.36
      },
      {
        "date": "2026-08-28",
        "close": 17.39
      },
      {
        "date": "2026-08-31",
        "close": 17.41
      },
      {
        "date": "2026-09-01",
        "close": 17.3
      },
      {
        "date": "2026-09-02",
        "close": 17.23
      },
      {
        "date": "2026-09-03",
        "close": 17.21
      },
      {
        "date": "2026-09-04",
        "close": 17.23
      },
      {
        "date": "2026-09-08",
        "close": 17.39
      },
      {
        "date": "2026-09-09",
        "close": 17.34
      },
      {
        "date": "2026-09-10",
        "close": 17.25
      },
      {
        "date": "2026-09-11",
        "close": 17.32
      }
    ]
  },
  "HUN": {
    "countryId": "HUN",
    "nameEn": "Budapest BUX (OTP Proxy)",
    "nameKo": "부다페스트 BUX (OTP 대표주)",
    "ticker": "OTP.BD",
    "isSupported": true,
    "currency": "HUF",
    "currentPrice": 47000,
    "changePct": 1.89,
    "points": [
      {
        "date": "2026-08-11",
        "close": 46130
      },
      {
        "date": "2026-08-12",
        "close": 46290
      },
      {
        "date": "2026-08-13",
        "close": 46340
      },
      {
        "date": "2026-08-14",
        "close": 46050
      },
      {
        "date": "2026-08-17",
        "close": 46000
      },
      {
        "date": "2026-08-18",
        "close": 45500
      },
      {
        "date": "2026-08-19",
        "close": 45300
      },
      {
        "date": "2026-08-24",
        "close": 46380
      },
      {
        "date": "2026-08-25",
        "close": 46480
      },
      {
        "date": "2026-08-26",
        "close": 46320
      },
      {
        "date": "2026-08-27",
        "close": 45620
      },
      {
        "date": "2026-08-28",
        "close": 46000
      },
      {
        "date": "2026-08-31",
        "close": 45240
      },
      {
        "date": "2026-09-01",
        "close": 44650
      },
      {
        "date": "2026-09-02",
        "close": 44380
      },
      {
        "date": "2026-09-03",
        "close": 44990
      },
      {
        "date": "2026-09-04",
        "close": 44940
      },
      {
        "date": "2026-09-08",
        "close": 45680
      },
      {
        "date": "2026-09-09",
        "close": 45400
      },
      {
        "date": "2026-09-10",
        "close": 45920
      },
      {
        "date": "2026-09-11",
        "close": 47000
      }
    ]
  },
  "KWT": {
    "countryId": "KWT",
    "nameEn": "Boursa Kuwait (iShares Kuwait)",
    "nameKo": "쿠웨이트 (iShares 쿠웨이트)",
    "ticker": "KWT",
    "isSupported": true,
    "currency": "USD",
    "currentPrice": 37.74,
    "changePct": 1.06,
    "points": [
      {
        "date": "2026-08-12",
        "close": 37.35
      },
      {
        "date": "2026-08-13",
        "close": 37.5
      },
      {
        "date": "2026-08-14",
        "close": 37.38
      },
      {
        "date": "2026-08-17",
        "close": 36.94
      },
      {
        "date": "2026-08-18",
        "close": 36.99
      },
      {
        "date": "2026-08-19",
        "close": 37.17
      },
      {
        "date": "2026-08-20",
        "close": 37.1
      },
      {
        "date": "2026-08-21",
        "close": 37.14
      },
      {
        "date": "2026-08-24",
        "close": 37.49
      },
      {
        "date": "2026-08-25",
        "close": 37.64
      },
      {
        "date": "2026-08-26",
        "close": 37.59
      },
      {
        "date": "2026-08-27",
        "close": 37.63
      },
      {
        "date": "2026-08-28",
        "close": 37.73
      },
      {
        "date": "2026-08-31",
        "close": 38.15
      },
      {
        "date": "2026-09-01",
        "close": 37.82
      },
      {
        "date": "2026-09-02",
        "close": 37.62
      },
      {
        "date": "2026-09-03",
        "close": 37.58
      },
      {
        "date": "2026-09-04",
        "close": 37.65
      },
      {
        "date": "2026-09-08",
        "close": 37.72
      },
      {
        "date": "2026-09-09",
        "close": 37.8
      },
      {
        "date": "2026-09-10",
        "close": 37.65
      },
      {
        "date": "2026-09-11",
        "close": 37.74
      }
    ]
  },
  "UKR": {
    "countryId": "UKR",
    "nameEn": "Ukraine UX",
    "nameKo": "우크라이나 UX",
    "ticker": "",
    "isSupported": false,
    "fallbackReasonEn": "Local exchange operations are restricted due to regional conflict.",
    "fallbackReasonKo": "전쟁 및 금융시장 제한으로 인해 실시간 데이터 조회가 불가합니다.",
    "currency": "USD",
    "currentPrice": 0,
    "changePct": 0,
    "points": []
  },
  "TWN": {
    "countryId": "TWN",
    "nameEn": "Taiwan TAIEX",
    "nameKo": "대만 가권지수 (TAIEX)",
    "ticker": "^TWII",
    "isSupported": true,
    "currency": "TWD",
    "currentPrice": 46184.85,
    "changePct": 2.36,
    "points": [
      {
        "date": "2026-08-11",
        "close": 45120.72
      },
      {
        "date": "2026-08-12",
        "close": 45518.07
      },
      {
        "date": "2026-08-13",
        "close": 46021.48
      },
      {
        "date": "2026-08-14",
        "close": 45811.01
      },
      {
        "date": "2026-08-17",
        "close": 45857.27
      },
      {
        "date": "2026-08-18",
        "close": 45308.68
      },
      {
        "date": "2026-08-19",
        "close": 44719.35
      },
      {
        "date": "2026-08-20",
        "close": 44933.74
      },
      {
        "date": "2026-08-21",
        "close": 45224.29
      },
      {
        "date": "2026-08-24",
        "close": 44762.32
      },
      {
        "date": "2026-08-25",
        "close": 45169.46
      },
      {
        "date": "2026-08-26",
        "close": 45832.62
      },
      {
        "date": "2026-08-27",
        "close": 45975.22
      },
      {
        "date": "2026-08-28",
        "close": 46331.45
      },
      {
        "date": "2026-08-31",
        "close": 46128.47
      },
      {
        "date": "2026-09-01",
        "close": 46948.72
      },
      {
        "date": "2026-09-02",
        "close": 46164.72
      },
      {
        "date": "2026-09-03",
        "close": 45857.66
      },
      {
        "date": "2026-09-04",
        "close": 46551.13
      },
      {
        "date": "2026-09-07",
        "close": 47326.27
      },
      {
        "date": "2026-09-08",
        "close": 47105.78
      },
      {
        "date": "2026-09-09",
        "close": 47183.36
      },
      {
        "date": "2026-09-10",
        "close": 46940.49
      },
      {
        "date": "2026-09-11",
        "close": 46184.85
      }
    ]
  },
  "PAK": {
    "countryId": "PAK",
    "nameEn": "Karachi KSE (OGDC Proxy)",
    "nameKo": "카라치 KSE (OGDC 대표주)",
    "ticker": "OGDC.KA",
    "isSupported": true,
    "currency": "PKR",
    "currentPrice": 131.87,
    "changePct": -58.83,
    "points": [
      {
        "date": "2026-08-11",
        "close": 320.29
      },
      {
        "date": "2026-08-12",
        "close": 318.92
      },
      {
        "date": "2026-08-13",
        "close": 318.48
      },
      {
        "date": "2026-08-14",
        "close": 318.48
      },
      {
        "date": "2026-08-17",
        "close": 321.3
      },
      {
        "date": "2026-08-18",
        "close": 321.3
      },
      {
        "date": "2026-08-19",
        "close": 314.34
      },
      {
        "date": "2026-08-20",
        "close": 314.95
      },
      {
        "date": "2026-08-21",
        "close": 325.82
      },
      {
        "date": "2026-08-24",
        "close": 331.09
      },
      {
        "date": "2026-08-25",
        "close": 327.43
      },
      {
        "date": "2026-08-26",
        "close": 327.43
      },
      {
        "date": "2026-08-27",
        "close": 323.88
      },
      {
        "date": "2026-08-28",
        "close": 325.2
      },
      {
        "date": "2026-08-31",
        "close": 328.7
      },
      {
        "date": "2026-09-01",
        "close": 331.69
      },
      {
        "date": "2026-09-02",
        "close": 328.44
      },
      {
        "date": "2026-09-03",
        "close": 327.02
      },
      {
        "date": "2026-09-04",
        "close": 328.8
      },
      {
        "date": "2026-09-08",
        "close": 321.04
      },
      {
        "date": "2026-09-09",
        "close": 322.18
      },
      {
        "date": "2026-09-10",
        "close": 315.92
      },
      {
        "date": "2026-09-11",
        "close": 320.83
      }
    ]
  },
  "KAZ": {
    "countryId": "KAZ",
    "nameEn": "Kaspi.kz (Kazakhstan Tech Index)",
    "nameKo": "카스피.kz (카자흐스탄 대표주)",
    "ticker": "KSPI",
    "isSupported": true,
    "currency": "USD",
    "currentPrice": 99.89,
    "changePct": 0.34,
    "points": [
      {
        "date": "2026-08-12",
        "close": 99.55
      },
      {
        "date": "2026-08-13",
        "close": 99.46
      },
      {
        "date": "2026-08-14",
        "close": 98.7
      },
      {
        "date": "2026-08-17",
        "close": 99.05
      },
      {
        "date": "2026-08-18",
        "close": 98.09
      },
      {
        "date": "2026-08-19",
        "close": 101.48
      },
      {
        "date": "2026-08-20",
        "close": 103.7
      },
      {
        "date": "2026-08-21",
        "close": 105.55
      },
      {
        "date": "2026-08-24",
        "close": 106.46
      },
      {
        "date": "2026-08-25",
        "close": 108.75
      },
      {
        "date": "2026-08-26",
        "close": 107.68
      },
      {
        "date": "2026-08-27",
        "close": 105.01
      },
      {
        "date": "2026-08-28",
        "close": 106.29
      },
      {
        "date": "2026-08-31",
        "close": 105.14
      },
      {
        "date": "2026-09-01",
        "close": 104.08
      },
      {
        "date": "2026-09-02",
        "close": 106.81
      },
      {
        "date": "2026-09-03",
        "close": 107.81
      },
      {
        "date": "2026-09-04",
        "close": 107.53
      },
      {
        "date": "2026-09-08",
        "close": 107.21
      },
      {
        "date": "2026-09-09",
        "close": 100
      },
      {
        "date": "2026-09-10",
        "close": 97.15
      },
      {
        "date": "2026-09-11",
        "close": 99.89
      }
    ]
  }
}

export const getStockPriceData = (countryId: string): StockPriceInfo | undefined => {
  return STOCK_DATA[countryId]
}

export const getAllStockPrices = (): Record<string, StockPriceInfo> => {
  return STOCK_DATA
}
