import React, { useState, useEffect } from "react";
import { disabled, enable, searchicon } from "../../assets/icons";
import { useDispatch } from "react-redux";
import { searchMovie } from "../features/currentGenreOrCategory";
import { useLocation } from "react-router-dom";
import regeneratorRuntime from "regenerator-runtime";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";

const Search = () => {
  const dispatch = useDispatch();
  const location = useLocation();

  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition,
  } = useSpeechRecognition();

  const [query, setQuery] = useState();
  // console.log("Search BAR", query);
  const [on, setOn] = useState(false);

  const toggleListening = () => {
    if (on) {
      SpeechRecognition.stopListening();
    } else {
      SpeechRecognition.startListening();
    }
    setOn(!on);
  };

  useEffect(() => {
    setQuery(transcript);
  }, [transcript]);

  if (location.pathname != "/games") return null;

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      dispatch(searchMovie(query));
    }
  };

  return (
    <form className="relative">
      <img
        src={searchicon}
        alt=""
        width={40}
        onClick={() => dispatch(searchMovie(query))}
        title="Search Games"
        className=" absolute  p-1 rounded-full  cursor-pointer "
      />
      <input
        onChange={(e) => setQuery(e.target.value)}
        onKeyPress={handleKeyPress}
        value={query}
        type="search"
        name=""
        id=""
        placeholder="Search 867,630 games"
      size={30}
        className="  font-marcellus border-none rounded-full outline-none p-2 pl-10 pr-[3rem] "
      />

      {on ? (
        <img
          src={enable}
          alt="Enable"
          onClick={toggleListening}
          width={40}
          className=" absolute right-2 top-0 p-1 rounded-full hover:scale-110 cursor-pointer "
        />
      ) : (
        <img
          src={disabled}
          alt="Disabled"
          onClick={toggleListening}
          width={40}
          className=" absolute right-2 top-0 p-1 rounded-full hover:scale-110 cursor-pointer "
        />
      )}
    </form>
  );
};

export default Search;
