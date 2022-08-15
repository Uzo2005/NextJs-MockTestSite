const NextSectionButton = ({ nextSectionLink, nextSectionText }) => {
  return (
    <div className="w-fit h-7 p-1 bg-gray-800 hover:bg-gray-700  text-white font-semibold rounded-sm">
      <a href={nextSectionLink}>
        <button>
          Submit And Move To The <span>{nextSectionText}</span> Section
        </button>
      </a>
    </div>
  );
};

export default NextSectionButton;
