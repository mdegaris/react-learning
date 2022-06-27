import React from 'react';

export type Month =
  | 'January'
  | 'February'
  | 'March'
  | 'April'
  | 'May'
  | 'June'
  | 'July'
  | 'August'
  | 'September'
  | 'October'
  | 'November'
  | 'December';

export interface SelectOptionType {
  label: string;
  value: string | number;
}

export interface MonthOptionType extends SelectOptionType {
  label: Month;
  value: Month;
}

export interface YearOptionType extends SelectOptionType {
  label: string;
  value: number;
}

export interface AppProps {
  className: string;
  // children: React.ReactNode;
}
