import footerIcon from '../../assets/footer.png';
import './Footer.css';

const Footer = () => {
    return (
        <div class="footer">
                <a href="#">Privacy Policy  </a> 
                | 
                <a href="#">  Cookie Policy  </a> 
                | 
                <a href="#">  Terms and Conditions</a>
            <img src={footerIcon} alt="footer" />
        </div>
    );
}

export default Footer;