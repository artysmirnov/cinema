import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"
import { useParams } from "react-router-dom"
import { useEffect } from "react"
import { fetchMovie } from "../../Store/SingleSlice"
import "./filmPage.scss"

const FilmPage = () => {
	const params = useParams()
	const dispatch = useDispatch()
	const isLoading = useSelector(state => state.movie.isLoading)

	const movie = useSelector(state => state.movie.movie)
	useEffect(() => {
		dispatch(fetchMovie(params.id))
	}, [])

	return (
		<div className="filmPage">
			{isLoading ? (
				<p>loading</p>
			) : (
				<div>
					<div className="upperContent">
						<img
							className="single_film_photo"
							src={movie.photo}
							alt={movie.title}
						/>
						<div className="infoBlock">
							<h1>{movie.title}</h1>
							{movie.release_date && <p>Дата выхода: {movie.release_date}</p>}
							{movie.country && <p>Страна: {movie.country}</p>}
							{movie.age_limit && (
								<p>Возрастное ограничение: {movie.age_limit}</p>
							)}
							{movie.genre && (
								<p>
									Жанры:
									{" " + movie.genre.map(item => item.genre)}
								</p>
							)}
						</div>
					</div>
					<p>Описание: {movie.description}</p>
				</div>
			)}
		</div>
	)
}

export default FilmPage
