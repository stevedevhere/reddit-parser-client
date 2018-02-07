import React from 'react';
import { observer } from 'mobx-react';
import s from './styles';
import { Items } from '../Items';

@observer
class ContentUserItems extends React.Component {
  render() {
    const { model } = this.props;
    const { items } = model.store.userProps;

    return (
      <div className={s.root()}>
        <Items
          model={model}
          itemsStore={items}
        />
      </div>
    );
  }
}

export { ContentUserItems };
export default ContentUserItems;
