import React, { useMemo } from 'react';
import { ActionMeta, SingleValue } from 'react-select';
import { buildYearOptions, monthOptions } from './selectData';
import { MonthOption, OptionType, YearOption } from '../../../types';
import Select from '../../UI/Inputs/Select/Select';
import { useAppDispatch, useAppSelector } from '../../../store/hooks';
import { workFilterActions } from '../../../store/workFilter/slice';
import styles from './DateInput.module.css';

type Props = {};

const DateInput = (props: Props) => {
  const dispatch = useAppDispatch();

  const currentYear = new Date().getFullYear();
  const months = useMemo(() => monthOptions, []);
  const years = useMemo(() => buildYearOptions(currentYear), [currentYear]);

  const { month, year } = useAppSelector((state) => state.workFilter);

  const handleMonthChange = (
    newValue: SingleValue<MonthOption>,
    { action }: ActionMeta<OptionType>
  ) => {
    if (action === 'select-option' && newValue !== null) {
      dispatch(workFilterActions.replaceMonth(newValue.value));
    }
  };

  const handleYearChange = (
    newValue: SingleValue<YearOption>,
    { action }: ActionMeta<OptionType>
  ) => {
    if (action === 'select-option' && newValue !== null) {
      dispatch(workFilterActions.replaceYear(newValue.value));
    }
  };

  return (
    <div className={styles.container}>
      <Select
        id='month-select'
        label='Month'
        options={months}
        placeholder='Month'
        className={styles.month}
        onChange={handleMonthChange}
        value={monthOptions.filter((m) => month === m.value)}
      ></Select>
      <Select
        id='year-select'
        label='Year'
        options={years}
        placeholder='Year'
        className={styles.year}
        onChange={handleYearChange}
        value={years.filter((y) => year === y.value)}
      ></Select>
    </div>
  );
};

export default DateInput;
