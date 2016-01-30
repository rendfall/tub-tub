import EVENTS from './Events';
//import PM from './../core/PlayerManager';

// TODO: Pobierz informacje o stanie playera (co jest teraz odtwarzane)

class EventDispatcher {
    core = null;
    gui = null;

    constructor(options) {
        this.core = options.core;
        this.gui = options.gui;

        this.setupListeners();
    }

    setupListeners() {
        this.gui.on(EVENTS.GUI.PLAYBUTTON.CLICK, (options) => {
            this.core.trigger(EVENTS.CORE.PLAYBUTTON.CLICK, options);
        });

        this.gui.on(EVENTS.GUI.VOLUMERANGE.DRAG, (options) => {
            this.core.trigger(EVENTS.CORE.VOLUMERANGE.DRAG, options);
        });

        this.gui.on(EVENTS.GUI.LOADBUTTON.CLICK, (options) => {
            this.core.trigger(EVENTS.CORE.LOADBUTTON.CLICK, options);
        });

        this.gui.on(EVENTS.GUI.PROGRESSBAR.CHANGE, (options) => {
            this.core.trigger(EVENTS.CORE.PROGRESSBAR.CLICK, options);
        });
    }
}

export default EventDispatcher;
