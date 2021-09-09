import React, { useEffect, useState } from "react";
import Natures from "../../image/nature.jpg";


const HorizontalNews = () => {
  const [showNews, setShowNews] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => setShowNews(data));
  }, []);
  return (
    <div className=" row p-3 mt-2 m-auto">
      {showNews.map((news) => (
        <div
          className="col-md-4 p-3  rounded shadow"
          style={{ height: "350px" }}
        >
          <h3 style={{ height: "30px", overflow: "hidden" }}>{news.title}</h3>
          <p style={{ height: "50px", overflow: "hidden" }}>
            {news.body}
          </p>
          <span
            className="text-muted pb-2 "
          >
            Mon, 21 Dec 2021 14:57 GMT
          </span>
          <img
            style={{ height: "170px", width: "100%", justifyContent: "center", paddingTop: "10px"}}
            src={Natures}
            alt=""
          />
        </div>
      ))}
    </div>
  );
};

export default HorizontalNews;
