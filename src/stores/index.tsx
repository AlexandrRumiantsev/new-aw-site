import { createContext } from "react";
import { ProjectsStore } from "./projects-store/projects-store";

export const rootStoreContext = createContext({
  projects: new ProjectsStore()
});