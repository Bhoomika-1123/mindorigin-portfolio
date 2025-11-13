import { HOLDINGS } from '../data/holdings';
import { usePrices } from '../store/usePrices';

export function SummaryCards() {
  const prices = usePrices((s) => s.prices);
  const invested = HOLDINGS.reduce((a, h) => a + h.avgBuyPrice * h.quantity, 0);
  const current = HOLDINGS.reduce(
    (a, h) => a + (prices[h.ticker]?.price ?? h.avgBuyPrice) * h.quantity,
    0
  );
  const pnl = current - invested;

  const cards = [
    { label: 'Total Invested', value: `$${invested.toFixed(2)}` },
    { label: 'Current Value', value: `$${current.toFixed(2)}` },
    {
      label: 'P/L',
      value: `${pnl >= 0 ? '+' : '-'}$${Math.abs(pnl).toFixed(2)}`,
      tone: pnl >= 0 ? 'text-emerald-400' : 'text-rose-400',
    },
  ];

  return (
    <div className="grid md:grid-cols-3 gap-4 p-4">
      {cards.map((c) => (
        <div
          key={c.label}
          className="p-4 rounded-xl border border-gray-700 bg-gray-900 text-gray-100"
        >
          <div className="text-sm text-gray-400">{c.label}</div>
          <div className={`text-3xl font-bold mt-1 ${c.tone}`}>{c.value}</div>
        </div>
      ))}
    </div>
  );
}

