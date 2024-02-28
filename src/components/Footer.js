import { useContext } from "react";
import UserContext from "../utils/UserContext";

const Footer = () => {
  const { user } = useContext(UserContext);
  return (
      <div className="w-full bottom-0">
        <h4 className="text-[#ebebec] bg-[#02060c] font-medium  p-2 text-center tracking-wider">This site is developed by {user.name} - {user.email}</h4>
      </div>
   )
};

export default Footer;
