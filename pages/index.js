import Head from "next/head";
import { withSessionSsr } from "../lib/withSessions";

import RegisterForm from "../components/Form/RegisterForm";

export default function Register() {
  return (
    <>
      <Head>
        <title>EducationUSA Abuja SAT MockTest Site</title>
        <meta name="description" content="SAT Practice For EdUSA members" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className=" bg-blue-100 flex items-center justify-center box-border">
        <RegisterForm />
      </div>
    </>
  );
}

export const getServerSideProps = withSessionSsr(
  async function getServerSideProps({ req, res }) {
    if (req.session.user) {
      return {
        redirect: {
          destination: "/dashboard",
          permanent: false,
        },
      };
    }

    return {
      props: {},
    };
  }
);
