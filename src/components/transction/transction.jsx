import { IoSearchOutline } from "react-icons/io5";
import { cardApi } from "../../api/api";
import { useEffect, useState } from "react";
import s from "./design/style.module.css";
import { VscCalendar } from "react-icons/vsc";
import {MdOutlineKeyboardArrowDown} from "react-icons/md"
export function Transction() {
  const [products, setProducts] = useState();
  async function Data() {
    try {
      const data = await cardApi.product();
      console.log("dataProduct", data);
      setProducts(data);
    } catch {
      console.log("error");
    }
  }

  useEffect(() => {
    Data();
  }, []);

  return (
    <section className={s.transction}>
        <div className={s.transctionContainer}>
        <div className={s.transctionTop}>
        <h3 className={s.logo}>transaction</h3>
        <div className={s.inputContainer}>
          <div className={s.transctionSearchContainer}>
            <input className={s.search} type="text" />
            <IoSearchOutline className={s.searchIcon} />
          </div>
          <div className={s.dateContainer}>
            <VscCalendar className={s.dateIcon} />
            <input className={s.date} type="month" name="" id="" />
            -
            <input className={s.date} type="month" name="" id="" />
          </div>
        </div>
      </div>
      <div className={s.transctionBottom}>
        <table className={s.transctionBottomTable}>
          <thead>
            <tr className={s.tableTop}>
              <td className={s.tableTopList}>name</td>
              <td className={s.tableTopList}>date</td>
              <td className={s.tableTopList}>amout</td>
              <td className={s.tableTopList}>status</td>
            </tr>
          </thead>
          {/*//! datadan map  */}
          <tbody>
            {products &&
              products.map((e, i) => (
                <tr className={s.tableBottom} key={i}>
                  <td className={s.tableBottomList}>
                    <span className={s.imgCont}>
                      <img className={s.listImg} src={e.img} alt="" />
                    </span>
                    {e.name}{" "}
                  </td>
                  <td className={s.tableBottomList}>{e.date}</td>
                  <td className={s.tableBottomList}>{e.price}</td>
                  <td className={s.tableBottomList}>{e.depo}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
        </div>
    </section>
  );
}
