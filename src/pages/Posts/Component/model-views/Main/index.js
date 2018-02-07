import React from 'react';
import { observer } from 'mobx-react';
import { autobind } from 'core-decorators';
import s from './styles';
import { Content } from '../Content';

@observer
class Main extends React.Component {
  render() {
    const { model } = this.props;

    return (
      <div className={s.root()}>
        <Content
          model={model}
        />
      </div>
    );
  }
}

export { Main };
export default Main;
