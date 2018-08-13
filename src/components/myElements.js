import React from 'react';
import styled from 'styled-components'

export const Layout = styled.div`
  width:100vw;
  height:100vh;
  background-color:#cccccc;
  display:flex;
  flex-direction:column;
  box-sizing:border-box;
`;

export const PageContent = styled.div`
  display: flex;
  flex-direction: row;
  width:100vw;
  align-items: stretch;
  box-sizing:border-box;
  
`;

export const CanvasWrapper = styled.div`
  width: 96rem;
  display:inline-block;
  padding:2rem;
  box-sizing:border-box;
`;

export const SidePanel = styled.div`
  width:calc(100% - 96rem);
  padding:2rem;
  box-sizing:border-box;
  flex-direction: row;
`;

export const ButtonArea = styled.div`
  width:100%;
`;


 export const ButtonAction = styled.div`
  width:15rem;
  text-align:center;
  display:block;
  margin:  1rem;
  padding: 1rem 2rem;
  border-radius:0.2rem;
  background-color:#367dc7;
  color:#dddddd;
  box-sizing:border-box;
  cursor:pointer;
  transition: all 0.3s cubic-bezier(.25,.8,.25,1);
  &:hover{
    background-color:#104b88
  }
 `