import Template from "./Template";
const CalcAllowed = () => {
  return (
    <Template prevLink="/dashboard" nextLink="/calcAllowed/0">
      <span className="font-bold p-1">1.</span>
      <span className="font-semibold text-blue-900">
        This is the Math(Calculator-allowed) section of this Mocktest.
      </span>
      <br></br>
      <span className="font-bold p-1">2.</span>
      <span className="font-semibold text-blue-900">
        This section has a total of 38 questions and will last for 55 minutes.
      </span>
      <br></br>
      <span className="font-bold p-1">3.</span>
      <span className="font-semibold text-blue-900">
        The 38 questions in this section comprises of 30 multiple-choice
        questions and 8 grid-in questions.
      </span>
      <br></br>
      <span className="font-bold p-1">4.</span>
      <span className="font-semibold text-blue-900">
        ONCE YOU START THE TIMER, YOU CANNOT PAUSE THIS SECTION.
      </span>
      <br></br>
    </Template>
  );
};

export default CalcAllowed;
