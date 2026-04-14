// src/hooks/use-currency.tsx
import { useState, useEffect, useCallback } from "react";
import {
  CurrencyInfo,
  COUNTRY_CURRENCY_MAP,
  DEFAULT_CURRENCY,
  formatPrice as _formatPrice,
} from "@/lib/currency";

const CACHE_KEY = "msafiri_currency_cache";
const CACHE_TTL = 1000 * 60 * 60 * 6; // 6 hours

interface CacheEntry {
  currency: CurrencyInfo;
  rate: number; // 1 USD → X local currency
  countryCode: string;
  ts: number;
}

function readCache(): CacheEntry | null {
  try {
    const raw = localStorage.getItem(CACHE_KEY);
    if (!raw) return null;
    const entry: CacheEntry = JSON.parse(raw);
    if (Date.now() - entry.ts > CACHE_TTL) return null;
    return entry;
  } catch {
    return null;
  }
}

function writeCache(entry: CacheEntry) {
  try {
    localStorage.setItem(CACHE_KEY, JSON.stringify(entry));
  } catch {
    /* ignore quota errors */
  }
}

export interface UseCurrencyReturn {
  currency: CurrencyInfo;
  countryCode: string;
  /** Convert a USD base price to formatted local currency string */
  formatPrice: (amountUSD: number) => string;
  loading: boolean;
  error: string | null;
}

export function useCurrency(): UseCurrencyReturn {
  const [currency, setCurrency] = useState<CurrencyInfo>(DEFAULT_CURRENCY);
  const [rate, setRate] = useState<number>(1);
  const [countryCode, setCountry] = useState<string>("US");
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;

    async function detect() {
      // 1. Try cache first
      const cached = readCache();
      if (cached) {
        setCurrency(cached.currency);
        setRate(cached.rate);
        setCountry(cached.countryCode);
        setLoading(false);
        return;
      }

      try {
        // 2. Detect country via IP geolocation (free, no key)
        const geoRes = await fetch("https://ipapi.co/json/");
        const geoData = await geoRes.json();
        const country: string = geoData.country_code ?? "US";

        const detectedCurrency =
          COUNTRY_CURRENCY_MAP[country] ?? DEFAULT_CURRENCY;

        // 3. Fetch live exchange rates (free tier from open.er-api.com)
        const rateRes = await fetch(`https://open.er-api.com/v6/latest/USD`);
        const rateData = await rateRes.json();
        const exchangeRate: number =
          rateData?.rates?.[detectedCurrency.code] ?? 1;

        if (!cancelled) {
          setCurrency(detectedCurrency);
          setRate(exchangeRate);
          setCountry(country);

          writeCache({
            currency: detectedCurrency,
            rate: exchangeRate,
            countryCode: country,
            ts: Date.now(),
          });
        }
      } catch (err) {
        if (!cancelled) {
          console.warn(
            "[useCurrency] Detection failed, defaulting to USD",
            err,
          );
          setError("Could not detect location. Showing prices in USD.");
        }
      } finally {
        if (!cancelled) setLoading(false);
      }
    }

    detect();
    return () => {
      cancelled = true;
    };
  }, []);

  const formatPrice = useCallback(
    (amountUSD: number) => _formatPrice(amountUSD, currency, rate),
    [currency, rate],
  );

  return { currency, countryCode, formatPrice, loading, error };
}
