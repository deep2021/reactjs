import React from 'react';

export default class Success extends React.Component {
	// static propTypes = {
	// 	name: React.PropTypes.string,
	// };

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<form className="success-modal" style={{'display': 'none'}}>
                <img src={require('../img/checkmark.png')} />
                <h2 className="success-hding">Login Successful!
                </h2>
            </form>
		);
	}
}
