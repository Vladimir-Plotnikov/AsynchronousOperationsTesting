import { Wrapper } from "./StatusFilter.styled";
import { useSelector,useDispatch } from "react-redux";
import { statusFilters } from "redux/constants";
import { Button } from "components/Button/Button";

import { getStatusFilter } from "redux/selectors";
import { setStatusFilter } from "redux/filterSlice";

export const StatusFilter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(getStatusFilter);

  const handleFilterChange = filter => dispatch(setStatusFilter(filter));


    return (
        <Wrapper>
            <Button
                selected={filter === statusFilters.all}
                onClick = {() => handleFilterChange(statusFilters.all)}
            >All</Button>
            <Button
                selected={filter === statusFilters.active}
                onClick = {() => handleFilterChange(statusFilters.active)}
            >Active</Button>
            <Button
                selected={filter === statusFilters.completed}
                onClick = {() => handleFilterChange(statusFilters.completed)}
            >Completed</Button>
        </Wrapper>
    )
}