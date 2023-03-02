import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './FilterBar.css';
import {
  faChevronDown,
  faChevronUp,
  faFilter,
  faSearch,
} from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';
import RadioButton from '../RadioButton';

function FilterBar({ radio, search, handleRadio, handleSearch }) {
  const [showFilter, setShowFilter] = React.useState(true);
  // const [radioFilter, setRadioFilter] = React.useState('all');
  // const [searchQuery, setSearchQuery] = React.useState('');
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
          <input
            onChange={handleSearch}
            className="search"
            type="text"
            value={search}
            placeholder="EVENT NAME"
          />
          <FontAwesomeIcon icon={faSearch} />
        </div>
      </div>
      {showFilter && (
        <div className="filters">
          <div className="type-1">
            <RadioButton
              type="all"
              radioFilter={radio}
              handleRadio={handleRadio}
            />
            <span className="label">ALL</span>
          </div>
          <div className="type-2">
            <RadioButton
              type="bookmarked"
              radioFilter={radio}
              handleRadio={handleRadio}
            />
            <span className="label">BOOKMARKED</span>
          </div>
          <div className="type-1">
            <RadioButton
              type="registered"
              radioFilter={radio}
              handleRadio={handleRadio}
            />
            <span className="label">REGISTERED</span>
          </div>
          <div className="type-2">
            <RadioButton
              type="seats-available"
              radioFilter={radio}
              handleRadio={handleRadio}
            />
            <span className="label">SEATS AVAILABLE</span>
          </div>
        </div>
      )}
    </div>
  );
}

export default FilterBar;

FilterBar.propTypes = {
  radio: PropTypes.string.isRequired,
  search: PropTypes.string.isRequired,
  handleRadio: PropTypes.func.isRequired,
  handleSearch: PropTypes.func.isRequired,
};
