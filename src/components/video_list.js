
import React from 'react';
import VideoListItem from './video_list_item';

const VideoList = (props) => {
  const videoItems = props.videos.map((video) => {
    return <VideoListItem onVideoSelect={props.onVideoSelect} key={video.etag} video={video} />;
  });
  // const videoItems = props.videos.map((video) => {
  //   return <li>{video.snippet.title}</li>;
  // });

  return (
    <ul>
       {videoItems}
    </ul>
  );
};


export default VideoList;
