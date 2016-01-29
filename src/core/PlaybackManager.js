import EVENTS from './../events/Events';
import Utils from './../helpers/Utils';

class PlaybackManager {
    player = null;

    initialize(url, options = {}) {
        let id = Utils.getIdFromUrl(url);

        if (_.isEmpty(id)) return;

        _.defaults(options, {
            width: 200,
            height: 104,
            videoId: id,
            events: { 
                onReady: (evt) => {
                    this.play
                }
            }
        });

        this.player = new YT.Player('player', options);
    }
}

let PM = new PlaybackManager();

export default {

    get isInitialized() {
        return Boolean(PM.player);
    },

    initialize(url, options) {
        PM.initialize(url, options);
    },

    load() {
        PM.player.loadVideoById(url);
    },

    play() {
        PM.player.playVideo();
    },

    pause() {
        PM.player.pauseVideo();
    },

    stop() {
        PM.player.stopVideo();
    },

    setVolume(value) {
        PM.player.setVolume(value);
    },

    seekTo(value) {
        PM.player.seekTo(value, false);
    },

    /**
     * -1 – unstarted (nie uruchomiono)
     *  0 – ended (zakończono)
     *  1 – playing (odtwarzanie)
     *  2 – paused (wstrzymano)
     *  3 – buffering (buforowanie)
     *  5 – video cued (film został wskazany)
     */ 
    isState(name) {
        let state = PM.player.getPlayerState();

        switch (name) {
            case 'unstarted':
                return (state === -1);

            case 'ended':
                return (state === 0);

            case 'playing':
                return (state === 1);

            case 'paused':
                return (state === 2);

            case 'buffering':
                return (state === 3);

            case 'cued':
                return (state === 5);

            default:
                return false;
        }
    },

    getState() {
        return PM.player.getPlayerState();
    },

    getVideoUrl() {
        return PM.player.getVideoUrl();
    }
};
