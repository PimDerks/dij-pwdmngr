import PropTypes from "prop-types";
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
        required={required}
        onChange={onChangeEvent}
      />
      <button type="button" onClick={onClickPasswordToggle} aria-controls={id}>
        {showPassword ? "Hide passworld" : "Show password"}
      </button>
    </div>
  );
};

PasswordInput.defaultProps = {
  required: false,
};

PasswordInput.propTypes = {
  id: PropTypes.string.isRequired,
  value: PropTypes.string,
  placeholder: PropTypes.string,
  required: PropTypes.bool,
  onChange: PropTypes.func,
};

export default PasswordInput;
