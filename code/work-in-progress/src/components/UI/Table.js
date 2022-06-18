import React, { useMemo } from 'react';
import styles from './Table.module.css';
import { useSelector } from 'react-redux';

import { useTable, usePagination } from 'react-table';

const columns = [
  {
    Header: 'Upcoming deadlines',

    columns: [
      {
        Header: 'Study',
        accessor: 'studyId',
      },
      {
        Header: 'Round',
        accessor: 'round',
      },
      {
        Header: 'Service',
        accessor: 'service',
      },
      {
        Header: 'Deadline Date',
        accessor: 'date',
      },
    ],
  },
];

const Table = () => {
  const allDeadlines = useSelector((state) => state.deadlines.deadlineItems);

  const data = useMemo(() => allDeadlines, [allDeadlines]);
  // const data = allDeadlines;

  // const data = useMemo(
  //   () =>
  //     allDeadlines.map((deadline) => {
  //       return {
  //         studyId: deadline.studyId,
  //         round: deadline.round,
  //         service: deadline.service,
  //         date: deadline.date,
  //       };
  //     }),
  //   [allDeadlines]
  // );

  // const data = useMemo(
  //   () =>
  //     allDeadlines.map((deadline) => {
  //       return {
  //         studyId: deadline.studyId,
  //         round: deadline.round,
  //         service: deadline.service,
  //         date: deadline.date,
  //       };
  //     }),
  //   [allDeadlines]
  // );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    // canPreviousPage,
    // canNextPage,
    // pageOptions,
    // pageCount,
    // gotoPage,
    // nextPage,
    // previousPage,
    // state: { pageIndex },
  } = useTable(
    {
      columns,
      data,
      // initialState: {
      //   pageSize: 18,
      //   autoResetPage: false,
      // },
    }
    // usePagination
  );

  return (
    <div className={styles.table}>
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps()}>{column.render('Header')}</th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row, i) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  return (
                    <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
      {/* <div className={styles.pagination}>
        <button onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
          {'<<'}
        </button>{' '}
        <button onClick={() => previousPage()} disabled={!canPreviousPage}>
          {'<'}
        </button>{' '}
        <button onClick={() => nextPage()} disabled={!canNextPage}>
          {'>'}
        </button>{' '}
        <button onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}>
          {'>>'}
        </button>{' '}
        <span>
          Page{' '}
          <strong>
            {pageIndex + 1} of {pageOptions.length}
          </strong>{' '}
        </span>
      </div> */}
    </div>
  );
};

export default Table;
