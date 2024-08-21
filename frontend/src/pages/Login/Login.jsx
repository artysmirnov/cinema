import { Link, useNavigate } from "react-router-dom"
import { useState } from "react"
import { login } from "../../Store/UserSlice"
import { useDispatch } from "react-redux"
import "./login.scss"

const Login = () => {
	const dispatch = useDispatch()
	const navigate = useNavigate()

	const [email, setEmail] = useState("")
	const [password, setPassword] = useState("")

	const onSubmit = e => {
		e.preventDefault()
		dispatch(
			login({
				email,
				password,
			})
		).then(action => {
			localStorage.setItem("refresh", action.payload.refresh)
			localStorage.setItem("token", action.payload.access)
			localStorage.setItem("user", JSON.stringify(action.payload.user))
			navigate("/")
		})
	}

	return (
		<div className="login">
			<form onSubmit={onSubmit}>
				<h2>Login</h2>
				<label>Enter email</label>
				<input
					type="email"
					placeholder="email"
					value={email}
					onChange={e => setEmail(e.target.value)}
				/>
				<label>Enter password</label>
				<input
					type="password"
					placeholder="password"
					value={password}
					onChange={e => setPassword(e.target.value)}
				/>
				<button type="submit">Login</button>
			</form>
			<Link to={"/register"}>Don`t have account</Link>
		</div>
	)
}

export default Login
