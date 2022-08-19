import FullExam from "../../components/Exam/Maths/CalcAllowedExam";
import Head from "next/head";

import { withSessionSsr } from "../../lib/withSessions";
import { readClient, builder } from "../../lib/sanityClient";

const noCalc = ({ multiChoiceData, gridInData }) => {
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
};

export default noCalc;

export const getServerSideProps = withSessionSsr(
  async function getServerSideProps({ req }) {
    const examId = req.session.examInfo.id;

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
      },
    };
  }
);
