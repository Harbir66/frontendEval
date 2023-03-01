import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './FilterBar.css';
import {
  faChevronDown,
  faChevronUp,
  faFilter,
  faSearch,
} from '@fortawesome/free-solid-svg-icons';
import RadioButton from '../RadioButton';

function FilterBar() {
  const [showFilter, setShowFilter] = React.useState(true);
  const handleToggle = () => {
    setShowFilter(!showFilter);
  };
  return (
    <div className="filter-bar">
      <div className="main-filter-div">
        <button type="button" onClick={handleToggle} className="filter-toggle">
          <FontAwesomeIcon icon={faFilter} />
          <span>Filter</span>
          {showFilter ? (
            <FontAwesomeIcon icon={faChevronUp} />
          ) : (
            <FontAwesomeIcon icon={faChevronDown} />
          )}
        </button>
        <div className="search-bar">
          <input className="search" type="text" placeholder="EVENT NAME" />
          <FontAwesomeIcon icon={faSearch} />
        </div>
      </div>
      {showFilter && (
        <div className="filters">
          <div className="type-1">
            <RadioButton />
            <span className="label">ALL</span>
          </div>
          <div className="type-2">
            <RadioButton />
            <span className="label">BOOKMARKED</span>
          </div>
          <div className="type-1">
            <RadioButton />
            <span className="label">REGISTERED</span>
          </div>
          <div className="type-2">
            <RadioButton />
            <span className="label">SEATS AVAILABLE</span>
          </div>
        </div>
      )}
    </div>
  );
}

export default FilterBar;
