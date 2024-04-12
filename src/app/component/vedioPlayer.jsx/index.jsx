"use client";

import React, { useState } from "react";
import "./styles.scss";
import PlayList from "../Playlist";
import bigBunny from "../../images/BigBuckBunny.jpg";

const VedioPlayer = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);

  const handleSelectVideo = (e) => {
    console.log(e, "dfhgcuuuy");
    setSelectedVideo(e);
  };

  return (
    <>
      <div className="main_div">
        <div className="play">
          {" "}
          <PlayList
            handleSelectVideo={handleSelectVideo}
            selectedVideo={selectedVideo}
            setSelectedVideo={setSelectedVideo}
          />
        </div>

        <div className="pop-video">
          <div className="main_heading">Video Player</div>
          <div className="video_div">
            <video
              src={
                selectedVideo
                  ? selectedVideo.videoUrl
                  : "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
              }
              poster={bigBunny}
              controls={true}
              disablePictureInPicture
              controlsList="nodownload"
              nofullscreen="true"
              playsInline
              loop
              autoPlay={true}
              id="video-desk"
            >
              Your browser does not support the video.
            </video>
            <div className="player_heading">
              {selectedVideo ? selectedVideo?.title : "Big Buck Bunny"}
            </div>
            <div className="desc">Description</div>
            <div className="player_desc">
              {selectedVideo
                ? selectedVideo?.description
                : "Big Buck Bunny tells the story of a giant rabbit with a heart bigger than himself. When one sunny day three rodents rudely harass him, something snaps... and the rabbit ain't no bunny anymore! In the typical cartoon tradition he prepares the nasty rodents a comical revenge"}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default VedioPlayer;
