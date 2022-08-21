import React, { useMemo } from "react";
import { useTable, Column, useFlexLayout, useBlockLayout } from "react-table";
import { AppProps } from "../../../types";
import styles from "./TaskTable.module.css";

// ========================================================

const TaskTable = (props: AppProps) => {
  const columns: Column[] = useMemo(
    () => [
      {
        Header: "Task",
        accessor: "taskId",
        id: "col-task",
        width: 1,
      },
      {
        Header: "SOP",
        accessor: "sop",
        id: "col-sop",
        width: 1,
      },
      {
        Header: "Compounds",
        accessor: "compounds",
        id: "col-compounds",
        width: 1,
      },
      {
        Header: "Locked",
        accessor: "isLocked",
        id: "col-locked",
        width: 1,
      },
    ],
    []
  );

  const data = useMemo(
    () => [
      { taskId: 12345, sop: "P067", compounds: 1, isLocked: "YES" },
      { taskId: 12344, sop: "P067", compounds: 10, isLocked: "YES" },
      { taskId: 12333, sop: "P067", compounds: 11, isLocked: "NO" },
      { taskId: 12322, sop: "P067", compounds: 11, isLocked: "NO" },
      { taskId: 12311, sop: "P067", compounds: 11, isLocked: "NO" },
      { taskId: 12300, sop: "P067", compounds: 11, isLocked: "NO" },
    ],
    []
  );

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

export default TaskTable;
