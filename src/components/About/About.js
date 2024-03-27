// Disable max-len for the specific lines
// eslint-disable-next-line max-len
import './About.css';
import shieldIcon from '../../assets/about/shield.png';
import peopleIcon from '../../assets/about/people.png';
import cupIcon from '../../assets/about/cup.png';
import alldayIcon from '../../assets/about/allday.png';

const About = () => (
  <div className="about">
    <div className="about__desktop">
      <hr className="about__line" />
      <section className="about__title">
        Big
        <span className="about__title_fullstop">Fair</span>
        {' '}
        <span className="about__title_fullstop2">Human</span>
      </section>
      <p className="about__description">
        Learn why
        <span>over 5 million clients choose VV</span>
        {' '}
        as their trusted online broker.
      </p>
    </div>
    <section className="about__container-grid">
      <div className="about__container">
        <img src={shieldIcon} alt="shield" />
        <section>Authorised and Regulated</section>
        <p className="about__container_description">
          At VV, we adhere to all regulatory standards, and are fully authorised and regulated by FSC.
        </p>
      </div>

      <div className="about__container">
        <img src={peopleIcon} alt="shield" />
        <section>Committed and Fair</section>
        <p className="about__container_description">
          We operate with complete transparency and adhere to the highest professional and ethical standards.
        </p>
      </div>

      <div className="about__container">
        <img src={cupIcon} alt="shield" />
        <section>Multi-Award-Winning</section>
        <p className="about__container_description">Over the years we have received over 40 awards for the quality of our products and services.</p>
      </div>

      <div className="about__container">
        <img src={alldayIcon} alt="shield" />
        <section>24/7 Support</section>
        <p className="about__container_description">Our support agents are on hand 24/7 to answer your questions or assist you with any issues.</p>
      </div>
    </section>
  </div>
);

export default About;
