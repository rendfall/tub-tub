import EVENTS from './../events/Events';
import Utils from './../helpers/Utils';
import PlaybackManager from './PlaybackManager';

class PlayerCore {
    playback = null;

    constructor(options) {
        this.setupListeners();
        this.setupPlayback();
    }

    setupPlayback() {
        this.playback = new PlaybackManager({ context: this });

        _.bindAll(this, 'broadcastProgress');
    }

    startCoreLoop() {
        let fn = this.broadcastProgress;

        (function reqFrame() {
            fn();
            window.requestAnimationFrame(reqFrame);
        }).call();
    }

    broadcastProgress() {
        let isPlaying = this.playback.isState('playing');

        if (!isPlaying) { 
            return;
        }

        let current = this.playback.getCurrentTime();
        let total = this.playback.getDuration();

        this.trigger(EVENTS.CORE.GUI.PROGRESSBAR.CHANGE, { current, total });
    }

    onClickLoadButtonHandler() {
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
        let total = this.playback.getDuration();
        let valueInSeconds = Math.floor(options.value * total);

        this.playback.seekTo(valueInSeconds, options.allowSeekAhead);
    }

    setupListeners() {
        // PlayButton
        this.on(EVENTS.GUI.CORE.PLAYBUTTON.CLICK, this.onClickPlayButtonHandler, this);

        // VolumeRange
        this.on(EVENTS.GUI.CORE.VOLUMERANGE.CLICK, Utils.dummyEvent, this);
        this.on(EVENTS.GUI.CORE.VOLUMERANGE.DRAG, this.onChangeVolumeRangeHandler, this);

        // LoadButton
        this.on(EVENTS.GUI.CORE.LOADBUTTON.CLICK, this.onClickLoadButtonHandler, this);

        // ProgressBar
        this.on(EVENTS.GUI.CORE.PROGRESSBAR.CHANGE, this.onChangeProgressBarHandler, this);
    }
}

_.extend(PlayerCore.prototype, Backbone.Events);

export default PlayerCore;
