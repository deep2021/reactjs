import React from 'react';
import {VerificationCompleted} from "./../../utils/verification"
export default class ValidationSuccess extends React.Component {
	// static propTypes = {
	// 	name: React.PropTypes.string,
	// };

	constructor(props) {
		super(props);
	}


	render() {
		const Hidden = true
		return (
			<form className="success-modal" style={{'display': 'none'}}>
                <img src={require('../../img/checkmark.png')} />
                <h2 className="success-hding">Validation  Completed!
                </h2>
            </form>
		);
	}
}
