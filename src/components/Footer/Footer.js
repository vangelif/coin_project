import footerIcon from '../../assets/footer.png';
import './Footer.css';

const Footer = () => {
    return (
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
    );
}

export default Footer;