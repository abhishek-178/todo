import React from "react";

function VisibilityFilters({ setStatus }) {
  const statusHandler = (e) => {
    setStatus(e.target.innerHTML);
  };
  return (
    <div>
      <span key="All" onClick={statusHandler} value="All">
        All
      </span>{" "}
      ||
      <span key="Completed" value="Completed" onClick={statusHandler}>
        Completed
      </span>{" "}
      ||
      <span key="Uncompleted" value="Uncompleted" onClick={statusHandler}>
        Uncompleted
      </span>
    </div>
  );
}

export default VisibilityFilters;
