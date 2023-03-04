import { Card } from "./card";

export function CardItem({ s }) {
  return (
   
      <div className={s.cardItem}>
        <Card cardsPerPage={1} s={s}/>
        
      </div>
 
  );
}
