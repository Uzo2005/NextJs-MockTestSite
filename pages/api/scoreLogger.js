import { writeClient } from "../../lib/sanityClient";
import { withSessionRoute } from "../../lib/withSessions";

export default withSessionRoute(async function logExamStartTime(req, res) {
  if (req.method === "POST") {
    const {
      finalSATScore,
      englishSectionScore,
      mathsSectionScore,
      readingScore,
      writingScore,
      noCalcScore,
      calcAllowedScore,
      testId,
      userId,
    } = req.body;

    

    writeClient
      .patch(userId)
      .setIfMissing({ practiceScoresOfThisStudent: [] })
      .append("practiceScoresOfThisStudent", [
        {
          scoreForThisTest: finalSATScore.toString(),
          scoreForTheEnglish: englishSectionScore.toString(),
          scoreForTheMaths: mathsSectionScore.toString(),
          scoreForTheReadingSection: readingScore.toString(),
          scoreForTheWritingSection: writingScore.toString(),
          scoreForTheNoCalcSection: noCalcScore.toString(),
          scoreForTheCalcAllowedSection: calcAllowedScore.toString(),
          test: {
            _type: "reference",
            _ref: testId,
          },
        },
      ])
      .commit({
        autoGenerateArrayKeys: true,
      })
      .then((response) => {
        console.log("Student score logged Successfully:");
        // console.log(response);
        res.send(JSON.stringify(`Response is good`, null, 2));
      })
      .catch((err) => {
        console.error("Failed: ", err.message);
        res.send(JSON.stringify(`Mutation Failed!, response is bad`, null, 2));
      });

    
    

    // res.send(
    //   JSON.stringify(
    //     `Student score logged Successfully`,
    //     null,
    //     2
    //   )
    // );
  }
});
