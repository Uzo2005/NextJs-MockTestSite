const Input = ({type, placeholder, isRequired, styling}) => {
    return (
        <div>
            <input className={styling} type={type} placeholder={placeholder} required={isRequired}/>
        </div>
    )
}
export default Input