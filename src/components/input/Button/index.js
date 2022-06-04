const Button = ({ label, type, onClick }) => {
  const onClickEvent = (e) => {
    if (onClick) {
      onClick(e);
    }
  };

  return (
    <button type={type ? type : "button"} onClick={onClickEvent}>
      {label}
    </button>
  );
};

export default Button;
