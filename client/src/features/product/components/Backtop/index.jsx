import React from "react";
import "./Backtop.scss";

function Backtop() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="backtop">
      <div className="backtop__inner">
        <button type="button" className="backtop__button" onClick={scrollToTop}>
          BackToTop
        </button>
      </div>
    </div>
  );
}

export default Backtop;
