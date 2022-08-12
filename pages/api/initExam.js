import { withIronSessionApiRoute } from "iron-session/next";
import {sessionOptions} from '../../lib/sessionOptions'

export default withIronSessionApiRoute(
  async function initExam(req, res, session) {
    if(req.method=='POST'){

        req.session.examInfo = {
           id: req.body.examId
        };
        await req.session.save();
        res.redirect('/generalInstructions');
    }
  },
  sessionOptions
);