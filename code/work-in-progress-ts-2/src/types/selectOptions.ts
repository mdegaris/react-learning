type AllType = 'All';

type StudyManagerType = string;
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

interface MonthOptionType extends OptionType {
  label: Month;
  value: Month;
}

interface YearOptionType extends OptionType {
  label: string;
  value: number;
}

interface ServiceOptionType extends OptionType {
  label: ServiceGroupType | ServiceType | AllType;
  value: ServiceGroupType | ServiceCodeType | AllType;
}

interface StudyOptionType extends OptionType {
  label: string;
  value: string;
}

interface StudyManagerOptionType extends StudyOptionType {
  label: StudyManagerType | AllType;
  value: StudyManagerType | AllType;
}

interface StudyIdOptionType extends StudyOptionType {
  label: StudyType | AllType;
  value: StudyType | AllType;
}

export type {
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
