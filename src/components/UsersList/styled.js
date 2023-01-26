import styled from 'styled-components';

export const StyledWrapper = styled.div`
  width: 100%;
  padding: 5vw;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const StyledTitle = styled.h1`
    margin-top: 0;
`;

export const StyledContainer = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 2vh;
`;

export const StyledUserContainer = styled.div`
  width: calc((100% - 2vh) / 2);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1vh;
  border: 2px solid #989898;
  border-radius: 5px;
  padding: 1vw;
`;

export const StyledUserName = styled.p`
  font-weight: 700;
`;

export const StyledBtnsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 2vw;
`;

export const StyledBtn = styled.button`
  padding: 0.3vw;
  border: 1px solid #565656;
  border-radius: 5px;
  background: #e7e6e6;
`;