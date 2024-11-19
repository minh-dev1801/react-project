import { PropTypes } from "prop-types";
import { useState, useRef } from "react";
export default function SearchableList({ items, itemKeyFn, children }) {
  const lastChange = useRef(null);
  const [searchTeam, setSearchTeam] = useState("");

  const searchResult = items.filter((item) =>
    JSON.stringify(item).toLowerCase().includes(searchTeam.toLowerCase())
  );

  function handleChange(event) {
    if (lastChange.current) {
      clearTimeout(lastChange.current);
    }

    lastChange.current = setTimeout(() => {
      lastChange.current = null;
      setSearchTeam(event.target.value);
    }, 500);
  }

  return (
    <div className="searchable-list">
      <input type="search" placeholder="Search..." onChange={handleChange} />
      <ul>
        {searchResult.map((item) => (
          <li key={itemKeyFn(item)}>{children(item)}</li>
        ))}
      </ul>
    </div>
  );
}

SearchableList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.string).isRequired,
  itemKeyFn: PropTypes.func.isRequired,
  children: PropTypes.func.isRequired,
};
