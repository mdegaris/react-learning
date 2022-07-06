import { createAsyncThunk } from '@reduxjs/toolkit';
import api, { AllStudyDataType } from '../../api/serverAPI';
import { StudyManagerOptionType, StudyIdOptionType } from '../../types';

export interface AllStudyOptions {
  studyManagerOptions: StudyManagerOptionType[];
  studyIdOptions: StudyIdOptionType[];
}

// just using StudyOptionType to make types match
export const fetchAllStudyData = createAsyncThunk<AllStudyOptions>(
  'filterLists/fetchStudyData',
  async (thunkAPI) => {
    const studyData: AllStudyDataType = await api.fetchAllStudyData();
    const studyManagerOptions: StudyManagerOptionType[] =
      studyData.studyManagerList.map<StudyManagerOptionType>((sm) => {
        return {
          value: sm,
          label: sm,
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
