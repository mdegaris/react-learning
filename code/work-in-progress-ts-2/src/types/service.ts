import { DateString } from './date';
import type { Round } from './round';
import type { Study, StudyManager } from './study';

export type ServiceName = string;
export type ServiceCode = `BP${number}${number}${number}`;
export type ServiceGroup =
  | 'Analytics'
  | 'Drug Metabolism'
  | 'Permeabilty'
  | 'Physchem'
  | 'Toxicology'
  | 'Transporters'
  | 'Other';

export type ServiceItem = {
  id: string;
  studyManager: StudyManager;
  study: Study;
  round: Round;
  serviceName: ServiceName;
  serviceCode: ServiceCode;
  supplementalId: string;
  receiptDate: DateString;
  deadlineDate: DateString;
  compounds: number;
  delivered: number;
};

export type ServiceList = ServiceItem[];
