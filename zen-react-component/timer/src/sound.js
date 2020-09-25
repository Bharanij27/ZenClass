import React from 'react';

class Sound extends React.Component {
    state = {
      play: false,
      audio : new Audio('/waves.mp3')
    }
  
    componentDidMount() {
      this.state.audio.play();
    }

    render() {
      return (
        <div className = "App-link">
          <p>New Component Arrived</p>
        </div>
      );
    }
  }

 
export default Sound;