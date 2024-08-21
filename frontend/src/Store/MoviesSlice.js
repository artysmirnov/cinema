/* eslint-disable no-extra-semi */
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"

export const fetchMovies = createAsyncThunk(
	"movies/fetchMovies",
	async (_, thunkAPI) => {
		try {
			const response = await axios.get("http://127.0.0.1:8000/api/film/")
			return response.data.results
		} catch (error) {
			return thunkAPI.rejectWithValue("Не удалось зазгрузить фильмы")
		}
	}
)

const initialState = {
	movies: [],
	isLoading: false,
	error: "",
}

export const moviesSlice = createSlice({
	name: "movies",
	initialState,
	reducers: {},
	extraReducers: builder => {
		builder
			.addCase(fetchMovies.fulfilled, (state, action) => {
				state.isLoading = false
				state.error = ""
				state.movies = action.payload
			})
			.addCase(fetchMovies.pending, state => {
				state.isLoading = true
			})
			.addCase(fetchMovies.rejected, (state, action) => {
				state.isLoading = false
				state.error = action.payload
			})
	},
})
export default moviesSlice.reducer
