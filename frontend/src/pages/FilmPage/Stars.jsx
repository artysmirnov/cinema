import { Rating } from "@mui/material"
import { useState } from "react"
import Box from "@mui/material/Box"
const labels = {
	1: "1",
	2: "2",
	3: "3",
	4: "4",
	5: "5",
	6: "6",
	7: "7",
	8: "8",
	9: "9",
	10: "10",
}
function getLabelText(value) {
	return `${value} Star${value !== 1 ? "s" : ""}, ${labels[value]}`
}
const Stars = ({ rating }) => {
	const [value, setValue] = useState(rating)
	const [hover, setHover] = useState(-1)

	return (
		<div className="rating">
			<Rating
				className="stars"
				name="hover-feedback"
				value={value}
				getLabelText={getLabelText}
				onChange={(event, newValue) => {
					setValue(newValue)
				}}
				onChangeActive={(event, newHover) => {
					setHover(newHover)
				}}
				max={10}
			/>
			{value !== null && (
				<Box className="box" sx={{ ml: 2 }}>
					{labels[hover !== -1 ? hover : value]}
				</Box>
			)}
		</div>
	)
}

export default Stars
