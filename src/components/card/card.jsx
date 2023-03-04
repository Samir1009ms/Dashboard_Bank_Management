import s from "./design/style.module.css";
import React, { useEffect, useState } from "react";
import ReactCreditCard from "react-credit-cards";
import "react-credit-cards/es/styles-compiled.css";
import { cardApi } from "../../api/api";
const cardTotals = [
  {
    name: "testing card",
    number: "4169741394701443",
    cvc: "123",
    expiry: "11/23",
    focus: "true",
  },
  {
    name: "testing card",
    number: "4169741394701421",
    cvc: "111",
    expiry: "11/2",
    focus: "false",
  },
];

export function Card() {
  const [card, setCard] = useState();
  // const [cardV, setCardV] = useState();
  console.log("card", card);
  async function Cartget() {
    try {
      const data = await cardApi.card();
      console.log(data);
      setCard(data);
    } catch {
      console.log("error");
    }
  }

  // function Value(e) {
  //   const input = e.target.value;
  //   setCardV(input);
  // }

  useEffect(() => {
    Cartget();
  }, []);

  return (
    <div className={s.top}>
      {card &&
        card.map((e, i) => (
          <div className={s.cardProduct} key={i}>
            <ReactCreditCard
              name={e.name}
              number={e.number}
              cvc={e.cvc}
              focused={e.focus}
              expiry={e.expiry}
              balance={e.balans}
            />
            <div className={s.total}>
              <small className={s.balansText}>current balance</small>
              <p className={s.price}>$ {e.balans}</p>
            </div>
          </div>
        ))}
    </div>
  );
}
