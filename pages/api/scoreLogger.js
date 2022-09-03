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
      .then((res) => {
        console.log("Student score logged Successfully");
        // console.log(JSON.parse(res));
      })
      .catch((err) => {
        console.error("Failed: ", err.message);
      });

    req.session.reading = {
      doneWithExam: false,
    };
    req.session.writing = {
      doneWithExam: false,
    };
    req.session.noCalc = {
      doneWithExam: false,
    };
    req.session.calcAllowed = {
      doneWithExam: false,
    };
    

    res.send(
      JSON.stringify(
        `Student score logged Successfully and all exam set to undone here is the session: ${req.session}`,
        null,
        2
      )
    );
  }
});
