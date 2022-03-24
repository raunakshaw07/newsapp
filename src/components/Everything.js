import React, { useEffect, useState } from "react";
import { fetchEverything } from "../actions/newsAction";
import { useSelector, useDispatch } from "react-redux";
import Modal from "./Modal";
import EverythingList from "./EverythingList";

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
  const [search, setSearch] = useState("");

  const handleSearch = (e) => {
    if (e.target.value === "") {
      setSearch(everything);
    } else {
      setSearch(
        everything.filter((item) =>
          item.title.toLowerCase().includes(e.target.value.toLowerCase())
        )
      );
    }
  };

  return (
    <div className="everything">
      <div className="heading">
        <h3>Everything</h3>
      </div>
      <input
        type="text"
        name="search-everything"
        placeholder="Search in Everything..."
        className="search"
        onChange={handleSearch}
      />

      <EverythingList
        setOpen={setOpen}
        setShowArticle={setShowArticle}
        loadingEverything={loadingEverything}
        display={search !== "" ? search : everything}
      />

      {open ? (
        <Modal open={open} article={showArticle} setOpen={setOpen} />
      ) : null}
    </div>
  );
};

export default Everything;
