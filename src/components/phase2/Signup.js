import React from 'react';
import { connect } from 'react-redux';
import {Redirect}  from "react-router-dom"
import SignSuccessfully from "./../SignSuccessfully"
import ValidationSuccess from "./../discover/ValidationSuccess"
import {Verified} from "./../../utils/session"
class Signup extends React.Component {
	
	constructor(props) {
		super(props);
		console.log(this.props.dispatch({
			type:'app/signup/success/show'
		}))

		console.log(this.props)
	}

	render() {
		const {emailValidated} = this.props
		return (
			 <div>
			 	{
			 		emailValidated && <Redirect to ='/' />
			 	}
			 <SignSuccessfully show={true}/>
			 </div>
			
		);
	}
}

const MapState = ({Validation})=>{
	const {emailValidated} = Validation
	return {
		emailValidated
	}
}

export default connect(MapState)(Signup)