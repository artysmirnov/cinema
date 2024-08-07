import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"
import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import { fetchMovie } from "../../Store/SingleSlice"
import { FaRegHeart } from "react-icons/fa6"
import { FaHeart } from "react-icons/fa6"
import "./filmPage.scss"
import Stars from "./Stars"

const FilmPage = () => {
	const params = useParams()
	const dispatch = useDispatch()
	const isLoading = useSelector(state => state.movie.isLoading)
	const [liked, setLiked] = useState(false)

	const movie = useSelector(state => state.movie.movie)
	useEffect(() => {
		dispatch(fetchMovie(params.id))
	}, [])

	function clickHeart() {
		if (liked) {
			setLiked(false)
		} else {
			setLiked(true)
		}
	}

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
						<span
							className="HeartBox"
							onClick={() => {
								if (liked) {
									setLiked(false)
								} else {
									setLiked(true)
								}
							}}
						>
							{liked ? (
								<FaHeart className="heart" />
							) : (
								<FaRegHeart className="heart" />
							)}
						</span>
					</div>
					<Stars />
					<p>Описание: {movie.description}</p>
				</div>
			)}
		</div>
	)
}

export default FilmPage
