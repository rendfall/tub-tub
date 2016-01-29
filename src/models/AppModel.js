class AppModel extends Model {

  defaults() {
    return {
      title: '',
      completed: false
    };
  }

  toggle() {
    this.save({
      completed: !this.defaults().completed
    });
  }
}

export default AppModel;