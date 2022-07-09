import type { Round } from './round';
import type { Study } from './study';

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

export type Service = {
  study: Study;
  round: Round;
  serviceName: string;
  receiptDate: string;
  deadlineDate: string;
  compounds: number;
  delivered: number;
  serviceCode: ServiceCode;
};
