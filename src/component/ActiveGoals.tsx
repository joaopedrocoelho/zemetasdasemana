import React from "react";
import Goal from "./Goal";
import AdminBtns from "./AdminBtns";

const ActiveGoals = () => {
  return (
    <>
      <Goal title="Oi" points={40} worth={20} id="test" />
      <AdminBtns />
    </>
  );
};

export default ActiveGoals;
