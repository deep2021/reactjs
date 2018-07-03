import React from 'react';
import './../css/discover.css';
import $ from 'jquery'
import ProjectHeader from './discover/ProjectHeader';
import ProjectName from './discover/ProjectName';
import FirstSection from './discover/FirstSection';
import SecondSection from './discover/SecondSection';
import ThirdSection from './discover/ThirdSection';
import SeventhSection from './discover/SeventhSection';
import {connect} from "react-redux"
import {isLoggedIn} from "./../utils/session"
 class Discover extends React.Component {
	// static propTypes = {
	// 	name: React.PropTypes.string,
	// };


	constructor(props) {
		super(props);
		const userId = window.localStorage.getItem('username')
		this.state = {
			isLoggedIn:isLoggedIn()
		}
		
	}

	componentDidMount(){
			var modal = document.getElementById('myModal');
			window.onclick = function(event) {
			    if (event.target == modal) {
			        modal.style.display = "none";
			    }
			}
	}

	render() {
		 
		console.log(this.props)
		return (
			<div id="myModal" className="model" style={{
				display:this.props.discover?'block':'none'
			}}>
            <div className="modal-content">
				<ProjectHeader />
				           		<div className="d-content-section">
                <ProjectName />
                <span className="heading-1">Abstract</span>
                <FirstSection />            	
                
                {
                	this.state.isLoggedIn ?
                	<React.Fragment>
                		<SecondSection />
                		<ThirdSection />
                		<SeventhSection />
                	</React.Fragment>
                	:
                	<React.Fragment>
                		<div style={{display:'flex',width:'82vw', alignItems:'center', justifyContent:'center'}}>
                			<h1 style={{color:'#f0ae32'}}>Login To Invest </h1>
                		</div>
                	</React.Fragment>

                }
           		</div>
           		</div>
           	</div>
		);
	}
}


function MapDispatch(dispatch){
	return {
		hideMe:()=>dispatch({
			type:'app/discover/toggle'
		})
	}
}

const mapState = (state)=>{
	const {discover} = state.models
	return {
		discover
	}
}
export default connect(mapState,MapDispatch)(Discover)