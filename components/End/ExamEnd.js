import Link from "next/link";
import Confetti from "../Confetti/ConfettiComponent";
import { useState, useEffect } from "react";


const ExamEnd = ({
  readingScore,
  writingScore,
  noCalcScore,
  calcAllowedScore,
  englishSectionScore,
  mathsSectionScore,
  finalSATScore,
  testId,
  userId
}) => {
  async function postData(url = "", data = {}) {
    // Default options are marked with *
    const response = await fetch(url, {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      mode: "cors", // no-cors, *cors, same-origin
      cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
      credentials: "same-origin", // include, *same-origin, omit
      headers: {
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      redirect: "follow", // manual, *follow, error
      referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      body: JSON.stringify(data), // body data type must match "Content-Type" header
    });
    return response.json(); // parses JSON response into native JavaScript objects
  }

  useEffect(() => {
    if (!localStorage.getItem("justFinishedExam")) {

      localStorage.setItem("justFinishedExam", JSON.stringify('done'))

      postData("/api/scoreLogger", {
        englishSectionScore,
        mathsSectionScore,
        finalSATScore,
        readingScore,
        writingScore,
        noCalcScore,
        calcAllowedScore,
        testId,
        userId,
      }).then((res) => {
        console.log("On the frontend:", res);
      });

    }
    return () => {
      localStorage.removeItem("justFinishedExam");
    };
    

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  const [hydrated, setHydrated] = useState(false);

  // Wait until after client-side hydration to show
  useEffect(() => {
    setHydrated(true);
  }, []);

  if (!hydrated) {
    return null;
  }

  return (
    <main className="grid">
      {finalSATScore >= 1400 && <Confetti />}
      <div className="m-auto mb-6 mt-12">
        <span className="text-blue-600 font-semibold block text-3xl">
          Congratulations On Completing This Mocktest!
        </span>
        <span className="font-bold text-green-500 block mt-4">
          Your SAT Score For This Mocktest is:
          <span
            className={`text-8xl ${
              finalSATScore <= 1000 ? "text-red-500" : "text-green-500"
            } text-center block`}
          >
            {finalSATScore}
          </span>
        </span>
      </div>
      <div className=" m-auto sm:rounded-lg mb-6">
        <table className="text-sm text-center text-gray-500 ">
          <thead className="text-xs text-gray-700 uppercase bg-gray-200 ">
            <tr>
              <th scope="col" className="py-3 px-6">
                SAT Section
              </th>
              <th scope="col" className="py-3 px-6">
                SAT Score
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white border-b ">
              <th
                scope="row"
                className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap "
              >
                English Section
              </th>
              <td className="py-4 px-6 bg-gray-50">{englishSectionScore}</td>
            </tr>
            <tr className="bg-white border-b ">
              <th
                scope="row"
                className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap "
              >
                Maths Section
              </th>
              <td className="py-4 px-6 bg-gray-50">{mathsSectionScore}</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className=" m-auto  sm:rounded-lg mb-6">
        <table className="text-sm text-center text-gray-500 ">
          <thead className="text-xs text-gray-700 uppercase bg-gray-200 ">
            <tr>
              <th scope="col" className="py-3 px-6">
                SAT Sub-Sections
              </th>
              <th scope="col" className="py-3 px-6">
                Raw Score
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white border-b ">
              <th
                scope="row"
                className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap "
              >
                Reading
              </th>
              <td className="py-4 px-6 bg-gray-50">
                {readingScore} correct answers out of 52 questions
              </td>
            </tr>
            <tr className="bg-white border-b ">
              <th
                scope="row"
                className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap "
              >
                Writing and Language
              </th>
              <td className="py-4 px-6 bg-gray-50">
                {writingScore} correct answers out of 44 questions
              </td>
            </tr>
            <tr className="bg-white border-b">
              <th
                scope="row"
                className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap "
              >
                Maths- No Calculator
              </th>
              <td className="py-4 px-6 bg-gray-50">
                {noCalcScore} correct answers out of 20 questions
              </td>
            </tr>
            <tr className="bg-white border-b">
              <th
                scope="row"
                className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap "
              >
                Maths- Calculator Allowed
              </th>
              <td className="py-4 px-6 bg-gray-50">
                {" "}
                {calcAllowedScore} correct answers out of 38 questions
              </td>
            </tr>
          </tbody>
        </table>

        <Link href="/dashboard">
          <button className=" bg-blue-700 hover:bg-blue-500 text-white font-semibold p-3 rounded-md mt-4 ">
            Return To The Dashboard
          </button>
        </Link>
      </div>
    </main>
  );
};

export default ExamEnd;
