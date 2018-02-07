import { css } from 'emotion';
import consts from '../../consts';

const root = () => css`
  flex: none;
  height: 60px;
  border-bottom: 1px solid #dfe6ee;
  
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
`;

const wrapper = () => css`
  min-width: ${consts.CONTENT_WIDTH}px;
  margin: 0 auto;
  height: 100%;
`;

const search = () => css`
  width: 300px;
  height: 50%;
  margin: 13px 0;
  box-sizing: border-box;
  padding: 7px 10px;
  outline: none;
  font-size: 16px;
`;

export default {
  root,
  wrapper,
  search,
};
