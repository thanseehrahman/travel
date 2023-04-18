import { Route, Routes } from "react-router-dom";
import Home from "./components/pages/Home";

function App() {
  return (
    <Routes>
      <Route element={<Home />} exact path="/" />
    </Routes>
  );
}

export default App;
