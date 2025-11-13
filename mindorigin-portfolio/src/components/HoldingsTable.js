import { HOLDINGS } from '../data/holdings';
import { usePrices } from '../store/usePrices';

export function HoldingsTable() {
  const prices = usePrices((s) => s.prices);

  return (
    <div className="overflow-x-auto p-4">
      <table className="min-w-full border border-gray-700 dark:border-gray-700 rounded-xl overflow-hidden">
        <thead className="bg-gray-800 text-white">
          <tr>
            <th className="px-3 py-3 text-left font-semibold text-gray-100">Company</th>
            <th className="px-3 py-3 text-left font-semibold text-gray-100">Ticker</th>
            <th className="px-3 py-3 text-right font-semibold text-gray-100">Qty</th>
            <th className="px-3 py-3 text-right font-semibold text-gray-100">Avg Buy</th>
            <th className="px-3 py-3 text-right font-semibold text-gray-100">Live Price</th>
          </tr>
        </thead>

        <tbody className="bg-gray-900 text-gray-200 divide-y divide-gray-700">
          {HOLDINGS.map((h) => {
            const live = prices[h.ticker]?.price ?? h.avgBuyPrice;
            const diff = live - h.avgBuyPrice;
            const isUp = diff >= 0;

            return (
              <tr
                key={h.ticker}
                className="hover:bg-gray-800 transition-colors duration-150"
              >
                <td className="px-3 py-3">{h.company}</td>
                <td className="px-3 py-3 text-blue-400 font-medium">{h.ticker}</td>
                <td className="px-3 py-3 text-right">{h.quantity}</td>
                <td className="px-3 py-3 text-right text-yellow-400">
                  ${h.avgBuyPrice}
                </td>
                <td
                  className={`px-3 py-3 text-right font-semibold ${
                    isUp ? 'text-emerald-400' : 'text-rose-400'
                  }`}
                >
                  ${live.toFixed(2)}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
