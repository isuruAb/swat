import { Container } from "react-bootstrap";
import CardList from "../components/CardList";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Navigator from "../components/Navigator";
import TextField from "../components/TextField";

const Dashboard = () => {
  return (
    <>
      <Header />
      <Container>
        <TextField
          type={"text"}
          placeholder={"Type something to search for images"}
        />
        <div>
          <CardList />
        </div>
        <Navigator />
      </Container>
    </>
  );
};

export default Dashboard;
