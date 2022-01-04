import { $host, API_SEARCH_URL } from ".";

export const getMealsByQuery = async (query, offset) => {
  const searchQuery = `${API_SEARCH_URL}${query}${offset ? `&offset=${offset}` : ""}`;

  return $host
    .get(searchQuery)
    .then((response) => {
      return response.data;
    })
    .catch((err) => {
      return err.message;
    });
};
