// /pages/banks.js
import BankAccountsTable from '../components/BankAccountsTable';

export default function Banks() {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-4xl font-bold text-gray-800 text-center mb-6">Cuentas Bancarias</h1>
      <div className="max-w-4xl mx-auto">
        <BankAccountsTable />
      </div>
    </div>
  );
}
