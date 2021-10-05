import React from "react";

const SmartInput = ({ disable = true, value, inputName, onChange }) => {
  if (disable) {
    return <span>{value}</span>;
  }

  return <input value={value} onChange={onChange} name={inputName} />;
};

export default SmartInput;
