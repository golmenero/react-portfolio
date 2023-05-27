import { Button } from "reactstrap";

const CustomButton = ({ href, icon, text, type }) => {
	return (
		<>
			<Button type={ type } className='btn full-width' href={ href }>
				<div className='btn-content'>
					<i className={ icon }></i>
					<span>{ text }</span>
				</div>
			</Button>
		
		</>
	)
}

export default CustomButton;