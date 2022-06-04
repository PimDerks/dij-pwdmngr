const Select = ({ id, label, value, options, onChange }) => {
  const onChangeEvent = (e) => {
    onChange(e);
  };

  console.log("select value", value);

  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <select id={id} value={value} onChange={onChangeEvent}>
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
