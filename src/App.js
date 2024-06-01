import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import VideoDetail from "./pages/VideoDetail";
import SearchFeed from "./pages/SearchFeed";
import ChannelDetail from "./pages/ChannelDetail";
import Home from "./pages/Home";

function App() {
  return (
    <section className=' max-sm:overflow-y-scroll overflow-hidden w-[100vw] h-[100vh] flex flex-col bg-black '>
      <Navbar/>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route path="/search/:searchTerm" element={<SearchFeed/>}/>
        <Route path="/watchvideo/:videoid" element={<VideoDetail/>}/>
        <Route path="/channel/:channelid" element={<ChannelDetail/>}/>
      </Routes>
    </section>
  );
}

export default App;
