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
  const formRef = useRef();

  const [formValues, setFormValues] = useState({});
  useEffect(() => {
    if (localStorage.getItem("writingFormState")) {
      setFormValues(JSON.parse(localStorage.getItem("writingFormState")));
    }
    return () => {
      localStorage.removeItem("writingFormState");
    };
  }, []);


  const [hydrated, setHydrated] = useState(false);

  // Wait until after client-side hydration to show
  useEffect(() => {
    setHydrated(true);
  }, []);

  if (!hydrated) {
    return null;
  }
  
  if (
    parseInt(passage) == 0 ||
    parseInt(passage) == 1 ||
    parseInt(passage) == 2 ||
    parseInt(passage) == 3
  ) {
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
            postData("/api/scoreWritingTest", data).then((data) => {
              console.log(data); // JSON data parsed by `data.json()` call
            });
            router.push("/noCalcInstructions");
          }}
        >
          {({ handleSubmit, values }) => (
            <>
              <ExamHeader
                nextSectionText="mathsNoCalc"
                formId="writingForm"
                timeInMinutes={35}
                submitHandler={handleSubmit}
              />
              <ExamBody
                passageData={passages[passage]}
                route={parseInt(passage) + 1}
                submitHandler={handleSubmit}
                formId="writingForm"
                formValues={values}
                localStorageKey='writingFormState'
              />
            </>
          )}
        </Formik>
        <ExamFooter
          presentSection="writing"
          prevPassage={parseInt(passage) - 1}
          nextPassage={parseInt(passage) + 1}
          prevPassageId={parseInt(passage)}
          nextPassageId={parseInt(passage) + 2}
          endRange={5}
        />
      </main>
    );
  }
  return <ErrorPage statusCode={404} />;
};

export default FullExam;
