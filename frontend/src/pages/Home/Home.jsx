import { useEffect } from "react"
import SingleFilm from "../../components/SingleFilm/SingleFilm"
import { fetchMovies } from "../../Store/MoviesSlice"
import { useDispatch, useSelector } from "react-redux"
import "./home.scss"
const Home = () => {
	const dispatch = useDispatch()
	const movies = useSelector(state => state.movies.movies)
	const isLoading = useSelector(state => state.movies.isLoading)

	useEffect(() => {
		dispatch(fetchMovies())
	}, [])

	return (
		<div className="home">
			<div className="film-group">
				<p>Новые фильмы</p>
				<div className="film-row">
					{isLoading ? (
						<div>loading</div>
					) : (
						movies.map(movie => (
							<SingleFilm key={movie.public_id} movie={movie} />
						))
					)}
				</div>
			</div>
		</div>
	)
}

export default Home
