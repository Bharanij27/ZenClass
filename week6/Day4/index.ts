import { RootObject, Track } from './modalInterFace';

class SongCard {

    constructor(song: Track) {
        if (song.hub && song.hub.actions && song.hub.actions[1].uri) {
            let songList = document.querySelector('.song-list');
            let songCard = this.createCard(song.title, song.subtitle, song.share.image || 'https://place-hold.it/50x50.4?text=');
            songList.append(songCard);

            songCard.addEventListener('click', () => {
                let audio = <HTMLAudioElement>document.querySelector('audio')
                debugger
                if (audio.src === song.hub.actions[1].uri) {
                    audio.paused ? audio.play() : audio.pause();
                }
                else {
                    audio.src = song.hub.actions[1].uri;
                    audio.load();
                    audio.play();
                }
            })

            // https://www.clipartmax.com/png/middle/431-4316592_video-play-icon-transparent-transparent-background-video-play-icon-png.png
        }
    }

    createCard(title: string, sub: string, imageUrl: string,): Element {
        let card = document.createElement('div');
        card.classList.add('card');
        // song.setAttribute('data-url', songUrl);

        let song = document.createElement('div');
        song.classList.add('songs');



        let image = document.createElement('img');
        image.setAttribute('src', imageUrl);

        let middle = document.createElement('div');
        middle.classList.add('middle')

        let play = document.createElement('span');
        play.classList.add('play', 'glyphicon', 'glyphicon-play')

        middle.append(play)

        let content = document.createElement('div');
        content.classList.add('content', 'ml-1');

        let songTitle = document.createElement('div');
        songTitle.classList.add('songTitle');
        songTitle.innerText = title;

        let subTitle = document.createElement('span');
        subTitle.classList.add('subTitle')
        subTitle.innerText = sub;

        content.append(songTitle, subTitle);

        song.append(image, middle, content);
        card.append(song);
        return card;
    }
}

class PlayList {
    active: Element;
    top: Element;
    recommend: Element;
    search: HTMLInputElement;

    constructor() {
        this.top = document.getElementById('top');
        this.recommend = document.getElementById('recommend');
        this.search = document.querySelector('input#search');
        this.active = this.top;

        this.search.addEventListener('click', () => {
            if (this.active === this.search) return

            this.refreshContainer()
            this.changeActive(this.search);
        });

        this.search.addEventListener('keyup', (event: KeyboardEvent) => {
            if (event.key === 'Enter') {
                let searched = this.search.value.replace(' ', '%20')
                this.searchSong('search', 'offset=0&limit=5&term=' + searched);
            }
        })

        this.top.addEventListener('click', () => {
            if (this.active === this.top) return
            this.refreshContainer();
            this.changeActive(this.top);
            this.searchSong('songs/list-artist-top-tracks', 'id=40008598');
        });

        this.recommend.addEventListener('click', () => {
            if (this.active === this.recommend) return
            this.refreshContainer();
            this.changeActive(this.recommend);
            this.searchSong('songs/list-recommendations', 'key=484129036');
        });
    }

    changeActive(present: Element) {
        this.active.classList.remove('active');
        present.classList.add('active');
        this.active = present;
    }

    refreshContainer() {
        let songContainer = document.getElementById('song-container');
        if (songContainer.children.length) songContainer.removeChild(songContainer.firstElementChild);

        let songList = document.createElement('div');
        songList.classList.add('song-list');
        songContainer.append(songList);

        document.querySelector('audio').src = '';
    }


    async searchSong(url: string, params: string) {
        let songsData = await fetch(`https://shazam.p.rapidapi.com/${url}?locale=en-US&${params}`, {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "shazam.p.rapidapi.com",
                "x-rapidapi-key": "6c91e531b2msh0a6966523182885p1d7c7fjsnc723900fd7b5"
            }
        });

        let songs = await songsData.json();
        console.log(songs);
        if (url == 'search') {
            debugger
            songs = {
                tracks: songs.tracks.hits.reduce((acc: object[], data: RootObject) => {
                    acc.push(data.track);
                    return acc;
                }, [])
            };
        }
        songs.tracks.forEach((element: Track) => {
            new SongCard(element)
        });
    }
}


let playList = new PlayList();

playList.refreshContainer();
playList.searchSong('songs/list-artist-top-tracks', 'id=40008598');