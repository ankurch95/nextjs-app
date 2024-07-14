"use client"
import React, { useState } from 'react'
import ReactPlayer from 'react-player'

export default function videoPlayer() {
  const [playing, setPlaying] = useState<boolean>(true);

  return (
    <div className='min-h-screen items-center justify-center flex bg-slate-600'>
      <ReactPlayer
        url="https://www.youtube.com/watch?v=rc23Cca2ajA"
        playsinline={true}
        playing={playing}
        controls={true}
        light={true}
        config={{
          youtube: {
            playerVars: {
              modestbranding: 1,
              showinfo: 1,
              rel: 0,
              // controls: 0,
              autoplay: 1,
            }
          },
          wistia: {
            options: {
              autoPlay: false,
              controlsVisibleOnLoad: false,
              muted: false,
              silentAutoPlay: false,
              volumeControl: false,
              wmode: "transparent",
              playPauseNotifier: false,
            }
          }
        }}
      />

    </div>
    //   <button onClick={() => setPlaying((v) => !v)}>play/pause</button>

  )

}