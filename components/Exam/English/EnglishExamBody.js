import MultiChoiceQuestion from "../MultiChoiceQuestion";
import { useState, useEffect } from "react";


const ExamBody = ({
  passageData,
  route,
  submitHandler,
  formId,
  formValues,
  localStorageKey
}) => {
   const [formState, setFormState] = useState({});
  useEffect(() => {
    setFormState(formValues);
    localStorage.setItem(localStorageKey, JSON.stringify(formState));
  }, [formValues, formState, localStorageKey]);

  return (
    <div className="grid grid-cols-2 gap-[5px] m-[20px] cursor-pointer">
      <div
        className="bg-slate-300 rounded-sm leading-7
        text-justify h-[calc(100vh-80px)] 
        overflow-y-scroll overflow-x-scroll scroll-smooth 
        scrollbar-thin scrollbar-thumb-slate-500 scrollbar-track-blue-200 
        touch-manipulation relative"
      >
        <section className="p-4">
          {passageData.passageData.imageLinks.map((imageLink, index) => {
            return (
              <div key={index} className="relative">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img key={index} src={imageLink} alt="Reading Passage" />
              </div>
            );
          })}
        </section>
      </div>
      <div
        className="bg-slate-200 rounded-sm leading-7 text-justify h-[calc(100vh-80px)] overflow-y-scroll 
        scroll-smooth scrollbar-thin scrollbar-thumb-slate-500 scrollbar-track-blue-200 
        touch-manipulation"
      >
        <section className="p-4 ">
          <form onSubmit={submitHandler} id={formId}>
            {passageData.passageData.QandA.map((questionsAndOptions, index) => {
              return (
                <MultiChoiceQuestion
                  key={index}
                  passageRoute={route}
                  questionImage={questionsAndOptions.questionImage}
                  questionNumber={passageData.startingPoint + index + 1}
                  questionText={questionsAndOptions.question}
                  optionA={questionsAndOptions.OptionA}
                  optionB={questionsAndOptions.OptionB}
                  optionC={questionsAndOptions.OptionC}
                  optionD={questionsAndOptions.OptionD}
                />
              );
            })}
            {/* <pre>{JSON.stringify(formValues, null, 2)}</pre> */}
            {/* <button type="submit">Submit</button> */}
          </form>
          {/* )} */}
          {/* </Formik> */}
        </section>
      </div>
    </div>
  );
};

export default ExamBody;
