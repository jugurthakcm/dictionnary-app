import "./App.css";
import SearchBox from "./components/SearchBox";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<SearchBox />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
