import React from 'react';
import './App.css';
import QRCodeGenerator from './components/QRCodeGenerator';

function App() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <QRCodeGenerator />
      </div>
    </div>
  );
}

export default App;
