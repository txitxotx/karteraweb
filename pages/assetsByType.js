import dynamic from 'next/dynamic';

// Importa el componente de forma dinámica y desactiva el renderizado en el servidor
const AssetsByType = dynamic(() => import('../components/AssetsByType'), { ssr: false });

export default function AssetsByTypePage() {
  return <AssetsByType />;
}
