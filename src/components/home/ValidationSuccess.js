import React from 'react';
import {connect} from "react-redux"


export default connect()(class ValidationSuccess extends React.Component {
	// static propTypes = {
	// 	name: React.PropTypes.string,
	// };

	constructor(props) {
		super(props);
	}

	render() {
		const {success,message,action} = this.props
		const show = true		
		return (
			<form className="success-modal" style={{'display': success?'block':'none' }} onClick={()=>{
				this.props.dispatch({
					type:action
				})
			}}>
                <img src={require('../../img/checkmark.png')} />
                <h2 className="success-hding">{message}
                </h2>
            </form>
		);
	}
})
