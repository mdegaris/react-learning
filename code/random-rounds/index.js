import randomDateGenerator from 'random-date-generator';
import dateFormat from 'dateformat';
import fs from 'fs';

const YEAR = new Date().getFullYear();

const SUB_ROUNDS = ['A', 'B', 'C', 'D', 'E', 'F'];

const STUDIES_PM = [
  {
    studyManager: 'Darren Jones',
    studies: ['CYP0244', 'CYP0323', 'CYP0750'],
  },
  {
    studyManager: 'Adrian Walker',
    studies: ['CYP0694', 'CYP1676', 'CYP1454'],
  },
  {
    studyManager: 'James Harrison',
    studies: ['CYP1827', 'CYP1143', 'CYP0864'],
  },
  {
    studyManager: 'Rosie Scaril',
    studies: ['CYP0267', 'CYP1822', 'CYP1921'],
  },
];

const SERVICES = [
  {
    code: 'BP013',
    name: 'Metabolic Stability',
    suppIds: [
      'BP013|Species=Human|',
      'BP013|Species=Rat|',
      'BP013|Species=Mouse|',
    ],
  },
  {
    code: 'BP007',
    name: 'Hepatocyte Stability',
    suppIds: [
      'BP007|Species=Human|',
      'BP007|Species=Rat|',
      'BP007|Species=Mouse|',
    ],
  },
  {
    code: 'BP111',
    name: 'Caco',
    suppIds: [
      'BP111|Design1=A2B|Design2=None|Inhibitor=None|',
      'BP111|Design1=A2B|Design2=B2A|Inhibitor=None|',
      'BP111|Design1=A2B|Design2=B2A|Inhibitor=Verapamil|',
    ],
  },
  {
    code: 'BP112',
    name: 'MDCK',
    suppIds: [
      'BP112|Design1=A2B|Design2=None|Inhibitor=None|',
      'BP112|Design1=A2B|Design2=B2A|Inhibitor=None|',
      'BP112|Design1=A2B|Design2=B2A|Inhibitor=Verapamil|',
    ],
  },
  {
    code: 'BP135',
    name: 'Matrix Matched Protein Binding',
    suppIds: [
      'BP135|Species=Human|',
      'BP135|Species=Rat|',
      'BP135|Species=Mouse|',
    ],
  },
];

const formatDate = (date) => {
  return dateFormat(date, 'dd-mmm-yyyy');
};

const maxMonthDays = (month) => {
  const monthDate = new Date(YEAR, month, 0);
  return monthDate.getDate();
};

const randomInt = (range) => {
  return Math.floor(Math.random() * (range.max - range.min)) + range.min;
};

const randomElement = (list) => {
  const randomIndex = randomInt({ min: 0, max: list.length });
  return list[randomIndex];
};

const generateDate = (fromDay, fromMonth, toDay, toMonth = null) => {
  return randomDateGenerator.getRandomDateInRange(
    new Date(2022, fromMonth, fromDay),
    new Date(2022, toMonth === null ? fromMonth : toMonth, toDay)
  );
};

const generateCompounds = () => {
  const totalCmps = randomInt({ min: 1, max: 30 });
  const delivered = randomInt({ min: 0, max: totalCmps });
  return {
    totalCompounds: totalCmps,
    deliveredCompounds: delivered,
  };
};

const generateService = (receiptDate) => {
  const randService = randomElement(SERVICES);
  const randSuppId = randomElement(randService.suppIds);
  const deadlineDate = generateDate(
    receiptDate.getDate() + 5,
    receiptDate.getMonth(),
    maxMonthDays(receiptDate.getMonth())
  );
  const compounds = generateCompounds();

  return {
    serviceCode: randService.code,
    serviceName: randService.name,
    supplementalId: randSuppId,
    hashNumber: 1,
    noOfCompounds: compounds.totalCompounds,
    deliveredCompounds: compounds.deliveredCompounds,
    deadlineDate: formatDate(deadlineDate),
  };
};

const generateSetofServices = (month, receiptDate) => {
  const numberOfServices = randomInt({ min: 1, max: 6 });
  const services = [];

  for (let i = 0; i < numberOfServices; i++) {
    services.push(generateService(receiptDate));
  }

  return services;
};

const generateRoundId = () => {
  const roundNumber = randomInt({ min: 10, max: 100 });
  const roundLetter =
    randomInt({ min: 0, max: 10 }) !== 0 ? randomElement(SUB_ROUNDS) : '';

  return {
    wholeRound: 'R' + roundNumber,
    subRound: 'R' + roundNumber + roundLetter,
  };
};

const generateCompleted = () => {
  return randomInt({ min: 0, max: 20 }) === 0 ? true : false;
};

const generateRound = (month = null) => {
  const pmStudies = randomElement(STUDIES_PM);
  const studyManager = pmStudies.studyManager;
  const studyId = randomElement(pmStudies.studies);
  const roundId = generateRoundId();
  const expectedReciptDate = generateDate(1, month, 12, month + 4);
  const roundServices = generateSetofServices(month, expectedReciptDate);
  const id = studyId + '-' + roundId.subRound;
  const contractId = studyId + '-' + roundId.wholeRound;

  return {
    id,
    contractId,
    round: roundId.subRound,
    studyId,
    studyManager,
    expectedReceiptDate: formatDate(expectedReciptDate),
    services: roundServices,
    isCompleted: generateCompleted(),
  };
};

console.log('Start...');
const allRounds = [];
for (let i = 0; i < 100; i++) {
  allRounds.push(generateRound(new Date().getMonth()));
}

fs.writeFileSync(
  'test-data.json',
  JSON.stringify({ rounds: allRounds, studies: STUDIES_PM })
);

console.log('Done.');
