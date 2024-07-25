import { createSlice } from "@reduxjs/toolkit";

export const genreOrCategory = createSlice({
  name: "genreOrCategory",
  initialState: {
    genreOrCategoryName: "",
    page: 1,
    search: "",
  },
  reducers: {
    selectedGenreOrCategory: (state, action) => {
      state.genreOrCategoryName = action.payload;
      state.search = "";
     
     
      // console.log("Features",action.payload);
    },
    searchMovie: (state, action) => {
      state.search = action.payload;
    
      console.log("Search", action.payload);
    },
  },
});

export const { selectedGenreOrCategory, searchMovie } = genreOrCategory.actions;
export default genreOrCategory.reducer;
