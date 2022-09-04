import UserDashboard from "../components/Dashboard/Dashboard";

import Head from "next/head";
import { withSessionSsr } from "../lib/withSessions";
import { readClient } from "../lib/sanityClient";

const Dashboard = ({ user, availableTests }) => {
  const studentNameAsTitle = `${user}'s Dashboard`
  return (
    <>
      <Head>
        {/* eslint-disable-next-line react/no-unescaped-entities */}
        <title>{studentNameAsTitle}</title>
        <meta name="description" content="SAT MockTest Site" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <UserDashboard user={user} tests={availableTests} />
    </>
  );
};

export default Dashboard;

export const getServerSideProps = withSessionSsr(
  async function getServerSideProps({ req }) {


    // req.session.reading = {
    //   doneWithExam: false,
    // };
    // req.session.writing = {
    //   doneWithExam: false,
    // };
    // req.session.noCalc = {
    //   doneWithExam: false,
    // };
    // req.session.calcAllowed = {
    //   doneWithExam: false,
    // }

    const query = "*[_type=='satExams']{testIdentifier, _id}";

    const allAvailableTests = await readClient.fetch(query);

    const userName = req.session.user.name;
    return {
      props: {
        user: userName,
        availableTests: allAvailableTests,
      },
    };
  }
);
