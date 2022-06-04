import { useState } from "react";

const Input = ({ id, label, placeholder, type, required, onChange }) => {
  const [value, setValue] = useState("");

  const onChangeEvent = (e) => {
    onChange();
    setValue(e.target.value);
  };

  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <input
        id={id}
        type={type ? type : "text"}
        value={value}
        required={required ? required : false}
        onChange={onChangeEvent}
        placeholder={placeholder}
      />
    </div>
  );
};

export default Input;
