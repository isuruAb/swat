import { Button } from "react-bootstrap";
import PropTypes from "prop-types";
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

Navigator.propTypes = {
  onClick: PropTypes.func.isRequired,
  pageNo: PropTypes.number.isRequired
};

export default Navigator;
