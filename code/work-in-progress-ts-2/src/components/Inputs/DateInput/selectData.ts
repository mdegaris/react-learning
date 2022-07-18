import { MonthOption, Year, YearOption } from '../../../types';

const NUMBER_OF_YEARS = 12;

export const buildYearOptions = (year: number): YearOption[] => {
  const yearList = new Array(NUMBER_OF_YEARS)
    .fill(year)
    .map((y, index) => y - index + 1);

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
    value: 'Jan',
  },
  {
    label: 'February',
    value: 'Feb',
  },
  {
    label: 'March',
    value: 'Mar',
  },
  {
    label: 'April',
    value: 'Apr',
  },
  {
    label: 'May',
    value: 'May',
  },
  {
    label: 'June',
    value: 'Jun',
  },
  {
    label: 'July',
    value: 'Jul',
  },
  {
    label: 'August',
    value: 'Aug',
  },
  {
    label: 'September',
    value: 'Sep',
  },
  {
    label: 'October',
    value: 'Oct',
  },
  {
    label: 'November',
    value: 'Nov',
  },
  {
    label: 'December',
    value: 'Dec',
  },
];
