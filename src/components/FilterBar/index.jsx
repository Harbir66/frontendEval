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

function FilterBar({ events, setEvents }) {
  const [showFilter, setShowFilter] = React.useState(true);
  const [radioFilter, setRadioFilter] = React.useState('all');
  // const [searchQuery, setSearchQuery] = React.useState('');
  const handleToggle = () => {
    setShowFilter(!showFilter);
  };

  const handleRadio = (type) => {
    console.log(type);
    setRadioFilter(type);
  };
  console.log(events);
  // const handleSearch = (e) => {
  //   // setSearchQuery(e.target.value);
  //   const results = events.filter((event) => {
  //     if (e.target.value === '') return events;
  //     return event.name.toLowerCase().includes(e.target.value.toLowerCase());
  //   });
  //   setEvents(results);
  // };

  // switch (radioFilter) {
  //   case 'bookmarked': {
  //     const filteredEvents = events.filter((event) => event.isBookmarked);
  //     // setEvents(filteredEvents);
  //     break;
  //   }
  //   case 'registered':
  //     break;

  //   case 'seats-available':
  //     break;

  //   default:
  //     setEvents(events);
  // }
  switch (radioFilter) {
    case 'bookmarked':
      {
        const filteredEvents = events.filter((event) => event.isBookmarked);
        // setEvents(filteredEvents);
        console.log(filteredEvents);
      }
      break;

    case 'registered':
      {
        const filteredEvents = events.filter((event) => event.isRegistered);
        // setEvents(filteredEvents);
        console.log(filteredEvents);
      }
      break;
    case 'seats-available':
      {
        const filteredEvents = events.filter(
          (event) => event.areSeatsAvailable
        );
        // setEvents(filteredEvents);
        console.log(filteredEvents);
      }
      break;
    default:
      {
      }
      break;
  }

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
            // onChange={handleSearch}
            className="search"
            type="text"
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
              radioFilter={radioFilter}
              handleRadio={handleRadio}
            />
            <span className="label">ALL</span>
          </div>
          <div className="type-2">
            <RadioButton
              type="bookmarked"
              radioFilter={radioFilter}
              handleRadio={handleRadio}
            />
            <span className="label">BOOKMARKED</span>
          </div>
          <div className="type-1">
            <RadioButton
              type="registered"
              radioFilter={radioFilter}
              handleRadio={handleRadio}
            />
            <span className="label">REGISTERED</span>
          </div>
          <div className="type-2">
            <RadioButton
              type="seats-available"
              radioFilter={radioFilter}
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
  events: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  setEvents: PropTypes.func.isRequired,
};
