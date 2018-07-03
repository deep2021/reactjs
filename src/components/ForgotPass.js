import React from 'react';
import {connect} from "react-redux"
 class ForgotPass extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		const {forgotten} = this.props
		return (
            <form className="recover-pwd-modal" style={{'display': forgotten?'block':'none'}}>
                <h2 className="auth-hding">Insert your email below to recover password
                </h2>
                <div className="signup-input">
                    <label>EMAIL</label>
                    <input type="text" 
                     style={this.props.emailValid?{
                     	border:"3px solid green"
                     }:{
                     	border:"3px solid red"
                     }}
                     
                     onChange={
                     	(e)=>{
                     		this.props.changeEmail(e.target.value)
                     	}
                     }
                    />
                </div>
                <button className="btn1"
                disabled={!(this.props.emailValid)}
                >SEND</button>
                <button className="btn2"
                
                onClick = {()=>{
                	this.props.hideForgotten()
                }}
                >CANCEL</button>
            </form>
		);
	}
}


const MapState = (state)=>{
	const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
	const {email} = state.forget
	return {
		forgotten:state.models.showForgotten,
		emailValid:re.test(email)
	}
}

const MapDispatch = (dispatch)=>{
	return {
		hideForgotten:()=>{
			dispatch({
				type:'app/forget/hide'
			})

		},
		changeEmail:(email) => dispatch({
				type:'forget/email',
				payload:{
					value:email
				}
			})
	}
}

export default connect(MapState,MapDispatch)(ForgotPass)