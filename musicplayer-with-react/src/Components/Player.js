import React, { useRef, useState } from 'react';
import useSound from 'use-sound'; //for handling the sound
import '../Styles/player.css';

import {songsData} from '../imports.js';

// /////////////////////////////////////////
import _song from '../Songs/sober.mp3';
// /////////////////////////////////////////

let musicPlayerSection = document.querySelector('.player-section');
let music = document.querySelector('.music');
let musicSeekBar = document.querySelector('.music-seekbar');
let playBtn = document.querySelector('.fa-play');
let pauseBtn = document.querySelector('.fa-pause');
let currTime = document.querySelector('.current-time');
let durationTime = document.querySelector('.duration-time');

function getTime(time){
    let minutes = Math.floor(time / 60);
    let seconds = Math.floor(time - (minutes * 60));
    let minuteValue;
    let secondValue;

    if(minutes < 10){
        minuteValue = '0' + minutes;
    }else{
        minuteValue = minutes
    }
    if(seconds < 10){
        secondValue = '0' + seconds;
    }else{
        secondValue = seconds;
    }
    return minuteValue + ':' + secondValue;
}

function timeUpdateHandler() {
    durationTime.textContent = getTime(music.duration);
    currTime.textContent = getTime(music.currentTime);
    let barlength = (music.currentTime / music.duration) * 100;
    musicSeekBar.value = barlength;
}

function inputHandler(){
    music.currentTime = ((musicSeekBar.value / 100) * music.duration);
}



function Player(props){
    // let randomNum = Math.floor(Math.random() * songsData.length);
    // const [playingSong, setPlayingSong] = React.useState(songsData[randomNum].song);

    const [activeClass, setActiveClass] = React.useState(false);
    function handlePlayerSize(){
        if(activeClass === false){
            setActiveClass(true);
        }
        else{
            setActiveClass(false);
        }
    }

    const [isPlaying, setIsPlaying] = useState(false);
    const [play, {pause, duration, sound}] = useSound(props.songSrc);


    
    function playingButton(){
        
        if(isPlaying){
            pause();
            setIsPlaying(false);
        } else{
            play();
            setIsPlaying(true);
        }
    }








    const [songs, setSongs] = useState(songsData);
    // const [isPlaying, setIsPlaying] = useState(false);
    const [currentSong, setCurrentSong] = useState(songsData[0]);





    return (

        <div className={`player-section ${activeClass ? 'active' : ''}`}>


            <audio onTimeUpdate={timeUpdateHandler} className='music' src={sound}></audio>
            <div className='top-controls'>
                <i onClick={handlePlayerSize} className="fa-solid fa-angle-down hide"></i>
                <i className="fa-solid fa-music hide"></i>
            </div>
            <h2 onClick={handlePlayerSize} className='song-name'>{props.songName}</h2>
            <p  onClick={handlePlayerSize} className='artist-name'>{props.artistName}</p>

            <img className='max-cover hide' alt='cover' src={props.max_cover}/>
            <div className='seekbar-container'>
                <input onInput={inputHandler} className= "music-seekbar" type= "range" min="0" max= "100" step= "0.5"/>
                <span className='current-time hide'>00 : 00</span>
                <span className='duration-time hide'>00 : 00</span>
            </div>

            <div className='controls'>
                <i className="fa-solid fa-arrow-rotate-right"></i>
                <div className='main-controls'>
                    <i className="fa-solid fa-backward"></i>
                    {!isPlaying ? (
                        <i onClick={playingButton} className='fa-solid fa-play'></i>
                        ) : (
                        <i onClick={playingButton} className="fa-solid fa-pause"></i>
                    )}
                    <i className="fa-solid fa-forward"></i>
                </div>
                <i className="fa-solid fa-volume-high"></i>
            </div>
        </div>
    )
}

export default Player;