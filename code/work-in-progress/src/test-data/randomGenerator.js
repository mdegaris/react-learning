import randomDateGenerator from 'random-date-generator';
import dateFormat from 'dateformat';
import fs from 'fs';

// const randomDateGenerator = require('random-date-generator');
// const dateFormat = require('dateformat');
// const fs = require('fs');

const year = 2022;

const studies = [
  'CYP0244',
  'CYP0323',
  'CYP0694',
  'CYP1143',
  'CYP1676',
  'CYP1822',
];

const services = [
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
  return dateFormat(date, 'dd-mmm-yy');
};

const maxMonthDays = (month) => {
  const monthDate = new Date(year, month, 0);
  return monthDate.getDate();
};

const randomInt = (range) => {
  return Math.floor(Math.random() * (range.max - range.min)) + range.min;
};

const randomElement = (list) => {
  const randomIndex = randomInt({ min: 0, max: list.length });
  return list[randomIndex];
};

const generateDate = (month, fromDay = 1, toDay = 30) => {
  return randomDateGenerator.getRandomDateInRange(
    new Date(2022, month, fromDay),
    new Date(2022, month, toDay)
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
  const randService = randomElement(services);
  const randSuppId = randomElement(randService.suppIds);
  const deadlineDate = generateDate(
    receiptDate.getMonth(),
    receiptDate.getDate() + 5,
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
    randomInt({ min: 0, max: 10 }) !== 0
      ? randomElement(['A', 'B', 'C', 'D', 'E', 'F'])
      : '';

  return {
    wholeRound: 'R' + roundNumber,
    subRound: 'R' + roundNumber + roundLetter,
  };
};

const generateCompleted = () => {
  return randomInt({ min: 0, max: 20 }) === 0 ? true : false;
};

const generateRound = (month = null) => {
  const studyId = randomElement(studies);
  const roundId = generateRoundId();
  const expectedReciptDate = generateDate(month, 1, 12);
  const roundServices = generateSetofServices(month, expectedReciptDate);
  const id = studyId + '-' + roundId.subRound;
  const contractId = studyId + '-' + roundId.wholeRound;

  return {
    id,
    contractId,
    round: roundId.subRound,
    studyId,
    expectedReceiptDate: formatDate(expectedReciptDate),
    services: roundServices,
    isCompleted: generateCompleted(),
  };
};

// console.log('Start...');
const allRounds = [];
for (let i = 0; i < 40; i++) {
  allRounds.push(generateRound(4));
}

fs.writeFileSync(
  'src/store/rounds.json',
  JSON.stringify({ rounds: allRounds })
);

console.log('Done.');
