import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./pages/navbar";
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route index element={<Home />} />
          <Route path="menu" element={<Navbar />} />
      </Routes>
      <Navbar />
    </BrowserRouter>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));