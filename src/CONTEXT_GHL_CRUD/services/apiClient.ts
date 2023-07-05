import axios, { CanceledError } from "axios";

// const apiClient = axios.create({
//   baseURL: "http://localhost:3500",
//   headers: {},
// });

const apiKey = process.env.REACT_APP_GHL_API_KEY;

const apiClient = axios.create({
  baseURL: "https://rest.gohighlevel.com",
  headers: { Authorization: `Bearer ${apiKey}` },
});

export default apiClient;
export { CanceledError };
