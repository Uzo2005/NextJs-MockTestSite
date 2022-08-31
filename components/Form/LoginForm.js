import FormHeader from "./FormHeader";
import FormBody from "./LoginFormBody";
import { useRef } from "react";
import { useRouter } from "next/router";
import { Formik, Form } from "formik";
import * as Yup from "yup";


const LoginForm = () => {
  const formikRef = useRef(null);
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
    })
    return response.json()
  }

  return (
    <Formik
      initialValues={{
        studentEmail: "",
        studentPassword: "",
      }}
      innerRef={formikRef}
      validationSchema={Yup.object({
        studentEmail: Yup.string()
          .email("Invalid email address")
          .required("Your Email is Required"),
        studentPassword: Yup.string()
          .min(2, "Too Short!")
          .required("Password is Required"),
      })}
      onSubmit={(data) => {
        postData("/api/loginAuth", data).then((res) => {
          
          if (res == "bad") {
             formikRef.current.setErrors({
               studentEmail: 'Incorrect Credentials',
             });
          
          } else if(res == "good") {
            router.push('/dashboard')
          }
          
        })
       
      }}
    >
      {({ handleSubmit }) => (
        <Form
          className="p-[20px] w-[350px] bg-gray-300 py-[40px] rounded-3xl
         my-[100px] shadow-xl"
          onSubmit={handleSubmit}
          method="POST"
        >
          <div className="">
            <FormHeader
              title="Login"
              subtitle="Input Your Email And The Password You Used To Register"
            />
            <FormBody />
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default LoginForm;
