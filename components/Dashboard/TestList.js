const TestList = ({ testIdentifier, testid }) => {
  return (
    <>
      <li>
        <form
          className="bg-gray-300  flex items-center justify-center m-5 rounded-sm"
          action="/api/initExam"
          method="POST"
        >
          <input type="hidden" value={testid} name="examId" />

          <button
            className="m-2 p-3 bg-blue-700 hover:bg-blue-500 rounded-sm"
            type="submit"
          >
            <span className="font-semibold">{testIdentifier}</span>
          </button>
        </form>
      </li>
    </>
  );
};

export default TestList;
