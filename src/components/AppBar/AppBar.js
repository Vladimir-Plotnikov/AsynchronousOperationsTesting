import { StatusFilter } from "components/StatusFilter/StatusFilter";
import { TaskCounter } from "components/TaskCounter/TaskCounter";
import { WrapperBar, SectionBar, TitleBar, } from "./AppBar.styled";

export const Appbar = () => {
    return (
        <WrapperBar>
            <SectionBar>
                <TitleBar>Task</TitleBar>
                <TaskCounter />
            </SectionBar>
            <SectionBar>
                <TitleBar>Filter by status</TitleBar>
                <StatusFilter />
            </SectionBar>
        </WrapperBar>
    );
};