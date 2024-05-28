import { Link } from "react-router-dom"

const Login = () => {
	return (
		<div className="login">
			<form action="">
				<h2>Login</h2>
				<p>Enter email</p>
				<input type="text" placeholder="email" />
				<p>Enter password</p>
				<input type="password" placeholder="password" />
				<input type="submit" />
			</form>
			<Link to={"/register"}>Don`t have account</Link>
		</div>
	)
}

export default Login
