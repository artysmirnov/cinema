import "./account.scss"
import { Link } from "react-router-dom"
const Account = () => {
	const userInfo = JSON.parse(localStorage.getItem("user"))
	return (
		<div className="account">
			<p>Ваш id: {userInfo.id}</p>
			<p>Username: {userInfo.username}</p>
			<p>Email: {userInfo.email}</p>
			<p>
				Account created: {Date(Date.parse(userInfo.created).toLocaleString())}
			</p>
			<p>bio: {userInfo.bio}</p>
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
