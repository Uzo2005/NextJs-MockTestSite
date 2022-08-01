const NavBar = ({studentName}) => {
    return (
        <>
            <h2 className="w3-center  w3-blue w3-header"><span className="w3-text-white welcome">Welcome, {studentName}.</span></h2>
            <h4 className="w3-center w3-margin w3-panel w3-pale-green w3-leftbar w3-rightbar w3-padding w3-border-green w3-border">Choose A Practice Test Below</h4>
        </>
    )
}

export default NavBar