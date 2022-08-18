import { useField, Field,} from "formik";



const MyGridInInput = ({questionNumber, value, ...props}) => {
    const [field, meta] = useField(props);
    return (
      <div className="mb-6 ml-12">
        <label
          htmlFor={questionNumber}
          className="block mb-2 text-md font-semibold text-gray-900"
        >
          Question {questionNumber}
        </label>
        <Field
          {...field}
          {...props}
          id={questionNumber}
          type="text"
          className="bg-gray-50 border-[3px] border-blue-600 text-gray-900 text-md rounded-lg block w-[200px] p-2.5 outline-none focus:bg-sky-50"
        />
        {meta.touched && meta.error ? (
          <div className="text-red-600 font-bold animate-pulse">{`Question ${questionNumber}: ${meta.error}`}</div>
        ) : null}
      </div>
    );
}
export default MyGridInInput

