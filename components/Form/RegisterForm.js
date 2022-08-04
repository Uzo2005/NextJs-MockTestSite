import FormHeader from './FormHeader'
import FormBody from './RegisterFormBody'



const RegisterForm = () => {
    return (
        <form  className="p-[20px] w-[350px] bg-gray-300 py-[40px] rounded-3xl my-[100px] shadow-xl">
            <div className="">
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