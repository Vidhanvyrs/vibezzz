import React from "react";

export const Loading = () => {
  return (
    <div className="flex flex-col items-center justify-center flex-1">
      <i className="text-4xl text-slate-800 fa-solid fa-spinner animate-spin sm:text-5xl"></i>
    </div>
  );
};
