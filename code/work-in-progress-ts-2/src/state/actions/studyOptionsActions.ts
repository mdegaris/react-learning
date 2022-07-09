import { createAsyncThunk } from '@reduxjs/toolkit';
import api from '../../api/firebase/serverAPI';
import { StudyManagerOption, StudyIdOption } from '../../types';

export interface AllStudyOptions {
  studyManagerOptions: StudyManagerOption[];
  studyIdOptions: StudyIdOption[];
}

export const fetchAllStudyData = createAsyncThunk<AllStudyOptions>(
  'filterLists/fetchStudyData',
  async () => {
    const studyData = await api.fetchAllStudyData();
    const studyManagerOptions: StudyManagerOption[] =
      studyData.studyManagerList.map<StudyManagerOption>((studyManager) => {
        return {
          value: studyManager,
          label: studyManager,
        };
      });

    const studyIdOptions: StudyIdOption[] =
      studyData.studyList.map<StudyIdOption>((study) => {
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
