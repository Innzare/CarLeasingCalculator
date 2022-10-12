import React from 'react';
import Loader from 'Src/components/Loader';
import './Button.scss';

export default function Button(props) {
  const { text, onClick, isLoading } = props;

  return (
    <div>
      <button className="button" onClick={onClick} disabled={isLoading}>
        {isLoading ? <Loader /> : text}
      </button>
    </div>
  );
}
