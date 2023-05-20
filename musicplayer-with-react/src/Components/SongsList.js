import '../Styles/songslist.css';

import {songsData} from '../imports.js';

import {icon} from '../imports.js';

function SongItem(props){
    return(
        <div className="queue">
            <div className="queue-cover">
                <img src={props.item.coverImg} />
                <i className="fa-solid fa-pause"></i>
            </div>
            <div>
                <p className="name">{props.item.title}</p>
                <p className='artist'>{props.item.artist}</p>
            </div>
        </div>

    )
}

function SongsList(){

    const songItem = songsData.map(item => 
        <SongItem 
            item  = {item}
            key = {item.id}
        />
    )


    return (
        <div className='songs-list-area'>
            <img className='back-btn' src={icon}/>
            <h1 className='list-name'>playlist 1</h1>
            <div className='songs-list'>
                {songItem}
                {songItem}
                {songItem}
                {songItem}
                {songItem}
            </div>
        </div>
    )
}

export default SongsList;