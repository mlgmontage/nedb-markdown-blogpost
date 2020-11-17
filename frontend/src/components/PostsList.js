import React, { Component } from "react";

class PostsList extends Component {
  render() {
    return (
      <div>
        <h1>Posts</h1>
        {this.props.posts.map((post) => (
          <div key={post._id}>
            <h2>{post.title}</h2>
            <p>{post.annotation}</p>
            <p className="text-small text-muted">{post.text}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default PostsList;
