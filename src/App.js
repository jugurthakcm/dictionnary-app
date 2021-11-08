import "./App.css";
import SearchBox from "./components/SearchBox";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import WordPage from "./components/WordPage";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<SearchBox />} />
          <Route path="/:word" element={<WordPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
