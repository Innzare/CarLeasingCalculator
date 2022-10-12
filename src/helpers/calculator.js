export const formatNumber = (value) => {
  const valueFormatted = Math.floor(value)
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ' ');

  const valueWithoutSpaces = valueFormatted.split(' ').join('');

  return isFinite(valueWithoutSpaces) ? valueFormatted : 'Error';
};

export const getMonthPay = (data) => {
  const { cost, initialPaymentPercentValue, initialPaymentPercent, leaseTerm } =
    data;

  const initialPaymentPercentFormatted = initialPaymentPercent / 100;

  return (
    (cost - initialPaymentPercentValue) *
    ((initialPaymentPercentFormatted *
      Math.pow(1 + initialPaymentPercentFormatted, leaseTerm)) /
      (Math.pow(1 + initialPaymentPercentFormatted, leaseTerm) - 1))
  );
};

export const getLeaseAgreementAmount = (data) => {
  const { initialPaymentPercentValue, leaseTerm, monthPay } = data;

  return initialPaymentPercentValue + leaseTerm * monthPay;
};
