const TestList = ({testIdentifier, testid}) => {
    return(
        <>
            <form action= "/generalInstructions" method= "post">

                <li>
                    <input type="hidden" value={testid} name="examId" />
                
                    <button className=" type="submit">

                        <span className="w3-padding ">{testIdentifier}</span>

                    </button>
            

                </li>

            </form>
        </>
    )
}

export default TestList