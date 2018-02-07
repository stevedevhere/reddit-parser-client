import React from 'react';
import { observer } from 'mobx-react';
import s from './styles';
import { Items } from '../Items';

@observer
class ContentTrainingItems extends React.Component {
  render() {
    const { model } = this.props;
    const { availableItems, notAvailableItems } = model.store.trainingProps;

    return (
      <div className={s.root()}>
        <Items
          title="Available in Library"
          model={model}
          itemsStore={availableItems}
        />

        <Items
          title="Not available in Library"
          model={model}
          itemsStore={notAvailableItems}
        />
      </div>
    );
  }
}

export { ContentTrainingItems };
export default ContentTrainingItems;
