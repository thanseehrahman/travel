import { Route, Routes } from "react-router-dom";
import Home from "./components/pages/Home";
import Header from "./components/Header";
import { DataContextProvider } from "./context/DataContext";
import Destination from "./components/pages/Destination";

function App() {
  return (
    <DataContextProvider>
      <Header />
      <Routes>
        <Route element={<Home />} exact path="/" />
        <Route element={<Destination />} path="/destination/:id" />
      </Routes>
    </DataContextProvider>
  );
}

export default App;
