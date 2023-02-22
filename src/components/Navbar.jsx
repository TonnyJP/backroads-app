import logo from '../images/logo.svg';
import { pageLinks } from '../data';
import { SocialLinks } from '../data';
import SingleSocialLink from './SingleSocialLink';
import SingleNavLink from './SingleNavLink';
const Navbar = () => {

    return(
    <nav className="navbar">
    <div className="nav-center">
      <div className="nav-header">
        <img src={logo} className="nav-logo" alt="backroads" />
        <button type="button" className="nav-toggle" id="nav-toggle">
          <i className="fas fa-bars"></i>
        </button>
      </div>
      {/* <!-- left this comment on purpose --> */}
      <ul className="nav-links" id="nav-links">
        {pageLinks.map((link) => {
            return < SingleNavLink id={link.id} reference={link.href} text={link.text} />
        })}
      </ul>

      <ul className="nav-icons">
        {SocialLinks.map((element) => {
            const { id, title, description } = element;
            return(
                < SingleSocialLink id={id} title={title} description= {description}  type="nav-icon"/>
            )
        })}
      </ul>
    </div>
  </nav>
  )
}

export default Navbar;