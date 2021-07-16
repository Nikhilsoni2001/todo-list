import { collatedTasks } from "../constants/index";

export const collatedTasksExists = (selectProject) =>
  collatedTasks.find((task) => task.key === selectProject);
