import "./scss/app.scss";
import { Header } from "./components/header";
import { Main } from "./components/main";
import { Theory } from "./components/theory";
import { Footer } from "./components/footer";
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
import { Area } from "./components/variants/area";
import { Tarif } from "./components/variants/tarif";
import { Tire } from "./components/variants/tire";
import { Plan } from "./components/variants/plan";
import { Paper } from "./components/variants/paper";
import { Stove } from "./components/variants/stove";
import { Flat } from "./components/variants/flat";
import { useEffect } from "react";

function App() {
  const navigate = useNavigate();
  const location = useLocation();
  
  useEffect(() => {
    navigate(location.pathname);
    window.scrollTo({top: 0});
  }, [location.pathname, navigate]);

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Main />}></Route>
        <Route path="/theory" element={<Theory />}></Route>
        <Route path="/area" element={<Area />}></Route>
        <Route path="/flat" element={<Flat />}></Route>
        <Route path="/tarif" element={<Tarif />}></Route>
        <Route path="/tire" element={<Tire />}></Route>
        <Route path="/plan" element={<Plan />}></Route>
        <Route path="/paper" element={<Paper />}></Route>
        <Route path="/stove" element={<Stove />}></Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
