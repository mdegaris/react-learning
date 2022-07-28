import React from 'react';
import { AppProps, ServiceItem } from '../../../types';
import Card from '../../UI/Card';
import styles from './ServiceDetail.module.css';

interface ServiceDetailsProps extends AppProps {
  service?: ServiceItem;
}

const ServiceDetail = (props: ServiceDetailsProps) => {
  return (
    <div className={styles.container}>
      <Card>
        <div>{props.service?.study}</div>
        <div>{props.service?.round}</div>
      </Card>
    </div>
  );
};

export default ServiceDetail;
