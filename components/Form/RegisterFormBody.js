import Input from "./Input";
import SubmitButton from "./SubmitButton";
import { useState } from "react";
import Link from "next/link";

const RegisterFormBody = () => {
  const [password1, setPasssword1] = useState("");
  const [password2, setPasssword2] = useState("");
  const [nameInput, setNameInput] = useState("");
  const [emailInput, setEmailInput] = useState("");
  const handleNameChange = (e) => {
    setNameInput(e.target.value);
  };
  const handleEmailChange = (e) => {
    setEmailInput(e.target.value);
  };

  const handleP1 = (e) => {
    setPasssword1(e.target.value);
  };
  const handleP2 = (e) => {
    setPasssword2(e.target.value);
  };

  return (
    <>
      <Input
        type="text"
        name="studentName"
        placeholder="Name"
        isRequired={true}
        value={nameInput}
        onChange={handleNameChange}
      />

      <Input
        type="email"
        name="studentEmail"
        placeholder="Email"
        isRequired={true}
        value={emailInput}
        onChange={handleEmailChange}
      />
      <Input
        type="password"
        name="studentPassword1"
        placeholder="Enter Your Password"
        isRequired={true}
        value={password1}
        onChange={handleP1}
      />
      <Input
        type="password"
        name="studentPassword2"
        placeholder="Confirm Your Password"
        isRequired={true}
        value={password2}
        onChange={handleP2}
      />
      <SubmitButton />

      <Link href="/login">
        <a className="ml-4 text-red-600 font-semibold underline">
          Already A User? Click Here To Login..
        </a>
      </Link>
    </>
  );
};

export default RegisterFormBody;
