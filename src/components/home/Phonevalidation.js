import React from 'react';

export default class Docvalidation extends React.Component {
	// static propTypes = {
	// 	name: React.PropTypes.string,
	// };

	constructor(props) {
		super(props);
	}

	render() {
		return (
            <form className="doc-val-modal" style={{'display': 'none'}}>
                <div className="doc-hding">Document Validation Form
                </div>
                <div className="val-left-input">
                    <label>Mobile Phone Number</label>
                    <input type="text" />
                </div>
                <div className="val-right-input">
                    <label>Request SMS Validation</label>
                    <button>Send SMS</button>
                    <img src={require('../../img/cross.png') }/>
                    <div>Code inserted is not valid</div>
                </div>
                <button>SEND</button>
            </form>
		);
	}
}
