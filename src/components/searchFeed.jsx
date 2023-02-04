import { useState, useEffect } from "react";
import { Box, Typography } from "@mui/material";
import Videos from "./videos";
import { fetchFfromAPI } from "../utils/fetachFromAPI";
import { useParams } from "react-router-dom";

const SearchFeed = () => {
   const [videos, setVideos] = useState([]);
   const { searchTerm } = useParams();

  useEffect(() => {
    fetchFfromAPI(`search?part=snippet&q=${searchTerm}`).then((data) =>
      setVideos(data.items)
    );
  }, [searchTerm]);

  return (
    <Box p={2} sx={{ overflowY: "auto", height: "90vh", flex: 2 }}>
      <Typography variant="h4" fontWeight="bold" mb={2} sx={{ color: "white" }}>
        Search results for: 
        <span style={{ color: "#DC0000" }}>
          {searchTerm}  Videos
        </span>
      </Typography>
      <Videos videos={videos} />
    </Box>
  );
};
export default SearchFeed;
