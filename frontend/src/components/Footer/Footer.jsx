import { Link } from "react-router-dom"
import "./footer.scss"
import { FaTelegramPlane } from "react-icons/fa"
import { FaGithub } from "react-icons/fa"

const Footer = () => {
	return (
		<div className="footer">
			<p>@WatchArtCinema</p>
			<div className="links">
				<Link to={"/news"}>News</Link>
			</div>
			<div className="icons">
				<Link to={"https://t.me/artysmirnov"}>
					<FaTelegramPlane />
				</Link>
				<Link to={"https://github.com/artysmirnov/cinema"}>
					<FaGithub />
				</Link>
			</div>
		</div>
	)
}

export default Footer
