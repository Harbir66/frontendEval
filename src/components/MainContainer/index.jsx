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

  if (error) {
    return (
      <div className="main-container padding">
        <FilterBar />
        <div>{error.message}</div>
      </div>
    );
  }

  return (
    <div className="main-container padding">
      <FilterBar />
      {events ? (
        <div className="events-container">
          {events.map((event) => {
            return <EventCard key={event.id} event={event} />;
          })}
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
}

export default MainContainer;
