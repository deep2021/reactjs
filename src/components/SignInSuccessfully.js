import React from 'react';
import {connect} from "react-redux"
import {Update,Fetch} from "../utils/auth"
import {setUserSession, Update as UpdateSession,check2FA} from "./../utils/session"
class SignInSuccessfully extends React.Component {
	// static propTypes = {
	// 	name: React.PropTypes.string,
	// };

	constructor(props) {
		super(props);
	}

	render() {
        const {signUpSuccess,hideMe} = this.props
		return (
			<form className="reg-success-modal" style={{display: signUpSuccess?"block":"none"}} onSubmit={(e)=>e.preventDefault()}>
                <img src={require('../img/checkmark.png')}  />
                <div className="success-hding">Registration Successful!
                </div>
                <div class="barcode-wrapper" style={{display:this.props.show?'block':'none'}} >
                    <div className="barcode">
                        <img src={require('../img/barcode.png')} />
                    </div>
                    <h2 className="auth-hding">Insert two-factor Authentication (2FA) Code
                    </h2>
                    <div className="auth-input">
                        <input type="text" />
                        <input type="text" />
                        <input type="text" />
                        <input type="text" />
                        <input type="text" />
                        <input type="text" />
                    </div>
                    <button className="auth-btn" onClick={()=>{
                        hideMe()
                        window.location.reload()
                    }}>SEND</button>
                </div>



            </form>
		);
	}
}


const MapState = (state,{show})=>{
    const {signInSuccess} = state.models
    return {
        signInSuccess,
        show
    }
}


const MapDispatch = (dispatch)=>{
    return {
        hideMe:()=>{
            dispatch({
                type:'app/signin/success/hide'
            })
        }
    }
}
export default connect(MapState,MapDispatch)(SignInSuccessfully)