//https://codesandbox.io/s/mobx-react-typescript-example-7qxp1?file=/src/stores/TodoStore.ts:0-1744

import { GET_LIST } from "./actions"



export class ProjectsStore {

  public list: [Object?] = []
  status = "pending" // "pending", "done" or "error"

  constructor() {
    this.fetchProjects()
  }

  public async fetchProjects() {
    this.list = await GET_LIST()
    if(this.list?.length > 0)
       this.status = "done"
    else 
      this.status = "error"
  }

}

