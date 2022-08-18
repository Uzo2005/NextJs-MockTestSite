import MultiChoiceQuestion from "../MultiChoiceQuestion";
import { Form} from "formik";
import MyGridInInput from "./GridInQuestion";

const ExamBody = ({
  categoryData,
  route,
  submitHandler,
  formId,
  formValues,
}) => {
  const multichoiceOptions = [];

  for (let index = 0; index < 15; index++) {
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
              <MyGridInInput questionNumber="16" name="answer16" />
              <MyGridInInput questionNumber="17" name="answer17" />
              <MyGridInInput questionNumber="18" name="answer18" />
              <MyGridInInput questionNumber="19" name="answer19" />
              <MyGridInInput questionNumber="20" name="answer20" />
              <pre>{JSON.stringify(formValues, null, 2)}</pre>
            </Form>
          )}
        </section>
      </div>
    </div>
  );
};

export default ExamBody;
