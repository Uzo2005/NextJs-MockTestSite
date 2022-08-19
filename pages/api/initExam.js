import { withSessionRoute } from "../../lib/withSessions";

export default withSessionRoute(async function initExam(req, res, session) {
  try{
      if (req.method == "POST") {
        req.session.examInfo = {
          id: req.body.examId,
        };
        await req.session.save();
        res.redirect("/firstInstructions");
  }
  } catch (err) {
    console.log(err)
  }
  
});
