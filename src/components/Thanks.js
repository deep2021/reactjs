import React from 'react';
import {connect} from 'react-redux';
class Thanks extends React.Component {
	// static propTypes = {
	// 	name: React.PropTypes.string,
	// };

	constructor(props) {
		super(props);
		this.props.hideMe()
	}

	render() {
		const {signUpSuccess,hideMe} = this.props
		return (
				<form className="sign-thanks-modal" style={{display: signUpSuccess?"block":"none"}}
					onClick={()=>{
						if(signUpSuccess){
							hideMe()
						}
					}}
				>
	                  <div className="arrow">
	                  </div>
	                  <img src={require('../img/checkmark.png')} />
	                  <div className="success-hding">Thank you for signing in!
	                  </div>
	                  <div className="success-sub-hding">Check you email inbox<br/>to Varify your account.
	                  </div>
               </form>
		);
	}
}
const MapState = (state)=>{
    const {signUpSuccess} = state.models
    return {
        signUpSuccess
    }
}


const MapDispatch = (dispatch)=>{
    return {
        hideMe:()=>{
            dispatch({
                type:'app/signup/success/hide'
            })
        }
    }
}
export default connect(MapState,MapDispatch)(Thanks)