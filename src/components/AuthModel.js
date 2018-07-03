import React from 'react';
import {connect} from "react-redux"
//import AuthModel from './AuthModel';
import {getVerified,Verified} from "./../utils/session"
class AuthModel extends React.Component {
	// static propTypes = {
	// 	name: React.PropTypes.string,
	// };

	constructor(props) {
		super(props);
		console.log(this.props)

		this.state = {
			notDisMissed:true
		}
	}
	render() {
		const {showVerify,has2FA} = this.props;
		const {notDisMissed} = this.state
		console.log(getVerified())
		return (
				<form className="auth-modal" style={{display:has2FA && (!getVerified())?'block':'none'}} onSubmit={(e)=>{
					e.preventDefault()
				}}>
	                <h2 className="auth-hding">Insert Two Authenticator Code
	                </h2>
	                <div className="auth-input">
	                    <input type="text" />
	                    <input type="text" />
	                    <input type="text" />
	                    <input type="text" />
	                    <input type="text" />
	                    <input type="text" />
	                </div>
	                <button className="auth-btn"
	                	onClick={()=>{
	                		this.setState({
	                			...this.state,
	                			notDisMissed:false
	                		})
	                		
	                		Verified()
	                	}}


	                >

	                SEND AUTH</button>
	            </form>
		);
	}
}

const MapState = (state,owmProps)=>{
	
  const {models:{showVerify}} = state
	return {
		showVerify:showVerify,
		...owmProps
	}
}

const Mapdispatch = (dispatch)=>{
	return {
		dispatch
	}
}
export default connect(MapState)(AuthModel)