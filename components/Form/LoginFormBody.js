
import Input from './Input'
import SubmitButton from './SubmitButton'
import {useState} from 'react'
import Link from 'next/link'


const LoginFormBody = () => {
    const [emailInput, setEmailInput] = useState('')
    const [password, setPasssword] = useState('')

    const  handleEmailChange = (e) => {
        setEmailInput(e.target.value)
    }

    const handlePassChange = (e) => {
        setPasssword(e.target.value)
    }

    return(
        <>
            <div className="">
                <Input 
                type='email'
                name='studentEmail'
                placeholder='Email' 
                isRequired= {true}
                value={emailInput}
                onChange={handleEmailChange}
                />
                <Input 
                type='password'
                name='studentPassword'
                placeholder='Enter Your Password' 
                isRequired= {true}
                value={password}
                onChange={handlePassChange}
                />
                
                <SubmitButton />

            <Link href='/'>
                <a className='ml-[70px] text-red-600 font-semibold underline'>Register As A User..</a>
            </Link>
                
            </div>
        </>
    )
}

export default LoginFormBody