// /pages/assetsIndividual.js
import AssetsIndividual from '../components/AssetsIndividual';

export default function AssetsIndividualPage() {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-4xl font-bold text-gray-800 text-center mb-6">Activos Individuales</h1>
      <div className="max-w-5xl mx-auto bg-white rounded-lg shadow-lg p-6">
        <AssetsIndividual />
      </div>
    </div>
  );
}
