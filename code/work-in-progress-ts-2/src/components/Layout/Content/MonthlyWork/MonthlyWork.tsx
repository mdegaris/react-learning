import React, { useState } from 'react';
import WorkFilter from '../../../Cards/WorkFilter';
import ServiceList from '../../../Cards/ServiceList';
import ServiceDetail from '../../../Cards/ServiceDetail';
import styles from './MonthlyWork.module.css';
import Header from './Header';
import { ServiceItem } from '../../../../types';

type Props = {};

const MonthlyWork = (props: Props) => {
  const [selectedService, setSelectedService] = useState<ServiceItem>();

  const selectService = (service: ServiceItem) => {
    setSelectedService(service);
  };

  return (
    <React.Fragment>
      {/* <Header /> */}
      <div className={styles.container}>
        <WorkFilter />
        <ServiceList
          selectService={selectService}
          selectedService={selectedService}
        />
        <ServiceDetail service={selectedService} />
      </div>
    </React.Fragment>
  );
};

export default MonthlyWork;
