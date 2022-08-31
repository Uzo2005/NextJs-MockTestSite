import { useField, Field } from "formik";

const Input = ({isRequired, ...props }) => {
    const [field, meta] = useField(props);
  return (
    <>
      {meta.touched && meta.error ? (
        <div className="text-white text-center font-semibold animate-pulse bg-red-500 mt-2">{meta.error}</div>
      ) : null}
      <Field
        className="shadow-inner h-10 w-[100%] p-6 rounded-lg text-left mb-[30px]
        my-4 focus:outline-none placeholder:text-center placeholder: font-medium placeholder:text-purple-400
        "
        {...field}
        {...props}
        required={isRequired}
      />
    </>
  );
};
export default Input;
