import React from 'react';
import {connect} from 'react-redux';
import {Redirect,Link} from "react-router-dom"
import ProjectModel from './ProjectModel';
import {Fetch} from "./../../utils/auth"

const ucFirst = (string)=>{
    return string.charAt(0).toUpperCase() + string.slice(1);
}
class HeaderSecond extends React.Component {
	// static propTypes = {
	// 	name: React.PropTypes.string,
	// };

	constructor(props) {
		super(props);
		this.state={show:false,redirect:false}
		
	}


    componetDidMount(){

    }

	Show()
		{
			this.setState({
				...this.state,
				show:true
			})
		}


    Hide()
        {
            this.setState({
                ...this.state,
                show:false
            })
        }

	render() {
		const {emailValidated,phoneValidated,docValidated,identity} = this.props
        const {redirect} = this.state
        const {value:user} = Fetch('user')|| null
        const {type,username} = user || {type:null,username:'Company/User'}
        
		return (
			<header className="header">
				<Link to ="/">
                    <div className="logo" style={{
                    cursor:'pointer'
                }}
                >
                <img alt="LOGO" src={require('../../img/logo.png')} />
                </div>
                </Link>
                <div className="container">
                    <div className="log-right-side" style={{margin:'inherit'}}>
                            <div style={{display:'flex', alignItem:'center'}}>
                                <img src={require('../../img/eye.png')} 

                                onClick={()=>{
                                    this.props.showProfileModel()
                                    this.props.hideDoc()
                                    this.props.hideProject()
                                    this.props.hideIdentity()

                                }}
                                />
                            <a href="#" >
                                <span>{ucFirst(username)}</span>
                            </a>
                            </div>
                        <a class="right-bar" onClick={()=>{
                           console.log(this.props.showIdentity())
                            this.props.hideProject()
                            this.props.hideProfileModel()
                            if(identity){
                                this.props.hideIdentity()
                            }
                        }}>
                            <img src={require('../../img/bar.png')} />
                        </a>
                        <form class="right-bar-form" style={{display:(identity)?'block':'none'}}>
                            <div class="arrow"></div>
                            {
                                (type=="user")
                                ?
                                <React.Fragment>
                                    <h2>Verify your identity
                                        </h2>
                                        <ul>
                                            <li><a href="#"
                                            ><img src={require('../../img/email.png')} class="email-img" /> Email Validation <span><img src={emailValidated?require('../../img/checkval.png'):require('../../img/uncheckval.png')} /></span></a>
                                            </li>
                                            
                                            <li><a href="#" onClick={()=>{
                                                 

                                                if(!phoneValidated){
                                                    this.props.showDoc()
                                                    this.props.showPhone() 
                                                    this.props.hideDocument()                        
                                                   
                                                    this.Hide() 
                                                    }
                                                    
                                                }}><img src={require('../../img/phone.png')} class="phone-img" /> Phone Number <span><img src={phoneValidated?require('../../img/checkval.png'):require('../../img/uncheckval.png')} /></span></a>
                                            </li>
                                            
                                            <li><a href="#" onClick={()=>{

                                                if(!docValidated){
                                                    this.props.showDoc()
                                                    this.props.hidePhone()
                                                    this.props.showDocument()
                                                   
                                                    this.Hide()

                                                }
                                            }}>
                                                <img src={require('../../img/doc.png')} class="doc-img" /> Document <span><img src={docValidated?require('../../img/checkval.png'):require('../../img/uncheckval.png')} /></span></a>
                                            </li>
                                        </ul>
                                </React.Fragment>
                                :
                               <React.Fragment>
                                  <div className="left-txt"  style={{
                                        display:'block'
                                    }}
                                    >Project Name
                                    </div>


                                    <div className="right-txt"
                                        style={{
                                            display:'block'
                                        }}
                                    >Status
                                    </div>

                                    <ul style={{
                                            display:'block'
                                        }}>
                                            <li>
                                                <span>Project1</span>
                                                <span className="pright"><img src={require('../../img/redcheck.png')} /></span>
                                            </li>
                                            <li>
                                                <span>Project2</span>
                                                <span className="pright"><img src={require('../../img/yellowcheck.png')} /></span>
                                            </li>
                                            <li>
                                                <span>Project3</span>
                                                <span className="pright"><img src={require('../../img/greencheck.png')} /></span>
                                            </li>

                                            <li>
                                                <Link to = "/protected" onClick={()=>{
                                                    this.props.dispatch({
                                                        type:'dashboard/project/hide'
                                                    })
                                                }} className="add-btn">
                                                    Add
                                                </Link>
                                            </li>
                                        </ul>

                               </React.Fragment>
                            }

                            <button className={'btn-warn'}
                            onClick={()=>{
                                    window.sessionStorage.removeItem('user')
                                    window.location.href="/"
                                }}>L O G O U T</button>
                        </form>
                    
                    </div>
                </div>
       </header>

		);
	}
}
const MapState = (state)=>{
    console.log(state)
    const {Validation:{emailValidated,phoneValidated,docValidated}} = state
    console.log(state.models)
    const {showProj,showDocModel,showProfile,identity} = state.models
	   return {
		showProj:showProj,
        showDocModel:showDocModel,
        showProfile:showProfile,
        emailValidated,
        phoneValidated,
        docValidated,
        identity

	}
}
const MapDispatch = (dispatch) => {
    return {
        showProject:()=>{
            dispatch({
                type:'dashboard/project/show'
                })
        },
        showDoc:()=>{
            dispatch({
                type:'dashboard/docs/show'
            })
        },
        showProfileModel:()=>{
            dispatch({
                type:'profile/upload'
            })
        },


        hideProject:()=>{
            dispatch({
                type:'dashboard/project/hide'
                })
        },
        hideDoc:()=>{
            dispatch({
                type:'dashboard/docs/hide'
            })
        },
        hideProfileModel:()=>{
            dispatch({
                type:'profile/upload/hide'
            })
        },

        showIdentity:()=>{
            dispatch({
                type:'identity/show'
            })
        },

        hideIdentity:()=>{
            dispatch({
                type:'identity/hide'
            })
        },

        showPhone:()=>{
            dispatch({
                type:'app/phoneVal/show'
            })
        },

        hidePhone:()=>{
            dispatch({
                type:'app/phoneVal/hide'
            })
        },

        showDocument:()=>{
            dispatch({
                type:'app/docVal/show'
            })
        },

        hideDocument:()=>{
            dispatch({
                type:'app/docVal/hide'
            })
        }
       }
   }
export default connect(MapState,MapDispatch)(HeaderSecond)
