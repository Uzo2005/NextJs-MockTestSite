import ExamHeader from "../ExamHeader";
import ExamBody from "./EnglishExamBody";
import ExamFooter from "./ExamFooter";
import { useRouter } from "next/router";
import ErrorPage from "next/error";
import { Formik } from "formik";
import { useState, useEffect, useRef } from "react";

const FullExam = ({ passages }) => {
  const router = useRouter();
  const { passage } = router.query;
  const [test, setTest] = useState(parseInt(passage));
  const formRef = useRef();
  const questionsRef = useRef();
  
  const [formValues, setFormValues] = useState({});

  useEffect(() => {
    if (localStorage.getItem("readingFormState")) {
      setFormValues(JSON.parse(localStorage.getItem("readingFormState")));
    }
    return () => {
      localStorage.removeItem("readingFormState");
    };
  }, []);

  useEffect(() => {
    setTest(parseInt(passage));
    questionsRef.current?.scrollIntoView({ behavior: "smooth" });
    
  }, [test, passage]);

  const [hydrated, setHydrated] = useState(false);

  // Wait until after client-side hydration to show
  useEffect(() => {
    setHydrated(true);
  }, []);

  if (!hydrated) {
    return null;
  }

  if (test == 0 || test == 1 || test == 2 || test == 3 || test == 4) {
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
          innerRef={formRef}
          onSubmit={(data) => {
            postData("/api/scoreReadingTest", data).then((data) => {
              console.log(data); // JSON data parsed by `data.json()` call
            });
            router.push("/writingInstructions");
          }}
        >
          {({ handleSubmit, values }) => (
            <>
              <ExamHeader
                nextSectionText="writing"
                formId="readingForm"
                timeInMinutes={65}
                submitHandler={handleSubmit}
              />
              <ExamBody
                passageData={passages[test]}
                route={test + 1}
                submitHandler={handleSubmit}
                formId="readingForm"
                formValues={values}
                localStorageKey="readingFormState"
                questionsRef={questionsRef}
              />
            </>
          )}
        </Formik>
        <ExamFooter
          presentSection="reading"
          prevPassage={test - 1}
          nextPassage={test + 1}
          prevPassageId={test}
          nextPassageId={test + 2}
          endRange={6}
        />
      </main>
    );
  }
  return <ErrorPage statusCode={404} />;
};

export default FullExam;
