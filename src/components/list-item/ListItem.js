import React from "react";
import "./ListItem.css";

const ListItem = ({
  children,
  completed,
  checkboxHandler,
  showCheckbox = true
}) => (
  <div className={`list__item ${completed && "completed"}`}>
    {showCheckbox && (
      <div className="checkbox" onClick={checkboxHandler}>
        {completed && <span>&#x2714;</span>}
      </div>
    )}
    {children}
  </div>
);

export default ListItem;
