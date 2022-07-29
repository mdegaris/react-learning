import React, { useEffect, useMemo } from 'react';
import { useTable, Column, useFlexLayout } from 'react-table';
import { useAppSelector } from '../../../store/hooks';
import { AppProps, ServiceItem, ServiceList } from '../../../types';
import styles from './ServiceListTable.module.css';

// ========================================================

const isMatch = (val: string, f: string) => {
  const subs = f
    .split(' ')
    .map((s) => s.trim().toLowerCase())
    .filter((s) => s.length > 0);

  if (subs.length === 0) {
    return true;
  }

  return subs.every((s) => val.toLowerCase().includes(s));
};

const applyInteractiveFilter = (
  services: ServiceList,
  queryString: string
): ServiceList => {
  return services.filter((s: ServiceItem) => {
    const searchString: string = [
      s.study + s.round + s.serviceCode + s.serviceName + s.supplementalId,
    ].join(' ');
    return isMatch(searchString, queryString);
  });
};

// ========================================================

interface ServiceListTableProps extends AppProps {
  queryValue: string;
  selectService: (s: ServiceItem) => void;
  selectedService?: ServiceItem;
}

// ========================================================

const ServiceListTable = (props: ServiceListTableProps) => {
  const { isLoading, serviceList } = useAppSelector(
    (state) => state.serviceList
  );

  useEffect(() => {
    if (!isLoading) {
      props.selectService(serviceList[0]);
    }
  }, [isLoading]);

  const tableColumns: Column<ServiceItem>[] = useMemo(
    () => [
      {
        Header: 'Study',
        accessor: 'study',
        width: '90',
        id: 'col-study',
      },
      {
        Header: 'Round',
        accessor: 'round',
        width: '75',
        id: 'col-round',
      },
      {
        Header: 'Service',
        accessor: 'serviceName',
        width: '185',
        id: 'col-service',
      },
      {
        Header: 'Arrived',
        accessor: 'receiptDate',
        width: '105',
        id: 'col-receipt',
      },
      {
        Header: 'Deadline',
        accessor: 'deadlineDate',
        width: '105',
        id: 'col-deadline',
      },
      {
        Header: 'Compounds',
        accessor: 'compounds',
        width: '100',
        id: 'col-compounds',
      },
      {
        Header: 'Delivered',
        accessor: 'delivered',
        width: '95',
        id: 'col-delivered',
      },
    ],
    []
  );

  const handleServiceSelect = (selectedId: string) => {
    const foundService = serviceList.filter(
      (s: ServiceItem) => s.id === selectedId
    );
    props.selectService(foundService[0]);
  };

  if (!props.selectedService) {
    props.selectService(serviceList[0]);
  }

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable<ServiceItem>(
      {
        columns: tableColumns,
        data: applyInteractiveFilter(serviceList, props.queryValue),
        getRowId: (row) => row.id,
      },
      useFlexLayout
    );

  // Render the UI for your table
  return (
    <React.Fragment>
      {isLoading && <div>Loading...</div>}
      {!isLoading && (
        <div className={styles.table} {...getTableProps()}>
          <div className={styles.thead}>
            {headerGroups.map((headerGroup) => (
              <div
                className={styles.row}
                {...headerGroup.getHeaderGroupProps()}
              >
                {headerGroup.headers.map((column) => (
                  <div
                    className={styles.th}
                    id={column.id}
                    {...column.getHeaderProps()}
                  >
                    {column.render('Header')}
                  </div>
                ))}
              </div>
            ))}
          </div>
          <div className={styles.tbody} {...getTableBodyProps()}>
            {rows.map((row) => {
              prepareRow(row);
              let rowStyle = styles.row;
              if (row.id === props.selectedService?.id) {
                rowStyle += ' ' + styles.selected;
              } else {
                rowStyle += ' ' + styles['not-selected'];
              }
              return (
                <div
                  onClick={handleServiceSelect.bind(null, row.id)}
                  className={rowStyle}
                  {...row.getRowProps()}
                >
                  {row.cells.map((cell) => {
                    return (
                      <div className={styles.td} {...cell.getCellProps()}>
                        {cell.render('Cell')}
                      </div>
                    );
                  })}
                </div>
              );
            })}
          </div>
        </div>
      )}
    </React.Fragment>
  );
};

export default ServiceListTable;
