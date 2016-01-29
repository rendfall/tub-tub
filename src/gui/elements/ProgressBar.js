import AbstractElement from './AbstractElement';
import EVENTS from './../../events/Events';

class ProgressBar extends AbstractElement {

    constructor(options) {
        super(options);

        this.setupElement();
        this.setupListeners();
    }

    setupElement() {
        this.$element = ProgressBar.createElement('input', {
            id: 'gui-progress-bar',
            type: 'range',
            width: '100%'
        });
    }

    setupListeners() {
        let actionHandlers = {
            change: (evt) => {
                this.gui.trigger(EVENTS.GUI.PROGRESSBAR.CHANGE, {
                    evt,
                    value: this.$element.val()
                });
            }
        };

        this.$element.on(actionHandlers);
    }
}

export default ProgressBar;
