import {Store,Fetch} from "./auth"

export const PhoneVerification = (code,o,dispatch=null)=>{
	if (code === "97136") {
		
		const {value:user}  = Fetch('user')
		const {validation} = user

		console.log(validation)
		
		const nobj = {
			...user,
			validation:{
				...validation,
				phone:true
			}
		}


		Store({
			key:'user',
			value:nobj
		})

		o.setState({
			status:true
		})

		if(dispatch){
			dispatch({
				type:'validation/success/show/phone'
			})
		}

		o.Hide()

	} else {
		o.setState({
			status:false
		})
	}
}

export const verifyEmail = (code)=>{
try{
		if (code === "123456") {
		
		const {value:user}  = Fetch('user')
		const {validation} = user

		console.log(validation)
		
		const nobj = {
			...user,
			validation:{
				...validation,
				has2FA:true,
				email:true
			}
		}


		Store({
			key:'user',
			value:nobj
		})





	} else {
		
		alert('Code not valid try Again')
	}
}catch(e){
	alert('No Account Exists')
}

}


export const verifyDoc = (code)=>{
	if (code === "0000000") {
		
		const {value:user}  = Fetch('user')
		const {validation} = user

		console.log(validation)
		
		const nobj = {
			...user,
			validation:{
				...validation,
				doc:true
			}
		}


		Store({
			key:'user',
			value:nobj
		})

	
	} else {
		alert('invalid doc Id')
	}
}

export const VerificationCompleted = (dispatch)=>{
	const {value:user}  = Fetch('user')
	if(user){
		const {validation} = user
		const {email,phone,doc} = validation
		console.log(dispatch({
			type:'validation/success/show'
		}))
		return (email && phone && doc)
	}else{
		return false
	} 
}


export const  verifyWithout2FA= ()=>{
	const {value:user}  = Fetch('user')
		const {validation} = user

		console.log(validation)
		
		const nobj = {
			...user,
			validation:{
				...validation,
				has2FA:false,
				email:true
			}
		}


		Store({
			key:'user',
			value:nobj
		})

		return true
}

