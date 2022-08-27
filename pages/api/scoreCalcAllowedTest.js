import { readClient } from "../../lib/sanityClient";

import { withSessionRoute } from "../../lib/withSessions";

export default withSessionRoute(async function scoreNoCalcTest(req, res) {
  if (req.method == "POST") {
    const studentAnswers = await req.body;

    const examId = req.session.examInfo.id;

    const query = `*[_type=='satExams' && _id=='${examId}'] {mockTest[_type=="mathsCalcAllowed"]}[0]`;

    const mathsTestData = await readClient.fetch(query);
    const mathsTest = mathsTestData.mockTest[0];
    const multiChoiceAnswers = await mathsTest.multiChoice.correctAnswers;
    const gridInAnswer31 = await mathsTest.gridIn.answer31;
    const gridInAnswer32 = await mathsTest.gridIn.answer32;
    const gridInAnswer33 = await mathsTest.gridIn.answer33;
    const gridInAnswer34 = await mathsTest.gridIn.answer34;
    const gridInAnswer35 = await mathsTest.gridIn.answer35;
    const gridInAnswer36 = await mathsTest.gridIn.answer36;
    const gridInAnswer37 = await mathsTest.gridIn.answer37;
    const gridInAnswer38 = await mathsTest.gridIn.answer38;

    const correctAnswersForMultiChoice = {};

    const getgridInAnswers = (id, idText) => {
      let scoreForGridIn = 0
      for (let i = 0; i < id?.length; i++) {
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
        }
      });
      const gridInScore31 = getgridInAnswers(gridInAnswer31, 31);
      const gridInScore32 = getgridInAnswers(gridInAnswer32, 32);
      const gridInScore33 = getgridInAnswers(gridInAnswer33, 33);
      const gridInScore34 = getgridInAnswers(gridInAnswer34, 34);
      const gridInScore35 = getgridInAnswers(gridInAnswer35, 35);
      const gridInScore36 = getgridInAnswers(gridInAnswer36, 36);
      const gridInScore37 = getgridInAnswers(gridInAnswer37, 37);
      const gridInScore38 = getgridInAnswers(gridInAnswer38, 38);
      
      const totalScore =
        gridInScore31 +
        gridInScore32 +
        gridInScore33 +
        gridInScore34 +
        gridInScore35 +
        gridInScore36 +
        gridInScore37 +
        gridInScore38 +
        scoreForMultiChoice;

      req.session.calcAllowedRawScore = {
        calcAllowedRawScore: totalScore,
      };
  
      req.session.calcAllowed = {
        doneWithExam: true,
      };
      
      await req.session.save();
console.log(req.session)
      res.send(
        JSON.stringify(
          `Answers received :) your score is ${totalScore} out of ${
            Object.keys(studentAnswers).length
          } and you left ${
            38 - Object.keys(studentAnswers).length
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