import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import { IconContext } from "react-icons";
import { AiFillPlayCircle, AiFillPauseCircle } from "react-icons/ai";
import useSound from "use-sound";

const Player = ({ audio }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [time, setTime] = useState({
    min: "00",
    sec: "00",
  }); // текущая позиция звука в минутах и секундах
  const [currTime, setCurrTime] = useState({
    min: "",
    sec: "",
  });
  const [seconds, setSeconds] = useState(); // текущая позиция звука в секундах
  const [play, { pause, duration, sound }] = useSound(audio, { id: 'my-sound' });

  useEffect(() => {
    if (duration) {
      const sec = duration / 1000;
      const min = Math.floor(sec / 60);
      const secRemain = Math.floor(sec % 60);
      setTime({
        min: min,
        sec: secRemain,
      });
    }
  }, [duration]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (sound) {
        const sec = sound.seek([]);
        const min = ("0" + Math.floor(sec / 60)).slice(-2);
        const secRemain = ("0" + Math.floor(sec % 60)).slice(-2);
        setCurrTime({
          min,
          sec: secRemain,
        });
        setSeconds(sec);
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [sound]);

  const playingButton = () => {
    if (isPlaying) {
      pause();
      setIsPlaying(false);
    } else {
      play();
      setIsPlaying(true);
    }
  };

  return (
    <Card className="w-100">
      <Card.Body>
        <input
          type="range"
          min="0"
          max={duration / 1000}
          value={seconds}
          className="w-100 range"
          onChange={(e) => sound.seek([e.target.value])}
        />
        <div className="d-flex justify-content-between">
          <div>
            {currTime.min}:{currTime.sec}
          </div>
          <button className="playButton" onClick={playingButton}>
            <IconContext.Provider value={{ size: "3em", color: "#755986" }}>
              {isPlaying ? <AiFillPauseCircle /> : <AiFillPlayCircle />}
            </IconContext.Provider>
          </button>
          <div>
            {time.min}:{time.sec}
          </div>
        </div>
      </Card.Body>
    </Card>
  );
};

export default Player;
