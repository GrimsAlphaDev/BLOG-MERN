import { AlphaLogo } from "../../../assets";
import { BsInstagram } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { BiLogoTelegram } from "react-icons/bi";
import { BsWhatsapp } from "react-icons/bs";
import { BiLogoUpwork } from "react-icons/bi";
import './footer.scss';

function Icon({icon}){
    return (
        <div className="icon-wrapper">
            <div className="icon-medsos" alt="icon">{icon}</div>
        </div>
    );
}

export default function Footer(){
    return (
        <div>
            <div className="footer">
                <div>
                    <img className="logo" src={AlphaLogo} alt="Logo" />    
                </div>
                <div className="social-wrapper">
                    {/* icons */}
                    <Icon icon={<BsInstagram />} />
                    <Icon icon={<BsLinkedin />} />
                    <Icon icon={<BiLogoUpwork />} />
                    <Icon icon={<BsGithub />} />
                    <Icon icon={<BiLogoTelegram />} />
                    <Icon icon={<BsWhatsapp />} />
                
                </div>
            </div>
            <div className="copyright">
                <p>Copyright</p>
            </div>
        </div>
    );
}