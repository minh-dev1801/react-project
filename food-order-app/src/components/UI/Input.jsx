import PropTypes from "prop-types";

const Input = ({ label, id, ...props }) => {
  return (
    <p className="my-2 flex flex-col">
      <label htmlFor={id} className="text-sm font-semibold">
        {label}
      </label>
      <input
        id={id}
        name={id}
        {...props}
        className="border-1 w-full max-w-[20rem] rounded-sm border-[#ccc]"
      />
    </p>
  );
};

Input.propTypes = {
  label: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};

export default Input;
