import Image from "next/image";
import { HiMiniUser } from "react-icons/hi2";

const AccountButton = () => {
  return (
    <div className="inline-flex justify-between px-3">
      <a
        href="/login"
        className="inline-flex items-center "
      >
        <HiMiniUser />
        <p className="text-black text-xs font-light md:text-sm lg:text-base lg:font-normal px-1 leading-normal hover:underline">Account</p>
      </a>
    </div>
  );
};

export default AccountButton;
