import React from 'react';
import { connect } from 'react-redux';

function mapStateToProps(state) {
	const {showProfile} = state.models
	return {
		showProfile
	};
}

export class ProfilePic extends React.Component {
	
	constructor(props) {
		super(props);
	}

	render() {
		const {showProfile} = this.props
		return (
			<form className="upload-modal" style={{
				display:showProfile?'block':'none'
			}}>
                  <div class="arrow">
                    </div>
                <div className="success-hding">Upload new profile image
                </div>
                <img src={require('./../img/upload.png')} />
                <input type="file" className="upload-input" />
                <button>SAVE</button>
            </form>
		);
	}
}

export default connect(
	mapStateToProps,
// Implement map dispatch to props
)(ProfilePic)
