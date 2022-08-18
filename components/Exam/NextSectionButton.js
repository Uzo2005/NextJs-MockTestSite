const NextSectionButton = ({nextSectionText, formId }) => {
  return (
    <div className="w-fit h-7 p-1 bg-gray-800 hover:bg-gray-700  text-white font-semibold rounded-sm">
      <a>
        <button type="submit" form={formId}>
          Submit This Section And Move To The <span>{nextSectionText}</span>
        </button>
      </a>
    </div>
  );
};

export default NextSectionButton;
