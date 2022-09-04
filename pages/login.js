import LoginForm from "../components/Form/LoginForm";
import Head from "next/head";


import { withSessionSsr } from "../lib/withSessions";

const Login = () => {
  return (
    <>
      <Head>
        <title>EducationUSA Abuja SAT MockTest Site</title>
        <meta name="description" content="SAT Practice For EdUSA members" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className=" flex items-center justify-center box-border">
        <LoginForm />
      </div>
    </>
  );
};
export default Login;

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

