import {Fetch as localFetch} from "./auth"
const SessionStoreUtil = ({key,value})=>{
	window.sessionStorage.setItem(key,value)
}

const beforeSave = (key,value)=>{
	return {
		key,value:JSON.stringify(value)
	}
}

const parseFetched = ({key,value})=> {
	return {
		key,
		value:JSON.parse(value)
	}
}

const fetchUtil = (key)=> {
	const results = window.sessionStorage.getItem(key)
	return {
		key,value:results
	}
}

export const SessionStore = ({key,value})=>SessionStoreUtil(beforeSave(key,value))

export const Fetch = (key)=>parseFetched(fetchUtil(key))

export const notVerified = ()=>{
	SessionStore({
		key:'isverified',
		value:false
	})
}


export const Verified = ()=>{
	SessionStore({
		key:'isverified',
		value:true
	})
}


export const getVerified = ()=>{
	const {value} = Fetch('isverified')
	return value	
}






export const has2FA = (user)=>{
	const {username,has2FA} = user
	if(has2FA ==(undefined || null || ''))
		return {'error':'404'}
	else if(has2FA == (true||'true'))
		return true
	else
		return false	
} 



export const removeProperty = (obj, property) => {
  return  Object.keys(obj).reduce((acc, key) => {
    if (key !== property) {
      return {...acc, [key]: obj[key]}
    }
    return acc;
  }, {})
}

export const Remove = (record,key)=>{
	const {value} = Fetch(record)
	const y = removeProperty(value,key)
	SessionStore({
		key:record,
		value:y
	})
	return true;
}


export const Update = (record,key,nval)=>{
    const {value} = Fetch(record)
    const nobj = {
        ...value,
        [key]:nval
    }
    
    SessionStore({
            key:record,
            value:nobj
        })

    return true
}


export const isLoggedIn = ()=>{
	const {value} = Fetch('user')
	if(value)
	{
		const { username:userId } = value
		if(userId !== undefined)
			if(userId!== null)
				if(userId.length > 0)
					return true

	}
	return false			
}


export const setUserSession =(uname)=>{
	const {value} = localFetch('user')
	if(value){
		const {username} = value
		if (username === uname) {
			SessionStore({
				key:'user',
				value:{...value}
			})	

		} else {
			return false
		}
	}
}


export const check2FA = ()=>{
	const {value} = localFetch('user')
	const result = has2FA(value)
	return result

} 



export const checkLogin = (uname)=>{
	const {value} = localFetch('user')
	if(value){
		const {username} = value
		if (username === uname) {
			SessionStore({
				key:'user',
				value:{...value}
			})
			return true	

		} else {
			return false
		}
	}
}