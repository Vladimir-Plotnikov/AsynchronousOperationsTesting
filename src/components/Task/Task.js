import { WrapperTask, Text, TaskBtn, CheckBox, } from "./Task.styled";
import { deleteTask, toggleCompleted } from "redux/operations";

import { useDispatch } from "react-redux";

export const Task = ({ task }) => {
    const dispatch = useDispatch();
   
    const handleDelete = () => {
        dispatch(deleteTask(task.id))
    }

    const handleToggle = () => {
        dispatch(toggleCompleted(task))
    }

    return (
        <WrapperTask>
            <CheckBox
                type="checkbox"
                onChange = {handleToggle}
                checked={task.completed}
            />
            <Text>{task.text}</Text>
            <TaskBtn type="button" onClick={handleDelete}>
                X
            </TaskBtn>
        </WrapperTask>
    );
};