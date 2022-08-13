import { withSessionRoute } from "../../lib/withSessions";

export default withSessionRoute(function logoutRoute(req, res, session) {
  if (req.method == "POST") {
    req.session.destroy();
    res.redirect("/login");
  }
});
