import { Formik } from "formik";
import MultiChoiceQuestion from "./MultiChoiceQuestion";

const ExamBody = ({ passageData, route }) => {



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
          {passageData.imageLinks.map((imageLink, index) => {
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
            initialValues={
              {}
            }
            onSubmit={(data) => {
              const answersArray = []
              answersArray.push(data)
              console.log('formValues:', data);
              console.log('answersArr:',answersArray)
            }}
          >
            {({ handleSubmit, values }) => (
              <form onSubmit={handleSubmit}>
                {passageData.QandA.map((questionsAndOptions, index) => {
                  return (
                    <MultiChoiceQuestion
                      key={index}
                      passageRoute = {route}
                      questionNumber={index+1}
                      questionText={questionsAndOptions.question}
                      optionA={questionsAndOptions.OptionA}
                      optionB={questionsAndOptions.OptionB}
                      optionC={questionsAndOptions.OptionC}
                      optionD={questionsAndOptions.OptionD}

                    />
                  );
                })}
                <pre>
                  {JSON.stringify(values, null, 2)}
                </pre>
                <button type="submit">Submit</button>
              </form>
            )}
          </Formik>
        </section>
      </div>
    </div>
  );
};

export default ExamBody;
