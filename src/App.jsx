import React from 'react';
import Calculator from 'Src/components/Calculator';
import './App.scss';

export default function App() {
  return (
    <div className="app">
      <div className="container">
        <h1>Рассчитайте стоимость автомобиля в лизинг</h1>

        <Calculator />
      </div>
    </div>
  );
}
