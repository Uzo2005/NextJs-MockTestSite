import { readClient } from "../../lib/sanityClient";

import { withSessionRoute } from "../../lib/withSessions";

export default withSessionRoute(async function scoreNoCalcTest(req, res) {
  if (req.method == "POST") {
    const studentAnswers = await req.body;

    const examId = req.session.examInfo.id;

    const query = `*[_type=='satExams' && _id=='${examId}'] {mockTest[_type=="mathsNoCalc"]}[0]`;

    const mathsTestData = await readClient.fetch(query);
    const mathsTest = mathsTestData.mockTest[0];
    const multiChoiceAnswers = await mathsTest.multiChoice.correctAnswers;
    const gridInAnswer16 = await mathsTest.gridIn.answer16;
    const gridInAnswer17 = await mathsTest.gridIn.answer17;
    const gridInAnswer18 = await mathsTest.gridIn.answer18;
    const gridInAnswer19 = await mathsTest.gridIn.answer19;
    const gridInAnswer20 = await mathsTest.gridIn.answer20;

    const correctAnswersForMultiChoice = {};

    const getgridInAnswers = (id, idText) => {
      let scoreForGridIn = 0
      for (let i = 0; i < id.length; i++) {
        if (studentAnswers[`answer${idText}`] == id[i]) {
          scoreForGridIn += 1;
        }
      }
      return scoreForGridIn;
    };
    const getMultiChoiceAnswers = (id, idText) => {
      for (let i = 0; i < id.length; i++) {
        correctAnswersForMultiChoice[`passage${idText}Question${i + 1}`] =
          id[i].correctOption;
      }
    };
    getMultiChoiceAnswers(multiChoiceAnswers, 1);

    try {
      let scoreForMultiChoice = 0;
      Object.keys(studentAnswers).forEach((answer) => {
        if (studentAnswers[answer] == correctAnswersForMultiChoice[answer]) {
          scoreForMultiChoice += 1;
        } else {
          return null;
        }
      });
      const gridInScore16 = getgridInAnswers(gridInAnswer16, 16);
      const gridInScore17 = getgridInAnswers(gridInAnswer17, 17);
      const gridInScore18 = getgridInAnswers(gridInAnswer18, 18);
      const gridInScore19 = getgridInAnswers(gridInAnswer19, 19);
      const gridInScore20 = getgridInAnswers(gridInAnswer20, 20);
      // console.log("scoreForMultiChoice:", scoreForMultiChoice);
      // console.log("scoreForGridIn16:", gridInScore16);
      // console.log("scoreForGridIn17:", gridInScore17);
      // console.log("scoreForGridIn18:", gridInScore18);
      // console.log("scoreForGridIn19:", gridInScore19);
      // console.log("scoreForGridIn20:", gridInScore20);
      // console.log("studentAnswers:", studentAnswers);
      // console.log("correctAnswersMultiChoice:", correctAnswersForMultiChoice);
      const totalScore =
        gridInScore16 +
        gridInScore17 +
        gridInScore18 +
        gridInScore19 +
        gridInScore20 +
        scoreForMultiChoice;


      res.send(
        JSON.stringify(
          `Answers received :) your score is ${totalScore} out of ${
            Object.keys(studentAnswers).length
          } and you left ${
            25 - Object.keys(studentAnswers).length
          } questions Unanswered`,
          null,
          2
        )
      );
    } catch (err) {
      res.send(err);
      console.log(err);
    }
  }
});
