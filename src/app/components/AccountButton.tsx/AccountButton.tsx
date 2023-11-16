import Image from "next/image";
import { HiMiniUser } from "react-icons/hi2";

const AccountButton = () => {
  return (
    <div className="inline-flex justify-between px-6">
      <a
        href="/login"
        className="inline-flex items-center font-medium text-black dark:text-gray-300 hover:underline"
      >
        <HiMiniUser />
        <p className="text-black dark:text-gray-400 pl-1">Account</p>
      </a>
    </div>
  );
};

export default AccountButton;
