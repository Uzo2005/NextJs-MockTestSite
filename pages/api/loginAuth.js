import { readClient } from "../../lib/sanityClient";
import bcrypt from "bcrypt";

import { withSessionRoute } from "../../lib/withSessions";

export default withSessionRoute(async function loginAuth(req, res) {
  if (req.method == "POST") {
    const user = await req.body;
    const userEmail = await user.studentEmail;
    const passwordInput = await user.studentPassword;

    try {
      const query = `*[_type=='students' && emailOfStudent=='${userEmail}']{hashedPassword,nameOfStudent, _id}`;
      const getUser = await readClient.fetch(query);
      const getUserPassword = getUser[0]?.hashedPassword;

      const getUserName = getUser[0]?.nameOfStudent;
      const getUserId = getUser[0]?._id;
      if (getUserPassword != undefined) {
       const  isUser = await bcrypt.compare(passwordInput, getUserPassword);
     

        if (getUser.length == 0 || isUser == false || isUser == undefined) {
          // console.log("2");
          res.send(JSON.stringify("bad"));
          res.end();
        } else {
          // console.log("3");
          req.session.user = {
            email: userEmail,
            name: getUserName,
            id: getUserId,
          };
          await req.session.save();
          res.send(JSON.stringify("good"));
        }

      }
      else {
        // console.log("4");
        res.send(JSON.stringify("bad"));
        res.end();
      }

       
     
    } catch (err) {
      console.log(err);
    }
  }
});
