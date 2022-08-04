import Input from './Input'
import SubmitButton from './SubmitButton'


const RegisterFormBody = () => {
    return(
        <>
            <div className="">
                <Input 
                type='text'
                placeholder='Name' 
                isRequired= {true}
                
                />
                <Input 
                type='email'
                placeholder='Email' 
                isRequired= {true}
                
                />
                   <Input 
                type='password'
                placeholder='Enter Your Password' 
                isRequired= {true}
                
                />
                <Input 
                type='password'
                placeholder='Confirm Your Password' 
                isRequired= {true}
              
                />
                <SubmitButton />
                
            </div>
        </>
    )
}

export default RegisterFormBody