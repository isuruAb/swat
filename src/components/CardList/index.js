import { Col, Row } from "react-bootstrap";
import Card from "./Card";
import PropTypes from "prop-types";
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

CardList.propTypes = {
  searchResult: PropTypes.array.isRequired
};

export default CardList;
