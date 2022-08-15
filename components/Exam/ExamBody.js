import {Formik} from "formik";
import MultiChoiceQuestion from "./MultiChoiceQuestion";



const ExamBody = ({ passage }) => {
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
          {passage.imageLinks.map((imageLink, index) => {
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
          <Formik
            initialValues={passage.QandA.map((questionsAndOptions) => {
              return {
                [questionsAndOptions.question]: "",
              };
              
            })}
            onSubmit={(data) => {
              console.log(data);
            }}
          >
            {passage.QandA.map((questionsAndOptions, index) => {
              return (
                <MultiChoiceQuestion
                  key={index}
                  questionNumber={index + 1}
                  questionText={questionsAndOptions.question}
                  optionA={questionsAndOptions.optionA}
                  optionB={questionsAndOptions.optionB}
                  optionC={questionsAndOptions.optionC}
                  optionD={questionsAndOptions.optionD}
                />
              );
            })}
          </Formik>
        </section>
      </div>
    </div>
  );
};

export default ExamBody;
