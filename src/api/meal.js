import { $host, API_SEARCH_URL } from ".";

export const getMealsByQuery = async (query, offset, options = {}) => {
  let searchQuery = `${API_SEARCH_URL}${query ? `${query}` : ""}${
    offset ? `&offset=${offset}` : ""
  }`;

  if (options.numberOfMeals) {
    searchQuery += `&number=${options.numberOfMeals}`;
  }

  if (options.sortOption) {
    searchQuery += `&sort=${options.sortOption}`;
  }

  if (options.cuisine) {
    searchQuery += `&cuisine=${options.cuisine}`;
  }

  if (options.type) {
    searchQuery += `&type=${options.type}`;
  }

  console.log(searchQuery);

  return $host
    .get(searchQuery)
    .then((response) => {
      return response.data;
    })
    .catch((err) => {
      return err.message;
    });
};
