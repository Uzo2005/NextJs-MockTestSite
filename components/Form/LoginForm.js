import FormHeader from './FormHeader'
import FormBody from './LoginFormBody'



const LoginForm = () => {
    return (
        <form className="p-[20px] w-[350px] bg-gray-300 py-[40px] rounded-3xl my-[100px] shadow-xl">
            <div className="">
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