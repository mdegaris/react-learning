import React, { useMemo, useCallback } from 'react';
import { useTable, useBlockLayout, Column } from 'react-table';
import { useAppSelector } from '../../../store/hooks';
import { FixedSizeList } from 'react-window';
import { ServiceItem } from '../../../types';
import styles from './ServiceListTable.module.css';

const ServiceListTable = () => {
  const { loading, serviceList } = useAppSelector((state) => state.serviceList);

  const defaultColumn = React.useMemo(
    () => ({
      width: 150,
    }),
    []
  );

  // const scrollBarSize = React.useMemo(() => scrollbarWidth(), []);
  const scrollBarSize = 20;

  const columns: Column<ServiceItem>[] = useMemo(
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
        width: '95',
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

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable<ServiceItem>(
      {
        columns,
        data: serviceList,
      },
      useBlockLayout
    );

  // Render the UI for your table
  return (
    <div {...getTableProps()}>
      <div>
        {headerGroups.map((headerGroup) => (
          <div {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => (
              <div id={column.id} {...column.getHeaderProps()}>
                {column.render('Header')}
              </div>
            ))}
          </div>
        ))}
      </div>
      <div {...getTableBodyProps()}>
        {rows.map((row, i) => {
          prepareRow(row);
          return (
            <div {...row.getRowProps()}>
              {row.cells.map((cell) => {
                return (
                  <div {...cell.getCellProps()}>{cell.render('Cell')}</div>
                );
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ServiceListTable;
