import styled from "styled-components";

const WrapperBar = styled.header`
  display: flex;
  justify-content: space-between;
`
const SectionBar = styled.section`
  display: grid;
  gap: 4px;
`

const TitleBar = styled.h2`
  margin: 0;
  font-size: 16px;
`

export {
    WrapperBar,
    SectionBar,
    TitleBar,
}