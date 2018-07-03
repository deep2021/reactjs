import React from 'react';

export default class UserLog extends React.Component {
	// static propTypes = {
	// 	name: React.PropTypes.string,
	// };

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div class="log-right-side">
                        <a href="#"> 
                            <img src="img/eye.png" />
                            <span>User/Company</span>
                        </a>

                    </div>
		);
	}
}
