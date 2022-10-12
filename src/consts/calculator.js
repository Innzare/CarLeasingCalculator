export const fieldTypes = {
  cost: 'cost',
  percent: 'percent',
  leaseTerm: 'leaseTerm',
};

export const costStep = 1000;

export const initialValues = {
  cost: 3_300_000,
  percent: 13,
  leaseTerm: 60,
};

export const minMaxValues = {
  cost: {
    min: 1_000_000,
    max: 6_000_000,
  },
  percent: {
    min: 10,
    max: 60,
  },
  leaseTerm: {
    min: 1,
    max: 60,
  },
};
