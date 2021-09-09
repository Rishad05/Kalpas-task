import React from "react";
import "./Sidebar.css";
import manImage from "../../image/images (3).jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faListUl } from "@fortawesome/free-solid-svg-icons";
import { faNewspaper } from '@fortawesome/free-regular-svg-icons'

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="d-flex  div_bg  m-3 shadow rounded">
        <div className="rounded mt-2">
          <img className="imageSize" src={manImage} alt="" />
        </div>
        <div className="header">
          <h4>Hi Reader</h4>
          <p>Here is your news!</p>
        </div>
      </div>
      <div className="div_bg p-4 m-3 shadow rounded text-center">
        <h2>View Toggle</h2>
        <div class="btn-group" role="group" aria-label="Basic example">
          <button type="button" class="btn btn-primary">
          <FontAwesomeIcon icon={faNewspaper} />
          </button>
          <button type="button" class="btn btn-primary">
          <FontAwesomeIcon icon={faListUl} />
          </button>
        </div>
      </div>
      <div className="div_bg p-5 m-3 shadow rounded">
        <h1>Have A feedback?</h1>
        <h4>we are lessning</h4>
      </div>
    </div>
  );
};

export default Sidebar;
