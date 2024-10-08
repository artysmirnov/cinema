import "./single_film.scss"
import { Link } from "react-router-dom"

const SingleFilm = ({ movie }) => {
	return (
		<Link to={`movie/${movie.public_id}`}>
			<div className="single_film">
				<div className="single_film_center">
					<img
						className="single_film_photo"
						src={movie.photo}
						alt={movie.name}
					/>
				</div>
				<p>{movie.title}</p>
			</div>
		</Link>
	)
}

export default SingleFilm
