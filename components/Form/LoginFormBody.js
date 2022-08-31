import Input from "./Input";
import SubmitButton from "./SubmitButton";
import Link from "next/link";

const LoginFormBody = () => {
  return (
    <>
      <div className="">
        <Input
          type="email"
          name="studentEmail"
          placeholder="Email"
          isRequired={true}
        />
        <Input
          type="password"
          name="studentPassword"
          placeholder="Enter Your Password"
          isRequired={true}
        />

        <SubmitButton />

        <Link href="/">
          <a className="ml-[70px] text-red-600 font-semibold underline">
            Register As A User..
          </a>
        </Link>
      </div>
    </>
  );
};

export default LoginFormBody;
