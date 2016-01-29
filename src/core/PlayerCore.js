import EVENTS from './../events/Events';
import Utils from './../helpers/Utils';
import PM from './PlaybackManager';

class PlayerCore {
    player = null;

    constructor(options) {
        this.setupListeners();
    }

    get isInitialized() {
        return Boolean(this.player);
    }

    onClickLoadButtonHandler() {
        let isInitialized = PM.isInitialized;

        // TODO: Change way to get URL.
        let url = $('#gui-load-input').val();

        if (isInitialized) {
            console.log('is initialized!');
        } else {
            PM.initialize(url);
        }
    }

    onClickPlayButtonHandler(options) {
        if (PM.isState('playing')) {
            PM.pause();
        } else {
            PM.play();
        }
    }

    onChangeVolumeRangeHandler(options) {
        PM.setVolume(options.value);
    }

    onChangeProgressBarHandler(options) {
        PM.seekTo(options.value);
    }

    setupListeners() {
        this.on(EVENTS.CORE.PLAYBUTTON.CLICK, this.onClickPlayButtonHandler, this);

        this.on(EVENTS.CORE.VOLUMERANGE.CLICK, Utils.dummyEvent, this);
        this.on(EVENTS.CORE.VOLUMERANGE.DRAG, this.onChangeVolumeRangeHandler, this);

        this.on(EVENTS.CORE.LOADBUTTON.CLICK, this.onClickLoadButtonHandler, this);

        this.on(EVENTS.CORE.PROGRESSBAR.CLICK, this.onChangeProgressBarHandler, this);
    }
}

_.extend(PlayerCore.prototype, Backbone.Events);

export default PlayerCore;
