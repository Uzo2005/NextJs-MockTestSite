import { withSessionRoute } from "../../lib/withSessions";

export default withSessionRoute(async function doneWithExamOrNot(req, res) {
  if (req.method === "POST") {
      const { doneWithExam, routeThisCameFrom } = req.body;

      req.session[routeThisCameFrom] = {
        doneWithExam: doneWithExam
      };
      await req.session.save();
      res.send(
        JSON.stringify(
          `Done with ${routeThisCameFrom} is ${doneWithExam}: session is ${req.session}`
        )
    );
  }
  
    
});
