
const storeUtil = ({key,value})=>{
	window.localStorage.setItem(key,value)
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
	const results = window.localStorage.getItem(key)
	return {
		key,value:results
	}
}

export const Verified = ()=>{
	Store({
		key:'isverified',
		value:true
	})
	return true
}

export const Store = ({key,value})=>storeUtil(beforeSave(key,value))

export const Fetch = (key)=>parseFetched(fetchUtil(key))

export const notVerified = ()=>{
	Store({
		key:'isverified',
		value:false
	})
}



export const has2FA = (user)=>{
	const {username,has2Fa} = user
	if(has2Fa ==(undefined || null || ''))
		return {'error':'404'}
	else if(has2Fa == (true||'true'))
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
	Store({
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
    
    Store({
            key:record,
            value:nobj
        })

    return true
}


export const isLoggedIn = ()=>{
	const {value:{username:userId}} = Fetch('user')
	
	if(userId !== undefined)
		if(userId!== null)
			if(userId.length > 0)
				return true

	return false			
}

export const getVerified = ()=>{
	const {value} = Fetch('user') || null
	if (value){
		const {validation:{
			doc,phone,email
		} = {doc:false,phone:false,email:false}} = value || null

		return (doc && phone && email)
	}else{
		return false
	}	
}

export const canAccessBussiness = ()=>{
	const {value:user} = Fetch('user')
	const {type} = user
	 return type=="bussiness"?true:false
} 