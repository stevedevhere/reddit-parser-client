import { css } from 'emotion';

const root = theme => css`
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;

  padding-bottom: 50px;

  display: flex;
  flex-flow: column nowrap;
  
  font-family: ${theme.font.contentFont} !important;
  font-size: 16px;
  color: ${theme.color.black1};
  
  input {
    font-family: ${theme.font.contentFont} !important;
  }
`;

const navBar = () => css`
  flex: none;

  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  background-color: #333333;
`;

const navBarItem = () => css`
  float: left;
  
  a { 
    display: block;
    color: white;
    text-align: center;
    padding: 16px;
    text-decoration: none;
  }
  
  a:hover {
    background-color: #111111;
  }
`;

const pageContainer = () => css`
  flex: 1;
  overflow-y: auto;
`;

export default {
  root,
  navBar,
  navBarItem,
  pageContainer
};
