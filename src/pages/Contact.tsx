import "../cssFolder/Contact.css";
import { FaLocationDot } from "react-icons/fa6";
import { BsTelephone } from "react-icons/bs";
import { MdAlternateEmail } from "react-icons/md";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
function Contact() {
  return (
    <>
      <div className="contactContainer">
        <div className="contactItem">
          <div className="contactLogo">
            <h4>E-Commerce</h4>
            <h4>Contact me</h4>
          </div>
          <div className="contactDiv">
            <p className="contactP">
              <BsTelephone /> <a href="tel:+994105152607">+994105152607</a>
            </p>
            <p className="contactP">
              <MdAlternateEmail />{" "}
              <a href="mailto:ravanjafarli07@gmail.com">
                ravanjafarli07@gmail.com
              </a>
            </p>
            <p className="contactP">
              <FaLocationDot /> <strong>Baku/Hokməli</strong>
            </p>
            <p className="contactP">
              <FaInstagram />
              <a href="https://www.instagram.com/rajfrle/" target="_blank">
                Get Instagram
              </a>
            </p>
            <p className="contactP">
              <FaWhatsapp />
              <a href="https://wa.me/9945152607/" target="_blank">
                Get Whatsapp
              </a>
            </p>
            <p className="contactP">
              <FaLinkedin />
              <a
                href="https://www.linkedin.com/in/r%C9%99van-c%C9%99f%C9%99r-664ba637a/"
                target="_blank"
              >
                Get Linkedin
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
