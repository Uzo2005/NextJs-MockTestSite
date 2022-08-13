import FullExam from "../components/Exam/FullExam";
import Head from "next/head";

import { withSessionSsr } from "../lib/withSessions";
import { readClient, builder } from "../lib/sanityClient";

const reading = ({
  passage1Data,
  passage2Data,
  passage3Data,
  passage4Data,
  passage5Data,
}) => {
  return (
    <>
      <Head>
        <title>EducationUSA Abuja SAT MockTest Site</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <FullExam
        imageData={passage1Data.imageLinks}
        questionsData={passage1Data.QandA}
      />
    </>
  );
};

export default reading;

export const getServerSideProps = withSessionSsr(
  async function getServerSideProps({ req }) {
    const examId = req.session.examInfo.id;

    const query = `*[_type=='satExams' && _id=='${examId}']{mockTest[_type=="Reading"]}[0]`;

    const readingTestData = await readClient.fetch(query);
    const readingTest = readingTestData.mockTest[0];
    const passage1 = await readingTest.passage1;
    const passage2 = await readingTest.passage2;
    const passage3 = await readingTest.passage3;
    const passage4 = await readingTest.passage4;
    const passage5 = await readingTest.passage5;

    function urlFor(source) {
      return builder.image(source);
      // .auto('format')
      // .fit('max')
      // .width(720)
      // .toString()
    }

    const Passage = (id) => {
      const imageLinks = [];

      for (let i = 0; i < id.whatWillBeRead.length; i++) {
        const imageRef = id.whatWillBeRead[i].asset._ref;
        const imageUrl = urlFor(imageRef).url();
        imageLinks.push(imageUrl);
      }

      const QandA = [];
      const arrLen = id.questions.length;

      for (let i = 0; i < arrLen; i++) {
        const data = {
          question: id.questions[i].newQuestion,
          OptionA: id.questions[i].OptionA,
          OptionB: id.questions[i].OptionB,
          OptionC: id.questions[i].OptionC,
          OptionD: id.questions[i].OptionD,
          correctOption: id.questions[i].correctOption,
        };

        QandA.push(data);
      }

      return {
        imageLinks,
        QandA,
      };
    };

    // console.log(Passage(passage1))

    return {
      props: {
        passage1Data: Passage(passage1),
        // passage2Data: Passage(passage2),
        // passage3Data: Passage(passage3),
        // passage4Data: Passage(passage4),
        // passage5Data: Passage(passage5)
      },
    };
  }
);
