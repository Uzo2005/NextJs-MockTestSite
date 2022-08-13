import UserDashboard from "../components/Dashboard/Dashboard";

import Head from "next/head";
import { withSessionSsr } from "../lib/withSessions";
import { readClient } from "../lib/sanityClient";

const Dashboard = ({ user, availableTests }) => {
  return (
    <>
      <Head>
        {/* eslint-disable-next-line react/no-unescaped-entities */}
        <title>{user.toString()}'s Dashboard</title>
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
