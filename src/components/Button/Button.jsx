import React from 'react';
import './Button.scss';

export default function Button(props) {
  const { text, onClick, isLoading, disabled } = props;

  return (
    <div>
      <button className="button" onClick={onClick} disabled={disabled}>
        {isLoading ? 'Loading' : text}
      </button>
    </div>
  );
}
