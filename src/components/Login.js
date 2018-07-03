import React from 'react';
import {connect} from "react-redux"
import {Redirect} from "react-router-dom"
import {checkLogin,has2FA as F2A,Fetch} from "./../utils/session"   
class Login extends React.Component {
    // static propTypes = {
    //  name: React.PropTypes.string,
    // };

    constructor(props) {
        super(props);
        
        this.state = {
            errors:false
        }

    }

    
    render() {
        const {showSignUp} = this.props
        return (
                <form className="login-modal" style={{'display': showSignUp?'block':'none'}} onSubmit = {(e)=>{
                    e.preventDefault()
                }}> 
                    <div className="arrow"></div>
                    <button className="fb-button"><img src={require('../img/fb-btn.png')}/></button>
                    <button className="g-button"><img src={require('../img/g-btn.png')} /></button>

                    <div className="form-input">
                        <span><img src={require('../img/user-icon.png')}/></span>
                        <input type="text" placeholder="Username"
                        style={this.props.userValid?{
                            borderBottom:'3px solid green'
                        }:{
                           borderBottom:'3px solid red' 
                        }}

                        onChange={(e)=>{
                            this.props.changeUserName(e.target.value)
                        }}
                        />
                    </div>
                    <div className="form-input">
                        <span><img src={require('../img/pwd-icon.png')}/> </span>
                        <input type="password" placeholder="Password"
                        onChange={(e)=>{
                            this.props.changePassword(e.target.value)
                        }}
                        style={this.props.passwordValid?{
                            borderBottom:'3px solid green'
                        }:{
                           borderBottom:'3px solid red' 
                        }}
                        />
                    </div>

                    <button className="login-btn"
                    disabled = {!(this.props.userValid && this.props.passwordValid)}
                    onClick = {()=>{
                        if(checkLogin(this.props.username))
                            this.setState({
                                ...this.state,
                                errors:false
                            })
                        else{
                            this.setState({
                                ...this.state,
                                errors:true
                            })
                        }

                        window.location.reload()
                    }}

                    >Login</button>
                    <div className="forget-pwd">
                        Forget Password <a href="#"
                            onClick={()=>{

                                this.props.showForget()
                            }}
                        >Click Here</a>
                    </div>
                </form>
        );
    }
}

const MapState = (state)=>{
    const {username,password} = state.signIn
    return {
        showSignUp:state.models.showLogin,
        userValid:username.length >2,
        passwordValid:password.length >7,
        username

    }
}


const MapDispatch = (dispatch)=>{
    return {
        showForget:()=>{
            dispatch({
                type:'app/login/hide'
            })

            dispatch({
                type:'app/forget/show'
            })

        },
        hide:()=> dispatch({
                type:'app/login/hide'
            }),


        show:()=>{
            dispatch({
                type:'app/signin/success/show'
            })
        },


        hideSM:()=>{
            dispatch({
                type:'app/sigin/success/hide'
            })
        },


        changeUserName:(username)=> {
            dispatch({
                type:'signin/username',
                payload:{
                    value:username
                }
            })
        },

        changePassword:(password)=> dispatch({
                type:'signin/password',
                payload:{
                    value:password
                }
            }),

        resetForm:()=>{
            dispatch({
                type:'signin/reset'
            })
        }, dispatch
    }
}
export default connect(MapState,MapDispatch)(Login)