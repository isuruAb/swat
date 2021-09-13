import { Button } from "react-bootstrap";
import styles from "./index.module.scss";

const Navigator = ({ onClick, pageNo }) => {
  return (
    <div className={styles.navigationWrapper}>
      <Button variant="primary" onClick={() => onClick("decrease")}>
        {"<"}
      </Button>
      <span>{pageNo}</span>
      <Button variant="primary" onClick={() => onClick("increase")}>
        {">"}
      </Button>
    </div>
  );
};

export default Navigator;
