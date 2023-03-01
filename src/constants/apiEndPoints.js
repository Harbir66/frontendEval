export const BACKEND_URL = 'http://localhost:8000/api';

export const GET_ALL_EVENTS = {
  url: 'events',
  method: 'GET',
};
export const GET_EVENT_BY_ID = (eventId) => ({
  url: `events/${eventId}`,
  method: 'GET',
});

export const UPDATE_EVENT = (eventId) => ({
  url: `events/${eventId}`,
  method: 'PATCH',
});

export const GET_THEMES = {
  url: 'themes',
  method: 'GET',
};

export const SAVE_THEME = {
  url: 'themes',
  method: 'PUT',
};
