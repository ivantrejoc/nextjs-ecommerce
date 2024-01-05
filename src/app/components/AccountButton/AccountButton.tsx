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
        <p className="font-medium text-sm text-black dark:text-gray-300 hover:underline pl-1">Account</p>
      </a>
    </div>
  );
};

export default AccountButton;
