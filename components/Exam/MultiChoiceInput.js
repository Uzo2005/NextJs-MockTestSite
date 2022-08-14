import { Formik, Form, useField } from "formik";

const MultiChoiceInput = ({children, ...props}) => {
    const [field, meta] = useField({ ...props, type: "radio" });

    return (
      <div className="flex items-center pl-3 pr-4 border border-blue-500 rounded mb-2 mt-4">
        <input
          type="radio"
          value={props.value}
          name={props.name}
          className="w-4 h-4 bg-gray-100 border-gray-300"
        />
        <label
          htmlFor={props.id}
          className="py-3 ml-2 w-full text-sm font-medium text-gray-900"
        >
          {" "}
          {children}{" "}
        </label>
      </div>
    );
}

export default MultiChoiceInput;


 

