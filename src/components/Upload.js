import React from 'react';

export default class upload extends React.Component {
	// static propTypes = {
	// 	name: React.PropTypes.string,
	// };

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<form className="upload-modal" style="display: 'none';">
                  <div className="arrow">
                    </div>
                <div className="success-hding">Upload new profile image
                </div>
                <img src={require('../img/upload.png')} />
                <input type="file" className="upload-input"/>
                <button>SAVE</button>
            </form>
		);
	}
}
