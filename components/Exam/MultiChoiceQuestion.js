import { useField, Field } from "formik";
import Image from "next/image";

const MyRadioInput = ({ children, labelFor, ...props }) => {
  const [field] = useField(props);
  return (
    <div className="flex items-center border border-blue-500 rounded mb-2 mt-4">
      <Field
        {...field}
        {...props}
        id={labelFor}
        type="radio"
        className="bg-gray-100 border-gray-300 peer hidden"
      />
      <label
        htmlFor={labelFor}
        className="py-3 w-full text-sm font-medium text-gray-900 peer-checked:bg-blue-500 peer-checked:text-white px-5"
      >
        {" "}
        {children}{" "}
      </label>
    </div>
  );
};
const MultiChoiceQuestion = ({
  passageRoute,
  questionNumberForMarking,
  questionNumber,
  questionImage,
  questionText,
  optionA,
  optionB,
  optionC,
  optionD,
}) => {
  return (
    <div className="m-2 p-2 bg-white rounded">
      {questionImage && (
        <Image
          src={questionImage}
          alt={`Number ${questionNumber}'s image`}
          height={400}
          width={600}
        />
      )}
      <span className="font-medium">
        {questionNumber}. {questionText}
      </span>{" "}
      <br />
      <MyRadioInput
        value="A"
        name={`passage${passageRoute}Question${questionNumberForMarking}`}
        labelFor={`${questionNumber}A`}
      >
        {optionA}
      </MyRadioInput>
      <MyRadioInput
        value="B"
        name={`passage${passageRoute}Question${questionNumberForMarking}`}
        labelFor={`${questionNumber}B`}
      >
        {optionB}
      </MyRadioInput>
      <MyRadioInput
        value="C"
        name={`passage${passageRoute}Question${questionNumberForMarking}`}
        labelFor={`${questionNumber}C`}
      >
        {optionC}
      </MyRadioInput>
      <MyRadioInput
        value="D"
        name={`passage${passageRoute}Question${questionNumberForMarking}`}
        labelFor={`${questionNumber}D`}
      >
        {optionD}
      </MyRadioInput>
    </div>
  );
};

export default MultiChoiceQuestion;
