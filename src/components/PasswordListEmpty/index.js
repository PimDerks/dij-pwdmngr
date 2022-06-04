import PropTypes from "prop-types";

const PasswordListEmpty = ({ msg }) => {
  return <p>{msg}</p>;
};

PasswordListEmpty.defaultProps = {
  msg: "Please add passwords.",
};

PasswordListEmpty.propTypes = {
  msg: PropTypes.string.isRequired,
};

export default PasswordListEmpty;
