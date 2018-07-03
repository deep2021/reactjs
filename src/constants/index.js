const endpoint ='http://localhost:5000'
const USignUpStandard = `${endpoint}/user/signUpStandard`
const BSignUpStandard = `${endpoint}/business/signUpStandard`
const uploadAvatarImage = `${endpoint}/uploadAvatarImage`
const signUpGoogle = `${endpoint}/user/signUpGoogle`
const BussnessGoogleSignUp = `${endpoint}/business/signUpGoogle`
const BussnessFacebookSignUp = `${endpoint}/business/signUpFacebook`
const EmailVerify = `${endpoint}/emailVerify`
const QRCodeGen = `${endpoint}/requestQrCodeRegistration`
const AuthQrCoreRequest = `${endpoint}/2AuthQrCodeRequest`
const LoginPhase0 = `${endpoint}/loginPhase0`
const LoginPhase1 = `${endpoint}/loginPhase1`
const CheckTokenValidity = `${endpoint}/checkTokenValidity`
const ShowSmallDescription = `${endpoint}/showSmallDescription`
const VerifyIdentity = `${endpoint}/verifyIdentity`
const sendMobileNumberValidation = `${endpoint}/sendMobileNumberValidation`
const  recoverPassword = `${endpoint}/recoverPassword`
const changePasswordRequest = `${endpoint}/changePasswordRequest`


export {
	USignUpStandard,
	BSignUpStandard,
	uploadAvatarImage,
	signUpGoogle,
	BussnessGoogleSignUp,
	BussnessFacebookSignUp,
	EmailVerify,
	QRCodeGen,
	AuthQrCoreRequest,
	LoginPhase0,
	LoginPhase1,
	CheckTokenValidity,
	ShowSmallDescription,
	VerifyIdentity,
	sendMobileNumberValidation,
	recoverPassword,
	changePasswordRequest
}

