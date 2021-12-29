import moment from "moment";
import React from "react";
import { shorten } from "../utility/util";

const Modal = ({ open, article, setOpen }) => {
  if (open && article !== null) {
    return (
      <div className="modal">
        <div className="main">
          <div className="header">
            <p style={{ margin: "0" }}>{shorten(article.title, 40)}</p>
            <i
              className="fas fa-times"
              style={{ cursor: "pointer", fontSize: "1.5rem" }}
              onClick={() => setOpen(false)}
            ></i>
          </div>

          <div className="content">
            <div className="section">
              <h4 style={{ color: "#e78b40" }}>{article.author}</h4>
              <p>
                {moment(article.publishedAt).format("MMM DD, YYYY hh:mm a")}
              </p>
            </div>
            <a href={article.url} target="_blank" rel="noreferrer">
              <h2
                style={{
                  textAlign: "center",
                  background: "rgba(37, 39, 42, 0.8)",
                  padding: "0.5rem",
                }}
              >
                {article.title}{" "}
                <i
                  className="fas fa-external-link-alt"
                  style={{ fontSize: "1rem", color: "#e78b40" }}
                ></i>
              </h2>
            </a>
            {article.urlToImage ? (
              <img src={article.urlToImage} alt="" />
            ) : null}
            <p>
              <b>Description</b> : {article.description}
            </p>
            <p dangerouslySetInnerHTML={{ __html: article.content }} />
            <br />
            <h4>Source : {article.source.name}</h4>
          </div>
        </div>
      </div>
    );
  } else {
    return null;
  }
};

export default Modal;
