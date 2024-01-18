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
            <p className="text-black text-xs font-light md:text-sm lg:text-base lg:font-normal px-1 leading-normal hover:underline">Logout</p>
          </button>
        </div>
  )
}

export default LogOutButton