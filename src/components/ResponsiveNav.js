import React, { useState } from "react";

const ResponsiveNav = () => {
  const [evClass, setEvClass] = useState("ev active");
  const [headClass, setHeadClass] = useState("head");
  return (
    <div className="res-nav">
      <div
        className={evClass}
        onClick={() => {
          const headline = document.querySelector(".headlines");
          const everything = document.querySelector(".everything");
          headline.style.width = "0%";
          headline.style.display = "none";
          everything.style.width = "100%";
          everything.style.display = "block";
          setEvClass("ev active");
          setHeadClass("head");
        }}
      >
        <h3>
          <i className="fas fa-home"></i>
        </h3>
      </div>
      <div
        className={headClass}
        style={{ borderLeft: "solid 1px #e78b40" }}
        onClick={() => {
          document.querySelector(".everything").style.width = "0%";
          document.querySelector(".everything").style.display = "none";
          document.querySelector(".headlines").style.width = "100%";
          document.querySelector(".headlines").style.display = "block";
          setHeadClass("head active");
          setEvClass("ev");
        }}
      >
        <h3>
          <i className="fas fa-fire"></i>
        </h3>
      </div>
    </div>
  );
};

export default ResponsiveNav;
