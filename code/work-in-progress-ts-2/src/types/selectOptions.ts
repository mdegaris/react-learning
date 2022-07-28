import { MonthFullName, MonthAbbreviation, Year } from './date';
import { ServiceCode, ServiceGroup, ServiceName } from './service';
import { Study, StudyManager } from './study';

type AllStudies = 'All Studies';
type AllServices = 'All Services';

interface OptionType {
  readonly label: string;
  readonly value: string;
}

interface GroupType {
  readonly label: string;
  readonly options: OptionType[];
}

interface AllStudiesOption extends OptionType {
  readonly label: AllStudies;
  readonly value: AllStudies;
}

interface MonthOption extends OptionType {
  readonly label: MonthFullName;
  readonly value: MonthAbbreviation;
}

interface YearOption extends OptionType {
  readonly label: Year;
  readonly value: Year;
}

interface ServiceOption extends OptionType {
  readonly label: ServiceGroup | ServiceName;
  readonly value: ServiceGroup | ServiceCode;
}

interface StudyOption extends OptionType {
  readonly label: string;
  readonly value: string;
}

interface StudyManagerOption extends StudyOption {
  readonly label: StudyManager;
  readonly value: StudyManager;
}

interface StudyIdOption extends StudyOption {
  readonly label: Study;
  readonly value: Study;
}

type OptionsAndGroupsType = (OptionType | GroupType)[];

export type {
  OptionType,
  GroupType,
  OptionsAndGroupsType,
  MonthOption,
  YearOption,
  ServiceOption,
  StudyIdOption,
  StudyManagerOption,
  AllStudiesOption,
};
