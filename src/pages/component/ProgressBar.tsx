import React from "react";
import Button from "./Button";

const ProgressBar = () => {
  return (
    <div className="flex flex-col w-full justify-center items-center gap-4 mb-10">
      <h3 className="font-semibold text-xl">20 / 100 pontos</h3>
      <div className="w-full flex h-11 bg-slate-100 rounded-full  p-1 overflow-clip">
        <div className="bg-blue-400 w-1/2 rounded-full "></div>
      </div>
      {/* parte de admin */}
      <Button color="amber" onClick={() => {}} label="Editar pontos" />
    </div>
  );
};

export default ProgressBar;
