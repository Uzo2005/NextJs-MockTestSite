import FormHeader from "./FormHeader";
import FormBody from "./RegisterFormBody";
import { useRef } from "react";
import { useRouter } from "next/router";
import { Formik, Form, useFormik } from "formik";
import * as Yup from "yup";

const RegisterForm = () => {
  const formikRegisterRef = useRef(null);
  const router = useRouter();
  async function postData(url = "", data = {}) {
    const response = await fetch(url, {
      method: "POST",
      mode: "cors",
      cache: "no-cache",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json",
      },
      redirect: "follow",
      referrerPolicy: "no-referrer",
      body: JSON.stringify(data),
    });
    return response.json();
  }
  
  return (
    <Formik
      initialValues={{
        studentName: "",
        studentEmail: "",
        studentPassword1: "",
        studentPassword2: "",
      }}
      innerRef={formikRegisterRef}
      validationSchema={Yup.object({
        studentName: Yup.string()
          .min(3, "Your Name is Not This Short!")
          .required("Your Name is Required"),
        studentEmail: Yup.string()
          .email("Invalid email address")
          .required("Your Email is Required"),
        studentPassword1: Yup.string()
          .min(2, "Too Short!")
          .required("Password is Required"),
        studentPassword2: Yup
          .string()
          .oneOf([Yup.ref("studentPassword1"), null], "Passwords don't match")
          .required("Confirm Password is required"),
      })}
      onSubmit={(data) => {
        postData("/api/register", data).then((res) => {
          if (res == "bad") {
            formikRegisterRef.current.setErrors({
              studentName: "User Already Exists",
            });
          } else if (res == "good") {
            router.push("/login");
          }
          
          
      
          
        })
        
      }}
    >
      {({ handleSubmit }) => (
        <Form
          className="p-[20px] w-[350px] bg-gray-300 py-[40px] rounded-3xl my-[100px] shadow-xl"
          onSubmit={handleSubmit}
          method="POST"
        >
          <FormHeader
            title="Register"
            subtitle="Input Your Name And The Email EdUSA Identifies You With"
          />

          <FormBody />
        </Form>
      )}
    </Formik>
  );
};

export default RegisterForm;
