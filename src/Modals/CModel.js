import React from 'react';

export default class CModel extends React.Component {
	static propTypes = {
		name: React.PropTypes.string,
	};

	constructor(props) {
		super(props);
	}

	render() {
		const {open,onCloseModal} = this.props
		return (
		<Modal open={open} onClose={this.onCloseModal} center>
          {this.props.children}
        </Modal>
		);
	}
}
