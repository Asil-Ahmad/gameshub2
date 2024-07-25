import { configureStore } from "@reduxjs/toolkit";
import { rawgApi } from "../services/RAWG";
import genreOrCategoryReducer from "../components/features/currentGenreOrCategory";

export default configureStore({
  reducer: {
    [rawgApi.reducerPath]: rawgApi.reducer,
    currentGenreOrCategory: genreOrCategoryReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(rawgApi.middleware),
});
