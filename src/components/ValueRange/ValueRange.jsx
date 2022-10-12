import React, { useState, useRef, useCallback, useEffect } from 'react';
import { formatNumber } from 'Src/helpers/calculator';
import './ValueRange.scss';

export default function ValueRange(props) {
  const {
    type,
    title,
    format,
    isPercent,
    initialPaymentPercentValue,
    value,
    minValue,
    maxValue,
    step,
    onChange,
    isLoading,
  } = props;

  const range = useRef(null);

  const getPercent = useCallback(
    (value) => {
      return Math.round(((value - minValue) / (maxValue - minValue)) * 100);
    },
    [minValue, maxValue]
  );

  useEffect(() => {
    const percent = getPercent(value);

    if (range.current) {
      range.current.style.width = `${percent}%`;
    }
  }, [value, getPercent]);

  const formatValue = isPercent ? (
    <div className="percent-wrapper">
      <input
        type="text"
        value={`${value}`}
        onChange={(event) => onChange(event, type)}
        onBlur={(event) => onChange(event, type, true)}
        disabled={isLoading}
      />
      %
    </div>
  ) : (
    format
  );

  const formatValueClasses = isPercent
    ? 'value-range__format value-range__percent-format'
    : 'value-range__format';

  const numberInputValue = isPercent
    ? formatNumber(initialPaymentPercentValue)
    : formatNumber(value);

  return (
    <div className="value-range">
      {isLoading && <div className="value-range__overlay"></div>}

      <div className="value-range__title">{title}</div>

      <div className="value-range__field">
        <input
          type="text"
          value={numberInputValue}
          onChange={(event) => onChange(event, type)}
          onBlur={(event) => onChange(event, type, true)}
          disabled={isPercent || isLoading}
        />

        <div className={formatValueClasses}>{formatValue}</div>

        <div className="value-range-input-wrapper">
          {!isLoading && <div className="slide-range" ref={range}></div>}

          <input
            type="range"
            className="value-range-input"
            value={value}
            min={minValue}
            max={maxValue}
            step={step}
            onChange={(event) => onChange(event, type)}
            disabled={isLoading}
          />
        </div>
      </div>
    </div>
  );
}
