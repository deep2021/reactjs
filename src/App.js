import React, { Component } from 'react';
import './css/style.css';
import $ from "jquery"
import Header from './components/Header';
import HeaderSecond from './components/home/HeaderSecond';
import Footer from './components/Footer';
import Items from './components/Items'
import Banner from './components/Banner';
import Middlecon from './components/Middlecon';
// import Login from './components/Login';
import {Redirect} from "react-router-dom"
import Success from './components/Success'
import AuthModel from './components/AuthModel'
import {connect} from "react-redux";
import Signup from './components/Signup';
import ForgotPass from './components/ForgotPass';
import SignSuccessfully from './components/SignSuccessfully';
import SignInSuccessfully from './components/SignInSuccessfully';
import Discover from "./components/Discover"
import {isLoggedIn} from "./utils/session";
import DocumentValidation from './components/home/DocumentValidation';
import Thanks from './components/Thanks';
import ProfilePic from './components/ProfilePic'
import {checkLogin,has2FA as F2A,Fetch} from "./utils/session" 
import ValidationSuccess from "./components/home/ValidationSuccess"  
// import Upload from './components/Upload';
// import Success from './components/Success';

// import Next from './Next'



const cardItems= [

                        {
                          title:'Title One',
                          subTitle:'DEsctipton 1',
                          description:'A simple Description',
                          daysLeft:'5',
                          time:'90:00:1',
                          image:require('./img/default.png'),
                          percentage:'69',
                          id:1,
                          softCap:25,
                          hardCap:100
                        },
                        {
                          title:'Title One',
                          subTitle:'DEsctipton 1',
                          description:'A simple Description',
                          daysLeft:'5',
                          time:'90:00:1',
                          image:require('./img/default.png'),
                          percentage:'70',
                          id:2,
                          softCap:22,
                          hardCap:100

                        },{
                          title:'Title One',
                          subTitle:'DEsctipton 1',
                          description:'A simple Description',
                          daysLeft:'5',
                          time:'90:00:1',
                          image:require('./img/default.png'),
                          percentage:'71',
                          id:3,
                          softCap:30,
                          hardCap:100

                        },{
                          title:'Title One',
                          subTitle:'DEsctipton 1',
                          description:'A simple Description',
                          daysLeft:'5',
                          time:'90:00:1',
                          image:require('./img/default.png'),
                          percentage:'73',
                          softCap:1,
                          hardCap:100
                        },{
                          title:'Title One',
                          subTitle:'DEsctipton 1',
                          description:'A simple Description',
                          daysLeft:'5',
                          time:'90:00:1',
                          image:require('./img/default.png'),
                          percentage:'75',
                          id:4,
                          softCap:1,
                          hardCap:100
                        },{
                          title:'Title One',
                          subTitle:'DEsctipton 1',
                          description:'A simple Description',
                          daysLeft:'5',
                          time:'90:00:1',
                          image:require('./img/default.png'),
                          percentage:'85',
                          id:5,
                          softCap:1,
                          hardCap:100
                        },{
                          title:'Title One',
                          subTitle:'DEsctipton 1',
                          description:'A simple Description',
                          daysLeft:'5',
                          time:'90:00:1',
                          image:require('./img/default.png'),
                          percentage:'35',
                          id:6,
                          softCap:1,
                          hardCap:100
                        },{
                          title:'Title One',
                          subTitle:'DEsctipton 1',
                          description:'A simple Description',
                          daysLeft:'5',
                          time:'90:00:1',
                          image:require('./img/default.png'),
                          percentage:'25',
                          id:0,
                          softCap:1,
                          hardCap:100
                        },{
                          title:'Title One',
                          subTitle:'DEsctipton 1',
                          description:'A simple Description',
                          daysLeft:'5',
                          time:'90:00:1',
                          image:require('./img/default.png'),
                          percentage:'9',
                          id:7,
                          softCap:1,
                          hardCap:100
                        },{
                          title:'Title One',
                          subTitle:'DEsctipton 1',
                          description:'A simple Description',
                          daysLeft:'5',
                          time:'90:00:1',
                          image:require('./img/default.png'),
                          percentage:'10',
                          id:8,
                          softCap:1,
                          hardCap:100
                        },{
                          title:'Title One',
                          subTitle:'DEsctipton 1',
                          description:'A simple Description',
                          daysLeft:'5',
                          time:'90:00:1',
                          image:require('./img/default.png'),
                          percentage:'99',
                          id:9,
                          softCap:1,
                          hardCap:100
                        },{
                          title:'Title One',
                          subTitle:'DEsctipton 1',
                          description:'A simple Description',
                          daysLeft:'5',
                          time:'90:00:1',
                          image:require('./img/default.png'),
                          percentage:'66',
                          id:10,
                          softCap:1,
                          hardCap:100
                        },{
                          title:'Title One',
                          subTitle:'DEsctipton 1',
                          description:'A simple Description',
                          daysLeft:'5',
                          time:'90:00:1',
                          image:require('./img/default.png'),
                          percentage:'33',
                          id:11,
                          softCap:1,
                          hardCap:100
                        },{
                          title:'Title One',
                          subTitle:'DEsctipton 1',
                          description:'A simple Description',
                          daysLeft:'5',
                          time:'90:00:1',
                          image:require('./img/default.png'),
                          percentage:'41',
                          id:12,
                          softCap:70,
                          hardCap:100
                        },{
                          title:'Title One',
                          subTitle:'DEsctipton 1',
                          description:'A simple Description',
                          daysLeft:'5',
                          time:'90:00:1',
                          image:require('./img/default.png'),
                          percentage:'71',
                          id:13,
                          softCap:1,
                          hardCap:100
                        }

]
const makeHidden= ({dispatch})=>{
  console.log(dispatch({
    type:'validation/success/hide'
  })) 
}


class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      isLoggedIn:isLoggedIn(),
      hidden:false
    }
  }



componentWillMount = ()=>{
        const {value:user} = Fetch('user') || null
        if(user){
            const {validation:{has2FA}} = user;
            this.setState({
                ...this.state,
                has2FA
            })
        }

        console.log(user)      
    }
  

  render() {
        console.log(this.state);
    return (
       <div className="wrapper"
            onClick={()=>{
              const {showProj,showProfile} = this.props
              if(this.props.showProj)
                  this.props.hideProject()

               if(showProfile)
                this.props.hideProfileModel() 

                if(this.props.identity){
                  this.props.hideIdentity()
                }

            }}
              >
             <Discover isLoggedIn={isLoggedIn}/>
            {this.state.isLoggedIn?<HeaderSecond />:<Header />}
            <Signup />
            <AuthModel {...this.state}/>
            <Success />
            <Thanks />
            <SignInSuccessfully />
            <DocumentValidation />
            <ValidationSuccess 
              success={this.props.validateSuccess}
              message={'Validation Completed !'}
              action={"validation/success/hide"}
            />

            <ValidationSuccess 
              success={this.props.phoneValidationPopup}
              message={'Phone verification Completed'}
              action={'validation/success/hide/phone'}
            />
            <ProfilePic />
            <ForgotPass />
            <div className="body-wrapper">
            <Banner />
                <section>
                <Middlecon />
                    <div className="items">

                      {
                        cardItems.map(item=>(
                           <Items item={item} key={item.id}/> 
                          ))
                      }
                      
                    </div>
                    <button className="load-more">Load More..</button>
                </section>
                <Footer />
            </div>
        </div>
    );
  }
}
const MapState = ({auth,models})=>{
    const {isLoggedIn} = auth;
    const {validateSuccess,showDocModel,showProfile,showProj,identity,phoneValidationPopup} = models
    console.log('IS LOGGED IN'+isLoggedIn)
    return {
        isLoggedIn,
        validateSuccess,
        showProfile,
        showDocModel,
        showProj,
        identity,
        phoneValidationPopup
    }
}


const MapDispatch = (dispatch)=>{
  return {
    reset:()=>dispatch({
      type:'reset'
    }),

    hideProject:()=>{
            dispatch({
                type:'dashboard/project/hide'
                })
        },
        hideDoc:()=>{
            dispatch({
                type:'dashboard/docs/hide'
            })
        },
        hideProfileModel:()=>{
            dispatch({
                type:'profile/upload/hide'
            })
        },

         hideIdentity:()=>{
            dispatch({
                type:'identity/hide'
            })
        }
  }
}
export default connect(MapState, MapDispatch)(App);