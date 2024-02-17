import './Gallery.css';
import { MdKeyboardArrowRight } from "react-icons/md";
import { MdKeyboardArrowLeft } from "react-icons/md";

const Gallery = () => {
    return(
        <section class="gallery__container">
            
        <div class="gallery__title">Event Gallery</div>


        <div class="gallery">
                <div class="gallery__item">
                <MdKeyboardArrowLeft />
                </div>
                <div class="gallery__item card"></div>
                <div class="gallery__item card"></div>
                <div class="gallery__item tablet card"></div>
                <div class="gallery__item tablet card"></div>
                <div class="gallery__item desktop card"></div>
                <div class="gallery__item">
                <MdKeyboardArrowRight />

                </div>

        </div>
        </section>
    )
}

export default Gallery;