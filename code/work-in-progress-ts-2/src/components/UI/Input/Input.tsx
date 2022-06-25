import React from 'react';
import Select from 'react-select';

type StudyOption = {
  readonly value: string;
  readonly label: string;
};

const studyOptions: StudyOption[] = [
  {
    value: 'CYP0694',
    label: 'CYP0694',
  },
  {
    value: 'CYP1822',
    label: 'CYP1822',
  },
];

type Props = {};

const Input = (props: Props) => {
  return <Select options={studyOptions} />;
};

export default Input;
