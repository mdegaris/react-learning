import React, { useMemo } from "react";
import { useTable, Column, useFlexLayout } from "react-table";
import { AppProps, ServiceVariable } from "../../../types";
import styles from "./ServiceVariablesTable.module.css";

// ========================================================

interface ServiceVariableTableProps extends AppProps {
  title: string;
  variables: ServiceVariable[];
}

// ========================================================

const ServiceVariablesTable = (props: ServiceVariableTableProps) => {
  const columns: Column<ServiceVariable>[] = useMemo(
    () => [
      {
        Header: "Variable",
        accessor: "name",
        width: "90",
        id: "col-name",
      },
      {
        Header: "Value",
        accessor: "value",
        width: "75",
        id: "col-value",
      },
    ],
    []
  );

  const data = useMemo(() => props.variables, [props.variables]);

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable<ServiceVariable>(
      {
        columns,
        data,
      },
      useFlexLayout
    );

  // Render the UI for your table
  return (
    <div>
      <div className={styles.th}>{props.title}</div>
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

export default ServiceVariablesTable;
