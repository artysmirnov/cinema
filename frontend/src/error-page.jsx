import { useRouteError } from "react-router-dom"
import Header from "./components/Header/Header"
import { Link } from "react-router-dom"

export default function ErrorPage() {
	const error = useRouteError()
	console.error(error)

	return (
		<div id="error-page">
			<Header />
			<h1>Такой страницы не существует</h1>
			<Link to={"/"}>Перейти на главную</Link>
		</div>
	)
}
