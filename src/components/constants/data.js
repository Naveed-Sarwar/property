
import { BiSolidLandscape } from "react-icons/bi";
import { BsFillPersonFill } from 'react-icons/bs';
import { AiFillPropertySafety, AiTwotoneTool } from "react-icons/ai";
import { FaTools } from "react-icons/fa";
import {FiDollarSign} from "react-icons/fi";

export  const list = [
    {title: "Invest" , icon: <FiDollarSign fontSize={24} /> },
    { title: "Buy Land", icon: <BiSolidLandscape fontSize={24} /> },
    { title: "Portfolio", icon: <BsFillPersonFill fontSize={24} /> },
    { title: "On ramp a property", icon: <AiFillPropertySafety fontSize={24} /> },
    { title: "Use Your Land", icon: <FaTools fontSize={22} /> },
    { title: "Build on Aasthi", icon: <AiTwotoneTool fontSize={24} /> }
]