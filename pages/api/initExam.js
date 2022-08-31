import { withSessionRoute } from "../../lib/withSessions";
import { writeClient } from "../../lib/sanityClient";

export default withSessionRoute(async function initExam(req, res) {
  try {
    if (req.method == "POST") {
      req.session.examInfo = {
        id: req.body.examId
      };
      
     

      //   req.session.reading = {
      //     doneWithExam: false,
      //   };
      //  req.session.writing = {
      //    doneWithExam: false,
      //  };
      //   req.session.noCalc = {
      //     doneWithExam: false,
      //   };
      //   req.session.calcAllowed = {
      //     doneWithExam: false,
      //   };
      await req.session.save();
      // console.log(req.session);

      // await writeClient
      //   .patch(req.session.user.id) // Document ID to patch
      //   .set({
      //     practiceScoresOfThisStudent: {
      //       _type: "testScore",
      //       _key: req.body.examId,
      //       test: {
      //         _ref: req.body.examId,
      //         _type: "reference",
      //       },
      //     },
      //   })
      //   .commit({ visibility: "async" }) // Perform the patch and generate a unique key for this array elememnt
      //   .then((res) => {
      //     console.log("exam Has been Initialised:");
      //     console.log(res);
      //   })
      //   .catch((err) => {
      //     console.error("Oh no, the update failed: ", err.message);
      //   });

      res.redirect(307, "/firstInstructions");
      res.end();
    }
  } catch (err) {
    console.log(err);
    res.end();
  }
});
