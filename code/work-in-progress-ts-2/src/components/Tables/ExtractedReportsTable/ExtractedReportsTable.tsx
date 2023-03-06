import React, { useMemo } from "react";
import { useTable, Column, useFlexLayout } from "react-table";
import { AppProps, ServiceItem, ServiceVariable } from "../../../types";
import styles from "./ExtractedReportsTable.module.css";

// ========================================================

interface ExtractedReportsTableProps extends AppProps {
  service: ServiceItem;
}

// ========================================================

const ExtractedReportsTable = (props: ExtractedReportsTableProps) => {
  const columns: Column[] = useMemo(
    () => [
      {
        Header: "Extracted",
        accessor: "extractedBy",
        // width: 1,
      },
      {
        Header: "Format",
        accessor: "format",
        // width: 1,
      },
      {
        Header: "Download",
        accessor: "downloadLink",
        // width: 2,
      },
    ],
    []
  );

  const data = useMemo(() => [], []);

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable(
      {
        columns,
        data,
      },
      useFlexLayout
    );

  // Render the UI for your table
  return (
    <div>
      <div className={styles.th}>Reports</div>
      <div className={styles.table} {...getTableProps()}>
        <div className={styles.thead}>
          {headerGroups.map((headerGroup) => (
            <div className={styles.row} {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <div
                  className={styles.th}
                  id={column.id}
                  {...column.getHeaderProps()}
                >
                  {column.render("Header")}
                </div>
              ))}
            </div>
          ))}
        </div>
        <div className={styles.tbody} {...getTableBodyProps()}>
          {rows.map((row) => {
            prepareRow(row);
            return (
              <div className={styles.row} {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  return (
                    <div className={styles.td} {...cell.getCellProps()}>
                      {cell.render("Cell")}
                    </div>
                  );
                })}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ExtractedReportsTable;
