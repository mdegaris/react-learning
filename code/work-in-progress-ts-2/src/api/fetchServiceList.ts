import urls from "./remoteUrls";
import { fetchJsonData } from "./firebase/fetchJson";
import {
  Study,
  StudyManager,
  Round,
  ServiceCode,
  ServiceName,
  DateString,
  Year,
  MonthAbbreviation,
  ServiceItem,
  ServiceVariable,
} from "../types";

export type APIServiceListType = {
  serviceList: [];
};

type RoundJson = {
  id: string;
  contractId: string;
  // studyId: Study;
  studyIdx: string;
  round: string;
  studyManager: string;
  expectedReceiptDate: string;
  isCompleted: boolean;
  services: ServiceJson[];
};

type ServiceJson = {
  serviceNo: number;
  serviceCode: string;
  serviceName: string;
  supplementalId: string;
  hashNumber: number;
  noOfCompounds: number;
  deliveredCompounds: number;
  deadlineDate: string;
};

const buildVariablesList = (supplementalId: string): ServiceVariable[] => {
  const nameValues = supplementalId.split("|").filter((s) => s.match(/.+=.+/g));
  const variablesList: ServiceVariable[] = nameValues.map((nv) => {
    const nameValuePair = nv.split("=");
    return {
      name: nameValuePair[0],
      value: nameValuePair[1],
    };
  });

  return variablesList;
};

const fetchServiceData = async (
  month: MonthAbbreviation,
  year: Year,
  studyId?: Study,
  studyManager?: StudyManager
): Promise<ServiceItem[]> => {
  // const s : Study = "CYP0244";

  const roundJsonObjects = await fetchJsonData<RoundJson[]>(urls.ROUNDS_DATA);
  const services: ServiceItem[] = roundJsonObjects
    .map((rnd: RoundJson) =>
      rnd.services.map((serv: ServiceJson) => {
        return {
          id: rnd.id + "-" + serv.serviceNo,
          studyManager: rnd.studyManager,
          // study: rnd.studyId as Study,
          // study: s,
          round: rnd.round as Round,
          serviceName: serv.serviceName,
          serviceCode: serv.serviceCode as ServiceCode,
          supplementalId: serv.supplementalId,
          receiptDate: rnd.expectedReceiptDate as DateString,
          deadlineDate: serv.deadlineDate as DateString,
          compounds: serv.noOfCompounds,
          delivered: serv.deliveredCompounds,
          undelivered: serv.noOfCompounds - serv.deliveredCompounds,
          variables: buildVariablesList(serv.supplementalId),
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
