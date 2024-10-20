import PropTypes from "prop-types";
import { useEffect, useRef, useState } from "react";
import {
  TIME_CHANGE_PROGRESS,
  TIME_DEFAULT_PROGRESS,
} from "../constants/constants";

const ProgressBar = ({ onClose, onDelete }) => {
  const [progressValue, setProgressValue] = useState(TIME_DEFAULT_PROGRESS);
  const intervalId = useRef();
  const timeOutId = useRef();

  useEffect(() => {
    intervalId.current = setInterval(() => {
      setProgressValue((preProgressValue) => {
        if (preProgressValue <= 0) return 0;
        return preProgressValue - TIME_CHANGE_PROGRESS;
      });
    }, TIME_CHANGE_PROGRESS);

    timeOutId.current = setTimeout(() => {
      onClose();
      onDelete();
    }, [TIME_DEFAULT_PROGRESS]);

    return () => {
      clearInterval(intervalId.current);
      clearTimeout(timeOutId.current);
    };
  }, [onClose, onDelete]);
  return (
    <progress value={progressValue} max={TIME_DEFAULT_PROGRESS}></progress>
  );
};
ProgressBar.propTypes = {
  onClose: PropTypes.func,
  onDelete: PropTypes.func,
};
export default ProgressBar;
