import EVENTS from './../events/Events';

class EventDispatcher {
    core = null;
    gui = null;

    constructor(options) {
        this.core = options.core;
        this.gui = options.gui;

        this.setupGUIListeners();
        this.setupCoreListeners();
    }

    setupGUIListeners() {
        this.gui.on(EVENTS.GUI.CORE.PLAYBUTTON.CLICK, (options) => {
            this.core.trigger(EVENTS.GUI.CORE.PLAYBUTTON.CLICK, options);
        });

        this.gui.on(EVENTS.GUI.CORE.VOLUMERANGE.DRAG, (options) => {
            this.core.trigger(EVENTS.GUI.CORE.VOLUMERANGE.DRAG, options);
        });

        this.gui.on(EVENTS.GUI.CORE.LOADBUTTON.CLICK, (options) => {
            this.core.trigger(EVENTS.GUI.CORE.LOADBUTTON.CLICK, options);
        });

        this.gui.on(EVENTS.GUI.CORE.PROGRESSBAR.CHANGE, (options) => {
            this.core.trigger(EVENTS.GUI.CORE.PROGRESSBAR.CHANGE, options);
        });
    }

    setupCoreListeners() {
        this.core.on(EVENTS.CORE.GUI.PROGRESSBAR.CHANGE, (options) => {
            this.gui.trigger(EVENTS.CORE.GUI.PROGRESSBAR.CHANGE, options);
        });
    }
}

export default EventDispatcher;
