import React from "react";
import "./Input.css";

const Input = ({
  value,
  onChangeHandler,
  placeholder,
  type,
  onKeyDown = () => {}
}) => (
  <input
    type={type}
    value={value}
    onChange={onChangeHandler}
    placeholder={placeholder}
    onKeyDown={onKeyDown}
  />
);

export default Input;
