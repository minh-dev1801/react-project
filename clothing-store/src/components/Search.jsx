import { useState } from "react";
import { useDispatch } from "react-redux";
import Button from "./Button";
import { performSearch } from "../store/searchSlice";

const Search = () => {
  const [text, setText] = useState("");
  const dispatch = useDispatch();

  const handleSearchProduct = (e) => {
    e.preventDefault();
    dispatch(performSearch(text));
  };

  return (
    <div className="px-[15%] mt-8">
      <form onSubmit={handleSearchProduct}>
        <input
          type="text"
          placeholder="Search for product ..."
          className="rounded-md p-1 text-black mr-4"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <Button type="submit">Search</Button>
      </form>
    </div>
  );
};

export default Search;
