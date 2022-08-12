import NextSectionButton from './NextSectionButton'
import Timer from './Timer'


const ExamHeader = () => {
    return (
        <div className="bg-blue-300 h-10 w-screen rounded-sm px-4 py-1 border-blue-800 border-2
        flex justify-between ">
            
                    
                    <NextSectionButton
                        nextSectionLink="/writing"
                        nextSectionText="Writing"
                    />

                    <Timer
                        timeInMinutes={65}
                    />
            
        </div>
            
           
            

                
              
                
                
            
    );
}

export default ExamHeader;