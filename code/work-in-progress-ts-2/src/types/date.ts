export type Year = `${number}${number}${number}${number}`;

export type MonthFullName =
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

export type MonthAbbreviation =
  | 'Jan'
  | 'Feb'
  | 'Mar'
  | 'Apr'
  | 'May'
  | 'Jun'
  | 'Jul'
  | 'Aug'
  | 'Sep'
  | 'Oct'
  | 'Nov'
  | 'Dec';

export type Month = {
  name: MonthFullName,
  abbr: MonthAbbreviation
}

export type Day = `${number}${number}`;

export type DateString = `${Day}-${MonthAbbreviation}-${Year}`;
