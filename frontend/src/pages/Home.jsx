import { useEffect, useState } from "react"
import SingleFilm from "../components/SingleFilm"
const Home = () => {
	const [films, setFilms] = useState([])
	const [loading, setLoading] = useState(true)
	async function fetchFilms(set) {
		try {
			const data = await fetch("http://127.0.0.1:8000/api/film/")
			const results = await data.json()
			set(results.results)
			setLoading(false)
		} catch (e) {
			console.log(e)
		}
	}
	useEffect(() => {
		fetchFilms(setFilms)
	}, [])
	console.log(films[0])
	return (
		<div>
			<p>Home is here</p>
			<div className="films-container">
				{loading ? (
					<p>loading...</p>
				) : (
					films.map(film => {
						;<SingleFilm key={film.id} results={film} />
					})
				)}
			</div>
		</div>
	)
}

export default Home
