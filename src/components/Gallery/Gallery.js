import './Gallery.css';
import { MdKeyboardArrowRight } from "react-icons/md";
import { MdKeyboardArrowLeft } from "react-icons/md";

const Gallery = () => {
    return(
        <section class="gallery__container">
            
        <div class="gallery__title">Event Gallery</div>
        <div class="gallery">
            
            <div class="gallery__inner">
            <MdKeyboardArrowLeft class="gallery__inner_arrow" />
                <div class="card">Card 1</div>
                <div class="card">Card 2</div>
                {/* <div class="card">Card 3</div> */}
                {/* <div class="card">Card 4</div>
                <div class="card">Card 5</div>
                <div class="card">Card 5</div>
                <div class="card">Card 5</div> */}
                <MdKeyboardArrowRight />
            </div>
        </div>
        </section>
    )
}

export default Gallery;