import PropTypes from "prop-types";

const Input = ({ id, value, label, placeholder, type, required, onChange }) => {
  const onChangeEvent = (e) => {
    onChange(e);
  };

  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <input
        id={id}
        type={type}
        value={value}
        required={required}
        onChange={onChangeEvent}
        placeholder={placeholder}
      />
    </div>
  );
};

Input.defaultProps = {
  type: "text",
  required: false,
};

Input.propTypes = {
  id: PropTypes.string.isRequired,
  value: PropTypes.string,
  type: PropTypes.oneOf(["text", "email", "number"]).isRequired,
  placeholder: PropTypes.string,
  required: PropTypes.bool,
  onChange: PropTypes.func,
};

export default Input;
