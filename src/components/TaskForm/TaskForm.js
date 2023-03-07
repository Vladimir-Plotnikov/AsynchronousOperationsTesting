import { Button } from "components/Button/Button";
import { Form, Field } from "./TaskForm.Styled";

import { useDispatch } from "react-redux";
import { addTask } from "redux/operations";

export const TaskForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = event => {
    event.preventDefault();
    const form = event.target;
    dispatch(addTask(event.target.elements.text.value))
    form.reset();
  };

    return (
        <Form onSubmit={handleSubmit}>
            <Field
                type="text"
                name="text"
                placeholder="Enter task text..."
            />
            <Button type="submit">Add task</Button>
        </Form>
    )
}