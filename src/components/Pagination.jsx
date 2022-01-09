import { Pagination as UiPagination } from "@mui/material";
import { observer } from "mobx-react-lite";
import React, { useState } from "react";

const Pagination = observer(({ meal }) => {
  const totalPages = Math.ceil(meal.totalCount / meal.numberOfMeals);
  const [page, setPage] = useState(1);

  const onPageChange = (_, value) => {
    meal.setOffset((value - 1) * meal.numberOfMeals);
    setPage(value);
  };

  return meal.meals?.length > 0 ? (
    <UiPagination page={page} onChange={onPageChange} variant="outlined" count={totalPages} />
  ) : null;
});

export default Pagination;
