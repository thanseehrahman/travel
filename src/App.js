import { Route, Routes } from "react-router-dom";
import Home from "./components/pages/Home";
import Header from "./components/Header";
import { DataContextProvider } from "./context/DataContext";
import Destination from "./components/pages/Destination";
import About from "./components/pages/About";
import Destinations from "./components/pages/Destinations";

function App() {
  return (
    <DataContextProvider>
      <Header />
      <Routes>
        <Route element={<Home />} exact path="/" />
        <Route element={<About />} path="/about" />
        <Route element={<Destinations />} path="/destinations" />
        <Route element={<Destination />} path="/destination/:id" />
      </Routes>
    </DataContextProvider>
  );
}

export default App;
