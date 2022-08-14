import NavBar from "./NavBar";
import TestList from "./TestList";


// export const getServerSideProps = withIronSessionSsr(
//     async function getServerSideProps({ req }) {
//       const userName = req.session.user.name;
//       return {
//         props: {
//            user: userName
//         },
//       };
//     },
//     sessionOptions
//   );

const Dashboard = ({ user, tests }) => {
  return (
    <main>
      <NavBar studentName={user} />
      <ul className="bg-sky-400 p-3 border-2 border-blue-400">
        {tests.map((test, index) => {
          return (
            <TestList
              key={index}
              testIdentifier={test.testIdentifier}
              testid={test._id}
            />
          );
        })}
      </ul>
    </main>
  );
};

export default Dashboard;
