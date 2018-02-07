import React from 'react';
import { observer } from 'mobx-react';
import withScrolling from 'react-dnd-scrollzone';
import s from './styles';
import { Item } from '../Item';

const ScrollingComponent = withScrolling('div');

@observer
class Items extends React.Component {
  render() {
    const { title, model, itemsStore } = this.props;

    return (
      <div className={s.root()}>
        {
          title && (
            <div className={s.title()}>
              { title }
            </div>
          )
        }

        <ScrollingComponent className={s.main()}>
          {
            itemsStore.items.map(itemStore => (
              <Item
                model={model}
                itemStore={itemStore}
                draggable={itemsStore.moveable}
                key={itemStore.id}
              />
            ))
          }
        </ScrollingComponent>
      </div>
    );
  }
}

export { Items };
export default Items;
