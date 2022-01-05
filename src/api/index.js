import axios from "axios";

export const API_URL = "https://api.spoonacular.com";
export const API_SEARCH_URL = `${API_URL}/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}`;

export const $host = axios.create({
  baseURL: API_URL,
});
