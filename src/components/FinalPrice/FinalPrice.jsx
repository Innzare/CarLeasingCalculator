import React from 'react';
import { formatNumber } from 'Src/helpers/calculator';
import './FinalPrice.scss';

export default function FinalPrice(props) {
  const { title, value } = props;

  return (
    <div className="final-price">
      <div className="final-price__title">{title}</div>

      <div className="final-price__value">{formatNumber(value)}</div>
    </div>
  );
}
