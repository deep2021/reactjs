import React from 'react';
import {Redirect} from "react-router-dom"
import {connect} from "react-redux"
class RequestSectionSec extends React.Component {
    // static propTypes = {
    //  name: React.PropTypes.string,
    // };

    constructor(props) {
        super(props);
        this.state= {
            saved:false
        }
    }

    render() {
        const {one,two,toggle1,toggle2} = this.props
        console.log(this.props)
        //const {saved} = this.state
        return (
                <section>
                    
                    <div className="req-hding">
                        <h2>Request Approval</h2>
                        <div className="checkboxes">
                            <input type="checkbox" id="label1" className={"orange-checkbox1"}
                                onChange={(e)=>{
                                    console.log(e.target.value)
                                    this.props.toggle1(e.target.value==="on"?true:false)
                                }}
                            /><label className="label1" for="label1">Label1</label>




                            <input type="checkbox" id="label2" className={"orange-checkbox1"}
                            onChange={(e)=>{
                                this.props.toggle2(e.target.value==="on"?true:false)
                                    console.log(e.target.value)
                                }}
                            /><label className="label1" for="label2">Label2</label>
                        </div>
                        <button className="or-btn" onClick={()=>{
                            this.props.toggle()
                        }}>SAVE</button>
                    </div>
                    <h2 className="save-date">Latest Save : 21 APR 2018 16:25 GMT</h2>
                </section>
        );
    }
}

const MapState = (state)=>{
    const {requestAp:{one,two}} = state
    return {
        one,two
    }
}

const MapDispatch = (dispatch)=>{
    return {
        toggle1:()=>dispatch({
            type:'/change/one'
        }),
        toggle2:()=>dispatch({
            type:'/change/two'
        }),

    }
}
export default connect(MapState,MapDispatch)(RequestSectionSec)