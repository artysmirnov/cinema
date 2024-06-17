import "./single_film_photo.scss"

const SingleFilm = ({ name, photo }) => {
	console.log(photo)
	return (
		<div>
			<p>{name}</p>
			<img className="single_film_photo" src={photo} alt={name} />
		</div>
	)
}

export default SingleFilm
