import { withSessionRoute } from "../../lib/withSessions";

export default withSessionRoute(async function initExam(req, res, session) {
  if (req.method == "POST") {
    req.session.examInfo = {
      id: req.body.examId,
    };
    await req.session.save();
    console.log('dashboard',req.session.examInfo)
    res.redirect("/general-instructions");
  }
});
