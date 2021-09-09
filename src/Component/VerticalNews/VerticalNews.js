import React, { useEffect, useState } from "react";
import Natures from "../../image/nature.jpg";
import cross from "../../image/images.png";
import "./VerticalNews.css";

const VerticalNews = () => {
  const [showNews, setShowNews] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => setShowNews(data));
  }, []);
  return (
    <div className=" row mt-2 m-auto">
      {showNews.map((news) => (
        <>
          <div className="col-md-10 d-flex div_bg rounded shadow p-2 m-3">
            <div className="rounded ">
              <img className="newsImage" src={Natures} alt="" />
            </div>
            <div className="p-2">
              <h3>{news.title}</h3>
              <p>
                {news.body} <br />
                <span className="text-muted">Mon, 21 Dec 2021 14:57 GMT</span>
              </p>
            </div>
          </div>
          <div className="col-md-1 crossSize ">
            <img className="crossSize rounded shadow" src={cross} alt="" />
          </div>
        </>
      ))}
    </div>
  );
};
export default VerticalNews;
