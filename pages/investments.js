// /pages/investments.js
import InvestmentTable from '../components/InvestmentTable';

export default function Investments() {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-4xl font-bold text-gray-800 text-center mb-6">Inversiones Detalladas</h1>
      <div className="max-w-5xl mx-auto bg-white rounded-lg shadow-lg p-6">
        <InvestmentTable />
      </div>
    </div>
  );
}
