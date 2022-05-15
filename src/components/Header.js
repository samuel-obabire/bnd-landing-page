import { FaLocationArrow } from "react-icons/fa"
import avatar from "../assets/avatar.jpg"
import SocialLinks from "./SocialLinks"

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <img src={avatar} alt="bnd-avatar" width="100" height="100" />
      </div>
      <div className="info">
        <h1>@bndclothings</h1>
        <em>
          My name is Ajibike Oshodi. Covering People's nakedness is what i do
          for a living. Covering People's nakedness is what i do for a living
        </em>
        <address>
          <FaLocationArrow size="1.4rem" />
          <span>25, Akinsanya Street, Ojodu Berger. Lagos, Nigeria</span>
        </address>

        <SocialLinks />
      </div>
    </header>
  )
}

export default Header
