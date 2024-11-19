import PropTypes from "prop-types";
import { createContext, useContext } from "react";

const AccordionItemContext = createContext();

// eslint-disable-next-line react-refresh/only-export-components
export function useAccordionItemContext() {
  const ctx = useContext(AccordionItemContext);

  if (!ctx) {
    throw new Error(
      "AccordionItem components must be wrapped by <AccordionItem />"
    );
  }

  return ctx;
}

export default function AccordionItem({ id, className, children }) {
  return (
    <AccordionItemContext.Provider value={id}>
      <li className={className}>{children}</li>
    </AccordionItemContext.Provider>
  );
}

AccordionItem.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  id: PropTypes.string.isRequired,
};