import { Link } from "react-router-dom"
import { useState } from "react"
const Login = () => {
	const [email, setEmail] = useState("")
	const [password, setPassword] = useState("")
	return (
		<div className="login">
			<form action="">
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
