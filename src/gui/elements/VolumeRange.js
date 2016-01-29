import AbstractElement from './AbstractElement';
import EVENTS from './../../events/Events';

class VolumeRange extends AbstractElement {

    constructor(options) {
        super(options);

        this.setupElement();
        this.setupListeners();
    }

    setupElement() {
        this.$element = VolumeRange.createElement('input', {
            id: 'gui-volume-range',
            type: 'range',
            min: 0,
            max: 100
        });
    }

    setupListeners() {
        let actionHandlers = {
            click: (evt) => {
                this.gui.trigger(EVENTS.GUI.VOLUMERANGE.CLICK, { evt });
            },

            input: (evt) => {
                this.gui.trigger(EVENTS.GUI.VOLUMERANGE.DRAG, {
                    evt,
                    value: this.$element.val() 
                });
            }
        };

        this.$element.on(actionHandlers);
    }
}

export default VolumeRange;
