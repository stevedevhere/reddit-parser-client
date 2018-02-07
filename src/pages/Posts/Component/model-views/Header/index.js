import React from 'react';
import { autobind } from 'core-decorators';
import { observer } from 'mobx-react';
import { debounce } from 'lodash';
import s from './styles';

@observer
class Header extends React.Component {
  @autobind
  handleOnChange() {
    const searchText = this.search.value;
    this.props.handleSearch(searchText);
  }

  @autobind
  handleOnChangeLang() {
    const lang = this.lang.value;
    this.props.handleChangeLanguage(lang);
  }

  render() {
    return (
      <div className={s.root()}>
        <div className={s.wrapper()}>
          <input
            placeholder="Search..."
            onChange={debounce(this.handleOnChange, 700)}
            ref={(search) => { this.search = search; }}
            className={s.search()}
          />
          <input
            placeholder="default - 'en'"
            onChange={debounce(this.handleOnChangeLang, 700)}
            ref={(lang) => { this.lang = lang; }}
            className={s.search()}
          />
        </div>
      </div>
    );
  }
}

export { Header };
export default Header;
