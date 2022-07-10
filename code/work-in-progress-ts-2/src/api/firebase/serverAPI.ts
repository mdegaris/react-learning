import axios from 'axios';
import { Study, StudyManager } from '../../types/study';
import urls from './remoteUrls';

const server = axios.create({
  baseURL: urls.SERVER_URL,
  timeout: 1000,
  headers: { 'Content-Type': 'application/json' },
});

const sleep = (ms: number) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

const fetchData = async <T>(dataUrn: string): Promise<T> => {
  const response = await server.get(dataUrn);

  if (response.status !== 200) {
    throw new Error('SERVER ERROR: Could not fetch data.');
  }

  return response.data;
};

export type APIStudyDataType = {
  studyList: Study[];
  studyManagerList: StudyManager[];
};

type StudiesJson = {
  studyManager: string;
  studies: Study[];
};

const fetchAllStudyData = async (): Promise<APIStudyDataType> => {
  const jsonObjects = await fetchData<StudiesJson[]>(urls.STUDIES_DATA);

  const allStudyManagers: StudyManager[] = jsonObjects.map(
    (sm: StudiesJson) => sm.studyManager
  );

  const allStudies = jsonObjects.reduce<Study[]>(
    (accumulator: Study[], prev: StudiesJson) => {
      return [...accumulator, ...prev.studies];
    },
    []
  );

  // await new Promise((r) => setTimeout(r, 5000));

  return {
    studyList: [...new Set(allStudies)],
    studyManagerList: allStudyManagers,
  };
};

export type APIServiceListType = {
  serviceList: [];
};

type RoundsJson = {
  studyManager: string;
  studies: Study[];
};

// const fetchServiceData = async (): Promise<APIServiceListType> => {
//   const jsonObjects = await fetchData<RoundsJson[]>();
// };

export default {
  fetchAllStudyData,
  // fetchServiceData,
};
