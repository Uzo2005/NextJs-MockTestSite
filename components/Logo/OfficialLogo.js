import Image from "next/image";

const OfficialLogo = () => {
  return (
    <Image
      src="/images/logo.jpg"
      alt="EdUSA Logo"
      height={100}
      width={100}
      className="rounded-[50%]"
    />
  );
};

export default OfficialLogo;
