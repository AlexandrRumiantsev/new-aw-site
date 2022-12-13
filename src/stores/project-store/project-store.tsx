import { observable, computed, action } from 'mobx';

class ProjectStore {
  @observable list = [];

  constructor() {
    this.load()
  }

  @action setValues(values) {
    this.list.push(values)
  }

  @action('hide left panel')
  async load() {
    
    let response = await fetch('http://api.alexweber.ru/wp-json/wp/v2/get_portfolio_all', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      }
    });
    
    const arrayProject = await response.json()
    arrayProject.map(project => {
        this.setValues(project)
    })
    
  }
}

const projectStore = new ProjectStore();

export default projectStore;
export { ProjectStore };