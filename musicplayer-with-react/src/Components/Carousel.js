import '../Styles/carousel.css';

import {
    cover_1,
    cover_2,
    cover_3,
    cover_4,
    cover_5,
    cover_6,
    cover_7,
    cover_8,
} from '../imports.js';


/////////////////////////////////////////////////////////////
const carousel = [...document.querySelectorAll('.carousel img')];

let carouselImageIndex = 0;
const changeCarousel = () => {
    carousel[carouselImageIndex].classList.toggle('active');
    
    if(carouselImageIndex >= carousel.length - 1){
        carouselImageIndex = 0;
    } else{
        carouselImageIndex++;
    }
    
    carousel[carouselImageIndex].classList.toggle('active');
}

// setInterval(() => {changeCarousel();}, 5000);
////////////////////////////////////////////////////////////

function Carousel() {
    return (
        <div className='carousel'>
            <img src={cover_1} className=''/>
            <img src={cover_2} className=''/>
            <img src={cover_3} className='active'/>
            <img src={cover_4} className=''/>
            <img src={cover_5} className=''/>
        </div>
    )
}

export default Carousel;