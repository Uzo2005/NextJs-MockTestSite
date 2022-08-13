const Dialog = ({ prompt, no, yes, nextLink, pointer, closeModal }) => {
  return (
    <dialog
      className="p-[30px] pt-[60px]
         bg-gray-200 shadow-black shadow-2xl backdrop-blur-3xl
         rounded-md h-[200px] w-[400px]"
      ref={pointer}
    >
      <span className=" font-bold text-black border-b-2 border-t-2 border-red-400">
        {prompt}
      </span>

      <div className="pt-[50px] mx-4 flex justify-between">
        <button
          className="bg-white hover:bg-blue-700 text-blue-700 hover:text-white border-blue-800 border-2 h-[35px] px-2 w-20  font-bold text-center rounded-sm"
          onClick={closeModal}
        >
          {no}
        </button>
        <a href={nextLink}>
          <button className="bg-blue-700 hover:bg-white text-white hover:text-blue-700 border-blue-800 border-2 h-[35px] px-2 w-30  font-bold text-center rounded-sm">
            {yes}
          </button>
        </a>
      </div>
    </dialog>
  );
};

export default Dialog;
