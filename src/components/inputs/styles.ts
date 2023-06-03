import styled from "styled-components";

export const CampInput = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 10px;
`;

export const LabelStyled = styled.label`
  width: 100%;
  font-weight: 700;
  font-size: 16px;
  color: var(--primary-color);
`;

export const InputStyled = styled.input`
  position: relative;
  width: 100%;
  height: 50px;
  padding: 0 1rem;
  border-radius: 8px;
  background-color: #d2cdcd;
`;
