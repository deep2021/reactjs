import React from 'react';
import {connect} from "react-redux"
 class ProjectHeader extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="d-header">
                <span className="d-close-btn" onClick={()=>{
					this.props.toggle()
			}}>&#10006;</span>
                <span className="d-header-title">Project Name</span>            
           </div>
		);
	}
}

const MapDispatch = (dispatch)=>{
	return {
		toggle:()=>dispatch({
			type:'app/discover/toggle'
		})
	}
}
export default connect(null,MapDispatch)(ProjectHeader)