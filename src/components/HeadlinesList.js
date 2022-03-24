import React from "react";
import moment from "moment";
import { shorten } from "../utility/util";
import { v4 as uuidv4 } from "uuid";

const HeadlinesList = ({
  loadingHeadlines,
  setShowArticle,
  setOpen,
  display,
}) => {
  if (loadingHeadlines) {
    return (
      <h2 style={{ marginTop: "2rem", marginLeft: "3rem" }}>Loading...</h2>
    );
  }
  if (display.length === 0) {
    return (
      <h2 style={{ marginTop: "2rem", marginLeft: "3rem" }}>
        No News Found...
      </h2>
    );
  }
  return (
    <div className="content">
      {display.map((item) => {
        return (
          <div className="item" key={uuidv4()}>
            <div
              className="dt"
              style={{
                color: "#e78b40",
                margin: "auto 0",
              }}
            >
              <p>{moment(item.publishedAt).format("MMM DD, YYYY")}</p>
              <p>{moment(item.publishedAt).format("hh:mm a")}</p>
            </div>
            <div
              className="title"
              onClick={() => {
                setOpen(true);
                setShowArticle(item);
              }}
            >
              <h4>{item.title}</h4>
              <p>
                {item.description !== null
                  ? shorten(item.description, 80)
                  : null}
              </p>
              <p style={{ color: "#e78b40", fontSize: "0.7rem" }}>
                {item.source.name}
              </p>
            </div>
            <div
              className="link"
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <a href={item.url} target="_blank" rel="noreferrer">
                <i className="fas fa-external-link-alt"></i>
              </a>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default HeadlinesList;
