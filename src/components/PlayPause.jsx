import { FaPauseCircle, FaPlayCircle } from 'react-icons/fa';

const PlayPause = ( { isPLaying, activeSong, song, 
  handlePause, handlePlay}) => (isPLaying && activeSong?.title === song.title ? (
    <FaPauseCircle
      size={35}
      className="text-gray-300"
      onClick={handlePause}
     />
  ) : (
    <FaPlayCircle
      size={35}
      className="text-gray-300"
      onClick={handlePlay}
     />
  ));

export default PlayPause;
