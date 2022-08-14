import NextSectionButton from "./NextSectionButton";
import Timer from "./Timer";
import {useState, useEffect} from 'react'

const ExamHeader = () => {

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
      <NextSectionButton nextSectionLink="/writing" nextSectionText="Writing" />

      <Timer timeInMinutes={65} />
    </div>
  );
};

export default ExamHeader;
