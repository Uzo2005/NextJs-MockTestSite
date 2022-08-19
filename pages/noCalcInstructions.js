import Instructions from "../components/Instructions/NoCalc";
import Head from "next/head";

const noCalcInstructions = () => {
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

export default noCalcInstructions;
