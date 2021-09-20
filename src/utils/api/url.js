/**
 * Concatenates the URL params
 * @param {Object} params // parameter object
 * @returns // string made by concatenated params
 */
export const getUrlParams = (params) => {
  let urlParams = (params = new URLSearchParams(params));
  return "?" + urlParams;
};
