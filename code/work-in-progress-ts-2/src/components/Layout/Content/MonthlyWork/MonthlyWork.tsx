import React, { useCallback, useEffect, useState } from "react";
import WorkFilter from "../../../Cards/WorkFilter";
import ServiceList from "../../../Cards/ServiceList";
import ServiceDetail from "../../../Cards/SelectedServiceDetail";
import styles from "./MonthlyWork.module.css";
// import Header from "./Header";
import { ServiceItem } from "../../../../types";
import { useAppSelector } from "../../../../store/hooks";
import hash from "object-hash";

type Props = {};

const MonthlyWork = (props: Props) => {
  const { isLoading, serviceList } = useAppSelector(
    (state) => state.serviceList
  );

  const [selectedService, setSelectedService] = useState<ServiceItem>();

  const selectServiceHandler = (service: ServiceItem) => {
    setSelectedService(service);
  };

  const postLoadServiceSelect = useCallback(() => {
    console.log("postLoadServiceSelect");

    // Select first service in the list if none selected.
    if (selectedService == null && serviceList.length > 0) {
      setSelectedService(serviceList[0]);
    } else {
      // Refresh selected service data after loading of the service list.
      const filteredServices = serviceList.filter(
        (s) => selectedService?.id === s.id
      );

      if (filteredServices.length === 1 && selectedService) {
        if (hash(selectedService) !== hash(filteredServices[0])) {
          console.log("update selected");
          setSelectedService(filteredServices[0]);
        }
      }
    }
  }, [serviceList, selectedService]);

  useEffect(() => {
    if (!isLoading) {
      postLoadServiceSelect();
    }
  }, [isLoading, postLoadServiceSelect]);

  return (
    <React.Fragment>
      <div className={styles.container}>
        <WorkFilter />
        <ServiceList
          serviceList={serviceList}
          selectService={selectServiceHandler}
          selectedService={selectedService}
          isLoading={isLoading}
        />
        <ServiceDetail service={selectedService} isLoading={isLoading} />
      </div>
    </React.Fragment>
  );
};

export default MonthlyWork;
