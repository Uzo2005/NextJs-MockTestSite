const Button = ({prevLink, stylingButton, stylingExit, stylingStart }) => {
    return (
        <div className={stylingButton}>
                <a href={prevLink}><button className={stylingExit}>Back</button></a> 
                <button className={stylingStart}>Start timer</button>
        </div>
    )
}
export default Button