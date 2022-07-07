import { StudyManagerType, StudyType } from '../../types';
import urls from './remoteUrls';

type StudiesJson = {
  studyManager: string;
  studies: StudyType[];
};

export type APIStudyDataType = {
  studyList: StudyType[];
  studyManagerList: StudyManagerType[];
};

const fetchAllStudyData = async (): Promise<APIStudyDataType> => {
  const fetchData = async (): Promise<StudiesJson[]> => {
    const response = await fetch(urls.STUDIES_URL, {
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error('SERVER ERROR: Could not fetch Study data.');
    }

    return response.json();
  };

  const jsonObjects = await fetchData();
  const allStudyManagers: StudyManagerType[] = jsonObjects.map(
    (sm: StudiesJson) => sm.studyManager
  );

  const allStudies = jsonObjects.reduce<StudyType[]>(
    (acc: StudyType[], prev: StudiesJson) => {
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
