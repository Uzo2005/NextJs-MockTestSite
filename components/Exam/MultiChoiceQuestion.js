import {useField, Field} from 'formik'

const MyRadioInput = ({children, labelFor, ...props}) => {
  const [field] = useField(props)
  return (
    <div className="flex items-center pl-3 pr-4 border border-blue-500 rounded mb-2 mt-4">
      <Field
        {...field}
        type="radio"
        className="w-4 h-4 bg-gray-100 border-gray-300"
      /> 
      <label
        htmlFor={labelFor}
        className="py-3 ml-2 w-full text-sm font-medium text-gray-900"
      >
        {" "}
        {children}{" "}
      </label>
    </div>
      

  );
}
const MultiChoiceQuestion = ({ questionNumber, questionText, optionA, optionB, optionC, optionD }) => {
  return (
    <div className="m-2 p-2 bg-white rounded">
      <span className="font-semibold">
        {questionNumber}. {questionText}
      </span>{" "}
      <br />
      <MyRadioInput id="A" value="A" name={questionText} labelFor="A">
        {optionA}
      </MyRadioInput>
      <MyRadioInput id="B" value="B" name={questionText} labelFor="B">
        {optionB}
      </MyRadioInput>
      <MyRadioInput id="C" value="C" name={questionText} labelFor="C">
        {optionC}
      </MyRadioInput>
      <MyRadioInput id="D" value="D" name={questionText} labelFor="D">
        {optionD}
      </MyRadioInput>
    </div>
  );
};

export default MultiChoiceQuestion;