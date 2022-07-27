import React, { ChangeEvent, useEffect, useState } from "react";
import { AppProps } from "../../../types";
import ServiceListTable from "../../Tables/ServiceListTable/ServiceListTable";
import Card from "../../UI/Card";
import styles from "./ServiceList.module.css";

type Props = AppProps;

const ServiceList = (props: Props) => {
  const [inputText, setInputText] = useState("");
  const [queryValue, setQueryValue] = useState("");

  useEffect(() => {
    const timeout = setTimeout(() => setQueryValue(inputText), 500);
    return () => clearTimeout(timeout);
  }, [inputText]);

  const filterChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setInputText(event.target.value);
  };

  return (
    <div className={styles.container}>
      <Card title="Work for May 2022">
        <div className={styles.content}>
          <div className={styles.filter}>
            <input
              type="search"
              placeholder="Filter, e.g. 694 stability rat"
              value={inputText}
              onChange={filterChangeHandler}
            />
          </div>
          <ServiceListTable queryValue={queryValue} />
        </div>
      </Card>
    </div>
  );
};

export default ServiceList;
