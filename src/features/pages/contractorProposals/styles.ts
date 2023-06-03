import styled from "styled-components";

export const StyledContractorProposals = styled.main`
  width: 100%;
  height: 775px;
  margin: 0 auto;
  display: flex;
  gap: 1rem;
  align-items: center;
  flex-direction: column;
`;

export const StyledDivTitle = styled.div`
  width: 100%;

  @media (max-width: 600px) {
    width: 95%;
  }
`;

export const StyledTitleContractorProposals = styled.h2`
  font-weight: 700;
  font-size: 26px;
  margin: 20px 0;
  color: var(--primary-color);
`;

export const StyledListContractorProposals = styled.ul`
  width: 100%;
  height: 665px;
  background-color: var(--grey1-color);
  border-radius: 8px;
  padding: 0.5rem 1rem;
  max-height: 42rem;
  overflow-y: overlay;

  ::-webkit-scrollbar {
    width: 10px;
    height: 10px;
  }

  ::-webkit-scrollbar-thumb {
    background: transparent;

    :hover {
      background-color: var(--primary-color);
    }
  }

  ::-webkit-scrollbar-track {
    background: transparent;
  }

  @media (max-width: 600px) {
    width: 100%;
  }
`;

export const StyledItemContractorProposals = styled.li`
  border-radius: 8px;
  background-color: var(--white-color);
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  box-shadow: 0px 3px 5px rgba(0, 0, 0, 0.5);
  margin: 20px 0;
  padding: 1rem;
  align-items: flex-end;

  @media (max-width: 600px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const StyledProposalInfos = styled.div`
  width: 100%;
  display: flex;

  @media (max-width: 600px) {
    flex-direction: column;
    gap: 1rem;
  }
`;

export const StyledDivDescription = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  @media (max-width: 600px) {
    width: 100%;
  }
`;

export const StyledMessage = styled.h3`
  font-weight: 700;
  font-size: 18px;
  color: #808080;
`;

export const StyledTitleProposal = styled.h3`
  font-weight: 700;
  font-size: 18px;
  color: var(--primary-color);
`;

export const StyledDescriptionProposal = styled.p`
  font-weight: 400;
  font-size: 14px;
  color: var(--black-color);

  height: 100px;
  overflow-y: overlay;

  ::-webkit-scrollbar {
    width: 10px;
    height: 10px;
  }

  ::-webkit-scrollbar-thumb {
    background: transparent;

    :hover {
      background-color: var(--primary-color);
    }
  }

  ::-webkit-scrollbar-track {
    background: transparent;
  }
`;

export const StyledDivStatus = styled.div`
  width: 20%;
  gap: 0.2rem;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;

  @media (max-width: 600px) {
    justify-content: center;
    width: 100%;
    justify-content: flex-start;
    margin-bottom: 1rem;
  }
`;

export const StyledStatusTitle = styled.h4`
  font-weight: 400;
  font-size: 14px;
  color: var(--black-color);
`;

export const StyledStatusActual = styled.span`
  font-weight: 400;
  font-size: 14px;
  color: var(--primary-color);
  white-space: nowrap;
`;
