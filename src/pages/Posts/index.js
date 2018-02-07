import React from 'react';
import PropTypes from 'prop-types';
import { PostsPageRelayContainer } from './RelayContainer';

class PostsPage extends React.PureComponent {
  static propTypes = {
    relayEnvironment: PropTypes.object.isRequired,
  };

  render() {
    const { relayEnvironment } = this.props;
    return (
      <PostsPageRelayContainer environment={relayEnvironment} />
    );
  }
}

export { PostsPage };
export default PostsPage;
