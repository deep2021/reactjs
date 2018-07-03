import React from 'react';
import {connect} from 'react-redux';
import ValidationSuccess from "./ValidationSuccess"
import {PhoneVerification,verifyDoc,} from "./../../utils/verification"
import {VerificationCompleted} from "./../../utils/verification"
import {Fetch} from "./../../utils/auth"
 class DocumentValidation extends React.Component {
	// static propTypes = {
	// 	name: React.PropTypes.string,
	// };

	constructor(props) {
		super(props);
        const {value:user} = Fetch('user')

        this.state = {
                status:'default',
                docId:'',
                smsSent:false,
                errors:true
            }

        if(user){
            const {validation:{phone,doc}} = user
            this.state = {
                status:'default',
                docId:'',
                smsSent:false,
            }
        }
	}
    Hide()
        {
            this.props.dispatch({
                type:'dashboard/docs/hide'
            })
        }

	render() {
        const {status,phone,doc} = this.state
        const {showDocModel,vfone,vdoc,vdid,changeFone,changeDocId,updateDoc,phoneAuth,docAuth,dispatch} = this.props

		return (
            <div className="modal2" style={{display: showDocModel?'block':'none'}} >
				<form className="doc-val-modal" onSubmit={(e)=>{
                    e.preventDefault()
                }}     >
                <div id="phone" style= {{
                    display:phoneAuth?'block':'none'
                }}>
	                <div className="doc-hding">Phone Validation Form</div>
                	<div style={{
                        display:(!phone)?'block':'none'
                    }}>
                     
                    <div className="val-left-input">
                    <label>Mobile Phone Number</label>
                    <input type="text" ref="mobile" style={{
                        border:vfone?'2px solid green':'2px solid red'
                    }}

                    onChange={(e)=>{
                        changeFone(e.target.value)
                        this.setState({
                            ...this.state,
                            errors:!vfone
                        })
                    }}
                    />
                    </div>
                    <div className="val-right-input">
                        <label>Request SMS Validation</label>
                        <button
                            onClick = {
                                ()=>{
                                    if(this.state.smsSent){
                                        this.setState({
                                            ...this.state,
                                            smsSent:false
                                        })
                                    }
                                   
                                    setTimeout(()=>{
                                        this.setState({
                                            ...this.state,
                                            smsSent:true
                                        })
                                    }, 1200)    
                                       
                                }
                            }
                        >Send SMS</button>
                        <div className="code-box" style={{display:this.state.smsSent?'block':'none',}}>
                            <label>Enter the code received via sms</label>
                            <input type="text"
                            onKeyPress={(e)=>{
                                let value = e.target.value
                                if(e.key === 'Enter'){
                                     
                                    setTimeout(()=>{
                                        PhoneVerification(value,this,dispatch)
                                       
                                    },1200)
                                } 
                            }}
                            />
                        </div>

                        {
                            (status==="default")? "" 
                            :
                            (status === false)?<img src ={require('./../../img/wrongcode.png')} />
                            :
                            "" 
                        }
                         </div>   
                        </div>
                    </div>
                    <div id="document"
                    style= {{
                        display:docAuth?'block':'none'
                    }}>
                    <div className="with-id-wrap" display={{display:(!doc)?'block':'none'}}>
                    <div className="doc-hding">Document Validation Form</div>
                        <div className="val-left-input valid">
                            <label>Document ID</label>
                            <input className={(!vdid)&&"valinput error"} type="text" 
                            onChange={(e)=>{

                                changeDocId(e.target.value)
                                this.setState({
                                    ...this.state,
                                    docId:e.target.value,
                                    errors:!vdid
                                })

                               
                            }}
                            />
                            <span className={(!vdid) && "error-label"}>* Required</span>
                        </div>
                        <div className="val-s-hding">Image Uploader:</div>
                        <div className="val-s-para">-Front Document</div>
                        <div className="val-s-para">-Back Document</div>
                        <div className="val-s-para">-Image of yourself holding a sheet of paper with the words Crowd Coin and the date, Your name and surname. Together with the document you choose for validation</div>

                        <div className="vimages">
                            <img src={require('../../img/vuser.png')} className="bigimg" />
                            <img src={require('../../img/vplus.png')} className="simg" />
                            <img src={require('../../img/vboard.png')} className="bigimg" />
                            <img src={require('../../img/vplus.png')} className="simg" />
                            <img src={require('../../img/vlayer.png')} className="bigimg" />
                            <img src={require('../../img/vequal.png')} className="simg" />
                            <img src={require('../../img/vcheck.png')} className="bigimg" />
                        </div>
                        <div className="vuploader">
                            <div>Upload Files</div>
                            <input type="file" />
                            <button className="vupload-btn"><img src={require('../../img/vplus-white.png')} />  Upload</button>
                            <button className="vcanc-btn"><img src={require('../../img/vcancel-white.png')} /> Cancel</button>
                        </div>
                </div>
                <button className="val-send-btn" onClick={()=>{
                    
                        verifyDoc(this.state.docId)
                        VerificationCompleted(this.props.dispatch)
                        this.Hide()
                        console.log(this.props.showDocModel)
                    

                    

                }}
                style={{
                    display:!(doc)?'block':'none'
                }}
                >SEND</button>
                </div>
            </form>
            </div>
		);
	}
}
const MapState = (state)=>{
    console.log(state)
  const {models:{showProj,showDocModel, phoneAuth,docAuth}, docx} = state
  const {phone,docId,document}= docx
    return {
        showProj:showProj,
        showDocModel:showDocModel,
        vfone:phone.length >0,
        vdid:docId.length >0,
        vdoc:document.length >0,
        phoneAuth,
        docAuth

    }
}
const MapDispatch = (dispatch) => {
    return {
            dispatch,
            changeDocId:(value)=>{
                dispatch({
                    type:'app/change/docId',
                    payload:{
                        value:value
                    }
                })
            },

            changeFone:(value)=>{
                dispatch({
                    type:'app/change/phone',
                    payload:{
                        value
                    }
                })
            },

            updateDoc:(doc)=>{
                dispatch({
                    type:'app/change/document',
                    payload:{
                        value:doc
                    }
                })
            },


            dispatch
       }
   }
export default connect(MapState,MapDispatch)(DocumentValidation)
























