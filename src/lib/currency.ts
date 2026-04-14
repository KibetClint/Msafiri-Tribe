// src/lib/currency.ts

export interface CurrencyInfo {
  code: string; // e.g. "KES"
  symbol: string; // e.g. "Ksh"
  locale: string; // e.g. "en-KE"
  name: string; // e.g. "Kenyan Shilling"
}

/** Map ISO 3166-1 alpha-2 country codes → currency info */
export const COUNTRY_CURRENCY_MAP: Record<string, CurrencyInfo> = {
  KE: { code: "KES", symbol: "Ksh", locale: "en-KE", name: "Kenyan Shilling" },
  US: { code: "USD", symbol: "$", locale: "en-US", name: "US Dollar" },
  GB: { code: "GBP", symbol: "£", locale: "en-GB", name: "British Pound" },
  EU: { code: "EUR", symbol: "€", locale: "de-DE", name: "Euro" }, // fallback for EU block
  DE: { code: "EUR", symbol: "€", locale: "de-DE", name: "Euro" },
  FR: { code: "EUR", symbol: "€", locale: "fr-FR", name: "Euro" },
  IT: { code: "EUR", symbol: "€", locale: "it-IT", name: "Euro" },
  ES: { code: "EUR", symbol: "€", locale: "es-ES", name: "Euro" },
  NG: { code: "NGN", symbol: "₦", locale: "en-NG", name: "Nigerian Naira" },
  ZA: { code: "ZAR", symbol: "R", locale: "en-ZA", name: "South African Rand" },
  UG: { code: "UGX", symbol: "USh", locale: "en-UG", name: "Ugandan Shilling" },
  TZ: {
    code: "TZS",
    symbol: "TSh",
    locale: "sw-TZ",
    name: "Tanzanian Shilling",
  },
  RW: { code: "RWF", symbol: "RF", locale: "en-RW", name: "Rwandan Franc" },
  ET: { code: "ETB", symbol: "Br", locale: "am-ET", name: "Ethiopian Birr" },
  IN: { code: "INR", symbol: "₹", locale: "en-IN", name: "Indian Rupee" },
  AE: { code: "AED", symbol: "د.إ", locale: "ar-AE", name: "UAE Dirham" },
  CA: { code: "CAD", symbol: "CA$", locale: "en-CA", name: "Canadian Dollar" },
  AU: { code: "AUD", symbol: "A$", locale: "en-AU", name: "Australian Dollar" },
  CN: { code: "CNY", symbol: "¥", locale: "zh-CN", name: "Chinese Yuan" },
  JP: { code: "JPY", symbol: "¥", locale: "ja-JP", name: "Japanese Yen" },
};

export const DEFAULT_CURRENCY: CurrencyInfo = {
  code: "USD",
  symbol: "$",
  locale: "en-US",
  name: "US Dollar",
};

/**
 * Format a price (stored in USD in your DB/data) into the target currency.
 * @param amountUSD  The base price in USD
 * @param currency   The target CurrencyInfo
 * @param rateToUSD  Exchange rate: 1 USD = X target currency units
 */
export function formatPrice(
  amountUSD: number,
  currency: CurrencyInfo,
  rateToUSD: number,
): string {
  const converted = amountUSD * rateToUSD;

  try {
    return new Intl.NumberFormat(currency.locale, {
      style: "currency",
      currency: currency.code,
      minimumFractionDigits:
        currency.code === "JPY" || currency.code === "UGX" ? 0 : 2,
      maximumFractionDigits:
        currency.code === "JPY" || currency.code === "UGX" ? 0 : 2,
    }).format(converted);
  } catch {
    // Fallback if Intl doesn't know the currency code
    return `${currency.symbol}${converted.toLocaleString()}`;
  }
}
