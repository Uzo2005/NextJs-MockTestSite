import { useState, useEffect } from "react";

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

  const timerCountingDown = () => {
    const totalTimeInSeconds = timeInMinutes * 60;
    if (timer <= 1) {
      timeUp();
    }
    setTimer(
      totalTimeInSeconds -
        Math.floor(
          (Date.now() - JSON.parse(localStorage.getItem("startTime"))) / 1000
        ) -
        1
    );
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
