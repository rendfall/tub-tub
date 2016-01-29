require('./styles.scss');

import Router from './routers/AppRouter';

class App {
    constructor () {
        this.confirmExit(true);

        new Router();

        Backbone.history.start();
    }

    confirmExit(enabled) {
        var onUnloadMessage = 'Audio is playing right now. Do you really want to close window?';

        window.onbeforeunload = function() {
            return (enabled) ? onUnloadMessage : null;
        }
    }
}

$(() => { new App() });
