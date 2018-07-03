import React from 'react';
import {isLoggedIn} from "./../utils/session"
import {connect} from "react-redux"

class Banner extends React.Component {
	// static propTypes = {
	// 	name: React.PropTypes.string,
	// };

	constructor(props) {
		super(props);
	}
	render() {
		return (
				<div className="banner">
                    <h3>Welcome to the CrowdCoin Platform</h3>
                    <h1>INVEST IN CRYPTO!</h1>
                    <button
                    style={{
                        display:isLoggedIn()?'none':'block'
                    }}
                     onClick = {()=>{
                     	this.props.toggleSignUP()
                     }}
                    >SIGN-UP</button>
                </div>
                
		);
	}
}


const MapDispatch = (dispatch) => {
    return {
        toggleSignIN:(value)=>{
            dispatch({
                type:'app/login/show',
            })
            dispatch({
                type:'app/signup/hide'
            })
        },

        toggleSignUP:(value)=>{
            dispatch({
                type:'app/signup/show',
            })

            dispatch({
                type:'app/login/hide'
            })
        },
    }
}

const MapState = (state) => {
    const {showSignUp,showLogin} = state.models

    return {
        showLogin,
        showSignUp
    }
}

export default  connect(MapState,MapDispatch)(Banner)
