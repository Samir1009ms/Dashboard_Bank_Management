import { GoFlame } from "react-icons/go";
import { MdKeyboardArrowDown } from "react-icons/md";
import img from "../../assests/img/Mask group.svg";
import s from "./design/style.module.css";
import { navListTop } from "./config/sidenav";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export function Navbar() {
  const [hover, setHover] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();

  function Active(i) {
    setHover(i);
  }
  function deActive() {
    setHover(null);
  }
  function Hover(e) {
    return hover === e ? "#6359e979" : null;
  }

  return (
    <header className={s.header}>
      <nav className={s.navTop}>
        <h2 className={s.logo}>
          <GoFlame className={s.icon} />
          uirfy <span className={s.logoLow}>TM</span>
        </h2>

        <ul className={s.navList}>
          {navListTop.map((e, i) => (
            <li
              key={i}
              onClick={() => {
                navigate(e.link);
              }}
              className={`${s.navListText} ${
                location.pathname === e.link && s.active
              }`}
              onMouseEnter={() => Active(i)}
              onMouseLeave={deActive}
              style={{ marginBottom: i === 4 && "13px", background: Hover(i) }}
            >
              {e.icon}
              {e.text}
            </li>
          ))}
        </ul>
      </nav>
      <nav className={s.navBottom}>
        <div className={s.navBottomCont}>
          <img className={s.bottomImg} src={img} alt="" />
          <div className={s.bottomText}>
            <p className={s.name}>ali riaz</p>
            <p className={s.work}>web developper</p>
          </div>
          <span className={s.arrow}>
            <MdKeyboardArrowDown />
          </span>
        </div>
      </nav>
    </header>
  );
}
