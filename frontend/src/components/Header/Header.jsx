import { Link } from "react-router-dom"
import "./header.scss"

const Header = () => {
	return (
		<div className="header">
			<p>logo</p>
			<Link to={"/"}>Main</Link>
			<Link to={"/catalog"}>Catalog</Link>
			<Link to={"/my"}>My</Link>
			<Link to={"/paid"}>Paid</Link>
			<p href="">Search</p>
			<Link to={"/register"}>
				<img src="#" alt="user" />
			</Link>
		</div>
	)
}

export default Header
