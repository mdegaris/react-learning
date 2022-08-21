import React from "react";
import { AppProps, ServiceItem } from "../../../types";
import styles from "./CompoundCountTable.module.css";

interface CompoundCountTableProps extends AppProps {
  service: ServiceItem;
}

function CompoundCountTable(props: CompoundCountTableProps) {
  return (
    <div className={styles.table}>
      <div className={styles.thead}>
        <div className={styles.row}>
          <div className={styles.th}>
            {props.service.compounds} compounds receipted on{" "}
            {props.service.receiptDate}
          </div>
        </div>
        <div className={styles.row}>
          <div className={styles.th}>Delivered</div>
          <div className={styles.td}>{props.service.delivered}</div>
          <div className={styles.th}>Undelivered</div>
          <div className={styles.td}>{props.service.undelivered}</div>
        </div>
      </div>
    </div>
  );
}

export default CompoundCountTable;
