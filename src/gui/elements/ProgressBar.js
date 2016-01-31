import AbstractElement from './AbstractElement';
import EVENTS from './../../events/Events';

class ProgressBar extends AbstractElement {
    isDragging = false;

    constructor(options) {
        super(options);

        this.setupElement();
        this.setupListeners();
    }

    setupElement() {
        this.$element = ProgressBar.createElement('input', {
            id: 'gui-progress-bar',
            type: 'range',
            min: 0,
            max: 1,
            step: 0.01,
            width: '100%'
        });
    }

    setupListeners() {
        let actionHandlers = {
            change: (evt) => {
                this.isDragging = false;

                this.gui.trigger(EVENTS.GUI.CORE.PROGRESSBAR.CHANGE, {
                    evt,
                    value: this.$element.val(),
                    allowSeekAhead: true
                });
            },
            input: (evt) => {
                this.isDragging = true;

                this.gui.trigger(EVENTS.GUI.CORE.PROGRESSBAR.CHANGE, {
                    evt,
                    value: this.$element.val()
                });
            }
        };

        this.gui.on(EVENTS.CORE.GUI.PROGRESSBAR.CHANGE, (options) => {
            if (this.isDragging) {
                return;
            }

            let percent = (options.current / options.total);
            this.$element.val(percent);
        });

        this.$element.on(actionHandlers);
    }
}

export default ProgressBar;
