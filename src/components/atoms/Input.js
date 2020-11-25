import React from "react";

export const Input = ({ type, fieldRef, name }) => (
  <input type={type} ref={fieldRef} name={name} id={name} />
);
