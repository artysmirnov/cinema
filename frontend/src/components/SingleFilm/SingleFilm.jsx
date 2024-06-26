import "./single_film.scss"

const SingleFilm = ({ name, photo }) => {
	console.log(photo)
	return (
		<div className="single_film">
			<img className="single_film_photo" src={photo} alt={name} />
			<p>{name}</p>
		</div>
	)
}

export default SingleFilm
