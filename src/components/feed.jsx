import { useState, useEffect } from "react";
import { Box, Stack, Typography } from "@mui/material";
import Sidebar from "./sidebar";
import Videos from "./videos";
import { fetchFfromAPI } from "../utils/fetachFromAPI";

const Feed = () => {
  const [selectedCategory, setSelectedCategory ] = useState("New");
  const [videos, setVideos ] = useState([]);

  useEffect(() => {
    fetchFfromAPI(`search?part=snippet&q=${selectedCategory}`)
    .then((data) => setVideos(data.items));
  }, [selectedCategory]);

  return (
    <Stack sx={{ flexDirection: { sx: "column", md: "row" } }}>
      <Box
        sx={{
          height: { sx: "auto", md: "92vh" },
          borderRight: "1px solid #333333",
          px: { sx: 0, md: 2 },
        }}
      >
        <Sidebar 
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory} />
        <Typography
          className="copyright"
          varient="body2"
          sx={{ mt: 0.5, color: "white" }}
        >
          copyright 2023 molati
        </Typography>
      </Box>
      <Box p={2} sx={{ overflowY: "auto", height: "90vh", flex : 2 }}>
        <Typography variant="h4"
          fontWeight="bold"
          mb={2}
          sx={{ color: "white" }}>
          {selectedCategory}
          <span style={{ color: "#DC0000" }}>Videos</span>
        </Typography>
         <Videos videos={videos} />
      </Box>
    </Stack>
  );
};
export default Feed;
