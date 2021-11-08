import React from "react";
import "../styles/WordPage.css";

const WordPage = () => {
  return (
    <div className="wordPage">
      <div className="wordContainer">
        <div className="wordTitle">
          <h1>Word</h1> <span>[W-o-r-d] </span>
          <button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 0 24 24"
              width="24px"
              fill="#000000"
            >
              <path d="M0 0h24v24H0V0z" fill="none" />
              <path d="M3 9v6h4l5 5V4L7 9H3zm7-.17v6.34L7.83 13H5v-2h2.83L10 8.83zM16.5 12c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77 0-4.28-2.99-7.86-7-8.77z" />
            </svg>
          </button>
        </div>
        <div className="wordDefinitions">
          <ul>
            <li>
              <span className="wordNum">1</span>
              <div className="wordText">
                <em>noun. </em>lorem impusm
                <span className="wordExample">Example</span>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default WordPage;
