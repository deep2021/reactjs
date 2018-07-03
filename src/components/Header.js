import React from 'react';
import Login from './Login';
import Signup from './Signup';
import ForgotPass from './ForgotPass';
import SignSuccessfully from './SignSuccessfully';
import Thanks from './Thanks';
import Upload from './Upload';
import AuthModel from './AuthModel';
import Success from './Success';
import {connect} from "react-redux"
class Header extends React.Component {

    constructor(props){
        super(props)
    }

getInitialState() {
    const userId = window.localStorage.getItem('userId')
    
    return {
        userId 
    };
}

  render() {

    return (
      <header className="header">
                <div className="container">
                    <div className="logo">
                        <img alt="LOGO" src={require('../img/logo.png')} />
                    </div>
                
                    <div className="right-side">
                         <a href="#" onClick={()=>{
                            this.props.toggleSignIN()
                            
                         }}
                         disabled = {this.props.showSignUp}
                         > 
                            <img alt="LOGIN" src={require('../img/login.png')} />
                            <span style={{verticalAlign:'middle'}}>LOGIN</span>
                        </a>
                         <a href="#" onClick={()=>{
                            this.props.toggleSignUP()
                         }}

                         > 
                            <img alt="SIGN-UP" src={require('../img/sign-up.png')} />
                            <span id="test" style={{verticalAlign:'middle'}}>SIGN UP</span>
                        </a>
                    </div>
                </div>
                <Login  />
       </header>
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

export default  connect(MapState,MapDispatch)(Header)
