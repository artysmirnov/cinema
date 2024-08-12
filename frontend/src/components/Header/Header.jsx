import { Link } from "react-router-dom"
import "./header.scss"
import { FaSearch } from "react-icons/fa"
import { useEffect, useState } from "react"

const Header = () => {
	const user = localStorage.getItem("user")
	const [authenticated, setAuthenticated] = useState(false)
	useEffect(() => {
		if (user) {
			setAuthenticated(true)
		} else {
			setAuthenticated(false)
		}
	}, [user])
	return (
		<div className="header">
			<Link to={"/"}>
				<img src="logo-no-background.svg" />
			</Link>
			<Link to={"/catalog"}>Catalog</Link>
			<Link to={"/my"}>My</Link>
			<Link to={"/paid"}>Paid</Link>
			<FaSearch />

			{authenticated ? (
				<Link to={"/account"}>
					<img src="#" alt="user" />
				</Link>
			) : (
				<Link to={"/login"}>Sign up</Link>
			)}
		</div>
	)
}

export default Header
