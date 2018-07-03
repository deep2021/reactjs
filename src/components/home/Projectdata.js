import React from 'react';
import CKEditor from "./../data/ckeditor"

const data = `
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

`
export default class Projectdata extends React.Component {
    // static propTypes = {
    //     name: React.PropTypes.string,
    // };

    constructor(props) {
        super(props);
        this.state = {
            content:'NULL'
        }
    }

    render() {
        return (
            <section>
                    <div className="upload-container">
                        <div className="form-inp">
                            <div className="upload-box">
                                <img src={require('../../img/add-image.png') }/>
                            </div>
                            <button className="upload-logo-btn" ><img src={require('../../img/camera.png')}/>  UPLOAD LOGO</button>
                            <input type="file" className="upload-logo" />
                        </div>

                        <div className="form-inp">
                            <label>Project Name</label>
                            <input type="text" name="project_name" />
                        </div>

                        <div className="form-inp">
                            <label>Abstract</label>
                            <select multiple>
                                <option value="Item1">Item1</option>
                                <option value="Item2">Item2</option>
                                <option value="Item3">Item3</option>
                                <option value="Item4">Item4</option>
                            </select>
                        </div>

                        <div className="form-inp">
                            <label>Mission</label>
                            <textarea name="mission"></textarea>
                        </div>

                        <div className="form-inp">
                            <label>Soft Cap</label>
                            <span>$</span>
                            <input type="text" className="with-icon" name="soft_cap" />
                        </div>

                        <div className="form-inp">
                            <label>Hard Cap</label>
                            <span>$</span>
                            <input type="text" className="with-icon" name="hard_cap" />
                        </div>


                        <div className="form-inp">
                            <label>Total Supply</label>
                            <input type="text" name="total_supply" />
                        </div>

                        <div className="form-inp">
                            <label>Start Date</label>
                            <span><img src={require('../../img/calender.png')}/></span>
                            <input type="date" name="start_date" />
                        </div>

                        <div className="form-inp">
                            <label>End Date</label>
                            <span><img src={require('./../../img/calender.png')} /></span>
                            <input type="date" name="end_date" />
                        </div>

                        <div className="form-inp">
                            <label>Token Price</label>
                            <table>
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
                                        <td>1 Apr 2018 09:00</td>
                                        <td>15 Apr 2018 18:00</td>
                                        <td>$0, 10</td>
                                        <td>30%</td>
                                    </tr>
                                    <tr>
                                        <td>1 May 2018 09:00</td>
                                        <td>15 May 2018 18:00</td>
                                        <td>$0, 20</td>
                                        <td>30%</td>
                                    </tr>
                                    <tr>
                                        <td>1 Jun 2018 09:00</td>
                                        <td>15 Jun 2018 18:00</td>
                                        <td>$0, 30</td>
                                        <td>30%</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <div className="form-inp">
                            <label>Name Token / Coin</label>
                            <input type="text" name="name_token" />
                        </div>

                        <div className="form-inp">
                            <label>Ticker</label>
                            <input type="text" name="ticker" />
                        </div>
                        <div className="form-inp">
                            <label>ERC20 token</label>
                            <input type="radio" name="token" id="token1" /><label for="token1">No</label>
                            <input type="radio" name="token" id="token2" /><label for="token2">Yes</label>
                        </div>

                        <div className="form-inp">
                            <label>Upload Form</label>
                            <div className="drop-box-1">
                                <img src={require('../../img/plus.png')}/>
                                <div>Upload File</div>
                                <input type="file" className="upload-files-inp" />
                            </div>
                            <button className="ok-btn">Ok</button>
                            <div className="or1">Or</div>
                            <button className="canc-btn">Cancel</button>
                        </div>

                        
                        <div style={{clear:'both'}}>    
                             <label style={{
                                fontSize: '22pt',
                                color: 'rgba(127, 143, 164, 255)',
                                fontWeight: 100,
                                fontFamily: 'Roboto',
                                display: 'block',
                                lineHeight: '62px',
                             }}>Description</label>
                            <CKEditor   
                                  activeClass="P"
                                  content={data}
                                  events={{
                                    "blur": ()=>console.log('blurred'),
                                    "afterPaste": ()=>console.log('content has pasted'),
                                    "change": ()=>console.log('changed content'),
                                  }}
                                 />
                        
                        </div>
                          

                        <div className="form-inp">
                            <label>Bitcoin Talk</label>
                            <input type="text" name="bitcoin_talk" />
                        </div>
                        <div className="form-inp">
                            <label>Github</label>
                            <input type="text" name="github" />
                        </div>

                        <div className="form-inp">
                            <label>Twitter</label>
                            <input type="text" name="twitter" />
                        </div>

                        <div className="form-inp">
                            <label>Telegram</label>
                            <input type="text" name="telegram" />
                        </div>

                        <div className="form-inp">
                            <label>Discord</label>
                            <input type="text" name="discord" />
                        </div>

                        <div className="form-inp">
                            <label>Reddit</label>
                            <input type="text" name="reddit" />
                        </div>

                        <div className="form-inp">
                            <label>Facebook</label>
                            <input type="text" name="facebook" />
                        </div>

                        <div className="form-inp">
                            <label>Youtube</label>
                            <input type="text" name="youtube" />
                        </div>


                    </div>
                </section>
        );
    }
}
