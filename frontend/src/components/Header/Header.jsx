import { Link } from "react-router-dom"
import "./header.scss"

const Header = () => {
	const user = localStorage.getItem("token")
	return (
		<div className="header">
			<Link to={"/"}>
				<img src="logo-no-background.svg" />
			</Link>
			<Link to={"/catalog"}>Catalog</Link>
			<Link to={"/my"}>My</Link>
			<Link to={"/paid"}>Paid</Link>
			<p href="">Search</p>
			{user ? (
				<Link to={"/account"}>
					<img src="#" alt="user" />
				</Link>
			) : (
				<Link to={"/register"}>Sign up</Link>
			)}
		</div>
	)
}

export default Header
