import { useState } from "react"
import { useDispatch } from "react-redux"
import { Link } from "react-router-dom"
import { register } from "../Store/UserSlice"

const Register = () => {
	const dispatch = useDispatch()

	// states
	const [email, setEmail] = useState("")
	const [username, setUsername] = useState("")
	const [password, setPassword] = useState("")
	const [secondPassword, setSecondPassword] = useState("")

	const onSubmit = e => {
		e.preventDefault()
		console.log("register", username, password, email)
		dispatch(register({ email, username, password }))
	}

	return (
		<div className="registration">
			<form onSubmit={onSubmit}>
				<h2>Registration</h2>
				<label>Enter email</label>
				<input
					type="text"
					placeholder="email"
					value={email}
					onChange={e => setEmail(e.target.value)}
				/>
				<label>Enter username</label>
				<input
					type="text"
					placeholder="username"
					value={username}
					onChange={e => setUsername(e.target.value)}
				/>
				<label>Enter password</label>
				<input
					type="password"
					placeholder="password"
					value={password}
					onChange={e => setPassword(e.target.value)}
				/>
				<label>Enter password again</label>
				<input
					type="password"
					placeholder="password"
					value={secondPassword}
					onChange={e => setSecondPassword(e.target.value)}
				/>
				<input type="submit" />
			</form>
			<Link to={"/login"}>Already have account</Link>
		</div>
	)
}

export default Register
