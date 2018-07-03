const signUp = {
	email:'',password:'',username:'',confirm:'',terms:false,type:'user'
}
export  const SignUpReducer = (state=signUp,action)=>{
	switch(action.type){
		case 'auth/email':
			return {
				...state,
				email:action.payload.value
			}

		case 'auth/type':
		let {type} = action.payload
			return {
				...state,
				type
			}	

		case 'auth/username':
			return {
				...state,
				username:action.payload.value
			}


		case 'auth/password':
			return {
				...state,
				password:action.payload.value
			}

		case 'auth/confirm':
			return {
				...state,
				confirm:action.payload.value
			}

		case 'auth/terms':
			return {
				...state,
				terms:action.payload.value
			}


		case 'auth/reset':
			return signUp	

		default:
			return state		
	}
}

const Login = {
	username:'',
	password:''
}
export  const LoginReducer = (state=Login,action)=>{
	switch(action.type){
		case 'signin/username':
			return {
				...state,
				username:action.payload.value
			}


		case 'signin/password':
			return {
				...state,
				password:action.payload.value
			}

		case 'signin/reset':
			return Login


		default:
			return state		
	}
}


const forgotten = {
	email:""
}

export const ForgetPasswordReducer = (state=forgotten,action)=>{
	switch(action.type){
		case 'forget/email':
			return {
				...state,
				email:action.payload.value
			}
		default:
			return state
	}
}


const access = {
	userId:'',
	isLoggedIn:false
} 

export const ApplicationAccess = (state=access,action)=>{
	switch(action.type){
		case 'make/user/valid':
			return {
				...state,
				isLoggedIn:true
			}

        default:
            return state

	}
}
 

 const authTokens={
 	num1:''
 }
 export const AuthTokenReducer=(state=authTokens,action)=>
 {
 	switch(action.type){
 		case'user/num1':
 		return{
 			...state,
 			num1:action.payload.value
 		}
 		default:
 			return state

 	}
 }



 const projModel={
 	text:''
 }
export const ProjModelReducer=(state=projModel,action)=>{
	switch(action.type){
		case 'dashboard/text':
		return{
			...state,text:action.payload.value
		}
		default : return state
	}
}

const docsMadel={
 	data:'',
 	qty:200
 }
export const DocsModelReducer=(state=docsMadel,action)=>{
	switch(action.type){
		case 'dashboard/doc':
		return{
			...state,data:action.payload.value
		}
		case 'doc/change/qty':
			return {
				...state,
				qty:action.payload.value
			}
		default: return state
	}
}


export const requestApproval = (state={one:false,two:false},action)=>{
  switch(action.type){
  	case '/change/one':
  		return {
  			...state,
  			one:!state.one
  		}

  	case '/change/two':
  		return {
  			...state,
  			two:!state.two
  		}	
  	default:
  		return state
  }
}
const profileUpload={pic:""}
export const profilePic=(state=profileUpload,action)=>{
	switch(action.type){
		case 'profile/upload/image':
		return{
			...state,pic:action.payload.value
		}
		default: return state
	}
}


const docProps = {
	docId:'',
	document:'',
	phone:''
}

export const documentReducer = (state=docProps,action)=>{
	switch(action.type){
		case "app/change/docId":
			return {
				...state,
				docId:action.payload.value
			}

		case "app/change/document":
			return {
				...state,
				document:action.payload.value
			}


		case "app/change/phone":
			return{
				...state,
				phone:action.payload.value
			}

		default: 
			return state
	}
} 