import React from 'react';
import './EventCard.css';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBookmark as bookmarkSolid,
  faCircleCheck,
  faCircleXmark,
} from '@fortawesome/free-solid-svg-icons';
import { faBookmark } from '@fortawesome/free-regular-svg-icons';
import { ThemeContext } from '../../context/ThemeContext';
import getFormattedDateFromUtcDate from '../../utils/common';
import makeRequest from '../../utils/makeRequest';
import { UPDATE_EVENT } from '../../constants/apiEndPoints';

function EventCard({ event, isBig, id, handleClick }) {
  const { themeColor } = React.useContext(ThemeContext);
  const [isRegistered, setIsRegistered] = React.useState(event.isRegistered);
  const [isBookmarked, setIsBookmarked] = React.useState(event.isBookmarked);
  const datetime = getFormattedDateFromUtcDate(event.datetime, event.timezone);

  let leftIcon = null;
  let rightIcon = null;
  let buttonColor = '';
  let leftLabel = null;
  let bigLabel = 'REGISTER';

  const handleBookmark = async () => {
    try {
      await makeRequest(UPDATE_EVENT(id), {
        data: {
          isBookmarked: !isBookmarked,
        },
      });
      setIsBookmarked(!isBookmarked);
    } catch (e) {
      //
    }
  };

  const handleRegister = async () => {
    try {
      await makeRequest(UPDATE_EVENT(id), {
        data: {
          isRegistered: !isRegistered,
        },
      });
      setIsRegistered(!isRegistered);
    } catch (e) {
      //
    }
  };

  if (event.areSeatsAvailable) {
    if (isRegistered && event.areSeatsAvailable) {
      leftIcon = <FontAwesomeIcon icon={faCircleCheck} />;
      buttonColor = 'green';
      leftLabel = 'REGISTERED';
      bigLabel = 'UNREGISTER';
    }
  } else {
    leftIcon = <FontAwesomeIcon icon={faCircleXmark} />;
    buttonColor = 'yellow';
    leftLabel = 'NO SEATS AVAILABLE';
    bigLabel = 'NO SEATS AVAILABLE';
  }

  if (isBookmarked) {
    rightIcon = <FontAwesomeIcon icon={bookmarkSolid} />;
  } else {
    rightIcon = <FontAwesomeIcon icon={faBookmark} />;
  }
  const big = isBig ? 'bigCard ' : '';
  return (
    <div
      style={{ backgroundColor: themeColor }}
      className={`event-card ${big}`}
    >
      <img
        onClick={() => handleClick(event.id)}
        src={event.imgUrl}
        alt="event"
      />

      <hr />
      <div className="event-title">{event.name.toUpperCase()}</div>
      <div className="event-description card-padding">{event.description}</div>
      <div className="event-venue card-padding">
        <span>VENUE: </span>
        {event.venue}
      </div>
      <div className="event-date card-padding">
        <span>DATE: </span>
        {datetime}
      </div>
      <div className="event-buttons ">
        <button type="button" className={`left-icon ${buttonColor}`}>
          {leftIcon}
          <span>{leftLabel}</span>
        </button>
        <button
          type="button"
          className="right-icon red"
          onClick={handleBookmark}
        >
          {rightIcon}
        </button>
      </div>
      {isBig && (
        <button className="bigButton" type="button" onClick={handleRegister}>
          {bigLabel}
        </button>
      )}
    </div>
  );
}

export default EventCard;

EventCard.propTypes = {
  event: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    venue: PropTypes.string.isRequired,
    datetime: PropTypes.string.isRequired,
    timezone: PropTypes.string.isRequired,
    areSeatsAvailable: PropTypes.bool.isRequired,
    isRegistered: PropTypes.bool.isRequired,
    isBookmarked: PropTypes.bool.isRequired,
    imgUrl: PropTypes.string.isRequired,
  }).isRequired,
  isBig: PropTypes.bool.isRequired,
  id: PropTypes.number.isRequired,
  handleClick: PropTypes.func.isRequired,
};
