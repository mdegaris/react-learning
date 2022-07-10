import { MonthOption, Year, YearOption } from '../../../types';

export const buildYearOptions = (year: number): YearOption[] => {
  const yearList = new Array(12).fill(year).map((y, index) => y - index + 1);
  const yearOptions = yearList.map((year): YearOption => {
    const yearStr: Year = year.toString() as Year;
    return {
      label: yearStr,
      value: yearStr,
    };
  });

  return yearOptions;
};

export const monthOptions: MonthOption[] = [
  {
    label: 'January',
    value: 'JAN',
  },
  {
    label: 'February',
    value: 'FEB',
  },
  {
    label: 'March',
    value: 'MAR',
  },
  {
    label: 'April',
    value: 'APR',
  },
  {
    label: 'May',
    value: 'MAY',
  },
  {
    label: 'June',
    value: 'JUN',
  },
  {
    label: 'July',
    value: 'JUL',
  },
  {
    label: 'August',
    value: 'AUG',
  },
  {
    label: 'September',
    value: 'SEP',
  },
  {
    label: 'October',
    value: 'OCT',
  },
  {
    label: 'November',
    value: 'NOV',
  },
  {
    label: 'December',
    value: 'DEC',
  },
];
