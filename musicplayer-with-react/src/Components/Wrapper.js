import '../Styles/wrapper.css';

import Carousel from './Carousel.js';
import Playlists from './Playlists.js';
import Player from './Player.js';
import SongsList from './SongsList.js';

import {
    playlistData_1,
    playlistData_2,
} from '../imports.js';

import { songsData } from '../imports.js';

console.log(songsData[1].song)

function Wrapper(){
    return (
        <section className='home-screen-container'>
            <div className='home-screen'>
                <Carousel/>

                <Playlists 
                    title='Based on your listening'
                    sourceData={playlistData_1}
                />

                <Playlists 
                    title='recently played'
                    sourceData={playlistData_2}
                />
            </div>
            <Player
                max_cover = {songsData[1].coverImg}
                songName = {songsData[1].title}
                artistName = {songsData[1].artist}
                songSrc={songsData[1].song}
            />
            <SongsList/>
        </section>
    )
}




export default Wrapper;