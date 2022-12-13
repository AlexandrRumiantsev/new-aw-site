import { observable} from 'mobx';

class ProjectStore {
  @observable list;

  constructor() {
    this.list = [
      {
        'title': 1
      },
      {
        'title': 2
      }
    ];
  }
}

export default new ProjectStore();