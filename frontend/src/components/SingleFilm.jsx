const SingleFilm = ({ name, photo }) => {
	console.log(photo)
	return (
		<div>
			<p>{name}</p>
			<img src={photo} alt={name} />
		</div>
	)
}

export default SingleFilm
