const ExamEnd = () => {
  return (
    <>
      <div className="break">
        <span className="congrats">
          Congratulations!, You Have Successfully Completed This MockTest{" "}
          <span className="ticks">✔✔</span>.
        </span>
        <br />
        <span className="choice">You Can Check Your Email For Your Score.</span>
        <br />
      </div>

      <div className="next_section">
        <a href="#">
          <button>I want To See My Score Now</button>
        </a>
      </div>
    </>
  );
};

export default ExamEnd;
