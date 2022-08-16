import Template from "./Template";
const NoCalc = () => {
  return (
    <Template prevLink="/dashboard" nextLink="/noCalc/0">
      <span className="font-bold p-1">1.</span>
      <span className="font-semibold text-blue-900">
        This is the Math(No-Calculator) section of this Mocktest.
      </span>
      <br></br>
      <span className="font-bold p-1">2.</span>
      <span className="font-semibold text-blue-900">
        This section has a total of 20 questions and will last for 25 minutes.
      </span>
      <br></br>
      <span className="font-bold p-1">3.</span>
      <span className="font-semibold text-blue-900">
        The 20 questions in this section comprises of 15 multiple-choice
        questions and 5 grid-in questions.
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

export default NoCalc;
