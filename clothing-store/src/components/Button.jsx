import PropTypes from "prop-types";

const Button = ({ children, onClick = () => {} }) => {
  return (
    <button
      onClick={onClick}
      className="px-6 py-2 text-stone-950 bg-brand rounded-md text-xl"
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
};

export default Button;
