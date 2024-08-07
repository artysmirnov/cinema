import { configureStore } from "@reduxjs/toolkit"
import userReducer from "./UserSlice"
import moviesSlice from "./MoviesSlice"

export const store = configureStore({
	reducer: {
		user: userReducer,
		movies: moviesSlice,
	},
})
