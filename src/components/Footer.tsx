import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { NavLink } from "react-router-dom";
import { BsFillTelephoneFill } from "react-icons/bs";
import { FaHome } from "react-icons/fa";
import "../cssFolder/Footer.css";
function Footer() {
  return (
    <>
      <footer>
        <div className="oneSection">
          <h4>E-Commerce</h4>
          <section className="textAndSocial">
            <p>
              We have curated the trendiest products to suit every taste. Follow
              us on social media to stay up to date with the latest arrivals.
            </p>
            <section className="social">
              <p>
                {" "}
                <FaInstagram />
              </p>
              <p>
                {" "}
                <FaXTwitter />
              </p>
              <p>
                {" "}
                <FaFacebookSquare />
              </p>
              <p>
                {" "}
                <FaLinkedin />
              </p>
            </section>
          </section>
        </div>
        <div className="twoSection">
          <h4>Quick Links</h4>
          <nav>
            <NavLink to="/" className={"nav-link"}>
              Home
            </NavLink>
            <NavLink to="/product" className={"nav-link"}>
              Product
            </NavLink>
            <NavLink to="/contact" className={"nav-link"}>
              Contact
            </NavLink>
          </nav>
        </div>
        <div className="threeSection">
          <h4>Contact</h4>
          <section className="contactSection">
            <p>
              <BsFillTelephoneFill />
              Telephone: <strong>0105152607</strong>
            </p>
            <p>
              <FaHome /> Adress: <strong>Baku,Azerbaijan</strong>
            </p>
          </section>
        </div>
      </footer>
    </>
  );
}
export default Footer;
