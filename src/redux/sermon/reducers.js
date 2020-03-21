import { combineReducers } from 'redux';

const initialSermons = [
  {
    date: '2020-03-23', // UTC for the 22nd
    url: "https://www.youtube.com/embed/1IXuXciDCc0",
    audio: "/assets/2020-03-22.mp3"
  }
];

const sermons = (state = initialSermons, action) => {
  switch(action.type) {
    default:
      return state;
  }
}

export default combineReducers({
  sermons
});
