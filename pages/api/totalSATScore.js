// import scoreTable from '../../lib/rawScoreToTestScoreTable'
// import { withSessionRoute } from "../../lib/withSessions";

// export default withSessionRoute(async function mainSATscore(req, res) {
//   if (req.method == "GET") {
//     const {
//       readingRawScore,
//       writingRawScore,
//       noCalcRawScore,
//       calcAllowedRawScore,
//     } = req.session;
//     // console.log(Object.keys(scoreTable))
//       const mathsRawScore =
//         noCalcRawScore.noCalcRawScore + calcAllowedRawScore.calcAllowedRawScore;
//     try {
//       const testScores = {};
//       Object.keys(scoreTable).forEach(
//         (rawScore) => {
//         if (rawScore == readingRawScore.readingRawScore) {
//           const readingTestScore = scoreTable[rawScore].reading;
//           testScores.reading = readingTestScore; 
//           console.log("Reading Score is:", readingTestScore);
//         }
//         if (rawScore == writingRawScore.writingRawScore) {
//           const writingTestScore = scoreTable[rawScore].writing;
//           testScores.writing = writingTestScore
//           console.log("Writing Score is:", writingTestScore);
//         }
//         if (rawScore == mathsRawScore) {
//           const mathsTestScore = scoreTable[rawScore].maths;
//           testScores.maths = mathsTestScore;
//           console.log("Maths Score is:", mathsTestScore);
//         }
//       });

//       console.log("Test Score Object:", testScores);
//       const englishTestScore = (testScores.writing + testScores.reading) * 10
//       console.log('englishSatScore:', englishTestScore)
//       const totalScore = englishTestScore + testScores.maths
//       console.log('my Sat Score is:', totalScore)
//       res.send("hi");
//       res.end();
//     } catch (err) {
//       console.log(err);
//       res.end();
//     }
//   }
// });
