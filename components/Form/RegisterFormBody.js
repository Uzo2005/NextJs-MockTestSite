import styles from './Form.module.css'
import Input from './Input'
import SubmitButton from './SubmitButton'


const RegisterFormBody = () => {
    return(
        <>
            <div className={styles.info}>
                <Input 
                type='text'
                placeholder='Name' 
                isRequired= {true}
                styling={styles.name}
                />
                <Input 
                type='email'
                placeholder='Email' 
                isRequired= {true}
                styling={styles.email}
                />
                   <Input 
                type='password'
                placeholder='Enter Your Password' 
                isRequired= {true}
                styling={styles.password}
                />
                <Input 
                type='password'
                placeholder='Confirm Your Password' 
                isRequired= {true}
                styling={styles.password}
                />
                <SubmitButton styling={styles.submit}/>
                
            </div>
        </>
    )
}

export default RegisterFormBody