import Link from "next/link";

const ExamNavButton = ({ linkTo, direction, nextSetOfQuestions,}) => {
  return (
    <div className="w-fit h-7 p-1 bg-gray-800 hover:bg-gray-700  text-white font-semibold rounded-sm">
      <Link href={`/reading/${linkTo}`}>
        <a>
          <button type="submit">
            {direction} to <span>passage {nextSetOfQuestions}</span>{" "}
          </button>
        </a>
      </Link>
    </div>
  );
};

export default ExamNavButton;
