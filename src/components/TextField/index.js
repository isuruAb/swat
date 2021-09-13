import { Form } from "react-bootstrap";
import PropTypes from "prop-types";

const TextField = ({ type, onChange, placeholder }) => {
  return (
    <Form.Control type={type} placeholder={placeholder} onChange={onChange} />
  );
};

TextField.propTypes = {
  type: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string.isRequired
};

export default TextField;
