import React, { useEffect } from "react";
import Header from "./Header";
import ProgressBar from "./ProgressBar";
import { useCollection, useDocument } from "react-firebase-hooks/firestore";
import { collection, doc } from "firebase/firestore";
import { db, updateDates } from "@/firebase/firebase";

function updateDeadline(deadline: number, updatedAt: number) {
  const currentTime = Date.now(); // get the current time in milliseconds
  const currentDay = new Date(currentTime).getDay(); // 0 for Sunday, 1 for Monday, ..., 6 for Saturday

  // Check if deadline is passed
  if (currentTime > deadline) {
    // Update updatedAt to the first minute of the last Sunday before current time
    let lastSunday = new Date();
    lastSunday.setDate(lastSunday.getDate() - (lastSunday.getDay() % 7));

    console.log(lastSunday.toDateString());
    // set to the first minute (00:01:00) of the day
    updatedAt = lastSunday.getTime() / 1000; // convert back to Unix timestamp
    console.log(updatedAt);
    // Update deadline to the first minute of the next Sunday
    const nextSunday = new Date(
      currentTime + (7 - currentDay) * 24 * 60 * 60 * 1000
    );
    nextSunday.setHours(0, 1, 0, 0); // set to the first minute (00:01:00) of the day
    deadline = nextSunday.getTime() / 1000; // convert back to Unix timestamp
  }

  return { deadline, updatedAt };
}

const handleUpdateDates = async (deadline: number, updatedAt: number) => {
  try {
    await updateDates(deadline, updatedAt);
  } catch (error) {
    console.log(error);
  }
};

const ActiveWeek = () => {
  const [value, loading, error] = useDocument(doc(db, "activeWeek", "semanal"));

  useEffect(() => {
    console.log(value?.data());
    const currentTime = Date.now();
    if (currentTime > value?.data()?.deadline) {
      console.log("updating deadline");
      const { deadline, updatedAt } = updateDeadline(
        value?.data()?.deadline,
        value?.data()?.updatedAt
      );
      handleUpdateDates(deadline, updatedAt);
    }
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
