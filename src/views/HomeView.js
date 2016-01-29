import template from './HomeTemplate.html';

import PlayerCore from './../core/PlayerCore';
import PlayerGUI from './../gui/PlayerGUI';
import EventDispatcher from './../events/EventDispatcher';

class HomeView extends Backbone.View {

    gui = null;
    core = null;
    dispatcher = null;
    template = template;

    constructor() {
        super();

        this.setElement($('#app'), true);
    }

    initialize() {
        console.log('initialize');       

        this.$player = this.$('#player');
        this.$controls = this.$('#controls-container')
    }

    render() {
        let content = _.template(this.template);
        this.$el.html(content);
        
        this.gui = new PlayerGUI();
        this.core = new PlayerCore();
        this.dispatcher = new EventDispatcher({
            gui: this.gui,
            core: this.core
        });

        return this;
    }
}

export default HomeView;
