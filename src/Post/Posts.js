import React from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import { Link } from 'react-router-dom';

export default function Posts() {
  return (
    <ul>
      <Query query={POST_QUERY}>
        {({ data, loading }) => {
          if (loading) return 'Loading';

          const { posts } = data;
          return posts.map(post => (
            <li key={post.id}>
              <Link to={`/post/${post.id}`}>{post.title}</Link>
            </li>
          ));
        }}
      </Query>
    </ul>
  );
}

const POST_QUERY = gql`
  query allPost {
    posts {
      id
      title
      body
    }
  }
`;
