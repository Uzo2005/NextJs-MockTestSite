import LoginForm from "../components/Form/LoginForm";
import Head from "next/head";

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
