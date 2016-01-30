import AbstractElement from './AbstractElement';
import EVENTS from './../../events/Events';

class LoadButton extends AbstractElement {

    constructor(options) {
        super(options);

        this.setupElement();
        this.setupListeners();
    }

    setupElement() {
        this.$element = LoadButton.createElement('button', {
            id: 'gui-load-button',
            type: 'button',
            text: 'load'
        });
    }

    setupListeners() {
        let actionHandlers = {
            click: (evt) => {
                this.gui.trigger(EVENTS.GUI.CORE.LOADBUTTON.CLICK, { evt });
            }
        };

        this.$element.on(actionHandlers);
    }
}

export default LoadButton;
