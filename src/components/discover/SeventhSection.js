import React from 'react';

export default class SeventhSection extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="d-sec-4">
                    <div className="table-container">
                        <span className="table-header-1">Pending</span>
                        <div style={{'overflowX':'auto'}} className="table-responsive">
                            <table className="table">
                                <thead>
                                     <tr>
                                        <th>No. Order</th>
                                        <th>Quantity</th>
                                        <th>Currency</th>
                                        <th>Quantity</th>
                                        <th>Order Creation</th>
                                      </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>123456</td>
                                        <td>87</td>
                                        <td>CRC</td>
                                        <td>0.0293 BTC</td>
                                        <td>10 April 2018 09:00</td>
                                    </tr>
                                    <tr>
                                        <td>123456</td>
                                        <td>87</td>
                                        <td>CRC</td>
                                        <td>0.0293 BTC</td>
                                        <td>10 April 2018 09:00</td>
                                    </tr>
                                    <tr>
                                        <td>123456</td>
                                        <td>87</td>
                                        <td>CRC</td>
                                        <td>0.0293 BTC</td>
                                        <td>10 April 2018 09:00</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className="table-container">
                        <span className="table-header-2">Valid</span>
                        <div style={{'overflowX':'auto'}} className="table-responsive">
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th>No. Order</th>
                                        <th>Quantity</th>
                                        <th>Currency</th>
                                        <th>Quantity</th>
                                        <th>Order Creation</th>
                                        <th>Order Purchased</th>
                                    </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td>123456</td>
                                    <td>87</td>
                                    <td>CRC</td>
                                    <td>0.0293 BTC</td>
                                    <td>10 April 2018 09:00</td>
                                    <td>10 April 2018 09:00</td>
                                </tr>
                                <tr>
                                    <td>123456</td>
                                    <td>87</td>
                                    <td>CRC</td>
                                    <td>0.0293 BTC</td>
                                    <td>10 April 2018 09:00</td>
                                    <td>10 April 2018 09:00</td>
                                </tr>
                                <tr>
                                    <td>123456</td>
                                    <td>87</td>
                                    <td>CRC</td>
                                    <td>0.0293 BTC</td>
                                    <td>10 April 2018 09:00</td>
                                    <td>10 April 2018 09:00</td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className="table-container">
                        <span className="table-header-3">Expired</span>
                        <div style={{'overflowX':'auto'}} className="table-responsive">
                            <table className="table">
                                <thead>
                                   <tr>
                                        <th>No. Order</th>
                                        <th>Quantity</th>
                                        <th>Currency</th>
                                        <th>Quantity</th>
                                        <th>Order Creation</th>
                                        <th>Order Purchased</th>
                                    </tr> 
                                </thead>
                                <tbody>
                                <tr>
                                    <td>123456</td>
                                    <td>87</td>
                                    <td>CRC</td>
                                    <td>0.0293 BTC</td>
                                    <td>10 April 2018 09:00</td>
                                    <td>10 April 2018 09:00</td>
                                </tr>
                                <tr>
                                    <td>123456</td>
                                    <td>87</td>
                                    <td>CRC</td>
                                    <td>0.0293 BTC</td>
                                    <td>10 April 2018 09:00</td>
                                    <td>10 April 2018 09:00</td>
                                </tr>
                                <tr>
                                    <td>123456</td>
                                    <td>87</td>
                                    <td>CRC</td>
                                    <td>0.0293 BTC</td>
                                    <td>10 April 2018 09:00</td>
                                    <td>10 April 2018 09:00</td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
		);
	}
}
