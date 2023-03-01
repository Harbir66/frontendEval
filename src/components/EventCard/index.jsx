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
import getFormattedDateFromUtcDate from '../../utils/common';
import makeRequest from '../../utils/makeRequest';
import { UPDATE_EVENT } from '../../constants/apiEndPoints';

function EventCard({ event }) {
  const [isRegistered, setIsRegistered] = React.useState(event.isRegistered);
  const [isBookmarked, setIsBookmarked] = React.useState(event.isBookmarked);
  const datetime = getFormattedDateFromUtcDate(event.datetime, event.timezone);

  let leftIcon = null;
  let rightIcon = null;
  let buttonColor = '';

  const handleBookmark = async () => {
    try {
      await makeRequest(UPDATE_EVENT(event.id), {
        data: {
          isBookmarked: !isBookmarked,
        },
      });
      setIsBookmarked(!isBookmarked);
    } catch (e) {
      //
    }
  };

  const handleRegister = () => {
    setIsRegistered(!isRegistered);
  };

  if (event.areSeatsAvailable) {
    if (isRegistered && event.areSeatsAvailable) {
      leftIcon = <FontAwesomeIcon icon={faCircleCheck} />;
      buttonColor = 'green';
    }
  } else {
    leftIcon = <FontAwesomeIcon icon={faCircleXmark} />;
    buttonColor = 'yellow';
  }

  if (isBookmarked) {
    rightIcon = <FontAwesomeIcon icon={bookmarkSolid} />;
  } else {
    rightIcon = <FontAwesomeIcon icon={faBookmark} />;
  }

  return (
    <div className="event-card">
      <img src={event.imgUrl} alt="event" />
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
      <div className="event-buttons card-padding">
        <button
          type="button"
          className={`left-icon ${buttonColor}`}
          onClick={handleRegister}
        >
          {leftIcon}
        </button>
        <button
          type="button"
          className="right-icon red"
          onClick={handleBookmark}
        >
          {rightIcon}
        </button>
      </div>
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
};
