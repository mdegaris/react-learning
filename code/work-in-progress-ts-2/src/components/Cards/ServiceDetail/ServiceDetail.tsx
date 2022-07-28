import React from "react";
import { AppProps, ServiceItem } from "../../../types";
import Card from "../../UI/Card";
import styles from "./ServiceDetail.module.css";

interface ServiceDetailsProps extends AppProps {
  service: ServiceItem;
}

const ServiceDetail = (props: ServiceDetailsProps) => {
  return (
    <div className={styles.container}>
      <Card>ServiceDetail</Card>
    </div>
  );
};

export default ServiceDetail;
