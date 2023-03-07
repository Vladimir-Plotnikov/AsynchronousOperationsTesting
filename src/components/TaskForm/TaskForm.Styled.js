import styled from "styled-components";

const Form = styled.form`
  display: flex;
  gap: 4px;
`

const Field = styled.input`
  flex-grow: 1;
  padding: 8px;
  font: inherit;
  
  &:focus {
  outline-color: #1976d2;
}
`
export {
    Form,
    Field,
}