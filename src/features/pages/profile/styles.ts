import styled from "styled-components";

export const H2Styled = styled.h2`
  font-size: 36;
  font-weight: bold;

  color: ${(props) => props.theme.colors.text};
  transition: 0.5s;

  margin-bottom: 1rem;
`;
