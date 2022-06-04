import { useState } from "react";

const PasswordInput = ({ id, label, value, required, onChange }) => {
  const [showPassword, setShowPassword] = useState(false);

  const onChangeEvent = (e) => {
    onChange(e);
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
