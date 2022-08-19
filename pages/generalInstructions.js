import GeneralInstructions from "../components/Instructions/GeneralInstructions";
import Head from "next/head";

const generalinstructions = () => {
  return (
    <>
      <Head>
        <title>EducationUSA Abuja SAT MockTest Site</title>
        <meta name="description" content="SAT Practice For EdUSA members" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <GeneralInstructions />
    </>
  );
};
export default generalinstructions;
