import { useState, useEffect, useLayoutEffect } from "react";

const Timer = ({ timeInMinutes, timeUp }) => {
  useEffect(() => {
    if (!localStorage.getItem("startTime")) {
      localStorage.setItem("startTime", JSON.stringify(Date.now()));
    }
    return () => {
      localStorage.removeItem("startTime");
    };
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

  const timerCountingDown = () => {
    if (timer <= 0.5) {
      timeUp()
    }
    setTimer(timer - 1);
  };
  setTimeout(timerCountingDown, 1000);


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
