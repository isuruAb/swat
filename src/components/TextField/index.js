import { Form } from "react-bootstrap";

const TextField = ({ type, placeholder }) => {
  return <Form.Control type={type} placeholder={placeholder} />;
};

export default TextField;
