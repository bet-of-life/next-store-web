export const validatePassowrd = (password: string, confirmPassword: string): boolean => {
    if(password === confirmPassword){
        return true
    }else{
        return false
    }
}