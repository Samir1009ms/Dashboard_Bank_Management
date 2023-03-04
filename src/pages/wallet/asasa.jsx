import React, { useState } from "react";
import {Slide} from "./wallet";
import { pages } from "./i";

export function Slideshow() {
  const [currentPage, setCurrentPage] = useState(0);

  const numPages = pages.length;

  const pageArray = Array.from({ length: numPages }, (_, i) => i);

  const handlePrevClick = () => {
    setCurrentPage((currentPage - 1 + numPages) % numPages);
  }

  const handleNextClick = () => {
    setCurrentPage((currentPage + 1) % numPages);
  }

  return (
    <div className="slideshow">
      <div className="slides-container">
        {pageArray.map((page) => (
          <Slide
            key={page}
            title={pages[page].title}
            content={pages[page].content}
            backgroundColor={pages[page].backgroundColor}
            active={page === currentPage}
          />
        ))}
      </div>
      <div className="controls">
        <button onClick={handlePrevClick}>Önceki</button>
        <button onClick={handleNextClick}>Sonraki</button>
      </div>
    </div>
  );
}