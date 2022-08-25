import { makeObservable, observable, action } from "mobx"
import { GET_LIST } from "./actions"

interface projectsStoreInterface{
  projects: Object
}

export class projectsStore implements projectsStoreInterface {

  projects = []
  status = "pending" // "pending", "done" or "error"

  constructor(value) {
    this.fetchProjects()
    /*makeObservable(this, {
        data: observable
    })*/
  }

  init() {
     console.log("IIII")
  }

  @action
  fetchProjects() {
    console.log("fetchProjects")
    GET_LIST()
      //fetchGithubProjectsSomehow().then(this.projectsFetchSuccess, this.projectsFetchFailure)
  }

}