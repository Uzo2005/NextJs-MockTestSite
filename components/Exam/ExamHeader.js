import NextSectionButton from "./NextSectionButton";
import Timer from "./Timer";
import {useState, useEffect} from 'react'

const ExamHeader = ({ nextSectionText, formId, timeInMinutes }) => {
  const [showTimer, setShowTimer] = useState(false);

  // Wait until after client-side hydration to show
  useEffect(() => {
    setShowTimer(true);
  }, []);

  if (!showTimer) {
    return null;
  }
  return (
    <div
      className="bg-blue-300 h-10 w-screen rounded-sm px-4 py-1 border-blue-800 border-2
        flex justify-between "
    >
      <NextSectionButton nextSectionText={nextSectionText} formId={formId} />

      <Timer timeInMinutes={timeInMinutes} />
    </div>
  );
};

export default ExamHeader;
