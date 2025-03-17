// /components/Navbar.js
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="bg-gray-900 text-white p-4 fixed top-0 w-full z-10 shadow-md">
      <div className="container mx-auto flex justify-between">
        <div className="font-bold text-xl">Maite y Eneko</div>
        <div className="space-x-4">
          <Link href="/"><a>Inicio</a></Link>
          <Link href="/investments"><a>Inversiones</a></Link>
          <Link href="/assetsByType"><a>Activos por Tipo</a></Link>
          <Link href="/assetsIndividual"><a>Activos Individuales</a></Link>
          <Link href="/banks"><a>Cuentas Bancarias</a></Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
