import React from "react"
import {BrowserRouter,Route,Switch, Redirect} from "react-router-dom"
import {connect} from "react-redux"
import DashBoard from "./../components/home/DashBoard.js"
import Discover from "./../components/Discover.js"
import {isLoggedIn,canAccessBussiness} from "./../utils/auth"
import App from "../App"
import Signup from "./../components/phase2/Signup"
const userId = window.localStorage.getItem('username')

const PrivateRoute = ({component:Component, isLoggedIn , ...rest}) => {
 return (<Route {...rest} render= {(props)=>(
    isLoggedIn() ? <Component {...props}/>:<Redirect to="/" />
 )}  
        
  />)
}


const Verification = ({component:Component, verified , ...rest}) => {
 return (<Route {...rest} render= {(props)=>(
    !(props.verified) ? <Component {...props}/>:<Redirect to="/" />
 )}  
        
  />)
}

const Router=(props)=>{
    const {auth:{isLoggedIn},Validation:{emailValidated,phoneValidated,docValidated}} = props
   
    return (
    <BrowserRouter>
    <Switch>
        <Route exact path="/" component={App}/>
        <PrivateRoute path={'/protected'} isLoggedIn={canAccessBussiness} component={DashBoard} />
        <Verification path = {'/active/:id'} verified={emailValidated} exact component = {Signup} />
        <PrivateRoute path={'/discover'} isLoggedIn={isLoggedIn} component={Discover} />
    </Switch>
    </BrowserRouter>)
}

const MapState = (state) =>{
    const {auth,Validation} = state;
    
    return {
        auth,Validation
    }
} 
export default connect(MapState)(Router)
