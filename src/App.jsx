import { useState } from "react";
import "./styles/index.css";
import { Landing } from "./pages/Landing";
import { Hub } from "./pages/Hub";
import { ORRPage } from "./pages/ORRPage";
import { LandBankPage } from "./pages/LandBankPage";
import { NewsPage } from "./pages/NewsPage";
import { RailwayPage } from "./pages/RailwayPage";

export default function App() {
  const [screen, setScreen] = useState("landing");

  const navigate = (to) => {
    setScreen(to);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {screen === "landing"  && <Landing      onEnter={() => navigate("hub")} />}
      {screen === "hub"      && <Hub          onNavigate={navigate} />}
      {screen === "orr"      && <ORRPage      onBack={() => navigate("hub")} />}
      {screen === "landbank" && <LandBankPage onBack={() => navigate("hub")} />}
      {screen === "news"     && <NewsPage     onBack={() => navigate("hub")} />}
      {screen === "railway"  && <RailwayPage  onBack={() => navigate("hub")} />}
    </>
  );
}
