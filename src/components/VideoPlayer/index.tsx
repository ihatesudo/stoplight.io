import * as React from 'react';
import YouTubePlayer from 'react-player'

export interface IVideoPlayer {
  href: string;
  playing?: boolean;
  controls?: boolean;
}

export const VideoPlayer: React.FunctionComponent<IVideoPlayer> = ({ href, playing, controls = true }) => {
  return (
    <div className="player-wrapper">
      <YouTubePlayer className="react-player" url={href} playing={playing} config={{
        youtube: {
          playerVars: { showinfo: 0 }
          }
        }}
  controls={false} width="100%" height="100%" />
    </div>
  );
};
