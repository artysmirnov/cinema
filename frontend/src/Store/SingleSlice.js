/* eslint-disable no-extra-semi */
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"

export const fetchMovie = createAsyncThunk(
	"movies/fetchMovie",
	async (id, thunkAPI) => {
		try {
			const response = await axios.get(`http://127.0.0.1:8000/api/film/${id}`)
			console.log(response.data)
			return response.data
		} catch (error) {
			return thunkAPI.rejectWithValue("Не удалось зазгрузить фильмы")
		}
	}
)

const initialState = {
	movie: "",
	isLoading: false,
	error: "",
}

export const singleSlice = createSlice({
	name: "movie",
	initialState,
	reducers: {},
	extraReducers: {
		[fetchMovie.fulfilled]: (state, action) => {
			state.isLoading = false
			state.error = ""
			state.movie = action.payload
		},
		[fetchMovie.pending]: state => {
			state.isLoading = true
		},
		[fetchMovie.rejected]: (state, action) => {
			state.isLoading = false
			state.error = action.payload
		},
	},
})
export default singleSlice.reducer
