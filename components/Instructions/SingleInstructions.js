const SingleInstruction = ({number, text}) => {
    return(
        <div className= "mb-3">
            <span className="font-bold p-1">{number}</span><span className="font-semibold text-blue-900"> {text}</span><br></br>
        </div>
    )
        
}
export default SingleInstruction