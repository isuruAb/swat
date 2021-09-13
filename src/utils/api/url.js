/**
 * Concatenates the URL params
 * @param {Object} params // parameter object
 * @returns // string made by concatenated params
 */
export const getUrlParams = (params) => {
  let url = "?";
  const paramsArray = Object.keys(params);
  paramsArray.map((key, index) => {
    return (url =
      url +
      key +
      "=" +
      encodeURIComponent(params[key]) +
      (index === paramsArray.length - 1 ? "" : "&"));
  });
  return url;
};
