import Card from "react-bootstrap/Card";
import styles from "./index.module.scss";

const ImageCard = ({ image }) => {
  return (
    <Card className={styles.cardWrapper}>
      <Card.Img
        src={image?.urls?.small}
        alt={image?.alt_description}
        className={styles.imageWrapper}
      />
    </Card>
  );
};

export default ImageCard;
