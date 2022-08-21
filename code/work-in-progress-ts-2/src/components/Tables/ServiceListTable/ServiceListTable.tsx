import React, { useMemo } from "react";
import { useTable, Column, useFlexLayout, useBlockLayout } from "react-table";
import { AppProps, ServiceItem } from "../../../types";
import styles from "./ServiceListTable.module.css";

// ========================================================

interface ServiceListTableProps extends AppProps {
  isLoading: boolean;
  queryValue: string;
  serviceList: ServiceItem[];
  selectService: (s: ServiceItem) => void;
  selectedService?: ServiceItem;
}

// ========================================================

/**
 *
 * @param service Service to match.
 * @param query Space seperated list of query terms.
 * @returns True or False.
 */
const isServiceMatch = (service: ServiceItem, query: string) => {
  // Build array containing all searchable service properties.
  const haystackArray: string[] = [
    service.study +
      service.round +
      service.serviceCode +
      service.serviceName +
      service.supplementalId,
  ];

  const needlesArray = query
    .split(" ")
    .map((s) => s.trim().toLowerCase())
    .filter((s) => s.length > 0);

  if (needlesArray.length === 0) {
    return true;
  }

  // If all the query items match any service property.
  return needlesArray.every((v) =>
    haystackArray.some((s) => s.toLowerCase().includes(v))
  );
};

/**
 *
 * @param services List of service objects.
 * @param queryString Query used to filter the services.
 * @returns Returns List of service objects filtered using the query.
 */
const applyInteractiveFilter = (
  services: ServiceItem[],
  queryString: string
): ServiceItem[] => {
  return services.filter((service: ServiceItem) => {
    return isServiceMatch(service, queryString);
  });
};

// ========================================================

const ServiceListTable = (props: ServiceListTableProps) => {
  console.log("ServiceListTable");

  const handleServiceSelect = (selectedId: string) => {
    const foundService = props.serviceList.filter(
      (s: ServiceItem) => s.id === selectedId
    );
    props.selectService(foundService[0]);
  };

  const columns: Column<ServiceItem>[] = useMemo(
    () => [
      {
        Header: "Study",
        accessor: "study",
        width: "83",
        id: "col-study",
      },
      {
        Header: "Round",
        accessor: "round",
        width: "68",
        id: "col-round",
      },
      {
        Header: "Service",
        accessor: "serviceName",
        width: "200",
        id: "col-service",
      },
      {
        Header: "Arrived",
        accessor: "receiptDate",
        width: "105",
        id: "col-receipt",
      },
      {
        Header: "Deadline",
        accessor: "deadlineDate",
        width: "105",
        id: "col-deadline",
      },
      {
        Header: "Compounds",
        accessor: "compounds",
        width: "95",
        id: "col-compounds",
      },
      {
        Header: "Delivered",
        accessor: "delivered",
        width: "95",
        id: "col-delivered",
      },
    ],
    []
  );

  const data = useMemo(
    () => applyInteractiveFilter(props.serviceList, props.queryValue),
    [props.serviceList, props.queryValue]
  );

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable<ServiceItem>(
      {
        columns,
        data,
        getRowId: (row) => row.id,
      },
      useFlexLayout
    );

  const displayLoading = props.isLoading && props.serviceList.length === 0;

  // Render the UI for your table
  return (
    <React.Fragment>
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
            let rowStyle = styles.row;
            if (row.id === props.selectedService?.id) {
              rowStyle += " " + styles.selected;
            } else {
              rowStyle += " " + styles["not-selected"];
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
                      {cell.render("Cell")}
                    </div>
                  );
                })}
              </div>
            );
          })}
          {displayLoading && <div>Loading...</div>}
        </div>
      </div>
    </React.Fragment>
  );
};

export default ServiceListTable;
