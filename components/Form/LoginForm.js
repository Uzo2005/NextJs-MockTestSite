import FormHeader from "./FormHeader";
import FormBody from "./LoginFormBody";

const LoginForm = () => {
  const checkCompleteInput = (e) => {
    const emailInput = e.target.studentEmail.value;
    const passwordInput = e.target.studentPassword.value;

    if (!emailInput || !passwordInput) {
      e.preventDefault();
      alert("Incomplete Credentials!");
    }
  };

  return (
    <form
      className="p-[20px] w-[350px] bg-gray-300 py-[40px] rounded-3xl
         my-[100px] shadow-xl"
      onSubmit={checkCompleteInput}
      action="/api/loginAuth"
      method="POST"
    >
      <div className="">
        <FormHeader
          title="Login"
          subtitle="Input Your Email And The Password You Used To Register"
        />
        <FormBody />
      </div>
    </form>
  );
};

export default LoginForm;
