import React from 'react';
import ServiceListTable from '../../Tables/ServiceListTable/ServiceListTable';
import Card from '../../UI/Card';
import styles from './ServiceList.module.css';

type Props = {};

const ServiceList = (props: Props) => {
  return (
    <div className={styles.container}>
      <Card title='Work for May 2022'>
        <div className={styles.content}>
          <div className={styles.filter}>
            <input type='search' placeholder='Filter, e.g. 694 stability rat' />
          </div>
          <ServiceListTable />
        </div>
      </Card>
    </div>
  );
};

export default ServiceList;
