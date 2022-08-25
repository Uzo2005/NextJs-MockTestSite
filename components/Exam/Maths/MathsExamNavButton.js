import Link from "next/link";


const ExamNavButton = ({ presentSection, linkTo, direction, nextSetOfQuestions}) => {
  return (
    <div className="w-fit h-7 p-1 bg-gray-800 hover:bg-gray-700  text-white font-semibold rounded-sm">
      <Link
        href={{
          pathname: `/${presentSection}/[category]`,
          query: { category: linkTo },
        }}
      >
        <a>
          <button>
            {direction} to <span> {nextSetOfQuestions}</span>{" "}
          </button>
        </a>
      </Link>
    </div>
  );
};

export default ExamNavButton;