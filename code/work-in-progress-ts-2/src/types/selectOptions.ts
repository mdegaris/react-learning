import { MonthFull, MonthShort, Year } from './date';
import { ServiceCode, ServiceGroup, ServiceName } from './service';
import { Study, StudyManager } from './study';

type AllType = 'All';

interface OptionType {
  label: string;
  value: string;
}

interface GroupType {
  label: string;
  options: OptionType[];
}

interface AllOption extends OptionType {
  label: AllType;
  value: AllType;
}

interface MonthOption extends OptionType {
  label: MonthFull;
  value: MonthShort;
}

interface YearOption extends OptionType {
  label: Year;
  value: Year;
}

interface ServiceOption extends OptionType {
  label: ServiceGroup | ServiceName;
  value: ServiceGroup | ServiceCode;
}

interface StudyOption extends OptionType {
  label: string;
  value: string;
}

interface StudyManagerOption extends StudyOption {
  label: StudyManager;
  value: StudyManager;
}

interface StudyIdOption extends StudyOption {
  label: Study;
  value: Study;
}

export type {
  AllOption,
  OptionType,
  GroupType,
  MonthOption,
  YearOption,
  ServiceOption,
  StudyIdOption,
  StudyManagerOption,
};
