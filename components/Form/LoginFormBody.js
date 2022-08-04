
import Input from './Input'
import SubmitButton from './SubmitButton'

const LoginFormBody = () => {
    return(
        <>
            <div className="">
                <Input 
                type='text'
                placeholder='Name' 
                isRequired= {true}
                
                />
                <Input 
                type='password'
                placeholder='Enter Your Password' 
                isRequired= {true}
                
                />
                
                <SubmitButton />
                
            </div>
        </>
    )
}

export default LoginFormBody