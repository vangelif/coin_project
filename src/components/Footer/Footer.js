import {
  FaFacebookF, FaYoutube, FaInstagram, FaLinkedinIn,
} from 'react-icons/fa';
import { FaSquareXTwitter } from 'react-icons/fa6';
import footerIcon from '../../assets/footer.png';
import metaQuotesIcon from '../../assets/desktop/meta-quotes.png';
import veriSignIcon from '../../assets/desktop/verisign.png';
import unicefIcon from '../../assets/desktop/unicef.png';
import investorsIcon from '../../assets/desktop/investors.png';
import './Footer.css';

const Footer = () => (
  <div className="footer__container">
    <div className="footer__desktop">
      <div className="footer__desktop_left">
        <img src={metaQuotesIcon} alt="footer" />
        <img src={veriSignIcon} alt="footer" />
        <img src={unicefIcon} alt="footer" />
        <img src={investorsIcon} alt="footer" />
      </div>
      <div className="footer__desktop_right">

        <p>
          Follow
          <FaFacebookF />
          <FaSquareXTwitter />
          <FaYoutube />
          <FaInstagram />
          <FaLinkedinIn />
        </p>
      </div>

    </div>
    <div className="footer">
      <div className="footer__anchors">
        <a href="#">Privacy Policy  </a>
        |
        <a href="#">  Cookie Policy  </a>
        |
        <a href="#">  Terms and Conditions</a>
      </div>
      <img src={footerIcon} alt="footer" />
    </div>
  </div>
);

export default Footer;
