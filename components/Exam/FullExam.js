import ExamHeader from "./ExamHeader"
import ExamBody   from './ExamBody'
import ExamFooter from './ExamFooter'


const FullExam = ({imageData, questionsData}) => {
    return (
        <body className= "bg-blue-500">
        <ExamHeader/>
        <ExamBody
            imageLink={imageData}
            questionsAndOptions={questionsData}
        />
        <ExamFooter/>
        </body>
        
        

    );
}

export default FullExam;