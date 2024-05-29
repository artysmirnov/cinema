import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"

const initialState = {
	currentUser: undefined,
	loading: false,
}

export const register = createAsyncThunk(
	"auth/register",
	async (userData, thunkAPI) => {
		try {
			const response = await axios.post(
				"http://127.0.0.1:8000/api/auth/register/",
				{
					email: userData.email,
					username: userData.username,
					password: userData.password,
				}
			)
			return response.data.user
		} catch (e) {
			return thunkAPI.rejectWithValue(e.response.data.errors)
		}
	}
)

const authSlice = createSlice({
	name: "auth",
	initialState,
	extraReducers: builder => {
		builder
			.addCase(register.pending, state => {
				state.loading = true
			})
			.addCase(register.fulfilled, (state, action) => {
				state.loading = false
				state.currentUser = action.payload
			})
			.addCase(register.rejected, state => {
				state.loading = false
			})
	},
})

export default authSlice.reducer
