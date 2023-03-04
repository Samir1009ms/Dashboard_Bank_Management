import { RxDashboard } from "react-icons/rx";
import { IoAnalyticsOutline } from "react-icons/io5";
import { IoWalletOutline } from "react-icons/io5";
import { RiAccountCircleLine } from "react-icons/ri";
import { TbSettings } from "react-icons/tb";
import { MdOutlineSecurity, MdOutlineDarkMode } from "react-icons/md";
import { BiHelpCircle } from "react-icons/bi";
import { CiLight } from "react-icons/ci";
import { GoFlame } from "react-icons/go";
import { MdKeyboardArrowDown } from "react-icons/md";
import s from "../design/style.module.css";

export const navListTop = [
  {
    link:"/",
    text: "dashboard",
    icon: <RxDashboard className={s.icon} />,
  },
  {
    link:"/analytics",
    text: "analytics",
    icon: <IoAnalyticsOutline className={s.icon} />,
  },
  {
    link:"/wallet",
    text: "my wallet",
    icon: <IoWalletOutline className={s.icon} />,
  },
  {
    link:"/account",
    text: "accounts",
    icon: <RiAccountCircleLine className={s.icon} />,
  },
  {
    text: "settings",
    icon: <TbSettings className={s.icon} />,
  },
  {
    text: "security",
    icon: <MdOutlineSecurity className={s.icon} />,
  },
  {
    text: "help centre",
    icon: <BiHelpCircle className={s.icon} />,
  },
  {
    text: "dark mode",
    icon: <MdOutlineDarkMode className={s.icon} />,
  },
];


