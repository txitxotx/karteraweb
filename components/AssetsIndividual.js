// /components/AssetsIndividual.js
import { useContext } from 'react';
import { GlobalStateContext } from '../context/GlobalStateContext';

const AssetsIndividual = () => {
  const { investments } = useContext(GlobalStateContext);

  return (
    <div className="mt-4">
      <h2 className="text-2xl font-bold mb-4">Activos Individuales</h2>
      <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
        <thead className="bg-gray-800 text-white">
          <tr>
            <th className="px-4 py-2">Nombre</th>
            <th className="px-4 py-2">Tipo</th>
            <th className="px-4 py-2">Monto</th>
            <th className="px-4 py-2">Precio</th>
            <th className="px-4 py-2">Ganancia</th>
          </tr>
        </thead>
        <tbody>
          {investments.map(inv => (
            <tr key={inv.id} className="border-b">
              <td className="px-4 py-2">{inv.name}</td>
              <td className="px-4 py-2">{inv.type}</td>
              <td className="px-4 py-2">{parseFloat(inv.amount).toFixed(2)}</td>
              <td className="px-4 py-2">{inv.price}</td>
              <td className="px-4 py-2">{inv.profit}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AssetsIndividual;
