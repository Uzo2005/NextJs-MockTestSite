import { writeClient } from "../../lib/sanityClient";
import { withSessionRoute } from "../../lib/withSessions";

export default withSessionRoute(
    async function logExamStartTime(req, res) {
     if (req.method === "POST") {
         const data = req.body;
         const userId = req.session.user.id
         const testId = req.session.examInfo.id
        const { timeWhenExamStarted, routeThisHappenedOn } = data
        let section = []
        if (routeThisHappenedOn == "/firstInstructions") {
            section.push("Reading");
        } else if (routeThisHappenedOn == "/writingInstructions") {
            section.push("Writing")
        } else if (routeThisHappenedOn == "/noCalcInstructions") {
            section.push("mathsNoCalc")
        } else if (routeThisHappenedOn == "/calcAllowedInstructions") {
            section.push("mathsCalcAllowed")
        }

    await writeClient
      .patch(userId) // Document ID to patch
        .set({
            "practiceScoresOfThisStudent": [
                {
                    "test": {
                    "_ref": testId
                    }
                }

          ]
      }) // Shallow merge
      .inc({numSold: 1}) // Increment field by count
      .commit() // Perform the patch and return a promise
      .then((updatedBike) => {
        console.log('Hurray, the bike is updated! New document:')
        console.log(updatedBike)
      })
      .catch((err) => {
        console.error('Oh no, the update failed: ', err.message)
      })

        console.log(req.session)

    
        res.send(
            JSON.stringify(
            `Time Logged On ${section[0]} by ${timeWhenExamStarted}`,
            null,
            2
            )
        );
        res.end()
      
    }
}
)
