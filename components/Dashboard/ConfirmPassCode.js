const ConfirmPassCode = ({ prompt, pointer, closeModal, testid }) => {
  return (
    <dialog
      className="pt-4
         bg-gray-200 shadow-black shadow-2xl backdrop-blur-3xl
         rounded-md h-[180px] w-[380px]"
      ref={pointer}
    >
      <span className="font-bold text-red-700 text-center">{prompt}</span>
      <form action="/api/initExam" method="POST" className="mt-2">
        <input type="hidden" value={testid} name="examId" />
        <input
          required
          type="text"
          name="passCodeProvidedByUser"
          className="m-auto bg-gray-50 border-[3px] border-blue-600 text-gray-900 text-md rounded-lg block w-[200px] p-2.5 outline-none focus:bg-sky-50"
        />

        <div className="mt-4 mx-4 flex justify-between">
          <div
            className="bg-white hover:bg-blue-700 text-blue-700 hover:text-white border-blue-800 border-2 h-[35px] px-2 w-20  font-bold text-center rounded-sm p-1 cursor-pointer"
            onClick={closeModal}
          >
            Back
          </div>

          <button
            className="bg-blue-700 hover:bg-white text-white hover:text-blue-700 border-blue-800 border-2 h-[35px] px-2 w-30  font-bold text-center rounded-sm"
            type="submit"
          >
            Submit
          </button>
        </div>
      </form>
    </dialog>
  );
};

export default ConfirmPassCode;
