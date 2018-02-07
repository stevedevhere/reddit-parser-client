import React, { Component } from 'react';
import s from './styles';

class Post extends Component {
  handleOnClick() {
  }
  render() {
    const { title, description } = this.props.data;
    return (
      <article className={s.post()}>
        <h2>
          <a href={`https://reddit.com/${this.props.data.link}`} target="_blank">{title}</a>
        </h2>
        <div dangerouslySetInnerHTML={{ __html: description }} />
      </article>
    );
  }
}

export { Post };
export default Post;
