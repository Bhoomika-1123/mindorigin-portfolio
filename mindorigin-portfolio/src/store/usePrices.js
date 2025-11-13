import { create } from 'zustand';

export const usePrices = create((set) => ({
  prices: {},
  setPrice: (p) => set((s) => ({
    prices: { ...s.prices, [p.symbol]: p }
  })),
}));
