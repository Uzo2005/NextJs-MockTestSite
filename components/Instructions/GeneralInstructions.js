import Template from "./Template";

const GeneralInstructions = () => {
  return (
    <Template prevLink="/dashboard" nextLink="/reading/0">
      <span className="font-bold p-1">1.</span>
      <span className="font-semibold text-blue-900">
        This test is divided into FOUR SECTIONS and will last a total of 3 hours
        10 minutes.
      </span>
      <br></br>
      <span className="font-bold p-1">2.</span>
      <span className="font-semibold text-blue-900">
        Once you have finished all of the sections you will get your Math and
        Reading scores.
      </span>
      <br></br>
      
      <span className="font-bold p-1">3.</span>
      <span className="font-semibold text-blue-900">
        You must complete(or skip) each section to unlock the next. You cannot
       {/* eslint-disable-next-line react/no-unescaped-entities */}
        'save' a section for later, and once a section's timer has run out, you
        cannot go back to work on that section again.
      </span>
      <br></br>
      <span className="font-bold p-1">4.</span>
      <span className="font-semibold text-blue-900">
        The first section is Reading; it will last 65 minutes and has 52
        questions.
      </span>
      <br></br>
      <span className="font-bold p-1">5.</span>
      <span className="font-semibold text-blue-900">
        ONCE YOU START THE TIMER, YOU CANNOT PAUSE THIS SECTION.
      </span>
      <br></br>
    </Template>
  );
};

export default GeneralInstructions;
