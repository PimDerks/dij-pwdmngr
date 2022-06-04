import PropTypes from "prop-types";
const Button = ({ label, type, onClick }) => {
  const onClickEvent = (e) => {
    if (onClick) {
      onClick(e);
    }
  };

  return (
    <button type={type} onClick={onClickEvent}>
      {label}
    </button>
  );
};

Button.defaultProps = {
  type: "button",
};

Button.propTypes = {
  type: PropTypes.oneOf(["button", "submit"]),
  onClick: PropTypes.func,
  label: PropTypes.string.isRequired,
};

export default Button;
