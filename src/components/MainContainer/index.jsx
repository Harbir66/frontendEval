import React from 'react';
import './MainContainer.css';
import { useNavigate } from 'react-router-dom';
import FilterBar from '../FilterBar';
import makeRequest from '../../utils/makeRequest';
import { GET_ALL_EVENTS } from '../../constants/apiEndPoints';
import EventCard from '../EventCard';

function MainContainer() {
  const [events, setEvents] = React.useState();
  const [error, setError] = React.useState();
  const [bigComponent, setBigComponent] = React.useState(null);
  const navigate = useNavigate();

  React.useEffect(() => {
    makeRequest(GET_ALL_EVENTS, {}, navigate)
      .then((data) => {
        const sortedData = data.sort((a, b) =>
          a.datetime < b.datetime ? -1 : 1
        );
        setEvents(sortedData);
      })
      .catch((err) => {
        setError(err);
      });
  }, []);

  const handleClick = (id) => {
    if (!bigComponent) {
      setBigComponent(id);
    } else {
      setBigComponent(null);
    }
  };

  const handleRadio = (filteredEvents) => {
    setEvents(filteredEvents);
  };

  if (error) {
    return (
      <div className="main-container padding">
        <FilterBar />
        <div>{error.message}</div>
      </div>
    );
  }

  if (bigComponent) {
    return (
      <div className="main-container padding">
        <EventCard
          event={events[bigComponent - 1]}
          id={bigComponent}
          isBig
          handleClick={handleClick}
        />
      </div>
    );
  }

  return (
    <div className="main-container padding">
      {events && <FilterBar events={events} setEvents={handleRadio} />}
      {events ? (
        <div className="events-container">
          {events.map((event) => {
            return (
              <EventCard
                handleClick={handleClick}
                key={event.id}
                event={event}
                id={event.id}
                isBig={false}
              />
            );
          })}
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
}

export default MainContainer;
