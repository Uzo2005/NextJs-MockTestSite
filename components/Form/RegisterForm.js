import FormHeader from "./FormHeader";
import FormBody from "./RegisterFormBody";

const RegisterForm = () => {
  const checkIfPasswordsMatch = (e) => {
    const p1 = e.target.studentPassword1.value;
    const p2 = e.target.studentPassword2.value;

    if (p1 != p2) {
      e.preventDefault();
      alert("Passwords Not Confirmed!");
    }
  };

  return (
    <form
      className="p-[20px] w-[350px] bg-gray-300 py-[40px] rounded-3xl my-[100px] shadow-xl"
      onSubmit={checkIfPasswordsMatch}
      action="/api/register"
      method="POST"
    >
      <FormHeader
        title="Register"
        subtitle="Input Your Name And The Email EdUSA Identifies You With"
      />

      <FormBody />
    </form>
  );
};

export default RegisterForm;
