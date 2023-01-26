import styled from "styled-components";
import {Link} from "react-router-dom";

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

export const StyledBackBtn = styled(Link)`
  position: absolute;
  left: 5vw;
  
  & button {
    padding: 0.3vw;
    border: 1px solid #565656;
    border-radius: 5px;
    background: #e7e6e6;
  }
`;

export const StyledPostTitle = styled.p`
  font-weight: 700;
`;