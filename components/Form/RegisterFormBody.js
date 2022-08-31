import Input from "./Input";
import SubmitButton from "./SubmitButton";
import { useState } from "react";
import Link from "next/link";

const RegisterFormBody = () => {

  return (
    <>
      <Input
        type="text"
        name="studentName"
        placeholder="Name"
        isRequired={true}
       
      />

      <Input
        type="email"
        name="studentEmail"
        placeholder="Email"
        isRequired={true}
        
      />
      <Input
        type="password"
        name="studentPassword1"
        placeholder="Enter Your Password"
        isRequired={true}
       
      />
      <Input
        type="password"
        name="studentPassword2"
        placeholder="Confirm Your Password"
        isRequired={true}
       
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
