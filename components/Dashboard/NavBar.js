const NavBar = ({studentName}) => {
    return (
        <div className="h-fit w-full p-2 mb-1 bg-gray-300 inline-block">

            <form className="w-fit h-fit p-2 bg-red-600 hover:bg-red-700 rounded-sm" action="/api/logout" method="POST">
                <button  className="font-bold text-gray-50" >Logout</button>
            </form>
            
            <h2 className="font-bold text-center text-blue-700 text-lg "><span className="">Welcome, {studentName}.</span></h2>

            <h4 className="font-semibold text-center text-red-500 text-sm">Choose A Practice Test Below</h4>
            
        </div>
    )
}

export default NavBar