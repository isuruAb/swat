import PropTypes from "prop-types";
import { Alert } from "react-bootstrap";

const Error = ({ text }) => (
  <Alert variant={"danger"} className="m-auto text-center">
    {text}
  </Alert>
);

Error.propTypes = {
  text: PropTypes.string.isRequired
};

export default Error;
