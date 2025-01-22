// main.jsx
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { Toaster } from 'react-hot-toast';
import RamadanStore from './Ramadan.jsx';
import { AuthProvider } from '../contexts/AuthContext.jsx';

const App = () => {
  return (
    <StrictMode>
      <AuthProvider>
        <RamadanStore />
        <Toaster
          position="top-center"
          toastOptions={{
            duration: 3000,
            style: {
              background: '#1f2937',
              color: '#fff',
              direction: 'rtl'
            }
          }}
        />
      </AuthProvider>
    </StrictMode>


  );
  {/*
          <AdminDashboard />

           */}
};

createRoot(document.getElementById('root')).render(<App />);