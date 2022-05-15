import PropTypes from "prop-types"
const Card = ({ children, reverse, className, ...others }) => {
  return (
    <div
      className={`card ${reverse && "reverse"} ${className || ""}`}
      {...others}
    >
      {children}
    </div>
  )
}

Card.defaultProps = {
  reverse: false,
}

Card.propTypes = {
  children: PropTypes.node.isRequired,
  reverse: PropTypes.bool,
  className: PropTypes.string,
}

export default Card
