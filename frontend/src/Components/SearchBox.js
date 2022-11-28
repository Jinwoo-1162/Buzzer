import "../CSS/SearchBox.css";
import { useNavigate, createSearchParams } from "react-router-dom";
import { useState, useEffect } from "react";
function SearchBox(props) {
  const navigate = useNavigate();
  const [term, setTerm] = useState(props.init);
  // useEffect(() => {
  //   goToResults();
  // },"")
  
  const goToResults = () => {
    navigate({
      pathname: "../search",
      search: `?${createSearchParams({q: term})}`,
    });
    console.log(`go to ${term}`);
  };

  const handleChange = update => {
    console.log(`input changed to ${update.target.value}`);
    setTerm(update.target.value);
  }
  const search = (e) => {
    e.preventDefault();
    goToResults();
    console.log('click search')
    window.location.reload();
  };
  return (
    <div class="explore-searchbox">
      <label className="search-box">
        <span class="icon">🔎</span>
        <form className="form">
          <input
            type="search"
            value={term}
            onChange={handleChange}
            placeholder="search"
          />
          <button hidden type="submit" onClick={search}>
            Search
          </button>
        </form>
      </label>
    </div>
  );
}

export default SearchBox;
