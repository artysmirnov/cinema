import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"
const initialState = {
	isLoading: false,
	liked: false,
	error: "",
}

export const sendLike = createAsyncThunk("like", async (film_pk, thunkAPI) => {
	try {
		const response = await axios.request({
			method: "POST",
			headers: {
				Authorization: `Bearer ${localStorage.getItem("token")}`,
			},
			url: `http://127.0.0.1:8000/api/film/${film_pk}/like/`,
		})
		return response.data
	} catch (e) {
		return thunkAPI.rejectWithValue(e.response.data.errors)
	}
})
export const sendUnlike = createAsyncThunk(async (film_pk, thunkAPI) => {
	try {
		const response = await axios.request({
			method: "POST",
			headers: {
				Authorization: `Bearer ${localStorage.getItem("token")}`,
			},
			url: `http://127.0.0.1:8000/api/film/${film_pk}/unlike/`,
		})
		return response.data
	} catch (e) {
		return thunkAPI.rejectWithValue(e.response.data.errors)
	}
})

const likeSlice = createSlice({
	name: "like",
	reducers: {},
	initialState,
	extraReducers: builder => {
		builder
			.addCase(sendLike.fulfilled, state => {
				state.isLoading = false
				state.error = ""
				state.liked = true
			})
			.addCase(sendLike.pending, state => {
				state.isLoading = true
			})
			.addCase(sendLike.rejected, (state, action) => {
				state.isLoading = false
				state.liked = false
				state.error = action.payload
			})
			.addCase(sendUnlike.fulfilled, state => {
				state.isLoading = false
				state.error = ""
				state.liked = false
			})
			.addCase(sendUnlike.pending, state => {
				state.isLoading = true
			})
			.addCase(sendUnlike.rejected, (state, action) => {
				state.isLoading = false
				state.error = action.payload
				state.liked = true
			})
	},
})

export default likeSlice.reducer
