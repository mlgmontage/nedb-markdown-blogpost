import React, { Component } from "react";
import PostsList from "./components/PostsList";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [
        {
          _id: 1,
          title: "Fist post",
          annotation: "Annotation",
          text: "content",
        },
        {
          _id: 2,
          title: "Second post",
          annotation: "Annotation 2",
          text: "content 2",
        },
      ],
    };
  }

  render() {
    return (
      <div className="container">
        <header className="text-center my-4">
          <h1>
            <i className="fa fa-asterisk"></i>
          </h1>
          <h1>Markdown Blogpost</h1>
        </header>
        <PostsList posts={this.state.posts} className="col-md-8 m-auto" />
      </div>
    );
  }
}
export default App;
