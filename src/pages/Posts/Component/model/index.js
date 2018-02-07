import { Actions } from './actions';
import { RootStore } from './store/Root';

class Model {
  constructor() {
    this.store = new RootStore();
    this.actions = new Actions(this.store);
  }
}

export { Model };
export default Model;
