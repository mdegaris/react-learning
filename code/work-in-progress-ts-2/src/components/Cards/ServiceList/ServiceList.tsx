import React, { ChangeEvent, useEffect, useState } from 'react';
import { useAppSelector } from '../../../store/hooks';
import { AppProps, ServiceItem } from '../../../types';
import ServiceListTable from '../../Tables/ServiceListTable/ServiceListTable';
import Card from '../../UI/Card';
import styles from './ServiceList.module.css';

interface ServiceListProps extends AppProps {
  selectService: (service: ServiceItem) => void;
}

const ServiceList = (props: ServiceListProps) => {
  const [inputText, setInputText] = useState('');
  const [queryValue, setQueryValue] = useState('');

  const { month, year } = useAppSelector((state) => state.workFilter);

  useEffect(() => {
    const timeout = setTimeout(() => setQueryValue(inputText), 500);
    return () => clearTimeout(timeout);
  }, [inputText]);

  const filterChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setInputText(event.target.value);
  };

  const title: string = 'Work for ' + month + ' ' + year;

  return (
    <div className={styles.container}>
      <Card title={title}>
        <div className={styles.content}>
          <div className={styles.filter}>
            <input
              type='search'
              placeholder='Filter, e.g. 694 stability rat'
              value={inputText}
              onChange={filterChangeHandler}
            />
          </div>
          <ServiceListTable
            queryValue={queryValue}
            selectService={props.selectService}
          />
        </div>
      </Card>
    </div>
  );
};

export default ServiceList;
