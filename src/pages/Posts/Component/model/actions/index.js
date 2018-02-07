import { action } from 'mobx';

class Actions {
  constructor(store) {
    this.store = store;
  }

  @action
  syncProps(props) {
    this.store.sync(props);
    this.handleNextPage = props.handleNextPage;
    this.handlePrevPage = props.handlePrevPage;
    this.handleChangeLanguage = props.handleChangeLanguage;
  }

  @action
  nextPage() {
    const lastId = this.store.getLastPostId();
    this.handleNextPage(lastId);
  }

  @action
  prevPage() {
    const firstId = this.store.getFirstPostId();
    this.handlePrevPage(firstId);
  }
}

export { Actions };
export default Actions;
