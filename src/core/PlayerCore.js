import EVENTS from './../events/Events';
import Utils from './../helpers/Utils';
import PlaybackManager from './PlaybackManager';

class PlayerCore {
    playback = null;

    constructor(options) {
        this.playback = new PlaybackManager({ context: this });

        this.setupListeners();
    }

    onClickLoadButtonHandler() {
        let isInitialized = this.playback.isInitialized;

        // TODO: Change way to get URL.
        let url = $('#gui-load-input').val();

        this.playback.load(url);
    }

    onClickPlayButtonHandler(options) {
        if (this.playback.isState('playing')) {
            this.playback.pause();
        } else {
            this.playback.play();
        }
    }

    onChangeVolumeRangeHandler(options) {
        this.playback.setVolume(options.value);
    }

    onChangeProgressBarHandler(options) {
        this.playback.seekTo(options.value);
    }

    setupListeners() {
        // PlayButton
        this.on(EVENTS.CORE.PLAYBUTTON.CLICK, this.onClickPlayButtonHandler, this);

        // VolumeRange
        this.on(EVENTS.CORE.VOLUMERANGE.CLICK, Utils.dummyEvent, this);
        this.on(EVENTS.CORE.VOLUMERANGE.DRAG, this.onChangeVolumeRangeHandler, this);

        // LoadButton
        this.on(EVENTS.CORE.LOADBUTTON.CLICK, this.onClickLoadButtonHandler, this);

        // ProgressBar
        this.on(EVENTS.CORE.PROGRESSBAR.CLICK, this.onChangeProgressBarHandler, this);
    }
}

_.extend(PlayerCore.prototype, Backbone.Events);

export default PlayerCore;
