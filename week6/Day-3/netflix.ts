export  class Netflix {
  songs: string[];
  currentIndex: number;
  volume: number;
  player: object

  constructor(videoURLs) {
    this.songs = videoURLs;
    this.currentIndex = 0;
    this.volume = 0.5;

    let iframe = document.querySelector('iframe');;
    iframe.setAttribute("source", videos[0]);
    // iframe.setVolume(0.5);
    

    document.getElementById('first-div').append(iframe);
  }

  turnOn() {}

  turnOff() {}
}
