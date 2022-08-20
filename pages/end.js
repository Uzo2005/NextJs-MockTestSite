import { withSessionSsr } from "../lib/withSessions";
import scoreTable from "../lib/rawScoreToTestScoreTable";

const end = ({
  readingScore,
  writingScore,
  noCalcScore,
  calcAllowedScore,
  englishSectionScore,
  mathsSectionScore,
  finalSATScore,
}) => {
  return (
    <div className="flex items-center justify-center h-[100vh]">
      <h5>Congrats On Completing This Mocktest</h5>
      <h5>Below Are Your Scores</h5>
      <h5>Reading: {readingScore}</h5>
      <h5>Writing And Language: {writingScore}</h5>
      <h5>Maths- No Calculator: {noCalcScore}</h5>
      <h5>Maths- Calculator Allowed: {calcAllowedScore}</h5>
      <h5>EnglishSectionScore: {englishSectionScore}</h5>
      <h5>MathsSectionScore: {mathsSectionScore}</h5>
      <h5>TotalSATScore: {finalSATScore}</h5>
    </div>
  );
};

export default end;

export const getServerSideProps = withSessionSsr(
  async function getServerSideProps({ req,res }) {
    const {
      readingRawScore,
      writingRawScore,
      noCalcRawScore,
      calcAllowedRawScore,
    } = req.session;
    const mathsRawScore =
      noCalcRawScore.noCalcRawScore + calcAllowedRawScore.calcAllowedRawScore;
      const testScores = {};
      Object.keys(scoreTable).forEach((rawScore) => {
        if (rawScore == readingRawScore.readingRawScore) {
          const readingTestScore = scoreTable[rawScore].reading;
          testScores.reading = readingTestScore;
          // console.log("Reading Score is:", readingTestScore);
        }
        if (rawScore == writingRawScore.writingRawScore) {
          const writingTestScore = scoreTable[rawScore].writing;
          testScores.writing = writingTestScore;
          // console.log("Writing Score is:", writingTestScore);
        }
        if (rawScore == mathsRawScore) {
          const mathsTestScore = scoreTable[rawScore].maths;
          testScores.maths = mathsTestScore;
          // console.log("Maths Score is:", mathsTestScore);
        }
      });

      const englishTestScore = (testScores.writing + testScores.reading) * 10;
      const totalScore = englishTestScore + testScores.maths;
      // console.log("Test Score Object:", testScores);
      // console.log("englishSatScore:", englishTestScore);
      // console.log("my Sat Score is:", totalScore);
    

    return {
      props: {
        readingScore: readingRawScore.readingRawScore,
        writingScore: writingRawScore.writingRawScore,
        noCalcScore: noCalcRawScore.noCalcRawScore,
        calcAllowedScore: calcAllowedRawScore.calcAllowedRawScore,
        englishSectionScore: englishTestScore,
        mathsSectionScore: testScores.maths,
        finalSATScore: totalScore,
      },
    };
  }
);
