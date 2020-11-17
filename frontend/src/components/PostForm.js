import React, { Component } from "react";

class PostForm extends Component {
  state = {};
  render() {
    return (
      <form className="col-md-9 m-auto">
        <div className="mb-3">
          <label htmlFor="postTitle" className="form-label">
            Title
          </label>
          <input type="text" className="form-control" id="postTitle" />
          <div className="form-text">Title your post</div>
        </div>
        <div className="mb-3">
          <label htmlFor="postAnnotation" className="form-label">
            Annotation
          </label>
          <input type="text" className="form-control" id="postAnnotation" />
          <div className="form-text">Annotate your post</div>
        </div>
        <div className="mb-3">
          <label htmlFor="text" className="form-label">
            Mark-down Text
          </label>
          <textarea
            type="text"
            className="form-control"
            id="text"
            rows="8"
          ></textarea>
          <div className="form-text">Your post</div>
        </div>
      </form>
    );
  }
}

export default PostForm;
