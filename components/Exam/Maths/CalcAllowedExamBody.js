import MultiChoiceQuestion from "../MultiChoiceQuestion";
import { Form } from "formik";
import MyGridInInput from "./GridInQuestion";

const ExamBody = ({
  categoryData,
  route,
  submitHandler,
  formId,
  formValues,
}) => {
  const multichoiceOptions = [];

  for (let index = 0; index < 30; index++) {
    multichoiceOptions.push(
      <MultiChoiceQuestion
        key={index}
        passageRoute={route}
        questionNumber={index + 1}
        optionA="OptionA"
        optionB="OptionB"
        optionC="OptionC"
        optionD="OptionD"
      />
    );
  }

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
          {categoryData.imageLinks.map((imageLink, index) => {
            return (
              <div key={index} className="relative">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img key={index} src={imageLink} alt="multiChoice Questions" />
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
          {route == 1 && (
            <Form onSubmit={submitHandler} id={formId}>
              {multichoiceOptions}
              <pre>{JSON.stringify(formValues, null, 2)}</pre>
            </Form>
          )}

          {route == 2 && (
            <Form onSubmit={submitHandler} id={formId}>
              <MyGridInInput questionNumber="31" name="answer31" />
              <MyGridInInput questionNumber="32" name="answer32" />
              <MyGridInInput questionNumber="33" name="answer33" />
              <MyGridInInput questionNumber="34" name="answer34" />
              <MyGridInInput questionNumber="35" name="answer35" />
              <MyGridInInput questionNumber="36" name="answer36" />
              <MyGridInInput questionNumber="37" name="answer37" />
              <MyGridInInput questionNumber="38" name="answer38" />
              <pre>{JSON.stringify(formValues, null, 2)}</pre>
            </Form>
          )}
        </section>
      </div>
    </div>
  );
};

export default ExamBody;
