import './Gallery.css';
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from 'react-icons/md';

const Gallery = () => (
  <section className="gallery__container">

    <div className="gallery__title">Event Gallery</div>

    <div className="gallery">
      <div className="gallery__item">
        <MdKeyboardArrowLeft />
      </div>
      <div className="gallery__item card" />
      <div className="gallery__item card" />
      <div className="gallery__item tablet card" />
      <div className="gallery__item tablet card" />
      <div className="gallery__item desktop card" />
      <div className="gallery__item">
        <MdKeyboardArrowRight />

      </div>

    </div>
  </section>
);

export default Gallery;
