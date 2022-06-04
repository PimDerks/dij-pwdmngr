const Button = ({ label, type, onClick }) => {
  const onClickEvent = (e) => {
    onClick();
    console.log("on click!");
  };

  return (
    <button type={type ? type : "button"} onClick={onClickEvent}>
      {label}
    </button>
  );
};

export default Button;
