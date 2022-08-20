import { withSessionRoute } from "../../lib/withSessions";

export default withSessionRoute(async function initExam(req, res) {
  try{
      if (req.method == "POST") {
        req.session.examInfo = {
          id: req.body.examId,
        };
        await req.session.save();
        res.redirect(302, "/firstInstructions");
        res.end()
  }
  } catch (err) {
    console.log(err)
    res.end();
  }
  
});
