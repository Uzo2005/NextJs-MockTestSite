import FullExam from "../../components/Exam/Maths/CalcAllowedExam";
import Head from "next/head";
import Link from "next/link";

import { withSessionSsr } from "../../lib/withSessions";
import { readClient, builder } from "../../lib/sanityClient";

const noCalc = ({ multiChoiceData, gridInData, doneWithExam }) => {
  if (doneWithExam) {
    return (
      <>
        <span className="text-red-500 font-bold flex items-center justify-center mt-[50vh]">
          Sorry, you have submitted the Maths- Calculator Section!
        </span>
        <Link href="/end">
          <button className=" bg-blue-700 hover:bg-blue-500 text-white font-semibold p-3 rounded-md ml-[60rem] mt-[200px]">
            I Want To See My Scores
          </button>
        </Link>
      </>
    );
  } else if (!doneWithExam) {
    return (
      <>
        <Head>
          <title>EducationUSA Abuja SAT MockTest Site</title>
          <meta name="description" content="SAT Practice For EdUSA members" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <FullExam categories={[multiChoiceData, gridInData]} />
      </>
    );
  }
};

export default noCalc;

export const getServerSideProps = withSessionSsr(
  async function getServerSideProps({ req,res }) {
    if (!req.session.user) {
      return {
        redirect: {
          destination: "/login",
          permanent: false,
        },
      };
    }
    const examId = req.session.examInfo.id;
    const doneWithCalcAllowedExam =
      req.session.calcAllowed == undefined
        ? false
        : req.session.calcAllowed.doneWithExam;
    // console.log(doneWithCalcAllowedExam);
    // console.log(req.session);

    const query = `*[_type=='satExams' && _id=='${examId}'] {mockTest[_type=="mathsCalcAllowed"]}[0]`;

    const mathsTestData = await readClient.fetch(query);
    const mathsTest = mathsTestData.mockTest[0];
    const multiChoice = await mathsTest.multiChoice;
    const gridIn = await mathsTest.gridIn;

    function urlFor(source) {
      return builder
        .image(source)
        .auto("format")
        .fit("max")
        .width(720)
        .toString();
    }

    const mathsCategory = (id) => {
      const imageLinks = [];

      for (let i = 0; i < id.whatWillBeRead.length; i++) {
        const imageRef = id.whatWillBeRead[i].asset._ref;
        const imageUrl = urlFor(imageRef);
        imageLinks.push(imageUrl);
      }
      return {
        imageLinks,
        // QandA,
      };
    };

    return {
      props: {
        multiChoiceData: mathsCategory(multiChoice),
        gridInData: mathsCategory(gridIn),
        doneWithExam: doneWithCalcAllowedExam,
      },
    };
  }
);
