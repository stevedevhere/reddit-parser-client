import { graphql } from 'react-relay';

const mainQuery = graphql`
  query mainQuery($title: String!, $after: String!, $before: String!, $lang: String!) {
    posts(title: $title, after: $after, before: $before, lang: $lang) {
      id
      title
      description
      link
    }
  }
`;

export { mainQuery };
export default mainQuery;
