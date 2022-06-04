import { useState } from "react";

const Select = ({ id, label, options, required, onChange }) => {
  const [value, setValue] = useState("");

  const onChangeEvent = (e) => {
    onChange();
    setValue(e.target.value);
  };

  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <select
        id={id}
        value={value}
        required={required ? required : false}
        onChange={onChangeEvent}
      >
        {options.map((o) => (
          <option key={o.value} value={o.value}>
            {o.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Select;
