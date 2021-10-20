import React from 'react'
import { Container, Row, Col} from 'react-bootstrap';

function Demo(props) {
	return (
		<div className='main-box'>

			<img src={props.img} alt="img" />

			<div className='content-box'>
			<h4 className='placename'>{props.place}</h4>

			<p className='para'>{props.disc}</p>

			<div className="price-div"><span>{props.price}</span><span>{props.inr}</span></div>

			</div>

		    <a href=" "><button className="btn-green">{props.btnL}</button></a>
		    <a href=""><button className="btn-blue">{props.btnR}</button></a>


		</div>
	)
}

export default Demo;