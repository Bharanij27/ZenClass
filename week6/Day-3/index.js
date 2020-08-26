var Netflix = /** @class */ (function () {
    function Netflix(videoURLs) {
        var _this = this;
        this.powerToggle = function () {
            if (!_this.player.getAttribute("src")) {
                _this.player.setAttribute("src", _this.songs[_this.currentIndex]);
                _this.player.load();
                _this.player.play();
            }
            else {
                _this.player.setAttribute("src", "");
            }
        };
        this.adjustVolume = function (value) {
            0 < _this.player.volume &&
                _this.player.volume < 1 &&
                (_this.player.volume += value);
        };
        this.mutePlayer = function () {
            _this.player.muted = !_this.player.muted;
        };
        this.pausePlayer = function () {
            if (_this.player.getAttribute("src")) {
                if (!_this.player.paused)
                    _this.player.pause();
                else
                    _this.player.play();
            }
        };
        var video = document.querySelector("video");
        video.setAttribute("id", "my-video");
        video.setAttribute("type", "video/mp4");
        document.querySelector("#first-div").append(video);
        this.songs = videoURLs;
        this.currentIndex = 0;
        this.player = video;
        this.player.volume = 0.5;
    }
    Netflix.prototype.changeChannel = function (value) {
        if (this.songs[this.currentIndex + value]) {
            this.currentIndex += value;
        }
        else {
            if (value == 1)
                this.currentIndex = 0;
            else
                this.currentIndex = this.songs.length - 1;
        }
        this.player.setAttribute("src", this.songs[this.currentIndex]);
        this.player.load();
        this.player.play();
    };
    return Netflix;
}());
var videos = [
    "https://ak.picdn.net/shutterstock/videos/1040929034/preview/stock-footage-crab-working-in-seashore-full-focused-shot-of-crab-it-building-the-cave-it-making-holes-in-sea-sand.webm",
    "https://ak.picdn.net/shutterstock/videos/30423748/preview/stock-footage-ilica-waterfall-video-is-located-in-ilica-village-near-pinarbasi-town-kastamonu-turkey.webm",
    "https://ak.picdn.net/shutterstock/videos/1024163294/preview/stock-footage-circa-s-the-will-bradley-orchestra-performs-boardwalk-boogie-in-this-upbeat-soundie-from-the.webm",
];
var tvObject = new Netflix(videos);
var TV = function (operation) {
    switch (operation) {
        case "power":
            tvObject.powerToggle();
            break;
        case "mute":
            tvObject.mutePlayer();
            break;
        case "pause":
            tvObject.pausePlayer();
            break;
        case "plusVolume":
            tvObject.adjustVolume(+0.05);
            break;
        case "negVolume":
            tvObject.adjustVolume(-0.05);
            break;
        case "plusChannel":
            tvObject.changeChannel(+1);
            break;
        case "negChannel":
            tvObject.changeChannel(-1);
            break;
        default:
            break;
    }
};
