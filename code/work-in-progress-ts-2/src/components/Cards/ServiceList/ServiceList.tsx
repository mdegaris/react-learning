import React, { ChangeEvent, useEffect, useState } from "react";
import { useAppSelector } from "../../../store/hooks";
import { AppProps } from "../../../types";
import ServiceListTable from "../../Tables/ServiceListTable/ServiceListTable";
import Card from "../../UI/Card";
import styles from "./ServiceList.module.css";

type Props = AppProps;

const ServiceList = (props: Props) => {
  const { month, year } = useAppSelector((state) => state.workFilter);

  const [inputText, setInputText] = useState("");
  const [queryValue, setQueryValue] = useState("");

  useEffect(() => {
    const timeout = setTimeout(() => setQueryValue(inputText), 500);
    return () => clearTimeout(timeout);
  }, [inputText]);

  const filterChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setInputText(event.target.value);
  };

  const title: string = "Work for " + month + " " + year;

  return (
    <div className={styles.container}>
      <Card title={title}>
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
