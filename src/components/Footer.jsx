import { SocialLinks } from "../data";
import SingleNavLink from "./SingleNavLink";
import SingleSocialLink from "./SingleSocialLink";
import { pageLinks } from "../data"

const Footer = () => {
    return(<footer className="section footer">
    <ul className="footer-links">
        {pageLinks.map((link) => {
            return < SingleNavLink id={link.id} reference={link.href} text={link.text} type="footer-link" />
        })}
    </ul>
    <ul className="footer-icons">
        {SocialLinks.map((link) => {
            return < SingleSocialLink id={link.id} reference={link.href} icon={link.icon} type="footer-link"/>
        })}
    </ul>
    <p className="copyright">
      copyright &copy; Backroads travel tours company
      <span id="date"></span> all rights reserved
    </p>
  </footer>
  )
}

export default Footer;