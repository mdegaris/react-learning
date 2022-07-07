import { createAsyncThunk } from '@reduxjs/toolkit';
import api from '../../api/firebase/serverAPI';
import { StudyManagerOptionType, StudyIdOptionType } from '../../types';

export interface AllStudyOptions {
  studyManagerOptions: StudyManagerOptionType[];
  studyIdOptions: StudyIdOptionType[];
}

export const fetchAllStudyData = createAsyncThunk<AllStudyOptions>(
  'filterLists/fetchStudyData',
  async () => {
    const studyData = await api.fetchAllStudyData();
    const studyManagerOptions: StudyManagerOptionType[] =
      studyData.studyManagerList.map<StudyManagerOptionType>((studyManager) => {
        return {
          value: studyManager,
          label: studyManager,
        };
      });

    const studyIdOptions: StudyIdOptionType[] =
      studyData.studyList.map<StudyIdOptionType>((study) => {
        return {
          value: study,
          label: study,
        };
      });

    const fetchedStudyOptions: AllStudyOptions = {
      studyManagerOptions: studyManagerOptions,
      studyIdOptions: studyIdOptions,
    };

    return fetchedStudyOptions;
  }
);
