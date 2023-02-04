import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Box } from "@mui/material";
import Navbar from "./components/navbar";
import Feed from "./components/feed";
import VideoDetail from "./components/videoDetail";
import Channeldetail from "./components/channelDetail";
import SearchFeed from "./components/searchFeed";

const App = () => (
  <BrowserRouter>
    <Box sx={{ background: "#000" }}>
      <Navbar />
      <Routes>
        <Route path="/" exact element={<Feed />} />
        <Route path="/video/:id" exact element={<VideoDetail />} />
        <Route path="/channel/:id" exact element={<Channeldetail />} />
        <Route path="/search/:searchTerm" exact element={<SearchFeed />} />
      </Routes>
    </Box>
  </BrowserRouter>
);
export default App;
