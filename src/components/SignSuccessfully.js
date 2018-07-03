import React from 'react';
import {connect} from "react-redux"
import {Update,Fetch} from "../utils/auth"
import {setUserSession, Update as UpdateSession} from "./../utils/session"
import {verifyEmail,verifyWithout2FA} from "./../utils/verification"
import {Verified} from "./../utils/auth"
class SignSuccessfully extends React.Component {
	// static propTypes = {
	// 	name: React.PropTypes.string,
	// };

	constructor(props) {
		super(props);
        this.state={
            show2f:true,
            text:[""]
        }
        console.log(props)
	}


	render() {
        const {signUpSuccess,hideMe} = this.props
        const {show2f} = this.state
		return (
			<form  
                className="reg-success-modal" 
                style={{display: signUpSuccess?"block":"none"}} 
                onSubmit={(e)=>e.preventDefault()}
                >
                <img src={require('../img/checkmark.png')}  />
                <div className="success-hding">Registration Successful!
                </div>
                <p className="first-para">Now you can sign in into your account</p>
                <div className="check-para">
                    <label><input type="checkbox" checked={this.state.show2f} onChange={(e)=>{
                    
                        this.setState({
                            ...this.state,
                            show2f:!show2f
                         })

                       setTimeout(()=>{
                        if(verifyWithout2FA())
                            window.location.href="/"
                         console.log(e.target.value)
                     },1200)   
                    }}
                    
                    /> I want to enable two-factor authentication (2FA) </label>
                </div>


                <div class="barcode-wrapper" style={{display:show2f?'block':'none'}} >
                    <div className="barcode">
                        <img src={require('../img/barcode.png')} />
                    </div>
                    <h2 className="auth-hding">Insert two-factor Authentication (2FA) Code
                    </h2>
                    <div className="auth-input">
                        <input type="text" onChange={(e)=>{
                            this.setState({
                                ...this.state,
                                text:[...this.state.text,e.target.value]
                            })
                        }}/>
                        <input type="text" 
                        onChange={(e)=>{
                            this.setState({
                                ...this.state,
                                text:[...this.state.text,e.target.value]
                            })
                        }}
                        />
                        <input type="text" 

                        onChange={(e)=>{
                            this.setState({
                                ...this.state,
                                text:[...this.state.text,e.target.value]
                            })
                        }}
                        />
                        <input type="text" 

                        onChange={(e)=>{
                            this.setState({
                                ...this.state,
                                text:[...this.state.text,e.target.value]
                            })
                        }}
                        />
                        <input type="text" 

                        onChange={(e)=>{
                            this.setState({
                                ...this.state,
                                text:[...this.state.text,e.target.value]
                            })
                        }}
                        />
                        <input type="text" 

                            onChange={(e)=>{
                            this.setState({
                                ...this.state,
                                text:[...this.state.text,e.target.value]
                            })
                        }}

                        />
                    </div>
                    <button className="auth-btn" onClick={(e)=>{
                        verifyEmail(this.state.text.join(''))
                        
                        setTimeout(()=>{
                        if(Verified())
                            window.location.href="/"
                     },1200)

                    }}>SEND</button>
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
export default connect(MapState,MapDispatch)(SignSuccessfully)