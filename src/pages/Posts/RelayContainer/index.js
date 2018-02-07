import React from 'react';
import PropTypes from 'prop-types';
import { autobind } from 'core-decorators';
import { css } from 'emotion';
import { QueryRenderer } from 'react-relay';
import { PostsPageComponent } from '../Component';
import { mainQuery } from './queries/main';
import { Header } from '../Component/model-views/Header/index';

const loader = () => css`
  display: flex;
  font-size: 3rem;
  font-weight: 900;
  justify-content: center;
  margin-top: 7%;
`;

class PostsPageRelayContainer extends React.Component {
  static propTypes = {
    environment: PropTypes.object.isRequired,
  };

  constructor(props) {
    super(props);
    this.state = {
      searchText: '',
      after: '',
      before: '',
      lang: 'en',
    };
  }

  @autobind
  nextPage(after) {
    this.setState({ after, before: '' });
  }

  @autobind
  prevPage(before) {
    this.setState({ before, after: '' });
  }

  @autobind
  handleSearch(searchText) {
    this.setState({ searchText, after: '', before: '' });
  }

  @autobind
  handleChangeLanguage(lang) {
    this.setState({ lang });
  }

  render() {
    const { environment } = this.props;
    const variables = {
      title: this.state.searchText,
      after: this.state.after,
      before: this.state.before,
      lang: this.state.lang
    };

    return (
      <div id="page-wrapper">
        <Header
          handleSearch={this.handleSearch}
          handleChangeLanguage={this.handleChangeLanguage}
        />
        <QueryRenderer
          environment={environment}
          query={mainQuery}
          variables={variables}
          render={
            ({ props }) => {
              if (!props) {
                return <p className={loader()}>Loading...</p>;
              }
              return (
                <PostsPageComponent
                  data={props}
                  handlePrevPage={this.prevPage}
                  handleNextPage={this.nextPage}
                />
              );
            }
          }
        />
      </div>
    );
  }
}

export { PostsPageRelayContainer };
export default PostsPageRelayContainer;
