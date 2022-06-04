const Input = ({ id, value, label, placeholder, type, required, onChange }) => {
  const onChangeEvent = (e) => {
    onChange(e);
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
