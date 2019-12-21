import React from "react";

import "./List.css";

const List = ({ children }) => {
  return (
    <div className="list">
      <ul>{children}</ul>
    </div>
  );
};

export default List;
