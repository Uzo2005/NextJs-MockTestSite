import Link from "next/link";
const LeisureBreak = () => {
  return (
    <main>
      <span className="font-bold text-blue-500 block m-6">
        Hi, If You Had Any Problems During This Test,{" "}
        <span className="border-b-2 border-red-500">
          <a href="https://wa.me/2348138950473">Contact Me On Whatsapp</a>
        </span>{" "}
        For A Quick Fix
      </span>

      <Link href="/end">
        <button className=" bg-blue-700 hover:bg-blue-500 text-white font-semibold p-3 rounded-md mt-4 ">
          View Your Scores For This Test
        </button>
      </Link>
    </main>
  );
};

export default LeisureBreak;
