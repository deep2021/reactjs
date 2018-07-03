import React from 'react';

export default class UploadFile extends React.Component {
	// static propTypes = {
	// 	name: React.PropTypes.string,
	// };

	constructor(props) {
		super(props);
	}

	render() {
		return (
				<div>
                    <div style={{margin: '0px 8%'}}>
                        <div className="upload-profile" >
                            <img src={require('../../img/upload-icon.png') } />
                            <span>Upload Cover Image</span>
                            <input className="upload-cover" type="file"/>
                        </div>
                    </div>
                </div>
		);
	}
}
