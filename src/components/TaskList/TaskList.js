import { Task } from "components/Task/Task";
import { ListTask, ListItemTask } from "./TaskList.styled";

import { useSelector } from "react-redux";
import { selectVisibleTasks } from "redux/selectors";


export const TaskList = () => {
  const tasks = useSelector(selectVisibleTasks);
    return (
    <ListTask>
        {tasks.map(task => (
            <ListItemTask key={task.id}>
                <Task task={task} />
            </ListItemTask>
        ))}
    </ListTask>
);
};