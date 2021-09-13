import { Spinner } from "react-bootstrap";
import styles from "./index.module.scss";

const Loader = () => (
  <div className={styles.spinnerWrapper}>
    <Spinner animation="grow"></Spinner>
  </div>
);

export default Loader;
