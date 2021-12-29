import React, { useEffect, useState } from "react";
import { fetchHeadlines } from "../actions/newsAction";
import { useSelector, useDispatch } from "react-redux";
import moment from "moment";
import { shorten } from "../utility/util";
import Modal from "./Modal";

const Headlines = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchHeadlines());
  }, [dispatch]);
  const headlines = useSelector((state) => state.news.headlines);
  const loadingHeadlines = useSelector((state) => state.news.loadingHeadlines);
  const [open, setOpen] = useState(false);
  const [showArticle, setShowArticle] = useState(null);
  let i = 0;

  return (
    <div className="headlines">
      <div className="heading">
        <h3>Top Headlines</h3>
      </div>

      {loadingHeadlines ? (
        <h2 style={{ marginTop: "2rem", marginLeft: "3rem" }}>Loading...</h2>
      ) : (
        <div className="content">
          {headlines.map((item) => {
            i++;
            return (
              <div className="item" key={i}>
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
      )}

      {open ? (
        <Modal open={open} article={showArticle} setOpen={setOpen} />
      ) : null}
    </div>
  );
};

export default Headlines;
