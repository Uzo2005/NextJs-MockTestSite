import ExamNavButton from './ExamNavButton'
import Timer from './Timer'


const ExamHeader = () => {
    return (
        <div className="bg-blue-300 h-10 w-screen rounded-sm px-4 py-1 border-blue-800 border-2
        flex justify-between ">
            
                    {/* <button className="skip">Skip to the Writing section</button> */}
                    <ExamNavButton/>
                    <Timer/>
            
        </div>
            
           
            

                
              
                
                
            
    );
}

export default ExamHeader;