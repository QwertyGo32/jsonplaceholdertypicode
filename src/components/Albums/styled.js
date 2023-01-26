import styled from "styled-components";

export const StyledWrapper = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #ffffff00 0 0 no-repeat padding-box;
  backdrop-filter: blur(8px);
  cursor: pointer;
`;

export const StyledModal = styled.div`
  padding: 6vw;
  background: white;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1vh;
  position: relative;
  cursor: auto;
`;

export const StyledImgWrapper = styled.div`
  width: 30px;
  height: 30px;
  position: absolute;
  top: 2vw;
  right: 2vw;
  padding: 5px;
  cursor: pointer;
  
  & img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;