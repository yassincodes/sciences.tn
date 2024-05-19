import Home from "./Home";
import Lessons from "./pages/Lessons";
import Games from "./pages/Games";
import Videos from "./pages/Videos";
import Application from "./pages/Application";
import Arij from "./chat/Arij";
import Ghofrane from "./chat/Ghofrane";
import Five from "./lessons/Five";
import Six from "./lessons/Six";
import Gfive from "./games/Gfive";
import Gsix from "./games/Gsix";
import { Routes, Route } from "react-router-dom";


function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/Lessons" element={<Lessons />} />
        <Route path="/Games" element={<Games />} />
        <Route path="/videos" element={<Videos />} />
        <Route path="/app" element={<Application />} />
        <Route path="/chat/Arij" element={<Arij />} />
        <Route path="/Chat/Ghofrane" element={<Ghofrane />} />
        <Route path="/5" element={<Five />} />
        <Route path="/6" element={<Six />} />
        <Route path="/games/5" element={<Gfive />} />
        <Route path="/games/6" element={<Gsix />} />
      </Routes>
    </>
  );
}

export default App;