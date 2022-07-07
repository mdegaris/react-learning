type AllType = 'All';

type StudyManagerType = string;

// type StudyManagerType = {
//   name: string;
//   username: string;
//   guid: string;
// };

type StudyType = `CYP${number}${number}${number}${number}`;

type ServiceType = string;
type ServiceCodeType = `BP${number}${number}${number}`;
type ServiceGroupType =
  | 'Analytics'
  | 'Drug Metabolism'
  | 'Permeabilty'
  | 'Physchem'
  | 'Toxicology'
  | 'Transporters'
  | 'Other';

type Month =
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

interface OptionType {
  label: string;
  value: string | number;
}

interface GroupType {
  label: string;
  options: OptionType[];
}

interface AllOptionType extends OptionType {
  label: AllType;
  value: AllType;
}

interface MonthOptionType extends OptionType {
  label: Month;
  value: Month;
}

interface YearOptionType extends OptionType {
  label: string;
  value: number;
}

interface ServiceOptionType extends OptionType {
  label: ServiceGroupType | ServiceType;
  value: ServiceGroupType | ServiceCodeType;
}

interface StudyOptionType extends OptionType {
  label: string;
  value: string;
}

interface StudyManagerOptionType extends StudyOptionType {
  label: StudyManagerType;
  value: StudyManagerType;
}

interface StudyIdOptionType extends StudyOptionType {
  label: StudyType;
  value: StudyType;
}

export type {
  AllOptionType,
  OptionType,
  GroupType,
  StudyType,
  ServiceType,
  StudyManagerType,
  MonthOptionType,
  YearOptionType,
  ServiceOptionType,
  StudyIdOptionType,
  StudyManagerOptionType,
};
