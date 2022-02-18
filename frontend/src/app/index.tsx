import * as React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Routes from '@/pages';
import { AuthProvider } from '@/contexts/auth-context';
import { ToastContainer } from 'react-toastify';
import { HeaderComponent } from '@/components/header';

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <HeaderComponent />
        <Routes />
        <ToastContainer />
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
