import PropTypes from "prop-types";

const togglePropType = PropTypes.shape({
  register: PropTypes.func.isRequired,
  unregister: PropTypes.func.isRequired,
  isEnabled: PropTypes.func.isRequired,
});

export default togglePropType;
