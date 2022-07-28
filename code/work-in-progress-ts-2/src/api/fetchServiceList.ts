import urls from './remoteUrls';
import { fetchJsonData } from './firebase/fetchJson';
import {
  Study,
  StudyManager,
  Round,
  ServiceCode,
  ServiceName,
  ServiceList,
  DateString,
  Year,
  MonthAbbreviation,
  ServiceItem,
} from '../types';

export type APIServiceListType = {
  serviceList: [];
};

type RoundJson = {
  id: string;
  contractId: string;
  studyId: Study;
  round: Round;
  studyManager: StudyManager;
  expectedReceiptDate: DateString;
  isCompleted: boolean;
  services: ServiceJson[];
};

type ServiceJson = {
  serviceNo: number;
  serviceCode: ServiceCode;
  serviceName: ServiceName;
  supplementalId: string;
  hashNumber: number;
  noOfCompounds: number;
  deliveredCompounds: number;
  deadlineDate: DateString;
};

const fetchServiceData = async (
  month: MonthAbbreviation,
  year: Year,
  studyId?: Study,
  studyManager?: StudyManager
): Promise<ServiceList> => {
  const roundJsonObjects = await fetchJsonData<RoundJson[]>(urls.ROUNDS_DATA);

  let serviceId = 0;
  const services: ServiceList = roundJsonObjects
    .map((rnd: RoundJson) =>
      rnd.services.map((serv: ServiceJson) => {
        serviceId++;
        return {
          id: rnd.id + ' ' + serv.serviceNo,
          studyManager: rnd.studyManager,
          study: rnd.studyId,
          round: rnd.round,
          serviceName: serv.serviceName,
          serviceCode: serv.serviceCode,
          supplementalId: serv.supplementalId,
          receiptDate: rnd.expectedReceiptDate,
          deadlineDate: serv.deadlineDate,
          compounds: serv.noOfCompounds,
          delivered: serv.deliveredCompounds,
        };
      })
    )
    .flat();

  const filteredList = services.filter(
    (serv: ServiceItem) =>
      serv.deadlineDate.includes(month) && serv.deadlineDate.includes(year)
  );

  return filteredList;
};

export default fetchServiceData;
