import React from 'react';

export default class Discovery extends React.Component {
	// static propTypes = {
	// 	name: React.PropTypes.string,
	// };

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div id="myModal" className="model">
            <div className="modal-content">
            <div className="modal-header">
              <span className="d-close">&times;</span>
              <span className="d-header-title">Project Name</span> 
            </div>
            <div className="modal-body">
                <div className="d-user-section">
                    <img src="images/discover-logo.png"/>
                    <span className="heading-1">Project Name</span>
                </div>
                <span className="heading-1">Abstract</span>
                <div className="d-sec-1">
                    <div className="d-btn-group">
                      <button>Tag #1 <span>&#10006;</span></button>
                      <button>Tag #2 <span>&#10006;</span></button>
                      <button>Tag #3 <span>&#10006;</span></button>
                    </div>
                    <p className="para1">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.</p>
                    <span className="heading-1">Mission</span>
                    <p className="para1">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.</p>
                    <p className="heading-1">Soft cap: <span>$1000</span></p>
                    <p className="heading-1">Hard cap: <span>$2000</span></p>
                    <p className="heading-1">Total supply:</p>
                    <p className="heading-1">Start date: <span>19 April 2018 09:00</span></p>
                    <p className="heading-1">End date: <span>20 April 2018 18:00</span></p>
                    <p className="heading-1">Token/Coin: <span>Crowd coin</span></p>
                    <p className="heading-1">Ticker: <span style={{'verticalAlign':'middle'}}>CRC</span></p>
                    <p className="heading-1">ERC20 token: 
                        <label className="d-custom-radio">
                            <span style={{marginLeft:'10px'}}>YES</span>
                            <input type="radio" name="radio" />
                            <span className="d-checkmark"></span>
                        </label>
                    </p>
                    <p className="heading-1">Price progression: <span>$2000</span></p>
                    <div style={{overflowX:'auto'}} className="table-responsive">
                        <table className="table progression-table">
                            <thead>
                                <tr>
                                  <th>From</th>
                                  <th>To</th>
                                  <th>Price</th>
                                  <th>Bonus</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                  <td>19 April 2018 09:00</td>
                                  <td>19 April 2018 09:00</td>
                                  <td>$0.10</td>
                                  <td>0.10 cent</td>
                                 
                                </tr>
                                <tr>
                                  <td>19 April 2018 09:00</td>
                                  <td>19 April 2018 09:00</td>
                                  <td>$0.10</td>
                                  <td>0.10 cent</td>
                                </tr>
                                <tr>
                                  <td>19 April 2018 09:00</td>
                                  <td>19 April 2018 09:00</td>
                                  <td>$0.10</td>
                                  <td>0.10 cent</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <p className="heading-1">Description</p>
                    
                </div>
                <div className="d-sec-2">
                    <p className="heading-1">Quantity: 
                        <label for="range">
                              <input type="range" name="range" id="range" min="0" max="300" step="5" value="175"/>
                        </label>
                         <output for="range" className="output"></output>
                        <span style={{border: '1px solid #ccc' ,padding: '3px'}}>200.000</span>
                    </p>
                    <p className="heading-1">Currency: <span style={{'verticalAlign':'middle'}}>CRC</span></p>
                    <label>
                        <span className="heading-1">Pay with: </span>
                        <span className='d-select-wrapper'>
                            <select className="custom-select" id="d-box-1">
                                <option selected>ETH</option>
                                <option>ETH 1</option>
                                <option>ETH 2</option>
                                <option>ETH 3</option>
                            </select>
                            <span className='holder' id="holder1">ETH</span>
                        </span>
                    </label>
                    <p className="invest-btn">
                        <button className="d-button">INVEST</button>
                    </p>
                </div>
                <div className="d-sec-3">
                    <div style={{overflowX:'auto'}} className="table-responsive">
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
                <div className="d-sec-4">
                    <div className="table-container">
                        <span className="table-header-1">Pending</span>
                        <div style={{overflowX:'auto'}} className="table-responsive">
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
                        <div style={{overflowX:'auto'}} className="table-responsive">
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
                        <div style={{overflowX:'auto'}}className="table-responsive">
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
            </div>
          </div>

        </div>
		);
	}
}
