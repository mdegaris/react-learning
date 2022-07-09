const SERVER_URL =
  'https://work-in-progress-127df-default-rtdb.europe-west1.firebasedatabase.app';
const STUDIES_DATA = 'studies.json';
const ROUNDS_DATA = 'rounds.json';

const STUDIES_URL = new URL(STUDIES_DATA, SERVER_URL).href;
const ROUNDS_URL = new URL(ROUNDS_DATA, SERVER_URL).href;

export default {
  SERVER_URL,
  STUDIES_URL,
  ROUNDS_URL,
  STUDIES_DATA,
  ROUNDS_DATA,
};
