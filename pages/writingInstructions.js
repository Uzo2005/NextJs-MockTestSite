import Instructions from "../components/Instructions/Writing";
import Head from "next/head";

const writingInstructions = () => {
  return (
    <>
      <Head>
        <title>EducationUSA Abuja SAT MockTest Site</title>
        <meta name="description" content="SAT Practice For EdUSA members" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Instructions />
    </>
  );
};

export default writingInstructions;
