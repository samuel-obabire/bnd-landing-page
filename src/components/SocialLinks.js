import { linksData } from "../data/linksData"

const SocialLinks = () => {
  const links = linksData.map(({ id, Icon, link }) => (
    <a href={link} key={id} target="_blank" rel="noreferrer">
      <Icon size="1.7rem" color="black" />
    </a>
  ))

  return <div className="social-links">{links}</div>
}

export default SocialLinks
