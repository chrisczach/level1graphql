import React, { Component } from 'react';
import { Mutation } from 'react-apollo';

import PropTypes from 'prop-types';

export default class PostForm extends Component {
  static propTypes = {
    onSubmitHandler: PropTypes.func.isRequired,
    post: PropTypes.object
  };

  static defaultProps = {
    post: {}
  }

  state = {
    id: this.props.post.id || '',
    title: this.props.post.title || '',
    body: this.props.post.body || ''
  };

  handleInput = e => {
    const formData = {};
    formData[e.target.name] = e.target.value;
    this.setState({ ...formData });
  };

  render() {
    const { title, body, id } = this.state;
    const { onSubmitHandler } = this.props;

    return (
      <form
        onSubmit={e => {
          e.preventDefault();
          onSubmitHandler({
            variables: {
              title,
              body,
              id
            }
          })
            .then(() => {
              this.setState({ title: '', body: '' });
            })
            .catch(console.log);
        }}>
        <input
          name="title"
          type="text"
          onChange={this.handleInput}
          value={title}
          placeholder="title"
        />
        <textarea
          name="body"
          type="text"
          onChange={this.handleInput}
          value={body}
          placeholder="body"
        />
        <button>Submit</button>
      </form>
    );
  }
}
