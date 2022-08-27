import { withSessionSsr } from "../lib/withSessions";
import scoreTable from "../lib/rawScoreToTestScoreTable";
import Link from 'next/link';
import Confetti from "../components/Confetti/ConfettiComponent";

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
    <main className="grid">
      <Confetti/>
      <div className="m-auto mb-6 mt-12">
        <span className="text-blue-600 font-semibold block text-3xl">
          Congratulations On Completing This Mocktest!
        </span>
        <span className="font-bold text-green-500 block mt-4">
          Your SAT Score For This Mocktest is:
          <span
            className={`text-8xl ${
              finalSATScore <= 1000 ? "text-red-500" : "text-green-500"
            } text-center block`}
          >
            {finalSATScore}
          </span>
        </span>
      </div>
      <div className=" m-auto sm:rounded-lg mb-6">
        <table className="text-sm text-center text-gray-500 ">
          <thead className="text-xs text-gray-700 uppercase bg-gray-200 ">
            <tr>
              <th scope="col" className="py-3 px-6">
                SAT Section
              </th>
              <th scope="col" className="py-3 px-6">
                SAT Score
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white border-b ">
              <th
                scope="row"
                className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap "
              >
                English Section
              </th>
              <td className="py-4 px-6 bg-gray-50">{englishSectionScore}</td>
            </tr>
            <tr className="bg-white border-b ">
              <th
                scope="row"
                className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap "
              >
                Maths Section
              </th>
              <td className="py-4 px-6 bg-gray-50">{mathsSectionScore}</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className=" m-auto  sm:rounded-lg mb-6">
        <table className="text-sm text-center text-gray-500 ">
          <thead className="text-xs text-gray-700 uppercase bg-gray-200 ">
            <tr>
              <th scope="col" className="py-3 px-6">
                SAT Sub-Sections
              </th>
              <th scope="col" className="py-3 px-6">
                Raw Score
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white border-b ">
              <th
                scope="row"
                className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap "
              >
                Reading
              </th>
              <td className="py-4 px-6 bg-gray-50">
                {readingScore} correct answers out of 52 questions
              </td>
            </tr>
            <tr className="bg-white border-b ">
              <th
                scope="row"
                className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap "
              >
                Writing and Language
              </th>
              <td className="py-4 px-6 bg-gray-50">
                {writingScore} correct answers out of 44 questions
              </td>
            </tr>
            <tr className="bg-white border-b">
              <th
                scope="row"
                className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap "
              >
                Maths- No Calculator
              </th>
              <td className="py-4 px-6 bg-gray-50">
                {noCalcScore} correct answers out of 20 questions
              </td>
            </tr>
            <tr className="bg-white border-b">
              <th
                scope="row"
                className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap "
              >
                Maths- Calculator Allowed
              </th>
              <td className="py-4 px-6 bg-gray-50">
                {" "}
                {calcAllowedScore} correct answers out of 38 questions
              </td>
            </tr>
          </tbody>
        </table>

        <Link href="/dashboard">
          <button className=" bg-blue-700 hover:bg-blue-500 text-white font-semibold p-3 rounded-md mt-4 ">
            Return To The Dashboard
          </button>
        </Link>
      </div>
    </main>
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
