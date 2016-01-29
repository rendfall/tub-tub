import AbstractElement from './AbstractElement';
import EVENTS from './../../events/Events';

class PlayButton extends AbstractElement {

    constructor(options) {
        super(options);

        this.setupElement();
        this.setupListeners();
    }

    setupElement() {
        this.$element = PlayButton.createElement('button', {
            id: 'gui-play-button',
            type: 'button',
            text: 'play/pause'
        });
    }

    setupListeners() {
        let actionHandlers = {
            click: (evt) => {
                this.gui.trigger(EVENTS.GUI.PLAYBUTTON.CLICK, { evt });
            }
        };

        this.$element.on(actionHandlers);
    }
}

export default PlayButton;
