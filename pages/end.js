import { withSessionSsr } from "../lib/withSessions";
import scoreTable from "../lib/rawScoreToTestScoreTable";
import EndOfExam from "../components/End/ExamEnd";

const end = ({
  readingScore,
  writingScore,
  noCalcScore,
  calcAllowedScore,
  englishSectionScore,
  mathsSectionScore,
  finalSATScore,
  userId,
  testId
}) => {
  return (
    <EndOfExam
      readingScore={readingScore}
      writingScore={writingScore}
      noCalcScore={noCalcScore}
      calcAllowedScore={calcAllowedScore}
      englishSectionScore={englishSectionScore}
      mathsSectionScore={mathsSectionScore}
      finalSATScore={finalSATScore}
      userId={userId}
      testId={testId}
    />
  );
};

export default end;

export const getServerSideProps = withSessionSsr(
  async function getServerSideProps({ req, res }) {
    if (!req.session.user) {
      return {
        redirect: {
          destination: "/login",
          permanent: false,
        },
      };
    }
    const {
      readingRawScore,
      writingRawScore,
      noCalcRawScore,
      calcAllowedRawScore,
    } = req.session;
    const userId = req.session.user.id;
    const testId = req.session.examInfo.id;
    const mathsRawScore =
      (noCalcRawScore?.noCalcRawScore || 0) +
      (calcAllowedRawScore?.calcAllowedRawScore || 0);
    const testScores = {};
    Object.keys(scoreTable).forEach((rawScore) => {
      if (rawScore == readingRawScore?.readingRawScore || 0) {
        const readingTestScore = scoreTable[rawScore].reading;
        testScores.reading = readingTestScore;
        // console.log("Reading Score is:", readingTestScore);
      }
      if (rawScore == writingRawScore?.writingRawScore || 0) {
        const writingTestScore = scoreTable[rawScore].writing;
        testScores.writing = writingTestScore;
        // console.log("Writing Score is:", writingTestScore);
      }
      if (rawScore == mathsRawScore) {
        const mathsMainScore = scoreTable[rawScore].maths;
        testScores.maths = mathsMainScore;
        // console.log("Maths Score is:", mathsTestScore);
      }
    });

    const englishTestScore =
      (testScores.writing + testScores.reading) * 10;
    const mathsTestScore = testScores.maths;
    const totalScore = englishTestScore + mathsTestScore;
    // console.log("Test Score Object:", testScores);
    // console.log("englishSatScore:", englishTestScore);
    // console.log("my Sat Score is:", totalScore);

    

    return {
      props: {
        readingScore: readingRawScore?.readingRawScore || 0,
        writingScore: writingRawScore?.writingRawScore || 0,
        noCalcScore: noCalcRawScore?.noCalcRawScore || 0,
        calcAllowedScore: calcAllowedRawScore?.calcAllowedRawScore || 0,
        englishSectionScore: englishTestScore,
        mathsSectionScore: mathsTestScore,
        finalSATScore: totalScore,
        testId: testId,
        userId: userId,
      },
    };
  }
);
