import PropTypes from "prop-types";
import { useAccordionContext } from "./Accordion";
import { useAccordionItemContext } from "./AccordionItem";

export default function AccordionTitle({ className, children }) {
  const { toggleItem } = useAccordionContext();
  const id = useAccordionItemContext();

  return <h3 className={className} onClick={() => toggleItem(id)}>{children}</h3>;
}

AccordionTitle.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};
