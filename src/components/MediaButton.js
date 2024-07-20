import { Button } from "reactstrap";

const MediaButton = ({ href, icon }) => {
	return (
		<>
			<Button type='text' className='btn media' href={ href }>
				<i className={ icon }></i>
			</Button>
		</>
	)
}

export default MediaButton;