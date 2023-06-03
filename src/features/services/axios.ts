import axios from "axios";

const baseURL = "https://rental-wife.herokuapp.com/";

export const api = axios.create({
  baseURL: baseURL,
  timeout: 5000,
});
