import ExamHeader from "./ExamHeader"
import ExamBody   from './ExamBody'
import ExamFooter from './ExamFooter'


const FullExam = () => {
    return (
        <body className= "bg-blue-500">
        {/* <h2 className="hidden maxTime">65</h2> This stuff is nnot really neccesary coz am using next js now
        <h2 className="hidden redirect">../../instruction pages/after reading/writing_instructions.html</h2> */}
        <ExamHeader/>
        <ExamBody/>
        <ExamFooter/>
        </body>
        
        

    );
}

export default FullExam;