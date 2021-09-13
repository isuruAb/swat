import Card from "react-bootstrap/Card";
import PropTypes from "prop-types";
import styles from "./index.module.scss";

const ImageCard = ({ image }) => {
  return (
    <a href={image?.links?.html} target="_blank" rel="noreferrer">
      <Card className={styles.cardWrapper}>
        <Card.Img
          src={image?.urls?.small}
          alt={image?.alt_description}
          className={styles.imageWrapper}
        />
      </Card>
    </a>
  );
};

ImageCard.propTypes = {
  image: PropTypes.object.isRequired
};

export default ImageCard;
