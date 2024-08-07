/* eslint-disable no-extra-semi */
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"

export const fetchMovies = createAsyncThunk("movies/fetchMovies", async () => {
	const response = await fetch("http://127.0.0.1:8000/api/film/")
	const data = await response.json()
	return data
})

export const moviesSlice = createSlice({
	name: "movies",
	initialState: {
		movies: [],
		status: "idle",
	},
	reducers: {},
	extraReducers: builder => {
		builder.addCase(fetchMovies.pending, (state, action) => {
			state.status = "idle"
			state.movies = action.payload
		})
	},
})
export default moviesSlice.reducer
