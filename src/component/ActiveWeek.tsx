import React, { useEffect } from "react";
import Header from "./Header";
import ProgressBar from "./ProgressBar";
import { useCollection, useDocument } from "react-firebase-hooks/firestore";
import { collection, doc } from "firebase/firestore";
import { db } from "@/firebase/firebase";

const ActiveWeek = () => {
  const [value, loading, error] = useDocument(doc(db, "activeWeek", "semanal"));

  useEffect(() => {
    console.log(value?.data());
  }, [value]);

  return (
    <>
      {error && <strong>Error: {JSON.stringify(error)}</strong>}
      {loading && <span>Carregando meta da semana...</span>}
      {value && (
        <>
          <Header
            award={value.data()?.award}
            updatedAt={value.data()?.updatedAt}
            deadline={value.data()?.deadline}
          />
          <ProgressBar
            currentPoints={value.data()?.currentPoints}
            targetPoints={value.data()?.targetPoints}
          />
        </>
      )}
    </>
  );
};

export default ActiveWeek;
