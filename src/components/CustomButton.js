import { Button } from "reactstrap";

const CustomButton = ({ href, icon, text, type }) => {
	return (
		<>
			<Button type={ type } className='btn full-width' href={ href }>
				<span className="btn-icon">
					<i className={ icon }></i>
				</span>
				<span className="btn-text">
					{ text }
				</span>
			</Button>
		
		</>
	)
}

export default CustomButton;