import ExamHeader from "./ExamHeader";
import ExamBody from "./ExamBody";
import ExamFooter from "./ExamFooter";
import { useRouter } from "next/router";
import ErrorPage from "next/error";

const FullExam = ({ passages}) => {
  const router = useRouter()
  const {passage} = router.query

  if (
    parseInt(passage) == 0 ||
    parseInt(passage) == 1 ||
    parseInt(passage) == 2 ||
    parseInt(passage) == 3 ||
    parseInt(passage) == 4
  ){
    return (
      <body className="bg-blue-500">
        <ExamHeader />
        <ExamBody passageData={passages[passage]} route={parseInt(passage)+1} />
        <ExamFooter
          prevPassage={parseInt(passage) - 1}
          nextPassage={parseInt(passage) + 1}
          prevPassageId={parseInt(passage)}
          nextPassageId={parseInt(passage) + 2}
        />
      </body>
    );
  }
  return <ErrorPage statusCode={404} />;
};

export default FullExam;
