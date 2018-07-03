import React from 'react';

export default class ProjectName extends React.Component {
	// static propTypes = {
	// 	name: React.PropTypes.string,
	// };

	constructor(props) {
		super(props);
	}

	render() {
		return (
				<div className="d-user-section">
                        <img src={require('../../img/discover-logo.png')}/>
                        <span className="heading-1">Project Name</span>
                </div>
		);
	}
}
