import EVENTS from './../events/Events';
import Utils from './../helpers/Utils';

class PlaybackManager {
    core = null;
    player = null;

    constructor(options) {
        this.core = options.context;
    }

    setup(url, options = {}) {
        let id = Utils.getIdFromUrl(url);

        if (_.isEmpty(id)) return;

        _.defaults(options, {
            width: 200,
            height: 104,
            videoId: id,
            events: { 
                onReady: (evt) => {
                    this.play;
                    this.core.startCoreLoop();
                }
            }
        });

        this.player = new YT.Player('player', options);
    }

    load(url) {
        let id = Utils.getIdFromUrl(url);

        if (this.isInitialized) {
            this.player.loadVideoById(id);
        } else {
            this.setup(url);
        }
    }

    play() {
        this.player.playVideo();
    }

    pause() {
        this.player.pauseVideo();
    }

    stop() {
        this.player.stopVideo();
    }

    setVolume(value) {
        this.player.setVolume(value);
    }

    seekTo(value) {
        this.player.seekTo(value, false);
    }

    isState(name) {
        let state = this.getState();

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
                return;
        }
    }

    getState() {
        return this.player.getPlayerState();
    }

    getCurrentTime() {
        return this.player.getCurrentTime();
    }

    getDuration() {
        return this.player.getDuration();
    }

    getVideoUrl() {
        return this.player.getVideoUrl();
    }

    get isInitialized() {
        return Boolean(this.player);
    }
};

export default PlaybackManager;
