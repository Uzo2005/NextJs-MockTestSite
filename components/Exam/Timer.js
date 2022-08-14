import { useState, useEffect, useLayoutEffect } from "react";

const Timer = ({ timeInMinutes }) => {
  useEffect(() => {
    if (!localStorage.getItem("startTime")) {
      localStorage.setItem("startTime", JSON.stringify(Date.now()));
    }
  }, []);

  const [timer, setTimer] = useState(timeInMinutes * 60);

  useLayoutEffect(() => {
    const totalTimeInSeconds = timeInMinutes * 60;
    if (localStorage.getItem("startTime")) {
     setTimer(
      totalTimeInSeconds -
        Math.floor(
          (Date.now() - JSON.parse(localStorage.getItem("startTime"))) / 1000
        )
    );
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
    


  setTimeout(() => setTimer(timer - 1), 1000);

  return (
    <div className="inline-flex text-black font-semibold rounded-sm bg-green-400 w-fit p-1 h-15 cursor-pointer">
      <div className="mr-1">
        <span className="">
          <span id="countdown_minutes">{Math.floor(timer / 60)}</span> Minutes{" "}
        </span>
      </div>
      <div className="ml-1">
        <span className="">
          <span id="countdown_seconds">
            {timer % 60 < 10 ? `0${timer % 60}` : timer % 60}
          </span>{" "}
          Seconds
        </span>
      </div>
    </div>
  );
};

export default Timer;
