import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import Router from './routes/Router'
import "./App.css";
import { AuthProvider } from './components/Context/AuthContext';

function App() {


  return (
    <AuthProvider>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App