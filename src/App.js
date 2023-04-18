import { Route, Routes } from "react-router-dom";
import Home from "./components/pages/Home";
import Header from "./components/Header";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route element={<Home />} exact path="/" />
      </Routes>
    </>
  );
}

export default App;
