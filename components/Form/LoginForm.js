import FormHeader from './FormHeader'
import FormBody from './LoginFormBody'
import styles from './Form.module.css'


const LoginForm = () => {
    return (
        <form  className={styles.body}>
            <div className={`${styles.loginForm} w3-margin`}>
                <FormHeader
                title='Login'
                subtitle='Input Your Name And The Password You Used To Register'
                />
                <FormBody/>
                
                
            </div>
        </form>
    
    )
}

export default LoginForm