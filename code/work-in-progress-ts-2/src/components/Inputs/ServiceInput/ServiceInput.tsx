import React from 'react';
import { ServiceOption } from '../../../types';
import Select from '../../UI/Inputs/Select';
import styles from './ServiceInput.module.css';

const serviceGroupOptions: ServiceOption[] = [
  {
    value: 'Analytics',
    label: 'Analytics',
  },
  {
    label: 'Drug Metabolism',
    value: 'Drug Metabolism',
  },
  {
    label: 'Permeabilty',
    value: 'Permeabilty',
  },
  {
    label: 'Physchem',
    value: 'Physchem',
  },
  {
    label: 'Toxicology',
    value: 'Toxicology',
  },
  {
    label: 'Transporters',
    value: 'Transporters',
  },
];

type Props = {};

const ServiceInput = (props: Props) => {
  return (
    <div className={styles.container}>
      <Select
        id='service-group-select'
        options={serviceGroupOptions}
        className={styles.select}
        label='Service'
      ></Select>
    </div>
  );
};

export default ServiceInput;
