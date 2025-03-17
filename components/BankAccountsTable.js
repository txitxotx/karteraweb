// /components/BankAccountsTable.js
import { useContext, useState } from 'react';
import { GlobalStateContext } from '../context/GlobalStateContext';

const BankAccountsTable = () => {
  const { bankAccounts, setBankAccounts } = useContext(GlobalStateContext);
  const [newAccount, setNewAccount] = useState({ bank: '', balance: '', rate: '' });

  const handleAddAccount = () => {
    if (!newAccount.bank || !newAccount.balance || !newAccount.rate) return;
    const newEntry = { ...newAccount, id: Date.now() };
    setBankAccounts([...bankAccounts, newEntry]);
    setNewAccount({ bank: '', balance: '', rate: '' });
  };

  const handleEdit = (id, field, value) => {
    const updated = bankAccounts.map(acc => acc.id === id ? { ...acc, [field]: value } : acc);
    setBankAccounts(updated);
  };

  const handleDelete = (id) => {
    const updated = bankAccounts.filter(acc => acc.id !== id);
    setBankAccounts(updated);
  };

  return (
    <div className="mt-4">
      <h2 className="text-2xl font-bold mb-4">Gestión de Cuentas Bancarias</h2>
      <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden mb-8">
        <thead className="bg-gray-800 text-white">
          <tr>
            <th className="px-4 py-2">Banco</th>
            <th className="px-4 py-2">Balance</th>
            <th className="px-4 py-2">% Remuneración</th>
            <th className="px-4 py-2">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {bankAccounts.map(acc => (
            <tr key={acc.id} className="border-b">
              <td className="px-4 py-2">
                <input
                  type="text"
                  value={acc.bank}
                  onChange={e => handleEdit(acc.id, 'bank', e.target.value)}
                  className="w-full p-1 border rounded"
                />
              </td>
              <td className="px-4 py-2">
                <input
                  type="number"
                  value={acc.balance}
                  onChange={e => handleEdit(acc.id, 'balance', e.target.value)}
                  className="w-full p-1 border rounded"
                />
              </td>
              <td className="px-4 py-2">
                <input
                  type="number"
                  value={acc.rate}
                  onChange={e => handleEdit(acc.id, 'rate', e.target.value)}
                  className="w-full p-1 border rounded"
                />
              </td>
              <td className="px-4 py-2">
                <button onClick={() => handleDelete(acc.id)} className="bg-red-500 text-white p-1 rounded">
                  Eliminar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div>
        <h3 className="text-xl">Agregar Nueva Cuenta</h3>
        <div className="flex flex-col md:flex-row md:space-x-2 mt-2">
          <input
            type="text"
            placeholder="Banco"
            value={newAccount.bank}
            onChange={e => setNewAccount({ ...newAccount, bank: e.target.value })}
            className="p-2 border rounded mb-2 md:mb-0"
          />
          <input
            type="number"
            placeholder="Balance"
            value={newAccount.balance}
            onChange={e => setNewAccount({ ...newAccount, balance: e.target.value })}
            className="p-2 border rounded mb-2 md:mb-0"
          />
          <input
            type="number"
            placeholder="% Remuneración"
            value={newAccount.rate}
            onChange={e => setNewAccount({ ...newAccount, rate: e.target.value })}
            className="p-2 border rounded mb-2 md:mb-0"
          />
          <button onClick={handleAddAccount} className="bg-green-500 text-white p-2 rounded">
            Agregar
          </button>
        </div>
      </div>
    </div>
  );
};

export default BankAccountsTable;
