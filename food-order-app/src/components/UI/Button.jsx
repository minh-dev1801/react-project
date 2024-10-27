import PropTypes from "prop-types";

const Button = ({ children, textOnly, className = "", ...props }) => {
  let cssClasses = textOnly
    ? "text-[#ffc404] hover:text-[#ffb004] transition-colors"
    : "bg-[#ffc404] text-[#1f1a09] px-6 py-1 rounded-md hover:bg-[#ffb004] transition-colors";

  cssClasses += " " + className;

  return (
    <button className={cssClasses} {...props}>
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node,
  textOnly: PropTypes.bool,
  className: PropTypes.string,
};

export default Button;
