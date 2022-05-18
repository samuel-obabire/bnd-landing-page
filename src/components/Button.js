import PropTypes from "prop-types"

const Button = ({ children, to }) => {
  return (
    <a href={to} className="button" target="_blank" rel="noreferrer">
      {children}
    </a>
  )
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  to: PropTypes.string.isRequired,
}

export default Button
