import { combineReducers } from 'redux';

const initialSermons = [
  {
    date: '2020-04-13',
    url: 'https://www.youtube.com/embed/JTn1h-uBTeQ',
    audio: '/assets/FBC_2020-04-12_Resurrection_Sunday_audio.mp3'
  },
  {
    date: '2020-04-06',
    url: 'https://www.youtube.com/embed/ihMklIGhdCQ',
    audio: '/assets/FBC_2020-04-05_audio.mp3'
  },
  {
    date: '2020-03-30',
    url: 'https://www.youtube.com/embed/1XRKySneQ8M',
    audio: '/assets/FBC_2020-03-29_audio.mp3'
  },
  {
    date: '2020-03-23',
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
