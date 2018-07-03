import React from 'react';
import {connect} from "react-redux"

class Items extends React.Component {
/*    static propTypes = {
        name: React.PropTypes.string,
    };
*/
    constructor(props) {
        super(props);
       this.state = {
           hidden:false
       }
    }
    componentDidMount(){
      var el = document.getElementsByClassName('p-bars');
      
      this.setState({
        ...this.state,
        softCapW:el[0].offsetWidth
      })     }

    render() {
      const {softCapW} = this.state
      console.log(softCapW)
        const {title,subTitle,description,percentage,daysLeft,time,image,softCap,hardCap} = this.props.item
        return (<div className="item">
                   <div className="post-thumbnail" >
                   <img alt="DEFAULT" src={image} onMouseOver={()=>{
                       this.setState({
                           ...this.state,
                           hidden:true
                       })
                       console.log(this.state)
                       
                   }}

                   onMouseLeave = {()=>{
                     this.setState({
                           ...this.state,
                           hidden:false
                       })  
                     console.log(this.state)

                   }}
                   />
                   <div className="img-overlay">
                   <a href="#" className="btn-discover"
                   onClick={()=>{
                       this.props.dispatch({
                           type:'app/discover/toggle'
                       })
                   }}
                   >Discover</a>
                   </div>
                   </div>
                        <h2 className="item-title">
                               {title}
                           </h2>
                           <h3 className="item-sub-title">
                               {subTitle}
                           </h3>
                           <p>
                               {description}
                           </p>
                           <h4 className="progress-hding" style={{
                            fontSize:'14px'
                           }}>
                               investment progress
                           </h4>
                           <div class="p-bars" >

                           <div className="left-cap" style={{
                            background:`url('/xcap.png') no-repeat`,
                            backgroundSize: 'contain',
                            backgroundClip: 'content-box',
                            marginLeft:`${(softCapW*softCap)/100}px`
                           }}></div>

                               <div className="percentage-bar" style={{
                                width:`${percentage}%`
                               }}>{percentage}</div>

                           </div>
                            <div className="right-cap"></div>


                           <div className="progress-bottom">
                                <div className="cpl"

                                >
                                    <h6 style={{
                                        margin:0
                                    }}>Soft Cap</h6>
                                    <h5
                                    style={{
                                        margin:0
                                    }}

                                    >{softCap}M USD</h5>
                                </div>
                                <div className="cpr">
                                    <h6 style={{
                                        margin:0
                                    }}>Hard cap</h6>
                                    <h5 style={{
                                        margin:0
                                    }}>{hardCap}M USD</h5>
                                </div>
                           </div>
                           <h4 className="rem-time-hding">
                               Remaining time to invest
                           </h4>
                           <div className="time">
                               <div>
                                  {daysLeft} <span>Days</span>
                               </div>
                               <div>
                                  {time}
                               </div>
                           </div>
                       </div>
        );
    }
}


export default connect()(Items)