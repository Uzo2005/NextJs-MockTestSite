import ExamHeader from "../ExamHeader";
import ExamBody from "./CalcAllowedExamBody";
import ExamFooter from "./MathsExamFooter";
import { useRouter } from "next/router";
import ErrorPage from "next/error";
import { Formik } from "formik";
import * as Yup from "yup";
import { useState,useEffect, useRef } from "react";




const FullExam = ({ categories }) => {
  const router = useRouter();
  const { category } = router.query;

  const [formValues, setFormValues] = useState({});
  const [test, setTest] = useState(parseInt(category));
  const questionsRef = useRef();
  useEffect(() => {
    if (localStorage.getItem("calcAllowedFormState")) {
      setFormValues(JSON.parse(localStorage.getItem("calcAllowedFormState")));
    }
    return () => {
      localStorage.removeItem("calcAllowedFormState");
    };
  }, []);

  useEffect(() => {
    setTest(parseInt(category));
    questionsRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [test, category]);

  const [hydrated, setHydrated] = useState(false);

  // Wait until after client-side hydration to show
  useEffect(() => {
    setHydrated(true);
  }, []);

  if (!hydrated) {
    return null;
  } 

  
  if (test == 0 || test == 1) {
    async function postData(url = "", data = {}) {
      // Default options are marked with *
      const response = await fetch(url, {
        method: "POST", // *GET, POST, PUT, DELETE, etc.
        mode: "cors", // no-cors, *cors, same-origin
        cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
        credentials: "same-origin", // include, *same-origin, omit
        headers: {
          "Content-Type": "application/json",
          // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        redirect: "follow", // manual, *follow, error
        referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
        body: JSON.stringify(data), // body data type must match "Content-Type" header
      });
      return response.json(); // parses JSON response into native JavaScript objects
    }
    
    return (
      <main className="bg-blue-500">
        <Formik
          initialValues={formValues}
          validationSchema={Yup.object({
            answer31: Yup.string().max(4, "Must be 4 characters or less"),
            answer32: Yup.string().max(4, "Must be 4 characters or less"),
            answer33: Yup.string().max(4, "Must be 4 characters or less"),
            answer34: Yup.string().max(4, "Must be 4 characters or less"),
            answer35: Yup.string().max(4, "Must be 4 characters or less"),
            answer36: Yup.string().max(4, "Must be 4 characters or less"),
            answer37: Yup.string().max(4, "Must be 4 characters or less"),
            answer38: Yup.string().max(4, "Must be 4 characters or less"),
          })}
          onSubmit={(data) => {
            postData("/api/scoreCalcAllowedTest", data).then((data) => {
              console.log(data); // JSON data parsed by `data.json()` call
            });

            router.push("/leisureBreak");
          }}
        >
          {({ handleSubmit, values }) => (
            <>
              <ExamHeader
                nextSectionText="End Of This Practice Test"
                formId="calcAllowedForm"
                timeInMinutes={55}
                submitHandler={handleSubmit}
              />
              <ExamBody
                categoryData={categories[test]}
                route={test + 1}
                submitHandler={handleSubmit}
                formId="calcAllowedForm"
                formValues={values}
                questionsRef={questionsRef}
              />
            </>
          )}
        </Formik>
        <ExamFooter
          presentSection="calcAllowed"
          prevPassage={test - 1}
          nextPassage={test + 1}
          prevPassageId={
            test == 1 ? "multiChoice Questions" : null
          }
          nextPassageId={test == 0 ? "gridIn Questions" : null}
          endRange={3}
        />
      </main>
    );
  }
  return <ErrorPage statusCode={404} />;
};

export default FullExam;
