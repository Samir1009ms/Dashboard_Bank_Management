import x from "./design/style.module.css";
import React, { useEffect, useState } from "react";
import ReactCreditCard from "react-credit-cards";
import "react-credit-cards/es/styles-compiled.css";
import { cardApi } from "../../api/api";
import { Pagination } from "./Pagination";
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

export function Card({cardsPerPage,s}) {
  const [card, setCard] = useState();
  console.log("card", card);
  async function Cartget() {
    try {
      const data = await cardApi.card();
      // console.log(data.splice(0,1));
      setCard(data);
    } catch {
      console.log("error");
    }
  }


  useEffect(() => {
    Cartget();
  }, []);


//! ---------------------------------------
const [currentPage, setCurrentPage] = useState(1);
const handlePageChange = (pageNumber) => {
  setCurrentPage(pageNumber);
};


const indexOfLastCard = currentPage * cardsPerPage;
const indexOfFirstCard = indexOfLastCard - cardsPerPage;
const currentCards = card && card.slice(indexOfFirstCard, indexOfLastCard);
//! --------------------------------------- 


  return (
   <div className={x.cardContainer}>
     <div className={x.top}>
      {card ?
        currentCards.map((e, i) => (
          <div className={x.cardProduct} key={i}>
            <ReactCreditCard
              name={e.name}
              number={e.number}
              cvc={e.cvc}
              focused={e.focus}
              expiry={e.expiry}
              balance={e.balans}
            />
            <div className={x.total}>
              <small className={x.balansText}>current balance</small>
              <p className={x.price}>$ {e.balans}</p>
            </div>
          </div>
        )):<p>kart yoxdu</p>}
        
    </div>
    <Pagination
         s={s}
        cardsPerPage={cardsPerPage}
        totalCards={card&&card.length}
        currentPage={currentPage}
        onPageChange={handlePageChange}
      />
   </div>
  );
}
