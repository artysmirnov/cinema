import "./account.scss"
import { Link } from "react-router-dom"
const Account = () => {
	return (
		<div className="account">
			<Link
				onClick={() => {
					localStorage.removeItem("refresh")
					localStorage.removeItem("user")
					localStorage.removeItem("token")
				}}
				to={"/login"}
			>
				Выйти
			</Link>
		</div>
	)
}

export default Account
