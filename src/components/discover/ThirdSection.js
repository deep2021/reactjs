import React from 'react';
export default class ThirdSection extends React.Component {

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="d-sec-3">
                    <div style={{'overflowX':'auto'}} className="table-responsive">
                        <table className="table">
                            <thead>
                                 <tr>
                                    <th>No. Order</th>
                                    <th>Quantity</th>
                                    <th>Currency</th>
                                    <th>Price</th>
                                  </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>123456</td>
                                    <td>200000</td>
                                    <td>CRC</td>
                                    <td>4000,906 ETH</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <p>
                        <span className="send-to-addr">Send to this address: </span>
                        <span className="addr-text">djfhjkew5h345jh3245jh236jh35j3h45</span>
                    </p>
            </div>
		);
	}
}
