import AbstractElement from './AbstractElement';
import EVENTS from './../../events/Events';

class LoadInput extends AbstractElement {

    constructor(options) {
        super(options);

        this.setupElement();
        this.setupListeners();
    }

    setupElement() {
        this.$element = LoadInput.createElement('input', {
            id: 'gui-load-input',
            type: 'url',
            value: 'https://www.youtube.com/watch?v=W80tmfVcQCo'
        });
    }

    setupListeners() {
        let actionHandlers = {
            click: (evt) => {
                this.gui.trigger(EVENTS.GUI.CORE.LOADINPUT.KEYPRESSED, { evt });
            }
        };

        this.$element.on(actionHandlers);
    }
}

export default LoadInput;
