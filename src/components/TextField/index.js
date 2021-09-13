import { Form } from "react-bootstrap";

const TextField = ({ type, onChange, placeholder }) => {
  return (
    <Form.Control type={type} placeholder={placeholder} onChange={onChange} />
  );
};

export default TextField;
