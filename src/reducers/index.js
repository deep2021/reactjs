import {combineReducers} from "redux"
import {Fetch} from "../utils/auth"
import {SignUpReducer,
		LoginReducer,
		ForgetPasswordReducer,
		ApplicationAccess,
		AuthTokenReducer,
		ProjModelReducer,
		DocsModelReducer,
		requestApproval,
		documentReducer,
		profilePic
		} from "./authReducer"
const INITAPP = {
	showLogin:false,
	showSignUp:false,
	showForgotten:false,
	showSuccess:false,
	showVerify:false,
	showProj:false,
	showDocModel:false,
	discover:false,
	signUpSuccess:false,
	signInSuccess:false,
	showProfile:false,
	validateSuccess:false,
	identity:false,
	phoneAuth:false,
	docAuth:false,
	phoneValidationPopup:false
}



const AppState = (state=INITAPP,action)=>{

		switch(action.type){
			case 'app/login/show':
				return {
					...state,
					showLogin:!state.showLogin
				}

			case 'app/signup/show':
				return {
					...state,
					showSignUp:!state.showSignUp
				}

			case 'app/login/hide':
				return {
					...state,
					showLogin:false
				}

			case 'app/signup/hide':
				return {
					...state,
					showSignUp:false
				}

			case 'app/forget/show':
				return {
					...state,
					showForgotten:true
				}

			case 'app/forget/hide':
				return {
					...state,
					showForgotten:false
				}
			case 'user/verify/show':
				return{
					...state,
					showVerify:true
				}
			case 'user/verify/hide':
				return{
					...state,
					showVerify:false
				}
			
			case 'dashboard/project/show':
				return{
					...state,showProj:true
				}


			case  'dashboard/project/hide':
				return{
					...state,showProj:false
				}
			
			case 'dashboard/docs/show':
				return{
					...state,showDocModel:true
				}

			case 'dashboard/docs/hide':
				return{
					...state,showDocModel:false
				}

			case 'app/discover/toggle':
				return {
					...state,
					discover:!state.discover
				}

			case 'app/phoneVal/show':
				return {
					...state,
					phoneAuth:true
				}


			case 'app/phoneVal/hide':
				return {
					...state,
					phoneAuth:false
				}


			case 'app/docVal/show':
				return {
					...state,
					docAuth:true
				}


			case 'app/docVal/hide':
				return {
					...state,
					docAuth:false
				}


			case 'app/signup/success/show':
				return {
					...state,
					signUpSuccess:true
				}


			case 'app/signup/success/hide':
				return {
					...state,
					signUpSuccess:false
				}

			case 'app/signin/success/show':
				return {
					...state,
					signInSuccess:true
				}


			case 'app/signin/success/hide':
				return {
					...state,
					signInSuccess:false
				}


			case 'validation/success/hide':
					return {
						...state,
						validateSuccess:false
					}


			case 'validation/success/show':
					return {
						...state,
						validateSuccess:true
					}


			case 'validation/success/hide/phone':
					return {
						...state,
						phoneValidationPopup:false
					}


			case 'validation/success/show/phone':
					return {
						...state,
						phoneValidationPopup:true
					}

			case 'identity/show':
					return {
						...state,
						identity:true
					}

			case 'identity/hide':
					return {
						...state,
						identity:false
					}

			case 'profile/upload':
				return{
				...state,showProfile:!state.showProfile
				}

			case 'profile/upload/hide':
				return{
				...state,showProfile:false
				}

			case 'reset':
				
				return INITAPP

			 
				default:
					return state


		}

}

const {value:user} = Fetch('user')
const {validation} = user || {
	phone:false,
	email:false,
	doc:false
}

const {email,phone,doc} = validation || {
	phone:false,
	email:false,
	doc:false	
}

const init_Val = {
	emailValidated:email,
	phoneValidated:phone,
	docValidated:doc,
	verified:false,
} 

const Validation = (state=init_Val,action)=>{
	switch(action.type){
		case "app/validate/email":
			return {
				...state,
				emailValidated:true
			}
		case "app/validate/phone":
			return {
				...state,
				phoneValidated:true
			}

		case "app/validate/doc":
			return {
				...state,
				docValidated:true
			}

		case "app/verified":
			return {
				...state,
				verified:true
			}

		default:
			return state	

	}
}


export default combineReducers({
	models:AppState,
	signUp:SignUpReducer,
	signIn:LoginReducer,
	forget:ForgetPasswordReducer,
    auth:ApplicationAccess,
    token:AuthTokenReducer,
    project_model:ProjModelReducer,
    doc_model:DocsModelReducer,
    requestAp:requestApproval,
    showProfileModel:profilePic,
    Validation,
    docx:documentReducer
})
