import { Button } from "react-bootstrap";

const Navigator = ({ onClick, pageNo }) => {
  return (
    <>
      <Button variant="primary" onClick={() => onClick("decrease")}>
        {"<"}
      </Button>
      {pageNo}
      <Button variant="primary" onClick={() => onClick("increase")}>
        {">"}
      </Button>
    </>
  );
};

export default Navigator;
