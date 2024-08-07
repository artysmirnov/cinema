import "./single_film.scss"
import { Link } from "react-router-dom"

const SingleFilm = ({ key, name, photo }) => {
	console.log(photo)
	return (
		<Link to={"movie/:id"}>
			<div className="single_film">
				<img className="single_film_photo" src={photo} alt={name} />
				<p>{name}</p>
			</div>
		</Link>
	)
}

export default SingleFilm
