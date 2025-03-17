// /pages/_app.js
import '../styles/globals.css';
import { GlobalStateProvider } from '../context/GlobalStateContext';
import Navbar from '../components/Navbar';

function MyApp({ Component, pageProps }) {
  return (
    <GlobalStateProvider>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        {/* Se añade padding-top para compensar el navbar fijo */}
        <main className="pt-20 p-4">
          <Component {...pageProps} />
        </main>
      </div>
    </GlobalStateProvider>
  );
}

export default MyApp;
