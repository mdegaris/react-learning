const STUDIES_DATA = 'studies.json';
const SERVER_URL =
  'https://work-in-progress-127df-default-rtdb.europe-west1.firebasedatabase.app';

const STUDIES_URL = new URL(STUDIES_DATA, SERVER_URL).href;

export default {
  STUDIES_URL,
};
