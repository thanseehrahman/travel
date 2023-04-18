import { Route, Routes } from "react-router-dom";
import Home from "./components/pages/Home";
import Header from "./components/Header";
import { DataContextProvider } from "./context/DataContext";

function App() {
  return (
    <DataContextProvider>
      <Header />
      <Routes>
        <Route element={<Home />} exact path="/" />
      </Routes>
    </DataContextProvider>
  );
}

export default App;
