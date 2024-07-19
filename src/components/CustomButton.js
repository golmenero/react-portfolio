import { Button } from "reactstrap";

const CustomButton = ({ href, text, type }) => {
	return (
		<>
			<Button type={ type } className='btn' href={ href }>
				<div className='btn-content'>
					<span>{ text }</span>
				</div>
			</Button>
		</>
	)
}

export default CustomButton;