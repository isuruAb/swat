import { getUrlParams } from "./url";

export const fetchPhotos = async ({ searchTerm, pageNo, pageSize }) => {
  let clearData = [];

  try {
    const response = await fetch(
      process.env.REACT_APP_API_ENDPOINT +
        getUrlParams({
          query: searchTerm,
          page: pageNo,
          per_page: pageSize
        }),
      {
        headers: {
          Authorization: `Bearer ${process.env.REACT_APP_ACCESS_TOKEN}`
        }
      }
    );
    let jsonData = await response.json();
    if (jsonData.length) {
      return {
        loading: false,
        error: false,
        data: jsonData
      };
    } else {
      return {
        loading: false,
        error: "Ohho, Photos not available. Please try again!",
        data: []
      };
    }
  } catch (error) {
    console.error(error);
    return {
      loading: false,
      error: "Ohho, Photos not available. Please try again!",
      data: []
    };
  }
};
