import React from 'react';
import {connect} from 'react-redux';
import {Link} from "react-router-dom"
import {Fetch} from "./../../utils/session"
class ProjectModel extends React.Component {
	// static propTypes = {
	// 	name: React.PropTypes.string,
	// };

	constructor(props) {
		super(props);
        const {value:user} = Fetch('user')
        if (user) {
            const {type} = user;
            this.authorize.call(this,type)
        }
	}

    authorize = (type)=>{
        const show_project_menu = type=='user'?false:true
        this.state ={
            type,
            pmv:show_project_menu
        }
        console.log('call success')
    }

    componentWillMount(){
        this.authorize.call(this,this.state.type)
        console.log(this.state)
    }

	render() {
        console.log(this.props)
        const {showProj,username} = this.props;
		return (
			<form className="proj-modal" style={{'display': showProj?'block':'none'}}
            onSubmit={(e)=>{
                e.preventDefault()
                window.location.reload()
            }}
            >
                <div className="arrow">
                </div>
                <div className="left-txt"  style={{
                    display:this.state.pmv?'block':'none'
                }}
                >Project Name
                </div>
                <div className="right-txt"
                    style={{
                        display:this.state.pmv?'block':'none'
                    }}
                >Status
                </div>
                <ul style={{
                    display:this.state.pmv?'block':'none'
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
                <button onClick={()=>{
                    window.sessionStorage.removeItem('user')
                }}>L O G O U T</button>
            </form>
		);
	}
}
const MapState = (state)=>{
    console.log(state)
  const {models:{showProj}} = state
    return {
        showProj:showProj
    }
}

const Mapdispatch = (dispatch)=>{
    return {
        dispatch

    }
}
export default connect(MapState,Mapdispatch)(ProjectModel)