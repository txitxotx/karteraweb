// /pages/assetsByType.js
import dynamic from 'next/dynamic';

// Desactivamos SSR para evitar errores por dependencias del navegador.
const AssetsByType = dynamic(() => import('../components/AssetsByType'), { ssr: false });

export default function AssetsByTypePage() {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-4xl font-bold text-gray-800 text-center mb-6">Activos por Tipo</h1>
      <div className="max-w-5xl mx-auto bg-white rounded-lg shadow-lg p-6">
        <AssetsByType />
      </div>
    </div>
  );
}
