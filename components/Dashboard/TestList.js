import { useRef } from "react";
import ConfirmPassCode from "./ConfirmPassCode";

const TestList = ({ testIdentifier, testid }) => {
  const dialogToCollectPassCode = useRef(null);

  const openModal = () => {
    dialogToCollectPassCode.current.showModal();
  };
  const closeModal = () => {
    dialogToCollectPassCode.current.close();
  };
  return (
    <>
      <li className="bg-gray-300  flex items-center justify-center m-5 rounded-sm">
        <div
          className="m-2 p-3 bg-blue-700 hover:bg-blue-500 rounded-sm w-fit cursor-pointer"
          onClick={openModal}
        >
          <span className="font-semibold">{testIdentifier}</span>
        </div>

        <ConfirmPassCode
          prompt={`Input The Passcode For ${testIdentifier}`}
          pointer={dialogToCollectPassCode}
          closeModal={closeModal}
          testid={testid}
        />
      </li> 
    </>
  );
};

export default TestList;
