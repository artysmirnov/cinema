import { configureStore } from "@reduxjs/toolkit"
import userReducer from "./UserSlice"
import moviesReducer from "./MoviesSlice"
import singleReducer from "./SingleSlice"
import likeReducer from "./LikeSlice"

export const store = configureStore({
	reducer: {
		user: userReducer,
		movies: moviesReducer,
		movie: singleReducer,
		like: likeReducer,
	},
})
