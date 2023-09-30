import { Route, Routes } from "react-router";
import Login from "./pages/login";
import Home from "./pages/home";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/login" element={<Login/>}  />
        <Route path="/" element={<Home/>} />
      </Routes>

    </div>
  );
}

export default App;