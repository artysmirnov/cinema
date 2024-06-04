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
	console.log(films)
	return (
		<div>
			<p>Home is here, welcome</p>
			{loading ? (
				<div>loading</div>
			) : (
				films.map(film => (
					<SingleFilm
						key={film.public_id}
						name={film.title}
						photo={film.photo}
					/>
				))
			)}
		</div>
	)
}

export default Home
