const Button = ({ prevLink, startTimer }) => {
  return (
    <div className="border-t-2 border-blue-400 pt-4 mx-4 flex justify-between">
      <a href={prevLink}>
        <button className="bg-white hover:bg-blue-700 text-blue-700 hover:text-white border-blue-800 border-2 h-[35px] px-2  font-bold text-center rounded-sm">
          Back To Dashboard
        </button>
      </a>
      <button
        className="bg-blue-700 hover:bg-white text-white hover:text-blue-700 border-blue-800 border-2 h-[35px] px-2  font-bold text-center rounded-sm"
        onClick={startTimer}
      >
        Start timer
      </button>
    </div>
  );
};
export default Button;
