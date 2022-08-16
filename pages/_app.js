import "../styles/globals.css";

// import { withSessionSsr } from "../lib/withSessions";

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
// export const getServerSideProps = withSessionSsr(
//   async function getServerSideProps({ req }) {
//     const { user } = req.session;

//     if (!user) {
//       return {
//         redirect: {
//           destination: "/login",
//           permanent: false,
//         },
//       };
//     }
//   }
// );