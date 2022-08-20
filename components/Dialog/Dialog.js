// import {useRouter} from 'next/router'

const Dialog = ({ prompt, no, yes, nextLink, pointer, closeModal }) => {
  
  // const router = useRouter()
  // const routeName = router.pathname
  // async function getToday() {
  //   async function postData(url = "", data = {}) {
  //     const response = await fetch(url, {
  //       method: "POST", // *GET, POST, PUT, DELETE, etc.
  //       mode: "cors", // no-cors, *cors, same-origin
  //       cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
  //       credentials: "same-origin", // include, *same-origin, omit
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       redirect: "follow", // manual, *follow, error
  //       referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
  //       body: JSON.stringify(data), // body data type must match "Content-Type" header
  //     });
  //     return response.json(); // parses JSON response into native JavaScript objects
  //   }

  //   //Get Time when The Test Started
  //   const objToday = new Date();
  //   const weekdays = new Array(
  //     "Sunday",
  //     "Monday",
  //     "Tuesday",
  //     "Wednesday",
  //     "Thursday",
  //     "Friday",
  //     "Saturday"
  //   );
  //   const dayOfWeek = weekdays[objToday.getDay()],
  //     domEnder = (function () {
  //       let a = objToday;
  //       if (/1/.test(parseInt((a + "").charAt(0)))) return "th";
  //       a = parseInt((a + "").charAt(1));
  //       return 1 == a ? "st" : 2 == a ? "nd" : 3 == a ? "rd" : "th";
  //     })(),
  //     dayOfMonth =
  //       today + (objToday.getDate() < 10)
  //         ? "0" + objToday.getDate() + domEnder
  //         : objToday.getDate() + domEnder,
  //     months = new Array(
  //       "January",
  //       "February",
  //       "March",
  //       "April",
  //       "May",
  //       "June",
  //       "July",
  //       "August",
  //       "September",
  //       "October",
  //       "November",
  //       "December"
  //     ),
  //     curMonth = months[objToday.getMonth()],
  //     curYear = objToday.getFullYear(),
  //     curHour =
  //       objToday.getHours() > 12
  //         ? objToday.getHours() - 12
  //         : objToday.getHours() < 10
  //         ? "0" + objToday.getHours()
  //         : objToday.getHours(),
  //     curMinute =
  //       objToday.getMinutes() < 10
  //         ? "0" + objToday.getMinutes()
  //         : objToday.getMinutes(),
  //     curSeconds =
  //       objToday.getSeconds() < 10
  //         ? "0" + objToday.getSeconds()
  //         : objToday.getSeconds(),
  //     curMeridiem = objToday.getHours() > 12 ? "PM" : "AM";
  //   var today =
  //     curHour +
  //     ":" +
  //     curMinute +
  //     ":" +
  //     curSeconds +
  //     curMeridiem +
  //     " " +
  //     dayOfWeek +
  //     " " +
  //     dayOfMonth +
  //     " of " +
  //     curMonth +
  //     ", " +
  //     curYear
  //   const dataToBeSent = {
  //     'timeWhenExamStarted': today,
  //     'routeThisHappenedOn': routeName
  //   }
  //    await postData("/api/timeLogger", dataToBeSent).then((res) => {
  //      console.log(res); // JSON data parsed by `data.json()` call
  //    });
    
  //   router.push(nextLink)
  // }

  return (
    <dialog
      className="p-[30px] pt-[60px]
         bg-gray-200 shadow-black shadow-2xl backdrop-blur-3xl
         rounded-md h-[200px] w-[400px]"
      ref={pointer}
    >
      <span className=" font-bold text-black border-b-2 border-t-2 border-red-400">
        {prompt}
      </span>

      <div className="pt-[50px] mx-4 flex justify-between">
        <button
          className="bg-white hover:bg-blue-700 text-blue-700 hover:text-white border-blue-800 border-2 h-[35px] px-2 w-20  font-bold text-center rounded-sm"
          onClick={closeModal}
        >
          {no}
        </button>
        <a href={nextLink}>
          <button onClick={getToday} className="bg-blue-700 hover:bg-white text-white hover:text-blue-700 border-blue-800 border-2 h-[35px] px-2 w-30  font-bold text-center rounded-sm">
            {yes}
          </button>
        </a>
      </div>
    </dialog>
  );
};

export default Dialog;
