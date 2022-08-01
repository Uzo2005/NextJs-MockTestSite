import NavBar from "./NavBar"
import TestList from "./TestList"

const Dashboard = () => {
    return(
        <main>
            <NavBar/>
            <ul className="w3-ul w3-margin  w3-leftbar w3-center w3-border w3-hoverable w3-padding-large w3-large w3-border-blue  w3-round-large">
                    {/* for every test, display test list */}
                    <TestList/>
            </ul>

    
            <form className="w3-display-topright" action="/logout?_method=DELETE" method="POST">
                <button  className="w3-button w3-red w3-round w3-margin w3-hover-opacity" >Logout</button>
            </form>
                        
        </main>
                    
    )
}
export default Dashboard
                
            
            
       
