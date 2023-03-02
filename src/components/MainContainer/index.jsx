import React from 'react';
import './MainContainer.css';
import { useNavigate } from 'react-router-dom';
import FilterBar from '../FilterBar';
import makeRequest from '../../utils/makeRequest';
import { GET_ALL_EVENTS } from '../../constants/apiEndPoints';
import EventCard from '../EventCard';

function MainContainer() {
  const [events, setEvents] = React.useState();
  const [filteredEvents, setFilteredEvents] = React.useState();
  const [error, setError] = React.useState();
  const [bigComponent, setBigComponent] = React.useState(null);
  const [radio, setRadio] = React.useState('all');
  const [search, setSearch] = React.useState('');
  const navigate = useNavigate();

  React.useEffect(() => {
    makeRequest(GET_ALL_EVENTS, {}, navigate)
      .then((data) => {
        const sortedData = data.sort((a, b) =>
          a.datetime < b.datetime ? -1 : 1
        );
        setEvents(sortedData);
        setFilteredEvents(sortedData);
      })
      .catch((err) => {
        setError(err);
      });
  }, []);

  React.useEffect(() => {
    if (radio === 'seats-available') {
      const filtered = events.filter((event) => event.areSeatsAvailable);
      setFilteredEvents(filtered);
    } else if (radio === 'bookmarked') {
      const filtered = events.filter((event) => event.isBookmarked);
      setFilteredEvents(filtered);
    } else if (radio === 'registered') {
      const filtered = events.filter((event) => event.isRegistered);
      setFilteredEvents(filtered);
    } else {
      setFilteredEvents(events);
    }
    // console.log(filteredEvents);
  }, [radio]);

  React.useEffect(() => {
    if (!(search === '')) {
      const filtered = events.filter((event) =>
        event.name.toLowerCase().includes(search.toLowerCase())
      );
      setFilteredEvents(filtered);
    } else {
      setFilteredEvents(events);
    }
    // console.log(filteredEvents);
  }, [search]);

  const handleClick = (id) => {
    if (!bigComponent) {
      setBigComponent(id);
    } else {
      setBigComponent(null);
    }
  };

  const handleRadio = (type) => {
    setRadio(type);
    // console.log(type);
  };

  const handleSearch = (e) => {
    setSearch(e.target.value);
    // console.log(e.target.value);
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
      {events && (
        <FilterBar
          radio={radio}
          search={search}
          handleRadio={handleRadio}
          handleSearch={handleSearch}
        />
      )}
      {events ? (
        <div className="events-container">
          {filteredEvents.map((event) => {
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
