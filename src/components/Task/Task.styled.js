import styled from "styled-components";

const WrapperTask = styled.div`
        type="text"
        name="text"
        placeholder="Enter task text..."
`
const Text = styled.p`
  flex-grow: 1;
`

const TaskBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  padding: 0;
  margin: 0;
  border: none;
  border-radius: 4px;
  background-color: transparent;
  cursor: pointer;
  color: #f44336;

  &:hover {
  background-color: #e2e5e8;
}

&:active {
  background-color: #bdbdbd;
}
`

const CheckBox = styled.input`
  width: 24px;
  height: 24px;
  cursor: pointer;
`

export {
    WrapperTask,
    Text,
    TaskBtn,
    CheckBox,
}