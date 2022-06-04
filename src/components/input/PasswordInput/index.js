import { useState } from "react";

const PasswordInput = ({ id, label, required, onChange }) => {
  const [value, setValue] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const onChangeEvent = (e) => {
    onChange();
    setValue(e.target.value);
  };

  const onClickPasswordToggle = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <input
        id={id}
        type={showPassword ? "text" : "password"}
        value={value}
        required={required ? required : false}
        onChange={onChangeEvent}
      />
      <button type="button" onClick={onClickPasswordToggle}>
        {showPassword ? "Hide passworld" : "Show password"}
      </button>
    </div>
  );
};

export default PasswordInput;
