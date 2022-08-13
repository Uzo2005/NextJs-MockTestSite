import OfficialLogo from "../Logo/OfficialLogo";

const FormHeader = ({ title, subtitle }) => {
  return (
    <>
      <div className="ml-[110px]">
        <OfficialLogo />
      </div>
      <div className="text-center text-red-700 font-bold">
        <span>{title}</span>
      </div>
      <div className=" text-blue-700 font-semibold">
        <span>{subtitle}</span>
      </div>
    </>
  );
};
export default FormHeader;
