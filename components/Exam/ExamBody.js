



const ExamBody = ({ imageLink, questionsAndOptions }) => {
 
  return (
    <div className="grid grid-cols-2 gap-[5px] m-[20px] cursor-pointer">
      <div
        className="bg-slate-300 rounded-sm leading-7
        text-justify h-[calc(100vh-80px)] 
        overflow-y-scroll overflow-x-scroll scroll-smooth 
        scrollbar-thin scrollbar-thumb-slate-500 scrollbar-track-blue-200 
        touch-manipulation relative"
      >
        <section className="p-4">
          {imageLink.map((imageLinky, index) => {
            return (
              <div key={index} className="relative">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img key={index} src={imageLinky} alt="Reading Passage" />
              </div>
            );
          })}
        </section>
      </div>
      <div
        className="bg-slate-200 rounded-sm leading-7 text-justify h-[calc(100vh-80px)] overflow-y-scroll 
        scroll-smooth scrollbar-thin scrollbar-thumb-slate-500 scrollbar-track-blue-200 
        touch-manipulation"
      >
        <section className="p-4 ">
          {questionsAndOptions.map((questionsAndOptions, index) => {
            return (
              <div key={index} className="m-2 p-2 bg-white rounded">
                <span className="font-semibold">
                  {index + 1}. {questionsAndOptions.question}
                </span>{" "}
                <br />
                <div className="flex items-center pl-3 pr-4 border border-blue-500 rounded mb-2 mt-4">
                  <input
                    id="A"
                    type="radio"
                    value="A"
                    name={questionsAndOptions.question}
                    className="w-4 h-4 bg-gray-100 border-gray-300"
                  />
                  <label
                    htmlFor="A"
                    className="py-3 ml-2 w-full text-sm font-medium text-gray-900"
                  >
                    {" "}
                    {questionsAndOptions.OptionA}{" "}
                  </label>
                </div>
                <div className="flex items-center pl-3 pr-4 border border-blue-500 rounded mb-2">
                  <input
                    id="B"
                    type="radio"
                    value="B"
                    name={questionsAndOptions.question}
                    className="w-4 h-4  bg-gray-100 border-gray-300"
                  />
                  <label
                    htmlFor="B"
                    className="py-3 ml-2 w-full text-sm font-medium text-gray-900"
                  >
                    {" "}
                    {questionsAndOptions.OptionB}{" "}
                  </label>
                </div>
                <div className="flex items-center pl-3 pr-4  border border-blue-500 rounded mb-2">
                  <input
                    id="C"
                    type="radio"
                    value="A"
                    name={questionsAndOptions.question}
                    className="w-4 h-4  bg-gray-100 border-gray-300"
                  />
                  <label
                    htmlFor="C"
                    className="py-3 ml-2 w-full text-sm font-medium text-gray-900 "
                  >
                    {" "}
                    {questionsAndOptions.OptionC}{" "}
                  </label>
                </div>
                <div className="flex items-center pl-3 pr-4 border border-blue-500 rounded mb-2">
                  <input
                    id="D"
                    type="radio"
                    value="D"
                    name={questionsAndOptions.question}
                    className="w-4 h-4 bg-gray-100 border-gray-300"
                  />
                  <label
                    htmlFor="D"
                    className="py-3 ml-2 w-full text-sm font-medium text-gray-900 "
                  >
                    {" "}
                    {questionsAndOptions.OptionD}{" "}
                  </label>
                </div>
              </div>
            );
          })}
        </section>
      </div>
    </div>
  );
};

export default ExamBody;
