// src/context/CurrencyContext.tsx
import { createContext, useContext, ReactNode } from "react";
import { useCurrency, UseCurrencyReturn } from "@/hooks/use-currency";

const CurrencyContext = createContext<UseCurrencyReturn | null>(null);

export function CurrencyProvider({ children }: { children: ReactNode }) {
  const value = useCurrency();
  return (
    <CurrencyContext.Provider value={value}>
      {children}
    </CurrencyContext.Provider>
  );
}

/** Use this in any component to format prices */
export function useCurrencyContext(): UseCurrencyReturn {
  const ctx = useContext(CurrencyContext);
  if (!ctx)
    throw new Error(
      "useCurrencyContext must be used within <CurrencyProvider>",
    );
  return ctx;
}
