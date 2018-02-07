import { css } from 'emotion';
import consts from '../../consts';

const root = () => css`
  flex: 1;
  overflow-y: auto;
`;

const wrap = () => css`
  max-width: ${consts.CONTENT_WIDTH}px;
  margin: 0 auto;
  padding: 0 32px;
  box-sizing: border-box;
`;

const post = () => css`
  border-bottom: solid 1px #cecece;
  padding: 20px 0;
`;


const buttons = () => css`
  position: fixed;
  z-index: 999;
  bottom: 0;
  left: 0;
  height: 50px;
  width: 100%;
  background: #f3f7f7;
  display: flex;
  justify-content: center;
  button {
    cursor: pointer;
    color: #000;
    width: 300px;
    border: none;
    background: #f3f7f7;
    &:first-child {
      border-right: solid 2px #fff;
    }
    &:last-child {
      border-left: solid 2px #fff;
    }
  }
`;


export default {
  root,
  wrap,
  post,
  buttons,
};
