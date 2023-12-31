import React from "react";
import { styled } from "@mui/material";
import { connect } from "react-redux";
import Video from "./Video";

const MainContainer = styled("div")({
  height: "85%",
  width: "100%",
  display: "flex",
  flexWrap: "wrap",
});

const VideosContainer = ({ localStream, remoteStreams }) => {
  return (
    <MainContainer>
      <Video stream={localStream} isLocalStream />
      {remoteStreams?.map((stream) => (
        <Video key={stream.id} stream={stream} />
      ))}
    </MainContainer>
  );
};

const mapStoreStatesToProps = ({ room }) => {
  return {
    ...room,
  };
};

export default connect(mapStoreStatesToProps)(VideosContainer);
