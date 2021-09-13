import { useState } from "react";
import { Container } from "react-bootstrap";
import CardList from "../components/CardList";
import Header from "../components/Header";
import Navigator from "../components/Navigator";
import TextField from "../components/TextField";
import { fetchPhotos } from "../utils/api/fetchData";

const Dashboard = () => {
  const [result, setResult] = useState([]);
  const handleSearch = async (e) => {
    let response = await fetchPhotos({
      searchTerm: e.target.value,
      pageNo: 1,
      pageSize: 16
    });
    setResult(response?.data);
  };
  return (
    <>
      <Header />
      <Container>
        <TextField
          onChange={handleSearch}
          type={"text"}
          placeholder={"Type something to search for images"}
        />
        <div>
          <CardList searchResult={result} />
        </div>
        <Navigator />
      </Container>
    </>
  );
};

export default Dashboard;
