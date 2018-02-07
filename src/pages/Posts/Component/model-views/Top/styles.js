import { css } from 'emotion';

const root = () => css`
  padding: 60px 0;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;  
`;

const main = () => css`
  flex: 1;
  line-height: 1.33;
`;

const button = () => css`
  flex: none;
`;

const title = () => css`
  font-size: 32px;
`;

const description = theme => css`
  color: ${theme.color.black3};
  font-size: 14px;
`;

export default {
  root,
  main,
  button,
  title,
  description,
};
