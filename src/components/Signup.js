import React from 'react';
import {connect} from "react-redux"
import  {Store} from "./../utils/auth"
import {setUserSession} from "./../utils/session"
class Signup extends React.Component {

	constructor(props) {
		super(props);
	}

	render() {
        const {showSignUp} = this.props
        console.log(showSignUp)
		return (
			<form className="signup-modal" style={{display:showSignUp?'block':'none'}}
                onSubmit = {(e)=>e.preventDefault()}
            >
                <div className="arrow">
                </div>

                <h2 className="signup-hding">Sign Up With
                </h2>
                <div style={
                            {clear: 'both',
                            display: 'flex'}
                            }>
                    <button className="fb-button"><img src={require("./../img/fb-btn.png")} /></button>
                    <div className="or">OR</div>
                    <button className="g-button"><img src={require("./../img/g-btn.png")} /></button>
                </div>
                <h2 className="signup-sub-hding">Sign up for create your account
                </h2>

                <div className="signup-tab">
                    <div className="tab active">User</div>
                    <div className="tab">Business</div>
                </div>
                
                <div className="signup-input">
                    <label>EMAIL</label>
                    <input type="email" placeholder="username@domain" onChange={
                        (e)=>{
                            this.props.changeEmail(e.target.value)
                        }
                    }

                    required
                    style={
                        this.props.usernameValid ? {
                            border:'3px solid green'
                        }:{
                            border:'3px solid red'
                        }
                    }
                    />
                </div>
               <div className="signup-input">
                    <label>USERNAME</label>
                    <input type="text" onChange={(e)=>{
                        this.props.changeUserName(e.target.value)
                    }}

                    required    
                    style={
                        this.props.nameValid ? {
                            border:'3px solid green'
                        }:{
                            border:'3px solid red'
                        }
                    }
                    />
                </div>
                 <div className="signup-input">
                    <label>PASSWORD</label>
                    <input type="password" onChange={
                        (e)=>{
                            this.props.changePassword(e.target.value)
                            
                        }
                    }

                    required

                    style={
                        this.props.passwordValid ? {
                            border:'3px solid green'
                        }:{
                            border:'3px solid red'
                        }
                    }
                    />
                </div>
               <div className="signup-input">
                    <label>CONFIRM PASSWORD</label>
                    <input type="password" onChange={(e)=>{
                        this.props.changeConfirm(e.target.value)

                    }}

                    style={
                        this.props.confirmValid ? {
                            border:'3px solid green'
                        }:{
                            border:'3px solid red'
                        }
                    }
                    />
                </div>
                
                <div className="terms-condition">
                    <label><input type="checkbox" 
                    checked = {this.props.terms}
                    onChange={
                        
                        (e)=>{
                            this.props.acceptTerms(e.target.value=="on"?true:false)
                        }
                    }/> I have read and agreed with the <a href="#">terms & Conditions</a></label>
                </div>

                <button className="signup-btn" disabled={
                    !(this.props.nameValid && this.props.usernameValid && this.props.passwordValid && this.props.confirmValid && this.props.terms)
                } onClick={()=>{
                    Store({
                        key:"user",
                        value:{...this.props.user,has2FA:false,validation:{
                            email:false,
                            phone:false,
                            doc:false
                        }}
                    })
                    
                    this.props.showAuth()
                }}>SIGN UP</button>
                
            </form>
		);
	}
}

const MapState = (state)=>{
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    const {showSignUp} = state.models
    const {email,username,password,confirm,terms,type} = state.signUp
    
    return {
        showSignUp,
        usernameValid:re.test(email),
        passwordValid:(password.length) > 7,
        confirmValid:password === confirm,
        nameValid:username.length >2,
        terms,
        type,
        user:{email,username,type}
    }
}


const MapDispatch = (dispatch) => {
    return {
        changeUserName:(username)=>{
            dispatch({
                type:'auth/username',
                payload:{
                    value:username
                }
            })
        },
        changePassword:(password)=>{
            dispatch({
                type:'auth/password',
                payload:{
                    value:password
                }
            })
        },
        changeConfirm:(confirm)=>{
            dispatch({
                type:'auth/confirm',
                payload:{
                    value:confirm
                }
            })
        },
        changeEmail:(email)=>{
            dispatch({
                type:'auth/email',
                payload:{
                    value:email
                }
            })
        },

        acceptTerms:(value)=>{
            dispatch({
                type:'auth/terms',
                payload:{
                    value
                }
            })
        },
        showAuth:()=>{
            dispatch({
                type:'app/signup/hide'
            })
            dispatch({
                type:'app/signup/success/show'
            })
        }

    }
}

export default connect(MapState,MapDispatch)(Signup)
