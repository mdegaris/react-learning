import React from 'react';
import styles from './Table.module.css';
import TableHeader from './TableHeader';
import TableRow from './TableRow';

const Table = ({ headers, tableData }) => {
  return (
    <div className={styles.table}>
      <table>
        <TableHeader headers={headers} />
        <tbody>
          {tableData.map((rowData, index) => (
            <TableRow key={index} rowData={rowData} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
