import FullExam from "../../components/Exam/English/WritingExam";
import Head from "next/head";
import Link from "next/link";

import { withSessionSsr } from "../../lib/withSessions";
import { readClient, builder } from "../../lib/sanityClient";

const writing = ({
  passage1Data,
  passage2Data,
  passage3Data,
  passage4Data,
  doneWithExam,
}) => {
  if (doneWithExam) {
    return (
      <>
        <span className="text-red-500 font-bold flex items-center justify-center mt-[50vh]">
          Sorry, you have submitted the Writing Section!
        </span>
        <Link href="/noCalcInstructions">
          <button className=" bg-blue-700 hover:bg-blue-500 text-white font-semibold p-3 rounded-md ml-[60rem] mt-[200px]">
            Move To The Maths-No Calculator Section
          </button>
        </Link>
      </>
    )
  } else if (!doneWithExam) {
    return (
      <>
        <Head>
          <title>EducationUSA Abuja SAT MockTest Site</title>
          <meta name="description" content="SAT Practice For EdUSA members" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <FullExam
          passages={[passage1Data, passage2Data, passage3Data, passage4Data]}
        />
      </>
    );
  }
};

export default writing;

export const getServerSideProps = withSessionSsr(
  async function getServerSideProps({ req }) {
    const examId = req.session.examInfo.id;
    const doneWithWritingExam =
      req.session.writing == undefined
        ? false
        : req.session.writing.doneWithExam;

    const query = `*[_type=='satExams' && _id=='${examId}'] {mockTest[_type=="Writing"]}[0]`;

    const readingTestData = await readClient.fetch(query);
    const readingTest = readingTestData.mockTest[0];
    const passage1 = await readingTest.passage1;
    const passage2 = await readingTest.passage2;
    const passage3 = await readingTest.passage3;
    const passage4 = await readingTest.passage4;

    function urlFor(source) {
      return builder
        .image(source)
        .auto("format")
        .fit("max")
        .width(720)
        .toString();
    }

    const Passage = (id) => {
      const imageLinks = [];

      for (let i = 0; i < id.whatWillBeRead.length; i++) {
        const imageRef = id.whatWillBeRead[i].asset._ref;
        const imageUrl = urlFor(imageRef);
        imageLinks.push(imageUrl);
      }

      const QandA = [];
      const arrLen = id.questions.length;

      for (let i = 0; i < arrLen; i++) {
        const data = {
          questionImage: urlFor(id.questions[i].newQuestionImage),
          question: id.questions[i].newQuestion,
          OptionA: id.questions[i].OptionA,
          OptionB: id.questions[i].OptionB,
          OptionC: id.questions[i].OptionC,
          OptionD: id.questions[i].OptionD,
        };

        QandA.push(data);
      }

      return {
        imageLinks,
        QandA,
      };
    };

    return {
      props: {
        passage1Data: Passage(passage1),
        passage2Data: Passage(passage2),
        passage3Data: Passage(passage3),
        passage4Data: Passage(passage4),
        doneWithExam: doneWithWritingExam,
      },
    };
  }
);
