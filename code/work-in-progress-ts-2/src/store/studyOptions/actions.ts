import { createAsyncThunk } from '@reduxjs/toolkit';
import api from '../../api';
import { StudyManagerOption, StudyIdOption } from '../../types';

export const fetchAllStudyOptions = createAsyncThunk(
  'filterLists/fetchStudyData',
  async () => {
    const studyOptions = await api.fetchStudiesAndManagers();
    const studyManagerOptions: StudyManagerOption[] =
      studyOptions.studyManagerList.map<StudyManagerOption>((studyManager) => {
        return {
          value: studyManager,
          label: studyManager,
        };
      });

    const studyIdOptions: StudyIdOption[] =
      studyOptions.studyList.map<StudyIdOption>((study) => {
        return {
          value: study,
          label: study,
        };
      });

    const fetchedStudyOptions = {
      studyManagerOptions: studyManagerOptions,
      studyIdOptions: studyIdOptions,
    };

    return fetchedStudyOptions;
  }
);
