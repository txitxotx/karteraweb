// /pages/index.js
export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-800 via-gray-900 to-black flex items-center justify-center">
      <div className="text-center p-8">
        <img src="/logo.png" alt="Logo Inversiones" className="w-32 h-32 mx-auto mb-4" />
        <h1 className="text-5xl font-extrabold text-white mb-4">Maite y Eneko</h1>
        <p className="text-xl text-gray-300">
          Bienvenidos al sitio de gestión y análisis de inversiones.
          Explora las secciones para ver y gestionar tus activos y cuentas.
        </p>
      </div>
    </div>
  );
}
