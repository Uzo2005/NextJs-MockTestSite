const SingleInstruction = ({number, text, styling}) => {
    return(
        <>
            {number}<span className={styling}> {text}</span><br></br>
        </>
    )
        
}
export default SingleInstruction