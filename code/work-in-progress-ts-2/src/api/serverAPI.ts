import { StudyManagerType, StudyType } from '../types';
import { StudyManagerJson } from '../types';
import urls from './urls';

export interface AllStudyDataType {
  studyList: StudyType[];
  studyManagerList: StudyManagerType[];
}

const fetchAllStudyData = async (): Promise<AllStudyDataType> => {
  const fetchData = async (): Promise<StudyManagerJson[]> => {
    const response = await fetch(urls.STUDIES_URL, {
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error('SERVER ERROR: Could not fetch Study Manager data.');
    }

    return response.json();
  };

  const jsonObjects = await fetchData();
  const allStudyManagers: StudyManagerType[] = jsonObjects.map(
    (sm: StudyManagerJson) => sm.studyManager
  );

  const allStudies = jsonObjects.reduce<StudyType[]>(
    (acc: StudyType[], prev: StudyManagerJson) => {
      return [...acc, ...prev.studies];
    },
    []
  );

  return {
    studyList: [...new Set(allStudies)],
    studyManagerList: allStudyManagers,
  };
};

export default {
  fetchAllStudyData,
};
