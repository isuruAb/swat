import { useMemo, useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import CardList from "../components/CardList";
import Header from "../components/Header";
import Navigator from "../components/Navigator";
import TextField from "../components/TextField";
import { fetchPhotos } from "../utils/api/fetchData";
import debounce from "lodash.debounce";
import Loader from "../components/Loader";

const Dashboard = () => {
  const [result, setResult] = useState([]);
  const [pageNo, setPageNo] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleNavigation = async (operator) => {
    if (operator === "increase") {
      setPageNo((number) => number + 1);
    } else {
      if (pageNo !== 1) {
        setPageNo((number) => number - 1);
      }
    }
  };

  const searchHandler = async (e) => {
    let value = e.target.value;
    setSearchTerm(value);
  };

  useEffect(() => {
    async function fetchData() {
      if (!searchTerm) {
        setResult([]);
      } else {
        setIsLoading(true);
        let response = await fetchPhotos({
          searchTerm: searchTerm,
          pageNo: pageNo,
          pageSize: 16
        });
        setIsLoading(response?.loading);
        setResult(response?.data);
      }
    }
    fetchData()
  }, [searchTerm, pageNo]);

  const debouncedSearchHandler = useMemo(()=>debounce(searchHandler, 1000), []);

  return (
    <>
      <Header />
      <Container>
        <TextField
          onChange={debouncedSearchHandler}
          type={"text"}
          placeholder={"Type something to search for images"}
        />
        {isLoading ? (
          <Loader />
        ) : (
          <div>
            <CardList searchResult={result} />
          </div>
        )}
        {!isLoading && result.length !== 0 && (
          <Navigator onClick={handleNavigation} pageNo={pageNo} />
        )}
      </Container>
    </>
  );
};

export default Dashboard;
