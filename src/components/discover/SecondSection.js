import React from 'react';
import {connect} from "react-redux"
import InputRange from 'react-input-range';
import "../../App.css"
import {range} from "lodash"

 const inter = ['50','100','150','200']

class SecondSection extends React.Component {
    
   
    constructor(props) {
        super(props);
        const userId = window.localStorage.getItem('username')
        this.state= {
            userId,
            value:30,
            min:1,
            max:250,
            mintype:'',
            maxtype:'',
            s:50,
            intermediate:inter

        }

    }




    rangechange(){
        console.log('af')
        }


    render() {
        const {userId} = this.state
        const isLoggedIn = userId !==(null||undefined||'')?true:false
        console.log(userId)
        const {min,max,mintype,maxtype,intermediate} = this.state
        return (
                <div className="d-sec-2">
                    <div className="heading-1" style={{display:'flex', alignItems:'center',marginTop:'1em'}}>Quantity: 
                           <InputRange
                           step={50}
                                minLabel={'test'}
                                formatLabel={value => `${value}${maxtype}`}
                                minLabel={'k'}
                                maxLabel={'k'}
                                maxValue={max}
                                minValue={min}
                                value={this.state.value}
                                onChange={value => this.setState({ value })} />  

                                <input type="text" 
                                style={{
                                    padding:'10px',
                                    width:'13%',
                                    marginLeft:'70px',
                                    color:'#aaa',
                                    fontSize:'20px'
                                }}

                                ref={"barValue"}
                                defaultValue={this.state.value}
                                placeholder = {this.state.value}
                                onKeyPress = {(e)=>{
                                    if (e.key=="Enter") {
                                        const {value} = this.refs.barValue
                                         
                                        
                                        if (value >= 1 && value <= 100) {
                                           this.setState({
                                                ...this.state,
                                                value:parseInt(e.target.value),
                                                min:1,
                                                max:100,
                                                mintype:'',
                                                maxtype:'',
                                                intermediate:range(25,100,25).map(x=>`${x}`)
                                            })

                                        } else if(value >= 100 && value <= 1000){
                                           this.setState({
                                                ...this.state,
                                                value:parseInt(e.target.value),
                                                min:100,
                                                max:1000,
                                                mintype:'',
                                                maxtype:'',
                                                intermediate:range(250,1000,250).map(x=>`${x}`)
                                            })     
                                        }
                                        else if ((value >= 1000 && value <= 10000)) {
                                            this.setState({
                                                ...this.state,
                                                value:parseInt(e.target.value/1000),
                                                min:(1000/1000),
                                                max:10000/1000,
                                                mintype:'k',
                                                maxtype:'k',
                                                intermediate:range((2500/1000),(10000/1000),(2500/1000)).map(x=>`${x}k`)
                                            }) 
                                        } else if(value >= 10000 && value <= 1000000){
                                            this.setState({
                                                ...this.state,
                                                value:parseInt(e.target.value/1000),
                                                min:10000/1000,
                                                max:1000000/1000,
                                                mintype:'k',
                                                maxtype:'k',
                                                intermediate:range((25000/100),(100000/100),(25000/100)).map(x=>`${x}k`)
                                            })
                                        }
                                        else if(value >= 1000000 && value <= 1000000000){
                                            this.setState({
                                                ...this.state,
                                                value:parseInt(e.target.value/1000000),
                                                min:1000000/1000000,
                                                max:1000000000/1000000,
                                                mintype:'M',
                                                maxtype:'M',
                                                intermediate:range((25000/100),(100000/100),(25000/100)).map(x=>`${x}M`)
                                            })
                                        }
                                        else if(value >= 1000000000 && value <= 100000000000){
                                            this.setState({
                                                ...this.state,
                                                value:parseInt(e.target.value/1000000000),
                                                min:1000000000/1000000000,
                                                max:100000000000/1000000000,
                                                mintype:'B',
                                                maxtype:'B',
                                                intermediate:range((25000/1000),(100000/1000),(25000/1000)).map(x=>`${x}B`)
                                            })
                                        }

                                }

                                         

                                }}
                                
                                />    
                                         
                    </div>

                    
                      <ul style={{
                                listStyle: 'none',
                                display: 'flex',
                                position: 'absolute',
                                left: '18.5%',
                                width: '37%',
                      }}>
                            <li className="iconItem">{min}{mintype}</li>
                            <React.Fragment>
                                {
                                    intermediate && intermediate.map(x=>(
                                        <li id ="item" className="iconItem">{x}</li>
                                        ))
                                }
                            </React.Fragment>
                            <li className="iconItem">{max}{maxtype}</li>
                      </ul>
                    
                    <p className="heading-1">Currency: <span style={{verticalAlign:'middle'}}>CRC</span></p>
                    <label>
                        <span className="heading-1">Pay with: </span>
                        <input list="pay-methods" name="pay-methods" class="styled-select" style={{
                            padding:'10px 2px'
                        }}/>
                           <datalist id="pay-methods">
                               <option selected value="ETH">ETH</option>
                               <option value="ETH 1">ETH 1</option>
                               <option value="ETH 2">ETH 2</option>
                               <option value="ETH 3">ETH 3</option>
                           </datalist>
                    </label>
                    <p className="invest-btn">
                        <button className="d-button">
                            {isLoggedIn ?'INVEST':'LOGIN'}
                        </button>
                    </p>
                </div>
        );
    }
}

const mapState = (state)=>{
    const {doc_model:{qty}} = state
    return {
        qty
    }
}

const mapDispatch = (dispatch) => {
    return {
        changeQty:(value)=>{
        dispatch({
            type:'doc/change/qty',
            payload:{
                value
            }
        })
    }
    }
}
export default connect(mapState,mapDispatch)(SecondSection)