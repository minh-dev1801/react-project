import PropTypes from "prop-types";

const Error = ({ title, message }) => {
  return (
    <div className="mx-auto my-8 w-[90%] max-w-[25rem] rounded-md bg-[#f9b8b8] p-4 text-[#6d0b0b]">
      <h2 className="mb-4 text-xl font-bold">{title}</h2>
      <p>{message}</p>
    </div>
  );
};

Error.propTypes = {
  title: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
};

export default Error;
