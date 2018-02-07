import React from 'react';
import { observer } from 'mobx-react';
import { autobind } from 'core-decorators';
import { Post } from '../Post';
import s from './styles';

@observer
class Content extends React.Component {
  // handleOnScroll(e) {
  //   if (e.target) {
  //     const element = e.target.offsetTop;
  //     const root = e.target.closest('#page-wrapper').getBoundingClientRect().height;
  //     if (element > root - 800) {
  //
  //     }
  //   }
  // }

  @autobind
  handleNext() {
    const { model } = this.props;
    model.actions.nextPage();
  }

  @autobind
  handlePrev() {
    const { model } = this.props;
    model.actions.prevPage();
  }

  render() {
    const { model } = this.props;
    const { posts } = model.store.data;
    return (
      <div
        className={s.root()}
        // onWheel={throttle(this.handleOnScroll, 300)}
      >
        <div className={s.wrap()}>
          {posts.map(item =>
            <Post key={item.id} data={item} />)}
        </div>
        <div className={s.buttons()}>
          <button onClick={this.handlePrev}>prev</button>
          <button onClick={this.handleNext}>next</button>
        </div>
      </div>
    );
  }
}

export { Content };
export default Content;
