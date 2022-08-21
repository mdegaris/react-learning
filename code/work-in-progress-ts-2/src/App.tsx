import React, { useEffect } from "react";
import Layout from "./components/Layout";
import { useAppDispatch, useAppSelector } from "./store/hooks";
import { fetchAllStudyOptions } from "./store/studyOptions/actions";
import { fetchServiceList } from "./store/serviceList/actions";
import "./App.css";

function App() {
  const dispatch = useAppDispatch();
  const { month, year } = useAppSelector((state) => state.workFilter);

  useEffect(() => {
    dispatch(fetchAllStudyOptions());
  }, [dispatch]);

  useEffect(() => {
    dispatch(fetchServiceList({ month, year }));

    let interval = setInterval(() => {
      console.log("Periodically fetching data...");
      dispatch(fetchServiceList({ month, year }));
    }, 100000);

    return () => {
      clearInterval(interval);
    };
  }, [month, year, dispatch]);

  return <Layout />;
}

export default App;
