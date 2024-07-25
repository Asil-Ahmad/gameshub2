import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const rawgApiKey = "6318edf22fb84549b1ca50a74582e9ca";
//https://api.themoviedb.org/3/movie/popular?language=en-US&page=1

export const rawgApi = createApi({
  reducerPath: "rawApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://api.rawg.io/api" }),
  endpoints: (builder) => ({
    //GET GAMES
    getGames: builder.query({
      query: ({ genreOrCategoryName, page, search }) => {
        
        if (search) {
          return `/search?search=${search}&page=${page}&key=${rawgApiKey}`;
        }

        if (genreOrCategoryName && typeof genreOrCategoryName === "string") {
          return `/games?genres=${genreOrCategoryName}&page=${page}&key=${rawgApiKey}`;
        }

        if (genreOrCategoryName && typeof genreOrCategoryName === "number") {
          return `/games?genres=${genreOrCategoryName}&page=${page}&key=${rawgApiKey}`;
        }
        //&page=2
        return `/games?key=${rawgApiKey}&page=${page}`;
      },
    }),

    //GET GAMES DETAILS BY ID
    getGame: builder.query({
      query: (id) => {
        return `/games/${id}?key=${rawgApiKey}`;
      },
    }),

    //GET GAMES BY GENRE
    getGameGenre: builder.query({
      query: () => {
        return `/genres?key=${rawgApiKey}`;
      },
    }),

    //GET GAMES BY GENRE
    getGameGenreByID: builder.query({
      query: (id) => {
        return `/genres/${id}?key=${rawgApiKey}`;
      },
    }),

    getGamesScreenshot: builder.query({
      query: (id) => {
        return `/games/${id}/screenshots?key=${rawgApiKey}`;
      },
    }),

  }),
});

export const {
  useGetGamesQuery,
  useGetGameQuery,
  useGetGameGenreQuery,
  useGetGameGenreByIDQuery,
  useGetGamesScreenshotQuery
} = rawgApi;
//https://api.rawg.io/api/games/{id}/movies
