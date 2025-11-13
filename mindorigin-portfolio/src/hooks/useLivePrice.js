import { useEffect } from 'react';
import { usePrices } from '../store/usePrices';

export function useLivePrices() {
  const setPrice = usePrices((s) => s.setPrice);

  useEffect(() => {
    const base = { AAPL: 175, MSFT: 340, GOOGL: 140, AMZN: 130, TSLA: 220 };
    const id = setInterval(() => {
      Object.entries(base).forEach(([sym, val]) => {
        const newVal = val + (Math.random() - 0.5) * 0.8;
        base[sym] = newVal;
        setPrice({ symbol: sym, price: newVal, ts: Date.now() });
      });
    }, 1000);
    return () => clearInterval(id);
  }, [setPrice]);
}
