import React, { useEffect, useState } from "react";
import { fetchEverything } from "../actions/newsAction";
import { useSelector, useDispatch } from "react-redux";
import Modal from "./Modal";
import moment from "moment";
import { shorten } from "../utility/util";

const Everything = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchEverything());
  }, [dispatch]);

  const everything = useSelector((state) => state.news.everything);
  const loadingEverything = useSelector(
    (state) => state.news.loadingEverything
  );
  const [open, setOpen] = useState(false);
  const [showArticle, setShowArticle] = useState(null);
  let i = 0;

  return (
    <div className="everything">
      <div className="heading">
        <h3>Home</h3>
      </div>

      {loadingEverything ? (
        <h2 style={{ marginTop: "2rem", marginLeft: "3rem" }}>Loading...</h2>
      ) : (
        <div className="content">
          {everything.map((item) => {
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

export default Everything;
