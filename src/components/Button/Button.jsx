import React from 'react';
import Loader from 'Src/components/Loader';
import './Button.scss';

export default function Button(props) {
  const { text, onClick, isLoading, disabled } = props;

  return (
    <div>
      <button className="button" onClick={onClick} disabled={disabled}>
        {isLoading ? <Loader /> : text}
      </button>
    </div>
  );
}
