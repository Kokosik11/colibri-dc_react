import '../assets/css/businesscard.css';
import { findDOMNode } from 'react-dom';
import React, { useState, useEffect, useRef } from 'react';
import Footer from '../components/Footer';
import ReactPlayer from 'react-player';
import screenfull from 'screenfull';

// import VideoBusinessCard from '';

import PlayIcon from '../assets/imgs/play.svg';
import RestartIcon from '../assets/imgs/restart.svg';
import FullscreenIcon from '../assets/imgs/fullscreen.svg';

const VideoPlayer = props => {
    const [ playing, setPlaying ] = useState(false);
    const [ pausedTime, setPausedTime ] = useState({ time: 0 });

    const handleProgress = (progress) => {
        document.querySelector('.video-progress').style.width = (progress.played * 100) + '%';
    }

    const handleReloadClick = () => {
        props.videoRef.current.seekTo(0);
        document.querySelector('.video-reload').style.display = 'none';
    }

    const handleStartClick = () => {
        setPlaying(true);
    }

    const handlePause = () => {
        setPlaying(false);
        // props.videoRef.current.seekTo();
    }

    const handleEnded = () => {
        document.querySelector('.video-reload').style.display = 'block';
    }

    const handleStart = () => {
        document.querySelector('.video-play').style.display = 'none';
    }

    const handleClickFullscreen = () => {
        screenfull.request(findDOMNode(videoRef.current));
    }



    return (
        <div className="businesscard-block">
            <ReactPlayer 
                className="video-frame"
                playing={playing}
                ref={props.videoRef}
                url={ [ { src: "/video/IT-bcard.mp4", type: 'video/mp4'}] } 
                width="100%"
                height="100%"
                onDuration={props.handleDuration} 
                onProgress={handleProgress}
                onEnded={handleEnded}
                onStart={handleStart}
                onPause={handlePause}
            />
            <div className="video-progress" width="0%" />
            <button className="video-play" onClick={handleStartClick}>
                <img src={PlayIcon} alt="Icon: play icon to video player" />
            </button>
            <button className="video-reload" onClick={handleReloadClick}>
                <img src={RestartIcon} alt="Icon: restart icon to video player" />
            </button>
            <button className="video-full" onClick={handleClickFullscreen}>
                <img src={FullscreenIcon} alt="Icon: fullscreen icon to video player" />
            </button>
        </div>
    )
}

const BusinessCard = () => {
    const [ duration, setDuration ] = useState(0);

    const videoRef = useRef();

    const handleDuration = (duration) => {
        setDuration(duration);
    }

    return (
        <main className="App">
            <h1 className="h1-faq">Видео-визитка</h1>
            <VideoPlayer videoRef={videoRef} handleDuration={handleDuration} duration={duration} />
            
            <Footer color="pink" />
        </main>
    )
}

export default BusinessCard;