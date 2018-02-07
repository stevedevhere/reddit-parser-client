import React from 'react';
import { Model } from './model';
import { Main } from './model-views/Main';

class PostsPageComponent extends React.Component {
  componentWillMount() {
    this.model = new Model();
    this.model.actions.syncProps(this.props);
  }

  componentWillReceiveProps(nextProps) {
    this.model.actions.syncProps(nextProps);
  }

  render() {
    return (
      <Main model={this.model} />
    );
  }
}

export { PostsPageComponent };
export default PostsPageComponent;
