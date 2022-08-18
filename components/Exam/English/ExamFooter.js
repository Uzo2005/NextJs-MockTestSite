import ExamNavButton from "./EnglishExamNavButton";



const ExamFooter = ({presentSection, prevPassage, nextPassage, prevPassageId, nextPassageId, endRange }) => {


  return (
    <div
      className="bg-blue-300 h-10 w-screen rounded-sm px-4 py-1 border-blue-800 border-2
        flex justify-between"
    >
      {prevPassageId != 0 &&
        (prevPassageId != null && (
          <ExamNavButton
            presentSection={presentSection}
            linkTo={prevPassage}
            direction="Back"
            nextSetOfQuestions={prevPassageId}
          />
        ))}
      {nextPassageId != parseInt(endRange) &&
        (nextPassageId != null && (
          <ExamNavButton
            presentSection={presentSection}
            linkTo={nextPassage}
            direction="Move"
            nextSetOfQuestions={nextPassageId}
          />
        ))}
    </div>
  );
};

export default ExamFooter;
