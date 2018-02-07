class RootStore {
  getLastPostId() {
    return this.data.posts[this.data.posts.length - 1].id;
  }

  getFirstPostId() {
    return this.data.posts[0].id;
  }

  sync(props) {
    const posts = props.data.posts.filter(item => item !== null);
    this.data = { ...props.data, posts };
  }
}

export { RootStore };
export default RootStore;
