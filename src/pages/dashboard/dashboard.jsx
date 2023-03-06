import s from "./design/style.module.css";
import { BiSearch } from "react-icons/bi";
import { BsFillArrowDownLeftSquareFill } from "react-icons/bs";
import { BsFillArrowDownRightSquareFill } from "react-icons/bs";
// import { Card } from "../../components/card/card";
import { CardItem } from "../../components/card/cardItem";
import { Account } from "../account/account";
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
            <div className={s.dashboardTotal}>
              <BsFillArrowDownRightSquareFill
                className={`${s.dashboardArrow} ${s.Left}`}
              />
              <p className={s.dashboardPrice}>
                <span className={s.Total}>Total Outcomme</span>
                <span className={s.price}>$634.000</span>
              </p>
              <small className={`${s.faiz} ${s.red}`}>+1.29%</small>
            </div>
          </div>
          <div>
            <Account />

          </div>
          <div></div>
        </div>
        <div className={s.bottomRight}>
          <div className={s.bottomRightTop}>
            <h4 className={s.bottomRightName}>my card</h4>
            <p className={s.bottomRightCardBalans}>card balance</p>
            <p className={s.bottomRightPrice}>$15,595.015</p>
            {/* <div className={s.cardItem}>
              <Card />
              <p className={s.layers}>
                <span className={s.pages}></span> 
                <span className={s.pages}></span>
                <span className={s.pages}></span>
              </p>
            </div> */}
            <CardItem s={s}/>
            <div className={s.bottomRightBtnCont}>
              <button className={s.Btn}>Manage Cards</button>
              <button className={`${s.Btn} ${s.BtnBg}`}>Transfer</button>
            </div>
          </div>
          <div className={s.bottomRightAlt}></div>
        </div>
      </div>
    </section>
  );
}
