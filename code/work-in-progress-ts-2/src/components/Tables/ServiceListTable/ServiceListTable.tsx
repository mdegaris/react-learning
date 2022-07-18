import React, { useMemo, useCallback } from 'react';
import { useTable, useBlockLayout, Column } from 'react-table';
import { useAppSelector } from '../../../store/hooks';
import { FixedSizeList } from 'react-window';
import { ServiceList, ServiceItem, ServiceName, Study } from '../../../types';
import styles from './ServiceListTable.module.css';

interface TableProps<T extends object> {
  columns: Column<T>[];
  data: T[];
}

// const ServiceListTable = <T extends { id: string }>(): TableProps<T> => {
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
      },
      {
        Header: 'Round',
        accessor: 'round',
      },
      {
        Header: 'Service',
        accessor: 'serviceName',
      },
      {
        Header: 'Arrived',
        accessor: 'receiptDate',
      },
      {
        Header: 'Deadline',
        accessor: 'deadlineDate',
      },
      {
        Header: 'Compounds',
        accessor: 'compounds',
      },
      {
        Header: 'Delivered',
        accessor: 'delivered',
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
              <div {...column.getHeaderProps()}>{column.render('Header')}</div>
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
