import { readClient } from "../../lib/sanityClient";
import bcrypt from "bcrypt";

import { withSessionRoute } from "../../lib/withSessions";

export default withSessionRoute(async function loginAuth(req, res) {
  if (req.method == "POST") {
    const user = await req.body;
    const userEmail = await user.studentEmail;
    const passwordInput = await user.studentPassword;
    // console.log("before:", req.session)

    try {
      const query = `*[_type=='students' && emailOfStudent=='${userEmail}']{hashedPassword,nameOfStudent, _id}`;
      const getUser = await readClient.fetch(query);

      if (getUser.length == 0) {
        return res.send("Invalid Email");
      }
      const getUserPassword = getUser[0].hashedPassword;
      const getUserName = getUser[0].nameOfStudent;
      const getUserId = getUser[0]._id;

      const isUser = await bcrypt.compare(passwordInput, getUserPassword);
      if (isUser == false) {
        return res.send("Invalid Password");
      }
      // console.log("after:", req.session);

      req.session.user = {
        email: userEmail,
        name: getUserName,
        id: getUserId
      };
      await req.session.save();
      res.redirect("/dashboard");
    } catch (err) {
      console.log(err);
      res.end()
    }
  }
});
