import Input from "../input/Input";

const Filter = ({ value, onChange }) => {
  const onChangeEvent = (e) => {
    if (onChange) {
      onChange(e.target.value);
    }
  };

  return (
    <div>
      <Input
        label="filter"
        id="filter"
        value={value}
        onChange={onChangeEvent}
      />
    </div>
  );
};

export default Filter;
