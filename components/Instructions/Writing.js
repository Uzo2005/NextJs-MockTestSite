import Template from "./Template";
const Writing = () => {
  return (
    <Template prevLink="/dashboard" nextLink="/writing">
      <span className="font-bold p-1">1.</span>
      <span className="font-semibold text-blue-900">
        This is the Writing And Language section of this Mocktest.
      </span>
      <br></br>
      <span className="font-bold p-1">2.</span>
      <span className="font-semibold text-blue-900">
        This section is a multiple-choice test in which you read passages to
        find and fix grammatical mistakes and weaknesses.
      </span>
      <br></br>
      <span className="font-bold p-1">3.</span>
      <span className="font-semibold text-blue-900">
        This section has a total of 44 questions and will last for 35 minutes.
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

export default Writing;
