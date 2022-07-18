import urls from './remoteUrls';
import { fetchJsonData } from './firebase/fetchJson';
import { Study, StudyManager } from '../types';

type AllStudyDataType = {
  studyList: Study[];
  studyManagerList: StudyManager[];
};

type StudiesJson = {
  studyManager: StudyManager;
  studies: Study[];
};

const studyIdCompare = (a: Study, b: Study) => {
  const re = /CYP(\d+)/;
  const aMatch = a.match(re);
  const bMatch = b.match(re);
  const aNumber = aMatch ? Number(aMatch[1]) : 0;
  const bNumber = bMatch ? Number(bMatch[1]) : 0;
  return aNumber - bNumber;
};

const fetchStudiesAndManagers = async (): Promise<AllStudyDataType> => {
  const jsonObjects = await fetchJsonData<StudiesJson[]>(urls.STUDIES_DATA);

  const allStudyManagers: StudyManager[] = jsonObjects.map(
    (sm: StudiesJson) => sm.studyManager
  );

  const allStudies = jsonObjects.reduce<Study[]>(
    (accumulator: Study[], prev: StudiesJson) => {
      return [...accumulator, ...prev.studies];
    },
    []
  );

  const uniqueStudies = [...new Set(allStudies)];

  return {
    studyList: uniqueStudies.sort(studyIdCompare),
    studyManagerList: allStudyManagers,
  };
};

export default fetchStudiesAndManagers;
