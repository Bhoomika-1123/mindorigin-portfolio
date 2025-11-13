import Headers, { Header } from './components/Headers';
import { SummaryCards } from './components/SummaryCards';
import { HoldingsTable } from './components/HoldingsTable';
import { useLivePrices } from './hooks/useLivePrice';
import './index.css';

function App() {
  useLivePrices();

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Headers/>
      <SummaryCards />
      <HoldingsTable />
    </div>
  );
}

export default App;
