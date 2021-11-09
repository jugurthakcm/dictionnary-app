import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router";
import "../styles/WordPage.css";

const WordPage = () => {
  const { word } = useParams();
  const [data, setData] = useState({ error: false, response: null });
  const [newWord, setNewWord] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
      .then((res) => {
        if (!res.ok) throw new Error();
        return res.json();
      })
      .then((data) => setData({ error: false, response: [...data] }))
      .catch(() => setData({ error: true, response: [] }));
  }, [word]);

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/${newWord}`);
  };

  const playAudio = () => {
    const audio = document.querySelector("#audio");
    audio.play();
  };

  console.log(data);

  return (
    <div className="wordPage">
      <form className="wordPage__searchBox" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search for a word ..."
          onChange={(e) => setNewWord(e.target.value)}
          value={newWord}
        />
        <button type="submit">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="35px"
            viewBox="0 0 24 24"
            width="35px"
            fill="#000000"
          >
            <path d="M0 0h24v24H0V0z" fill="none" />
            <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
          </svg>
        </button>
      </form>
      {data.response && (
        <div className="wordContainer">
          {!data.error ? (
            <>
              <div className="wordTitle">
                <h1>{data.response[0]?.word}</h1>{" "}
                <span>[{data.response[0]?.phonetics[0].text}] </span>
                {data.response && (
                  <audio id="audio">
                    <source src={data.response[0].phonetics[0].audio} />
                  </audio>
                )}
                <button onClick={playAudio}>
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
                  {data.response[0]?.meanings.map((e) => (
                    <li key={data.response[0]?.meanings.indexOf(e)}>
                      <span className="wordNum">
                        {data.response[0]?.meanings.indexOf(e) + 1}
                      </span>
                      <div className="wordText">
                        <em>{e.partOfSpeech}. </em>
                        {e.definitions[0].definition}
                        <span className="wordExample">
                          {e.definitions[0].example}
                        </span>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </>
          ) : (
            <p className="errorSearch">
              Sorry, we don't have the word you are looking for.
            </p>
          )}
        </div>
      )}
    </div>
  );
};

export default WordPage;
