import EVENTS from './../events/Events';
import LoadInput from './elements/LoadInput';
import PlayButton from './elements/PlayButton';
import VolumeRange from './elements/VolumeRange';
import LoadButton from './elements/LoadButton';
import ProgressBar from './elements/ProgressBar';

class PlayerGUI {
    $container = null;

    constructor(options) {
        this.$container = $('#controls-container');

        this.setupElements();
    }

    setupElements() {
        let loadInput = new LoadInput({ gui: this });
        let playButton = new PlayButton({ gui: this });
        let volumeRange = new VolumeRange({ gui: this });
        let loadButton = new LoadButton({ gui: this });
        let progressBar = new ProgressBar({ gui: this });

        loadInput.render();
        loadButton.render();
        playButton.render();
        volumeRange.render();
        progressBar.render();
    }
}

_.extend(PlayerGUI.prototype, Backbone.Events);

export default PlayerGUI;
