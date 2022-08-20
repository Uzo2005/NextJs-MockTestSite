/**
 * This totally broke my studio and caused more harm than good
 * When I add this feature I will use a database
 */


// import { writeClient } from "../../lib/sanityClient";
// import { withSessionRoute } from "../../lib/withSessions";

// export default withSessionRoute(async function logExamStartTime(req, res) {
//   if (req.method === "POST") {
//     const data = req.body;
//     const userId = req.session.user.id;
//     const testId = req.session.examInfo.id;
//     const { timeWhenExamStarted, routeThisHappenedOn } = data;
//     let section = [];
//     if (routeThisHappenedOn == "/firstInstructions") {
//       section.push("readingStartTime");
//     } else if (routeThisHappenedOn == "/writingInstructions") {
//       section.push("writingStartTime");
//     } else if (routeThisHappenedOn == "/noCalcInstructions") {
//       section.push("noCalcStartTime");
//     } else if (routeThisHappenedOn == "/calcAllowedInstructions") {
//       section.push("calcAllowedStartTime");
//     }
//     const doc = `*[_id=="${userId}"]{practiceScoresOfThisStudent[_key=="${testId}"]}`;
//     await writeClient
//       .patch(doc) // Document ID to patch
//       .set({
//         timeWhenTestHappened: {
//           [section]: timeWhenExamStarted
//         },
//       })
//       .commit({ visibility: "async" }) // Perform the patch and generate a unique key for this array elememnt
//       .then((res) => {
//           console.log("Hurray, the time is logged!, Details:");
//           console.log(res)
//       })
//       .catch((err) => {
//         console.error("Oh no, the update failed: ", err.message);
//       });


//     res.send(
//       JSON.stringify(
//         `Time Logged On ${section[0]} by ${timeWhenExamStarted}`,
//         null,
//         2
//       )
//     );
//     res.end();
//   }
// });
