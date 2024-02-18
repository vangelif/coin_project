import footerIcon from '../../assets/footer.png';
import metaQuotesIcon from '../../assets/desktop/meta-quotes.png';
import veriSignIcon from '../../assets/desktop/verisign.png';
import unicefIcon from '../../assets/desktop/unicef.png';
import investorsIcon from '../../assets/desktop/investors.png';
import { FaFacebookF } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import './Footer.css';

const Footer = () => {
    return (
        <div class="footer__container">
                <div class="footer__desktop">
                    <div class="footer__desktop_left">
                        <img src={metaQuotesIcon} alt="footer" />
                        <img src={veriSignIcon} alt="footer" />
                        <img src={unicefIcon} alt="footer" />
                        <img src={investorsIcon} alt="footer" />
                    </div>
                    <div class="footer__desktop_right">
                     
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
                <div class="footer">
                    <div class="footer__anchors">
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
}

export default Footer;