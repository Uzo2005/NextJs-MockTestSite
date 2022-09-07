import { withSessionRoute } from "../../lib/withSessions";
import { writeClient } from "../../lib/sanityClient";

export default withSessionRoute(async function initExam(req, res) {
  try {
    if (req.method == "POST") {
      req.session.examInfo = {
        id: req.body.examId
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
      

      res.redirect(302, "/firstInstructions")
      res.end();
    }
  } catch (err) {
    console.log(err);
    res.end();
  }
});
