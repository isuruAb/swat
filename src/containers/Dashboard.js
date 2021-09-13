import { Container } from "react-bootstrap";
import CardList from "../components/CardList";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Navigator from "../components/Navigator";

const Dashboard = () => {
  return (
    <>
      <Header />
      <Container>
        <div>
          <Navigator />
          <CardList />
        </div>
      </Container>
      <Footer />
    </>
  );
};

export default Dashboard;
