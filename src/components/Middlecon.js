import React from 'react';
import $ from "jquery"
import InputRange from "react-input-range"

const toggle = (e,state,{key,value,slider}) => {
        const disabled = {
            b1:false,
            b2:false,
            b3:false,
            b4:false
        }
        const all = {
            ...disabled,
            [key]:value,
            value:slider
        }

        e.setState(all)

        console.log(all)
    } 

export default class Middlecon extends React.Component {
    // static propTypes = {
    //  name: React.PropTypes.string,
    // };

    constructor(props) {
        super(props);
        this.state = {
            b1:true,
            b2:false,
            b3:false,
            b4:false,
            value:25
        }
    }

    
    componentDidMount = ()=>{
        
    }

    componentWillUpdate(nextProps, nextState) {
            console.log(nextProps,nextState)
        }

    render() {
        const {b1,b2,b3,b4} = this.state

        

        return (
            <div>
                    <h2 className="sec-hding">GROWING OPPORTUNITIES</h2>
                    <p className="sec-para">Find your next investment</p>
                    <ul id="change">
                        <li>
                            <button className={b1?"active":""} onClick={()=>toggle(this,this.state,{key:'b1',value:true,slider:'25'})}>All</button>
                        </li>
                        <li>
                            <button className={b2?"active":""} onClick={()=>toggle(this,this.state,{key:'b2',value:true,slider:'50'})} >COMING</button>
                        </li>
                        <li>
                            <button className={b3?"active":""} onClick={()=>toggle(this,this.state,{key:'b3',value:true,slider:'75'})}>ONGOING</button>
                        </li>
                        <li>
                            <button className={b4?"active":""} onClick={()=>toggle(this,this.state,{key:'b4',value:true,slider:'100'})}>COMPLETED</button>
                        </li>
                    </ul>
                    <div className="slider-wrapper">
                        <div className="slidecontainer">
                          <input type="range" 
                                 min="25" 
                                 max="100" 
                                 defaultValue={this.state.value}
                                 value={this.state.value} 
                                 className="slider" 
                                 id="myRange" 
                                 step="25"
                                 onChange={(e)=>{
                                    console.log(this.state,e.target.value)
                                    const value = e.target.value
                                    this.setState({
                                        ...this.state,
                                        value
                                    })
                                    switch(parseInt(value)){
                                        case 25:
                                            toggle(this,this.state,{key:'b1',value:true,slider:'25'})
                                            break

                                        case 50:
                                            toggle(this,this.state,{key:'b2',value:true,slider:'50'})
                                            break

                                        case 75:
                                            toggle(this,this.state,{key:'b3',value:true,slider:'75'})
                                            break

                                        case 100:
                                            toggle(this,this.state,{key:'b4',value:true,slider:'100'})
                                            break

                                        default:
                                            break



                                    }
                                 }}

                                  />
                        </div>
                        <div className="sliderticks">
                          <p></p>
                          <p></p>
                          <p></p>
                          <p></p>
                        </div>
                    </div>
            </div>
        );
    }
}