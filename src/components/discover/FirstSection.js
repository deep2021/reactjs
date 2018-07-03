import React from 'react';
import CKEditor from "react-ckeditor-component";
export default class FirstSection extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
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
                        <label className="d-custom-radio">YES
                            <input type="checkbox" name="radio" />
                            <span className="d-checkmark"></span>
                        </label>
                    </p>
                    <p className="heading-1">Price progression: <span>$2000</span></p>
                    <div style={{'overflowX':'auto'}} className="table-responsive">
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
                      <div>
  <div>
    <img src="https://picsum.photos/200/300" alt="" height="200" width="300"/>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus doloribus aliquid perspiciatis, aliquam doloremque provident non. Aperiam doloremque, magni deserunt voluptatibus soluta, accusamus vero numquam debitis hic laudantium porro provident!</p>
  </div>
  <div>
    <img src="https://picsum.photos/200/300" alt="" height="200" width="300"/>
    <p>Accusamus similique possimus, voluptatibus odit ipsam porro! At, aliquid excepturi quo delectus. Eveniet alias similique, repudiandae veniam voluptatem accusamus voluptate iusto velit. Nemo quae obcaecati repellat nihil earum, unde inventore.</p>
  </div>
  <div>
    <img src="https://picsum.photos/200/300" alt="" height="200" width="300"/>
    <p>Consectetur eaque provident dolor expedita assumenda? Incidunt asperiores quas at consequuntur animi, quis quia rerum est hic aperiam, quaerat harum non pariatur sunt magnam, molestias delectus provident tenetur repellendus a?</p>
  </div>
  <div>
    <img src="https://picsum.photos/200/300" alt="" height="200" width="300"/>
    <p>Rerum dolore possimus, consequatur soluta. Ex consectetur animi aperiam corrupti tempora cum architecto deleniti quas assumenda labore tenetur minus maxime totam, natus voluptates veritatis, illum nostrum perspiciatis recusandae odio veniam.</p>
  </div>
  <div>
    <img src="https://picsum.photos/200/300" alt="" height="200" width="300"/>
    <p>Voluptas animi temporibus, in eaque laudantium totam soluta possimus ut, perferendis incidunt a! Tempora quam, suscipit provident! Cupiditate debitis, dignissimos, temporibus molestias, suscipit labore quia ad explicabo, asperiores culpa impedit.</p>
  </div>
  <div>
    <img src="https://picsum.photos/200/300" alt="" height="200" width="300"/>
    <p>Perspiciatis, quam fuga quibusdam nulla pariatur libero architecto placeat eum est odit, velit vel? Temporibus accusamus cupiditate dolorum a recusandae dolores placeat reprehenderit iusto, debitis nisi ratione doloremque repellendus tempora.</p>
  </div>
  <div>
    <img src="https://picsum.photos/200/300" alt="" height="200" width="300"/>
    <p>Eligendi cum reprehenderit eum velit sit sint debitis, error, voluptatibus omnis praesentium sed tenetur ipsam ut autem ab, beatae, soluta. Nam earum esse perferendis. Commodi voluptatum minima quisquam dolor, cum!</p>
  </div>
  <div>
    <img src="https://picsum.photos/200/300" alt="" height="200" width="300"/>
    <p>Nemo quam maxime, facilis officiis velit nulla minus doloribus ipsam eaque fugit id dignissimos unde assumenda cum aut nihil doloremque repellat error libero quod adipisci et. Nam dignissimos eligendi atque.</p>
  </div>
  <div>
    <img src="https://picsum.photos/200/300" alt="" height="200" width="300"/>
    <p>Sint et eius dolore unde provident harum. Voluptate, accusantium exercitationem laudantium veritatis aliquam, itaque eum, ipsam omnis sapiente officia sunt neque rem ad. Laudantium non repudiandae sequi culpa maxime vitae!</p>
  </div>
  <div>
    <img src="https://picsum.photos/200/300" alt="" height="200" width="300"/>
    <p>Vero consequatur velit quis ipsam reprehenderit, libero a incidunt repellendus magnam deserunt in assumenda distinctio quae impedit est molestias, laudantium perferendis. Nisi laborum labore accusantium dignissimos alias. Nesciunt, neque suscipit!</p>
  </div>
</div> 
                </div>

		);
	}
}
