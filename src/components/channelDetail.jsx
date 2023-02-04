import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Box } from "@mui/material";
import { fetchFfromAPI } from "../utils/fetachFromAPI";
import ChannelCard from "./channelCard";
import Videos from "./videos";

const Channeldetail = () => {
  const { id } = useParams();
  const [channelDetail, setChannelDetail] = useState(null);
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetchFfromAPI(`channels?part=snippet&id=${id}`)
    .then((data) =>(setChannelDetail(data.items[0])));
     fetchFfromAPI(`search?channelId=${id}&part=snippet&order=date`)
     .then((data) => setVideos(data?.items));
  },[id])
  return (
    <Box minHeight="95vh">
      <Box>
        <div
         style={{ background: "linear-gradient(90deg, #333333, #dd1818)",
         zIndex: 10,
         height: "300px" }} />

          <ChannelCard channelDetail={channelDetail} marginTop="-110px" />
          <Box display="flex" p="2">
            <Box sx={{ mr: { sm: "100px" }}} />
               <Videos videos={videos} />
          </Box>
      </Box>
    </Box>
  );
} 

export default Channeldetail;
