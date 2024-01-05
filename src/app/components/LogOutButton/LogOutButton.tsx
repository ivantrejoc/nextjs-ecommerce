import { IoLogOut } from "react-icons/io5";
import { signOut } from "next-auth/react";

const LogOutButton = () => {
     return (
        <div className="inline-flex justify-between px-3">
          <button
            onClick={()=> signOut()}
            className="inline-flex items-center "
          >
            <IoLogOut />
            <p className="font-medium text-sm text-black dark:text-gray-300 hover:underline pl-1">Logout</p>
          </button>
        </div>
  )
}

export default LogOutButton