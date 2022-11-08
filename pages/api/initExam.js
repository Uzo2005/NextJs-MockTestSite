import { withSessionRoute } from "../../lib/withSessions";
import { readClient } from "../../lib/sanityClient";

export default withSessionRoute(async function initExam(req, res) {
  try {
    if (req.method == "POST") {
      // let wrongPassCode = req.session.wrongPassTrials.wrong
      
      const {examId, passCodeProvidedByUser} = req.body;
  

      const query = `*[_type=='satExams' && _id=='${examId}']{testPassCode}`;
      const thisTestInfo = await readClient.fetch(query);
      
      if (thisTestInfo[0].testPassCode == passCodeProvidedByUser) {
        req.session.examInfo = {
          id: examId,
        };

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
        await req.session.save();

        res.redirect(302, "/firstInstructions");
        res.end();
      }else {
        res.send("The Passcode You Provided Was Wrong!")
      }
    }
  } catch (err) {
    console.log(err);
    res.end();
  }
});

/**
 * Fetch the test and its passcode, check if they are equal
 * If they are equal, then init exam
 * If not return back and say the person should confirm the passcode after 2 minutes
 */
