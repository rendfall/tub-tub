import HomeView from './../views/HomeView';

class AppRouter extends Backbone.Router {
    
    routes = {
        '': 'home'
    };

    constructor() {
        super();

        this._bindRoutes();
    }

    home() {
        console.log('Route#home was called!');

        let view = new HomeView();

        view.render();
    }
}

export default AppRouter;
