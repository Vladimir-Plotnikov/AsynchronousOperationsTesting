import { useEffect } from "react";
import { Layout } from "./Layout/Layout";
import { Appbar } from "./AppBar/AppBar";
import { TaskForm } from "./TaskForm/TaskForm";
import { TaskList } from "./TaskList/TaskList";
import { useDispatch, useSelector } from "react-redux";
import { fetchTasks } from "redux/operations";
import { selectError, selectIsLoading } from "redux/selectors";

export const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchTasks())
  },[dispatch])

  return (
    <Layout>
      <Appbar />
      <TaskForm />
      {isLoading&&!error&&<b>Request in progress...</b>}
      <TaskList />
    </Layout>
  )
}