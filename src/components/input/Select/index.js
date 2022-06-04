const Select = ({ id, label, value, options, required, onChange }) => {
  const onChangeEvent = (e) => {
    onChange(e);
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
