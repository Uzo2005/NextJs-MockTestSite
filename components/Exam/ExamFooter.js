import ExamNavButton from "./ExamNavButton";


const ExamFooter = () => {
    return (
        <div className="bg-blue-300 h-10 w-screen rounded-sm px-4 py-1 border-blue-800 border-2
        flex justify-between">
            
                <ExamNavButton/>
                <ExamNavButton/>
          
        </div>
    
    );
}

export default ExamFooter;