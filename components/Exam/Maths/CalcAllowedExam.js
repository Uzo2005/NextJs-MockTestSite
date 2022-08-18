import ExamHeader from "../ExamHeader";
import ExamBody from "./CalcAllowedExamBody";
import ExamFooter from "./MathsExamFooter";
import { useRouter } from "next/router";
import ErrorPage from "next/error";
import { Formik } from "formik";
import * as Yup from "yup";

const FullExam = ({ categories }) => {
  const router = useRouter();
  const { category } = router.query;
  // const [completed, setCompleted] = useState(false)
  if (parseInt(category) == 0 || parseInt(category) == 1) {
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
          initialValues={{}}
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

            localStorage.removeItem("startTime");
            router.push("/end");
          }}
        >
          {({ handleSubmit, values }) => (
            <>
              <ExamHeader
                nextSectionInstructions="/end"
                nextSectionText="End Of This Practice Test"
                formId="calcAllowedForm"
                timeInMinutes={55}
              />
              <ExamBody
                categoryData={categories[category]}
                route={parseInt(category) + 1}
                submitHandler={handleSubmit}
                formId="calcAllowedForm"
                formValues={values}
              />
              <ExamFooter
                presentSection="calcAllowed"
                prevPassage={parseInt(category) - 1}
                nextPassage={parseInt(category) + 1}
                prevPassageId={
                  parseInt(category) == 1 ? "multiChoice Questions" : null
                }
                nextPassageId={
                  parseInt(category) == 0 ? "gridIn Questions" : null
                }
                endRange={3}
              />
            </>
          )}
        </Formik>
      </main>
    );
  }
  return <ErrorPage statusCode={404} />;
};

export default FullExam;
