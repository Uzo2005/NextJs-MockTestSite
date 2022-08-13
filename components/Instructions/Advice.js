const Advice = ({ text }) => {
  return (
    <div className="mt-2 sm:[display:none] ">
      <span className="font-semibold text-red-500  p-4"> {text}</span>
    </div>
  );
};

export default Advice;
