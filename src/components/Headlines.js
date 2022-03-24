import React, { useEffect, useState } from "react";
import { fetchHeadlines } from "../actions/newsAction";
import { useSelector, useDispatch } from "react-redux";
import Modal from "./Modal";
import HeadlinesList from "./HeadlinesList";

const Headlines = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchHeadlines());
  }, [dispatch]);

  const headlines = useSelector((state) => state.news.headlines);
  const loadingHeadlines = useSelector((state) => state.news.loadingHeadlines);
  const [open, setOpen] = useState(false);
  const [showArticle, setShowArticle] = useState(null);
  const [search, setSearch] = useState("");

  const handleSearch = (e) => {
    if (e.target.value === "") {
      setSearch(headlines);
    } else {
      setSearch(
        headlines.filter((item) =>
          item.title.toLowerCase().includes(e.target.value.toLowerCase())
        )
      );
    }
  };

  return (
    <div className="headlines">
      <div className="heading">
        <h3>Headlines</h3>
      </div>
      <input
        type="text"
        name="search-headlines"
        placeholder="Search in Headlines..."
        className="search"
        onChange={handleSearch}
      />

      <HeadlinesList
        setOpen={setOpen}
        setShowArticle={setShowArticle}
        loadingEverything={loadingHeadlines}
        display={search !== "" ? search : headlines}
      />

      {open ? (
        <Modal open={open} article={showArticle} setOpen={setOpen} />
      ) : null}
    </div>
  );
};

export default Headlines;
