// /components/AssetsByType.js
import { useContext } from 'react';
import Plot from 'react-plotly.js';
import { GlobalStateContext } from '../context/GlobalStateContext';

const AssetsByType = () => {
  const { investments } = useContext(GlobalStateContext);

  // Agrupar inversiones por tipo
  const grouped = investments.reduce((acc, inv) => {
    if (inv.type) {
      acc[inv.type] = acc[inv.type] ? acc[inv.type] + parseFloat(inv.amount || 0) : parseFloat(inv.amount || 0);
    }
    return acc;
  }, {});

  const types = Object.keys(grouped);
  const amounts = types.map(type => grouped[type]);

  return (
    <div className="mt-4">
      <h2 className="text-2xl font-bold mb-4">Activos por Tipo de Inversión</h2>
      <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden mb-8">
        <thead className="bg-gray-800 text-white">
          <tr>
            <th className="px-4 py-2">Tipo</th>
            <th className="px-4 py-2">Monto Total</th>
          </tr>
        </thead>
        <tbody>
          {types.map(type => (
            <tr key={type} className="border-b">
              <td className="px-4 py-2">{type}</td>
              <td className="px-4 py-2">{grouped[type].toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Plot
          data={[
            {
              x: types,
              y: amounts,
              type: 'bar',
              marker: { color: 'rgba(55, 128, 191, 0.7)' },
            },
          ]}
          layout={{ title: 'Distribución en Barras', autosize: true }}
          style={{ width: '100%', height: '400px' }}
          useResizeHandler={true}
        />
        <Plot
          data={[
            {
              labels: types,
              values: amounts,
              type: 'pie',
            },
          ]}
          layout={{ title: 'Distribución en Pastel', autosize: true }}
          style={{ width: '100%', height: '400px' }}
          useResizeHandler={true}
        />
      </div>
    </div>
  );
};

export default AssetsByType;
