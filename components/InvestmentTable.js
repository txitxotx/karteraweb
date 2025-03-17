// /components/InvestmentTable.js
import { useContext, useState } from 'react';
import { GlobalStateContext } from '../context/GlobalStateContext';

const InvestmentTable = () => {
  const { investments, setInvestments } = useContext(GlobalStateContext);
  const [newInvestment, setNewInvestment] = useState({ name: '', type: '', amount: '' });

  const handleAddInvestment = () => {
    if (!newInvestment.name || !newInvestment.type || !newInvestment.amount) return;
    const newEntry = { ...newInvestment, id: Date.now(), price: "0.00", profit: "0.00" };
    setInvestments([...investments, newEntry]);
    setNewInvestment({ name: '', type: '', amount: '' });
  };

  const handleEdit = (id, field, value) => {
    const updated = investments.map(inv => inv.id === id ? { ...inv, [field]: value } : inv);
    setInvestments(updated);
  };

  const handleDelete = (id) => {
    const updated = investments.filter(inv => inv.id !== id);
    setInvestments(updated);
  };

  const totalInvested = investments.reduce((acc, inv) => acc + parseFloat(inv.amount || 0), 0);
  const totalProfit = investments.reduce((acc, inv) => acc + parseFloat(inv.profit || 0), 0);

  return (
    <div className="mt-4">
      <h2 className="text-2xl font-bold mb-4">Inversiones Detalladas</h2>
      <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
        <thead className="bg-gray-800 text-white">
          <tr>
            <th className="px-4 py-2">Nombre</th>
            <th className="px-4 py-2">Tipo</th>
            <th className="px-4 py-2">Monto</th>
            <th className="px-4 py-2">Precio (Simulado)</th>
            <th className="px-4 py-2">Ganancia (Simulada)</th>
            <th className="px-4 py-2">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {investments.map(inv => (
            <tr key={inv.id} className="border-b">
              <td className="px-4 py-2">
                <input
                  type="text"
                  value={inv.name}
                  onChange={e => handleEdit(inv.id, 'name', e.target.value)}
                  className="w-full p-1 border rounded"
                />
              </td>
              <td className="px-4 py-2">
                <input
                  type="text"
                  value={inv.type}
                  onChange={e => handleEdit(inv.id, 'type', e.target.value)}
                  className="w-full p-1 border rounded"
                />
              </td>
              <td className="px-4 py-2">
                <input
                  type="number"
                  value={inv.amount}
                  onChange={e => handleEdit(inv.id, 'amount', e.target.value)}
                  className="w-full p-1 border rounded"
                />
              </td>
              <td className="px-4 py-2">{inv.price}</td>
              <td className="px-4 py-2">{inv.profit}</td>
              <td className="px-4 py-2">
                <button onClick={() => handleDelete(inv.id)} className="bg-red-500 text-white p-1 rounded">
                  Eliminar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="mt-4">
        <h3 className="text-xl">Agregar Nueva Inversión</h3>
        <div className="flex flex-col md:flex-row md:space-x-2 mt-2">
          <input
            type="text"
            placeholder="Nombre"
            value={newInvestment.name}
            onChange={e => setNewInvestment({ ...newInvestment, name: e.target.value })}
            className="p-2 border rounded mb-2 md:mb-0"
          />
          <input
            type="text"
            placeholder="Tipo"
            value={newInvestment.type}
            onChange={e => setNewInvestment({ ...newInvestment, type: e.target.value })}
            className="p-2 border rounded mb-2 md:mb-0"
          />
          <input
            type="number"
            placeholder="Monto"
            value={newInvestment.amount}
            onChange={e => setNewInvestment({ ...newInvestment, amount: e.target.value })}
            className="p-2 border rounded mb-2 md:mb-0"
          />
          <button onClick={handleAddInvestment} className="bg-blue-500 text-white p-2 rounded">
            Agregar
          </button>
        </div>
      </div>
      <div className="mt-4">
        <p className="font-bold">Total Invertido: ${totalInvested.toFixed(2)}</p>
        <p className="font-bold">Total Ganancias: ${totalProfit.toFixed(2)}</p>
      </div>
    </div>
  );
};

export default InvestmentTable;
