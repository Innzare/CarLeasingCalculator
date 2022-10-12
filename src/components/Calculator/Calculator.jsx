import React, { useState } from 'react';
import {
  initialValues,
  minMaxValues,
  fieldTypes,
  costStep,
} from 'Src/consts/calculator';
import { getMonthPay, getLeaseAgreementAmount } from 'Src/helpers/calculator';
import ValueRange from 'Src/components/ValueRange';
import FinalPrice from 'Src/components/FinalPrice';
import Button from 'Src/components/Button';
import './Calculator.scss';

export default function Calculator() {
  const [cost, setCost] = useState(initialValues.cost);
  const [initialPaymentPercent, setInitialPaymentPercent] = useState(
    initialValues.percent
  );
  const [leaseTerm, setLeaseTerm] = useState(initialValues.leaseTerm);

  const initialPaymentPercentValue = (initialPaymentPercent / 100) * cost;

  const monthPay = getMonthPay({
    cost,
    initialPaymentPercentValue,
    initialPaymentPercent,
    leaseTerm,
  });

  const leaseAgreementAmount = getLeaseAgreementAmount({
    initialPaymentPercentValue,
    leaseTerm,
    monthPay,
  });

  const onChange = (event, type, isBlur) => {
    const value = event.target.value.replace(/\D/, '');
    const valueFormatted = value.split(' ').join('').replace(/\D/, '');

    switch (true) {
      case type === fieldTypes.cost:
        if (valueFormatted < minMaxValues.cost.min && isBlur) {
          setCost(minMaxValues.cost.min);
        } else if (valueFormatted > minMaxValues.cost.max && isBlur) {
          setCost(minMaxValues.cost.max);
        } else {
          setCost(valueFormatted);
        }

        break;

      case type === fieldTypes.percent:
        if (value < minMaxValues.percent.min && isBlur) {
          setInitialPaymentPercent(minMaxValues.percent.min);
        } else if (value > minMaxValues.percent.max && isBlur) {
          setInitialPaymentPercent(minMaxValues.percent.max);
        } else {
          setInitialPaymentPercent(value);
        }

        break;

      case type === fieldTypes.leaseTerm:
        if (value < minMaxValues.leaseTerm.min && isBlur) {
          setLeaseTerm(minMaxValues.leaseTerm.min);
        } else if (value > minMaxValues.leaseTerm.max && isBlur) {
          setLeaseTerm(minMaxValues.leaseTerm.max);
        } else {
          setLeaseTerm(value);
        }

        break;
    }
  };

  return (
    <div className="calculator">
      <div className="calculator__row">
        <div className="calculator__col">
          <ValueRange
            type={fieldTypes.cost}
            title="Стоимость автомобиля"
            format="₽"
            value={cost}
            minValue={minMaxValues.cost.min}
            maxValue={minMaxValues.cost.max}
            step={costStep}
            onChange={onChange}
          />
        </div>

        <div className="calculator__col">
          <ValueRange
            type={fieldTypes.percent}
            title="Первоначальный взнос"
            isPercent
            initialPaymentPercentValue={initialPaymentPercentValue}
            value={initialPaymentPercent}
            minValue={minMaxValues.percent.min}
            maxValue={minMaxValues.percent.max}
            onChange={onChange}
          />
        </div>

        <div className="calculator__col">
          <ValueRange
            type={fieldTypes.leaseTerm}
            title="Срок лизинга"
            format="мес."
            value={leaseTerm}
            minValue={minMaxValues.leaseTerm.min}
            maxValue={minMaxValues.leaseTerm.max}
            onChange={onChange}
          />
        </div>
      </div>

      <div className="calculator__row">
        <div className="calculator__col">
          <FinalPrice
            title="Сумма договора лизинга"
            value={leaseAgreementAmount}
          />
        </div>

        <div className="calculator__col">
          <FinalPrice title="Ежемесячный платеж от" value={monthPay} />
        </div>

        <div className="calculator__col">
          <Button
            text="Оставить заявку"
            onClick={() => {}}
            disabled={false}
            isLoading={false}
          />
        </div>
      </div>
    </div>
  );
}
