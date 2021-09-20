import Card from "react-bootstrap/Card";
import PropTypes from "prop-types";
import styles from "./index.module.scss";

const ImageCard = ({ image }) => {
  return (
    <Card className={styles.cardWrapper}>
      <a href={image?.links?.html} target="_blank" rel="noreferrer">
        <div className={styles.imageWrapper}>
          <Card.Img
            src={image?.urls?.thumb}
            alt={image?.alt_description}
            className={styles.image}
          />
        </div>
      </a>

      <Card.Body>
        <Card.Title>{image?.user?.name}</Card.Title>
        <Card.Text>{image?.user?.bio}</Card.Text>
      </Card.Body>
    </Card>
  );
};

ImageCard.propTypes = {
  image: PropTypes.object.isRequired
};

export default ImageCard;
