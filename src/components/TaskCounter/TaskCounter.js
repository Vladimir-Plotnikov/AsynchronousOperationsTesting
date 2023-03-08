import { Text } from "./TaskCounter.styled";
import { useSelector } from "react-redux";

import { selectTaskCount } from "redux/selectors";



export const TaskCounter = () => {
  const count = useSelector(selectTaskCount);


    return (
        <div>
            <Text>Active: {count.active}</Text>
            <Text>Completed: {count.completed}</Text>
        </div>
    );
};