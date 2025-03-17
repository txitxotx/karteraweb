// /context/GlobalStateContext.js
import { createContext, useState, useEffect } from 'react';

export const GlobalStateContext = createContext();

export const GlobalStateProvider = ({ children }) => {
  const [investments, setInvestments] = useState([]);
  const [bankAccounts, setBankAccounts] = useState([]);

  // Cargar datos persistidos desde localStorage (solo en el cliente)
  useEffect(() => {
    const storedInvestments = localStorage.getItem('investments');
    if (storedInvestments) setInvestments(JSON.parse(storedInvestments));

    const storedBankAccounts = localStorage.getItem('bankAccounts');
    if (storedBankAccounts) setBankAccounts(JSON.parse(storedBankAccounts));
  }, []);

  // Guardar cambios en localStorage
  useEffect(() => {
    localStorage.setItem('investments', JSON.stringify(investments));
  }, [investments]);

  useEffect(() => {
    localStorage.setItem('bankAccounts', JSON.stringify(bankAccounts));
  }, [bankAccounts]);

  // Función simulada para actualizar inversiones (usarás la API de Yahoo Finance en producción)
  const fetchInvestmentData = async () => {
    setInvestments(prev =>
      prev.map(inv => ({
        ...inv,
        price: (Math.random() * 100).toFixed(2),
        profit: (Math.random() * 10).toFixed(2)
      }))
    );
  };

  // Actualizar cada 30 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      fetchInvestmentData();
    }, 30000);
    return () => clearInterval(interval);
  }, []);

  return (
    <GlobalStateContext.Provider
      value={{
        investments,
        setInvestments,
        bankAccounts,
        setBankAccounts,
      }}
    >
      {children}
    </GlobalStateContext.Provider>
  );
};
