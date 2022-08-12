import { withIronSessionApiRoute } from "iron-session/next";
import {sessionOptions} from '../../lib/sessionOptions'

export default withIronSessionApiRoute(
  function logoutRoute(req, res, session) {
    if(req.method=='POST'){

        req.session.destroy();
        res.redirect('/login');
    }
  },
  sessionOptions
);