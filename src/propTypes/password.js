import PropTypes from "prop-types";

export const password = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  clientId: PropTypes.string,
  clientName: PropTypes.string,
  clientColor: PropTypes.string,
  timestamp: PropTypes.string,
};
