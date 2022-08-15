import ExamNavButton from "./ExamNavButton";
import SubmitButton from '../Form/SubmitButton'


const ExamFooter = ({ prevPassage, nextPassage, prevPassageId, nextPassageId }) => {


  return (
    <div
      className="bg-blue-300 h-10 w-screen rounded-sm px-4 py-1 border-blue-800 border-2
        flex justify-between"
    >
      {prevPassageId != 0 && (
        <ExamNavButton
          linkTo={prevPassage}
          direction="Back"
          nextSetOfQuestions={prevPassageId}
        />
      )}
      {nextPassageId != 6 && (
        <ExamNavButton
          linkTo={nextPassage}
          direction="Move"
          nextSetOfQuestions={nextPassageId}
          // submitOrNot='submit'
        />
      )}
    </div>
  );
};

export default ExamFooter;
