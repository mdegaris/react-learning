import ActionType from '../state/action-types';
import { wipRoundsActions } from '../state/slices/cache-slice';

// ==============================================

export type Round = {
  contractId: string;
  studyId: string;
  roundId: string;
  expectedRecepitDate: Date;
  isComplete: boolean;
  // services: Service[];
};

export type Service = {
  serviceName: string;
  serviceCode: string;
  supplementalId: string;
  hashNumber: number;
  noOfCompounds: number;
  deliveredCompounds: number;
  deadlineDate: Date;
};

export type RoundList = {
  dateRange: DateRange | null;
  rounds: Round[];
};

export type DateRange = {
  from: Date;
  to: Date;
};

export type Deadline = {
  studyId: string;
  roundId: string;
  serviceName: string;
  serviceVariables: ServiceVariable[];
  projectManager: string;
  deadlineDate: Date;
};

export type ServiceVariable = {
  name: string;
  value: string;
};

// ==============================================

export type CacheState = {
  cachedRounds: RoundList;
  // active: number;
  // completed: number;
};

export interface UpdateRoundsAction {
  type: ActionType.UPDATE_CACHE;
  payload: RoundJSON[];
}

export interface ClearAction {
  type: ActionType.CLEAR_CACHE;
}

export type CacheAction = UpdateRoundsAction | ClearAction;

export type DispatchType = (args: UpdateRoundsAction) => UpdateRoundsAction;

// ==============================================

export interface RoundJSON {
  id: string;
  contractId: string;
  studyId: string;
  round: string;
  isComplete: boolean;
  expectedReceiptDate: string;
  services: ServiceJSON[];
}

export interface ServiceJSON {
  deadlineDate: string;
  deliveredCompounds: number;
  hashNumber: number;
  noOfCompounds: number;
  serviceCode: string;
  serviceName: string;
  supplementalId: string;
}

// export interface IRound {
//   contractId: string;
//   studyId: string;
//   roundId: string;
//   expectedRecepitDate: Date;
//   isComplete: boolean;
//   services: IService[];
// }

// export interface IService {
//   serviceName: string;
//   serviceCode: string;
//   supplementalId: string;
//   hashNumber: number;
//   noOfCompounds: number;
//   deliveredCompounds: number;
//   deadlineDate: Date;
// }
