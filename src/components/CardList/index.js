import { Col, Row } from "react-bootstrap";
import Card from "./Card";
import styles from "./index.module.scss";

const CardList = ({ searchResult }) => {
  return (
    <>
      <Row className={styles.rowWrapper}>
        {searchResult.map((data) => {
          return (
            <Col md={3} className={styles.colWrapper} key={data?.id}>
              <Card image={data} />
            </Col>
          );
        })}
      </Row>
    </>
  );
};

export default CardList;
