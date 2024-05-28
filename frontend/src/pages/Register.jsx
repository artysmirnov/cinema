import { Link } from "react-router-dom"

const Register = () => {
	return (
		<div className="registration">
			<form action="">
				<h2>Registration</h2>
				<p>Enter email</p>
				<input type="text" placeholder="email" />
				<p>Enter password</p>
				<input type="password" placeholder="password" />
				<p>Enter password again</p>
				<input type="password" placeholder="password" />
				<input type="submit" />
			</form>
			<Link to={"/login"}>Already have account</Link>
		</div>
	)
}

export default Register
