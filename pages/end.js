import { withSessionSsr } from "../lib/withSessions";

const end = ({ readingScore, writingScore, noCalcScore, calcAllowedScore }) => {
  return (
    <div className="flex items-center justify-center">
      Congrats For completing this test
      {/* eslint-disable-next-line react/no-unescaped-entities */}
      Here Are Your Score's: Reading: {readingScore}
      Writing: {writingScore}
      Maths No-Calculator: {noCalcScore}
      Maths Calculator Allowed: {calcAllowedScore}
    </div>
  );
};

export default end;

export const getServerSideProps = withSessionSsr(
  async function getServerSideProps({ req }) {
    const {
      readingRawScore,
      writingRawScore,
      noCalcRawScore,
      calcAllowedRawScore,
    } = req.session;
    const readingScore = readingRawScore.readingRawScore;
    const writingScore = writingRawScore.writingRawScore;
    const noCalcScore = noCalcRawScore.noCalcRawScore;
    const calcAllowedScore = calcAllowedRawScore.calcAllowedRawScore;

    return {
      props: {
        readingScore: readingScore,
        writingScore: writingScore,
        noCalcScore: noCalcScore,
        calcAllowedScore: calcAllowedScore,
      },
    };
  }
);
