import React from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';

export default function Post() {
  return (
    <div>
      <Query query={POST_QUERY}>
        {({ data, loading }) => {
          if (loading) return 'Loading...';
          const { post } = data;
          return <h1>{post.title}</h1>

        }}
        
        </Query>
    </div>
  );
}

const POST_QUERY = gql`
  query post {
    post(where: { id: "cjqhdesv5wf950a238l5fu46m" }) {
      id
      title
      body
    }
  }
`;
