import FormHeader from './FormHeader'
import FormBody from './RegisterFormBody'
import styles from './Form.module.css'


const RegisterForm = () => {
    return (
        <form  className={styles.body} action='/login'>
            <div className={`${styles.registerForm} w3-margin`}>
                <FormHeader
                title='Register'
                subtitle='Input Your Name And The Email EdUSA Identifies You With'
                />
                <FormBody/>
                
                
            </div>
        </form>
    
    )
}

export default RegisterForm