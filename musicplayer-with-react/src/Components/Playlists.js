import '../Styles/playlists.css';


function PlaylistCard(props){
    return (
        <div className='playlist-card'>
            <img src={props.item.coverImg}/>
            <p>{props.item.title}</p>
        </div>
    )
}

function Playlists(props){
    
    const cardElement = props.sourceData.map(item => 
        <PlaylistCard 
            item  = {item}
            key = {item.id}
        />
    )

    return(
        <div className='playlist-section'>
            <h1>{props.title}</h1>
            <div className='playlist-container'>
                {cardElement}
            </div>
        </div>
    )
}

export default Playlists;