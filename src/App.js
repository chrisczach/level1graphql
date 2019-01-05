import React, { Component } from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import gql from 'graphql-tag';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

import './App.css';
import Post from './Post/Post';
import Posts from './Post/Posts';
import NewPost from './Post/NewPost';

const client = new ApolloClient({
  uri: 'https://api-uswest.graphcms.com/v1/cjqhda5rg0fcw01exqz6n6bsu/master'
});

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <Router>
          <>
            <Link to={'/'}>Home</Link>
            <Link to={'/post/new'}>New Post</Link>
            <Switch>
              <Route exact path="/" component={Posts} />
              <Route exact path="/post/new" component={NewPost} />
              <Route path="/post/:id" component={Post} />
            </Switch>
          </>
        </Router>
      </ApolloProvider>
    );
  }
}

export default App;

// client
//   .query({
//     query: POST_QUERY
//   })
//   .then(res => console.log(res));
