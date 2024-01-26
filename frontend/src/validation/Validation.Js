const Validation = (state , payload) => {
const error = {
    email : '',
    password : '',
    confirmPassword : ''
}
if(payload.password === ''){
error.password = 'Password cannot be empty'
}
if( /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(payload.email)){
    error.email = ''
}else{
    error.email = 'Enter a valid email'
}
if(state === 'login'){
    delete error.confirmPassword
}else if(payload.password !== payload.confirmPassword){
    error.confirmPassword = 'password is not the same as its repetition'
}
return error
}
export {Validation}