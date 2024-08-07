import "./single_film.scss"
import { Link } from "react-router-dom"
import { fetchMovie } from "../../Store/SingleSlice"
import { useDispatch } from "react-redux"

const SingleFilm = ({ movie }) => {
	const dispatch = useDispatch()
	return (
		<Link
			onClick={() => {
				dispatch(fetchMovie(movie.public_id))
			}}
			to={`movie/${movie.public_id}`}
		>
			<div className="single_film">
				<img className="single_film_photo" src={movie.photo} alt={movie.name} />
				<p>{name}</p>
			</div>
		</Link>
	)
}

export default SingleFilm
