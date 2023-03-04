import s from "./design/style.module.css";
import { BiSearch } from "react-icons/bi";
import { BsFillArrowDownLeftSquareFill } from "react-icons/bs";
import {BsFillArrowDownRightSquareFill} from "react-icons/bs"
export function Dashboard() {

  return (
    <section className={s.dashboard}>
      <div className={s.dashboardTop}>
        <div className={s.dashboardLeft}>
          <p className={s.dashboardName}>welcome back, ali</p>
          <span className={s.dashboardText}>
            Here's what's happening with your store today.
          </span>
        </div>
        <div className={s.dashboardRight}>
          <input
            placeholder="Search for anytging..."
            className={s.dashboardSearch}
            type="text"
            name=""
            id=""
          />
          <BiSearch className={s.search} />
        </div>
      </div>
      <div className={s.dashboardBottom}>
        <div className={s.bottomLeft}>
          <div className={s.bottomLeftTop}>
            <div className={s.dashboardTotal}>
              <BsFillArrowDownLeftSquareFill className={s.dashboardArrow} />
              <p className={s.dashboardPrice}>
                <span className={s.Total}>Total Incomne</span>
                <span className={s.price}>$634.000</span>
              </p>
              <small className={s.faiz}>+1.29%</small>
            </div>
            <div className={s.dashboardTotal} >
            <BsFillArrowDownRightSquareFill className={`${s.dashboardArrow} ${s.Left}`} />
              <p className={s.dashboardPrice}>
                <span className={s.Total}>Total Outcomme</span>
                <span className={s.price}>$634.000</span>
              </p>
              <small className={`${s.faiz} ${s.red}`}>+1.29%</small>
            </div>
          </div>
          <div></div>
          <div></div>
        </div>
        <div className={s.bottomRight}></div>
      </div>
    </section>
  );
}
