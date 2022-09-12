import { readClient } from "../../lib/sanityClient";

import { withSessionRoute } from "../../lib/withSessions";

export default withSessionRoute(async function scoreReadingTest(req, res) {
  if (req.method == "POST") {
      const answers = await req.body;

      const examId = req.session.examInfo.id;

      const query = `*[_type=='satExams' && _id=='${examId}'] {mockTest[_type=="Reading"]}[0]`;

      const readingTestData = await readClient.fetch(query);
      const readingTest = readingTestData.mockTest[0];
      const passage1 = await readingTest.passage1;
      const passage2 = await readingTest.passage2;
      const passage3 = await readingTest.passage3;
      const passage4 = await readingTest.passage4;
      const passage5 = await readingTest.passage5;





      
      const correctAnswers = {};
    
      
      const passageAnswers = (id, idText) => {
        

          for (let i = 0; i < id.questions.length; i++) {
           
             correctAnswers[`passage${idText}Question${i + 1}`] = id.questions[i].correctOption
        }
    }
    passageAnswers(passage1, 1)
    passageAnswers(passage2, 2)
    passageAnswers(passage3, 3)
    passageAnswers(passage4, 4)
    passageAnswers(passage5, 5);
      
    

    try {
      let score = 0
      Object.keys(answers).forEach((answer) => {
        if (answers[answer] == correctAnswers[answer]) {
          score+=1
        } else {
          return null
        }
      })
        req.session.readingRawScore = {
          readingRawScore: score,
      };
      req.session.reading = {
        doneWithExam: true,
      };
      await req.session.save();
// console.log(
//   JSON.stringify(
//     `Answers received :) your score is ${score} out of ${
//       Object.keys(answers).length
//     } and you left ${
//       parseInt(Object.keys(correctAnswers).length) -
//       parseInt(Object.keys(answers).length)
//     } questions Unanswered`,
//     null,
//     2
//   )
// );
        
        res.send(
          JSON.stringify(
            `Answers received :) your score is ${score} out of ${
              Object.keys(answers).length
            } and you left ${
              parseInt(Object.keys(correctAnswers).length) -
              parseInt(Object.keys(answers).length)
            } questions Unanswered`,
            null,
            2
          )
        );
    } catch (err) {
        res.send(err)
      console.log(err);
    }
  }
});
