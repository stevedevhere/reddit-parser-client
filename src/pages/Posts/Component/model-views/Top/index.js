import React from 'react';
import { withTheme } from 'emotion-theming';
import { observer } from 'mobx-react';
import { autobind } from 'core-decorators';
import { AccentButton, SquareBorderButton } from '@lyearn-team/frontend-components';
import s from './styles';
import { PageType } from '../../types';

@withTheme @observer
class Top extends React.Component {
  @autobind
  createItemClickHandler() {
    this.props.model.actions.newItemFormShow();
  }

  render() {
    const { model, theme } = this.props;
    const { pageType } = model.store;

    return (
      <div className={s.root()}>
        <div className={s.main()}>
          
        </div>
      </div>
    );
  }
}

export { Top };
export default Top;
