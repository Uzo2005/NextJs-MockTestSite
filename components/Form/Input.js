const Input = ({type, placeholder, isRequired, styling}) => {
    return (
        <div>
            <input className="shadow-inner h-10 w-[100%] p-6 rounded-lg text-left mb-[30px]
            my-4 focus:outline-none placeholder:text-center placeholder: font-medium placeholder:text-purple-400
            " type={type} placeholder={placeholder} required={isRequired}/>
        </div>
    )
}
export default Input