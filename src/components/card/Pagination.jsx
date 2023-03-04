export function Pagination({cardsPerPage, totalCards, currentPage, onPageChange,s}) {
  
    // Sayfa numaralarını hesaplayın
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(totalCards / cardsPerPage); i++) {
      pageNumbers.push(i);
      console.log(pageNumbers);
    }
  
    return (
      <div className={s.PaginationCont}>
        <p className={s.pagination}>
          {pageNumbers.map((number) => (
          currentPage + 2 > number && currentPage - 2 < number &&
            <span key={number} className={s.pageItem}>
              <button
                className={currentPage === number ? `${s.pageLink} ${s.active}` : `${s.pageLink}`}
                onClick={() => onPageChange(number)}
              >
                {/* {number} */}
              </button>
            </span>
          ))}
        </p>
      </div>
    );
  }