import { css } from 'emotion';
import consts from '../../consts';

const post = () => css`
  border-bottom: solid 1px #ececec;
  padding: 20px 0;
  h2 {
    a {
      text-decoration: none;
      color: #2678bf;
    }
  }
  pre {
    max-width: ${consts.CONTENT_WIDTH}px;
    overflow-x: scroll;
  }
`;

export default ({
  post,
});
